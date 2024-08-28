import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteEmployee,
  setEmploymentData,
  setEmploymentDescription,
  setEmploymentJobdescription,
  setEmploymentValues,
} from "../../../../state/reducer/createResumeSlice";
import { FaSearch } from "react-icons/fa";

import {
  FaArrowDown,
  FaArrowUp,
  FaCirclePlus,
  FaCircleXmark,
  FaTrash,
} from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import {
  setEmployerInput,
  setJobcity,
  setJobdescription,
  setJobend,
  setJobstart,
  setJobtitle1Input,
  appendJobdescription,
} from "../../../../state/reducer/employmentInputSlice";
import axios from "axios";
import "quill/dist/quill.snow.css";

import { toast, ToastContainer } from "react-toastify";
import { EmploymentTextEditor } from "../../../common/textEditor";
import ReactQuill from "react-quill";
const EmployementComponent = () => {
  const employmentValues = useSelector(
    (state) => state.createResumeSlice.employmentValues
  );
  const dis = useSelector(
    (state) => state.employemntInputs.jobdescriptionInput
  );
  const employmentData = useSelector(
    (state) => state.createResumeSlice.employmentData
  );
  const inputValues = useSelector((state) => state.employemntInputs);

  const dispatch = useDispatch();

  const employmentDescription = useSelector(
    (state) => state.createResumeSlice.employmentDescription
  );

  //Edit Item Function
  //Edit Item Function
  const [editIndex, setEditIndex] = useState(-1);

  const updateItem = () => {
    if (editIndex !== -1) {
      const updatedFormData = [...employmentData];
      updatedFormData[editIndex] = employmentValues;
      dispatch(setEmploymentData(updatedFormData)); // Correctly updates the array

      // Reset the input fields
      dispatch(setJobtitle1Input(""));
      dispatch(setEmployerInput(""));
      dispatch(setJobstart(""));
      dispatch(setJobend(""));
      dispatch(setJobdescription(""));
      dispatch(setJobcity(""));

      // Reset the employmentValues state
      dispatch(
        setEmploymentValues({
          jobtitle1: "",
          employer: "",
          jobcity: "",
          jobdescription: "",
          jobstart: "",
          jobend: "",
        })
      );

      setEditIndex(-1); // Exit edit mode
    }
  };

  const editItem = (index) => {
    console.table(employmentData[index]);
    dispatch(setEmploymentValues(employmentData[index]));
    dispatch(setJobtitle1Input(employmentData[index].jobtitle1));
    dispatch(setEmployerInput(employmentData[index].employer));
    dispatch(setJobstart(employmentData[index].jobstart));
    dispatch(setJobend(employmentData[index].jobend));
    dispatch(setJobdescription(employmentData[index].jobdescription));
    dispatch(setJobcity(employmentData[index].jobcity));
    setEditIndex(index);
  };

  const [addItem, setAddItem] = useState(false);
  const showAddItem = () => {
    setAddItem((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("here");
    dispatch(setEmploymentValues({ ...employmentValues, [name]: value }));
  };

  const AddItem = () => {
    if (editIndex !== -1) {
      return;
    }
    // Trim all input values
    const trimmedJobTitle = employmentValues.jobtitle1.trim();
    const trimmedEmployer = employmentValues.employer.trim();
    const trimmedCity = employmentValues.jobcity.trim();
    const trimmedDescription = employmentValues.jobdescription.trim();
    dispatch(setJobtitle1Input(""));
    dispatch(setEmployerInput(""));
    dispatch(setJobstart(""));
    dispatch(setJobend(""));
    dispatch(setJobdescription(""));
    dispatch(setJobcity(""));

    if (
      trimmedJobTitle === "" ||
      trimmedEmployer === "" ||
      trimmedCity === "" ||
      trimmedDescription === ""
    ) {
      // Display an error message or handle the empty input values
      // For now, let's assume you want to prevent adding empty items
      return;
    }

    // Create a new item with trimmed values
    const newItem = {
      jobtitle1: trimmedJobTitle,
      employer: trimmedEmployer,
      jobcity: trimmedCity,
      jobdescription: trimmedDescription,
      jobstart: employmentValues.jobstart, // Add other properties here
      jobend: employmentValues.jobend,
    };

    // Update employmentData using Redux action
    const newEmployementData = [...employmentData, newItem];
    dispatch(setEmploymentData(newEmployementData));

    // Clear the employmentValues
    dispatch(
      setEmploymentValues({
        jobtitle1: "",
        employer: "",
        jobcity: "",
        jobdescription: "",
        jobstart: "", // Clear other properties here
        jobend: "",
      })
    );
  };
  const [suggestionsInput, setSuggestionsInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);

  const [suggestions, setSuggestions] = useState(false);
  const showSuggestion = () => {
    setSuggestions((prev) => !prev);
  };

  const showToast = (error) => {
    toast.error(`${error}`, {
      data: {
        title: "Error",
        text: error,
      },
    });
  };
  const token = localStorage.getItem("customerAuthToken");
  const submitForm = async () => {
    setLoading(true);
    const toastId = toast.loading("Hold On A Second!");

    try {
      const res = await axios({
        method: "post",
        url: "https://api.resumesquad.net/api/user/ai-job-description",
        headers: {
          Authorization: token,
        },
        data: {
          title: suggestionsInput,
          keyword: "job description",
        },
      });
      const content = res?.data?.data?.content;
      const sentences = content
        .split(".")
        .map((sentence) => sentence.trim())
        .filter((sentence) => sentence);
      console.log(sentences);
      setResult(sentences);
      toast.update(toastId, {
        render: "Fetched Successfully",
        type: "success",
        isLoading: false,
        autoClose: 5000,
      });
    } catch (err) {
      console.log(err, "lavi");
      toast.update(toastId, {
        render: "Error in fetching the data.",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  // shifting functionality for changing the index of the data

  const moveItemUp = (index) => {
    if (index === 0) return;
    const newData = [...employmentData];
    [newData[index], newData[index - 1]] = [newData[index - 1], newData[index]];
    dispatch(setEmploymentData(newData));
  };

  const moveItemDown = (index) => {
    if (index === employmentData.length - 1) return;
    const newData = [...employmentData];
    [newData[index], newData[index + 1]] = [newData[index + 1], newData[index]];
    dispatch(setEmploymentData(newData));
  };

  const handleEditorChange = (value) => {
    dispatch(setEmploymentJobdescription(value));
  };
  useEffect(() => {
    setSuggestionsInput(employmentValues.jobtitle1);
  }, [employmentValues.jobtitle1]);
  return (
    <>
      <div className="w-full  flex flex-col mb-5 items-start">
        <h2 className="text-[17px] font-semibold">Employment History :</h2>
        <p>
          Show your relevant experience. Use bullet points to note your
          achievements, if possible - use numbers/facts (Acheivement X, measured
          by Y, by doing Z)
        </p>
        <h3
          onClick={showAddItem}
          className="font-semibold my-3 flex gap-2 cursor-pointer items-center"
        >
          Add Item {addItem ? <FaCircleXmark /> : <FaCirclePlus />}
        </h3>
        {addItem ? (
          <>
            {" "}
            <div className="flex gap-x-6 items-center w-full">
              <div className="flex flex-col gap-2 w-2/4">
                <label htmlFor="jobtitle1">Job title</label>
                <input
                  name="jobtitle1"
                  className="w-full p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] outline-none border-[0.5px] border-[#323232] rounded-lg"
                  type="text"
                  id="jobtitle1"
                  placeholder="Job Title"
                  onChange={handleChange}
                  value={employmentValues.jobtitle1}
                />
              </div>
              <div className="flex flex-col gap-2 w-2/4">
                <label htmlFor="employer">Employer</label>
                <input
                  className="w-full p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] outline-none border-[0.5px] border-[#323232] rounded-lg"
                  type="text"
                  id="employer"
                  name="employer"
                  placeholder="Employer"
                  onChange={handleChange}
                  value={employmentValues.employer}
                />
              </div>
            </div>
            <div className="flex gap-x-6 items-center my-4 w-full">
              <div className="flex gap-2 items-center w-2/4">
                <div className="flex flex-col gap-2 w-2/4">
                  <label htmlFor="jobstart">Start Date</label>
                  <input
                    type="date"
                    name="jobstart"
                    id="jobstart"
                    placeholder="Start Date"
                    onChange={handleChange}
                    value={employmentValues.jobstart}
                    className="w-full p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] outline-none border-[0.5px] border-[#323232] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-2 w-2/4">
                  <label htmlFor="jobend">End Date</label>
                  <input
                    type="date"
                    name="jobend"
                    id="jobend"
                    placeholder="End Date"
                    onChange={handleChange}
                    value={employmentValues.jobend}
                    className="w-full p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] outline-none border-[0.5px] border-[#323232] rounded-lg "
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-2/4">
                <label htmlFor="jobcity">City, State</label>
                <input
                  type="text"
                  name="jobcity"
                  id="jobcity"
                  placeholder="City"
                  onChange={handleChange}
                  value={employmentValues.jobcity}
                  className="w-full p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] outline-none border-[0.5px] border-[#323232] rounded-lg "
                />
              </div>
            </div>
            <div className="my-4 w-full flex-col">
              <div className="flex justify-between relative items-center">
                <label htmlFor="employmentDescription">Description</label>
                <div
                  onClick={showSuggestion}
                  className="flex gap-2 justify-end items-center cursor-pointer"
                >
                  {suggestions ? (
                    <FaCircleXmark size="18px" />
                  ) : (
                    <FaCirclePlus size="18px" />
                  )}
                  AI - Assist
                </div>
                {suggestions ? (
                  <div className="px-5 w-full flex flex-col gap-4 pb-5 absolute bg-white z-10 top-10  rounded-md  shadow-black shadow-md max-[1100px]:left-0">
                    {/* Display loader if loading is true */}

                    <>
                      <div className="flex flex-col sm:flex-row pt-[15px] items-center gap-[15px] ">
                        <div className="w-full sm:w-[75%] flex items-center gap-2 border-b border-black">
                          <FaSearch />
                          <input
                            type="text"
                            className="w-full py-3 px-3 bg-transparent outline-none"
                            onChange={(e) =>
                              setSuggestionsInput(e.target.value)
                            }
                            value={suggestionsInput}
                          />
                        </div>
                        <div className="w-full sm:w-[25%] flex justify-center">
                          <button
                            className="bg-clearanceGrey text-clearanceDarkBlue font-semibold hover:text-white py-2 px-4 border border-[#8d77ab]hover:border-transparent rounded"
                            onClick={submitForm}
                          >
                            Get Results
                          </button>
                        </div>
                      </div>
                      {loading ? (
                        <div className="animate-pulse flex space-x-4">
                          <div className="flex-1 space-y-6 py-1">
                            <div className="h-2 bg-slate-700 rounded"></div>
                            <div className="space-y-3">
                              <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                              </div>
                              <div className="h-2 bg-slate-700 rounded"></div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <ul className="divide-y divide-gray-200">
                            <div className="flex-1">
                              <li className="flex flex-col gap-[12px]  text-[12px]">
                                {/* <p
                                  onClick={() => {
                                    showSuggestion();
                                    dispatch(
                                      setEmploymentJobdescription(
                                        result?.toString()
                                      )
                                    );
                                  }}
                                  className="text-gray-600 text-base cursor-pointer"
                                >
                                  {result?.toString()}
                                </p> */}
                                {result.map((item, index) => (
                                  <div
                                    key={index}
                                    onClick={() => {
                                      dispatch(
                                        setEmploymentJobdescription(item)
                                      );
                                      setResult([]);
                                    }}
                                  >
                                    <ul className=" border-b border-gray-200 pb-[10px] ">
                                      <div className="flex-1">
                                        <li className="flex items-center ">
                                          <p
                                            onClick={showSuggestion}
                                            className="text-gray-600  cursor-pointer"
                                          >
                                            {item}
                                          </p>
                                        </li>
                                      </div>
                                    </ul>
                                  </div>
                                ))}
                              </li>
                            </div>
                          </ul>
                        </div>
                      )}
                    </>
                  </div>
                ) : null}
              </div>
              {/* <textarea
                name="jobdescription"
                id="jobdescription"
                className="w-full mt-2 py-3 bg-cosretBlue-300 px-3 text-black text-[12px] outline-none border-[0.5px] border-[#323232] rounded-lg"
                placeholder="Description"
                cols="30"
                rows="7"
                onChange={handleChange}
                value={employmentValues.jobdescription}
              ></textarea> */}

              <div className="mb-[80px] h-[150px]">
                <div className="bg-white w-full h-full">
                  <ReactQuill
                    theme="snow"
                    value={employmentValues?.jobdescription}
                    onChange={handleEditorChange}
                    style={{
                      height: "200px",
                      width: "100%",
                      marginBottom: "70px",
                    }}
                  />
                </div>
              </div>
            </div>
            <button
              disabled={editIndex !== -1}
              onClick={AddItem}
              className="px-4 text-white rounded-md py-2 bg-clearanceGrey cursor-pointer hover:bg-clearanceDarkBlue"
            >
              Done
            </button>
          </>
        ) : null}
        <div className="w-full flex flex-col gap-4 my-6">
          {employmentData.map((data, index) => {
            return (
              <div
                key={index}
                className="flex justify-between bg-clearanceGrey py-4 px-4 text-white rounded-md"
              >
                <div className="flex flex-col gap-1">
                  <h2>{data.jobtitle1}</h2>
                  <div className="flex gap-3">
                    <h3>{data.employer}</h3>
                    <h3>{data.jobcity}</h3>
                  </div>
                </div>

                <div className="flex gap-5">
                  {editIndex === index ? (
                    <button
                      onClick={() => {
                        updateItem();
                      }}
                    >
                      <h2>Save</h2>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        editItem(index);
                      }}
                    >
                      <FaEdit />
                    </button>
                  )}
                  <button
                    onClick={() => {
                      dispatch(deleteEmployee(index));
                    }}
                  >
                    <FaTrash />
                  </button>

                  {index > 0 && (
                    <button
                      className="px-4 py-2 text-clearanceGrey bg-clearanceDarkBlue rounded"
                      onClick={() => moveItemUp(index)}
                    >
                      <FaArrowUp />
                    </button>
                  )}
                  {index < employmentData.length - 1 && (
                    <button
                      className="px-4 py-2 text-clearanceGrey bg-clearanceDarkBlue rounded"
                      onClick={() => moveItemDown(index)}
                    >
                      <FaArrowDown />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EmployementComponent;
