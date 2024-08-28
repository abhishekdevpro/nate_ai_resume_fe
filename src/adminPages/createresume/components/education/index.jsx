import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteEducation,
  setEducationData,
  setEducationJobdescription,
  setEducationValues,
} from "../../../../state/reducer/createResumeSlice";

import { FaCirclePlus, FaCircleXmark, FaTrash } from "react-icons/fa6";
import { FaEdit, FaSearch } from "react-icons/fa";
import {
  setCity1Input,
  setdegreeInput,
  setendInput,
  setSchoolInput,
  setstartInput,
  setEdudescriptionInput,
  appendEdudescriptionInput,
} from "../../../../state/reducer/educationInputSlice";
import { toast, ToastContainer } from "react-toastify";

import axios from "axios";

function EducationComponent(props) {
  const educationValues = useSelector(
    (state) => state.createResumeSlice.educationValues
  );
  const educationData = useSelector(
    (state) => state.createResumeSlice.educationData
  );
  const dispatch = useDispatch();
  // const educationValues = useSelector((state) => state.educationInputs);
  const educationValuesDis = useSelector(
    (state) => state.educationInputs.edudescriptionInput
  );

  //Edit Item Function
  const [editIndex, setEditIndex] = useState(-1);

  const updateItem = () => {
    if (editIndex !== -1) {
      // Update the existing field
      const updatedFormData = [...educationData];

      updatedFormData[editIndex] = educationValues;
      dispatch(setEducationData(updatedFormData));
      dispatch(setSchoolInput(""));
      dispatch(setdegreeInput(""));
      dispatch(setstartInput(""));
      dispatch(setendInput(""));
      dispatch(setCity1Input(""));
      dispatch(setEdudescriptionInput(""));
      dispatch(
        setEducationValues({
          school: "",
          degree: "",
          city1: "",
          edudescription: "",
          start: "",
          end: "",
        })
      );
      setEditIndex(-1);
    }
  };

  const editItem = (index) => {
    // Enable editing for the Skills field
    dispatch(setEducationValues(educationData[index]));
    console.log(educationData[index]);
    setEditIndex(index);
    dispatch(setSchoolInput(educationData[index].school));
    dispatch(setdegreeInput(educationData[index].degree));
    dispatch(setstartInput(educationData[index].start));
    dispatch(setendInput(educationData[index].end));
    dispatch(setCity1Input(educationData[index].city1));
    dispatch(setEdudescriptionInput(educationData[index].edudescription));
  };

  const [addItem1, setAddItem1] = useState(false);
  const showAddItem1 = () => {
    setAddItem1((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setEducationValues({ ...educationValues, [name]: value }));
  };

  const handleAdd = () => {
    if (editIndex !== -1) {
      return;
    }
    // Trim all input values
    const trimmedSchool = educationValues.school.trim();
    const trimmedDegree = educationValues.degree.trim();
    const trimmedCity1 = educationValues.city1.trim();
    const trimmedEduDescription = educationValues.edudescription.trim();
    dispatch(setSchoolInput(""));
    dispatch(setdegreeInput(""));
    dispatch(setstartInput(""));
    dispatch(setendInput(""));
    dispatch(setCity1Input(""));
    dispatch(setEdudescriptionInput(""));

    // Check if any of the trimmed values are empty
    if (
      trimmedSchool === "" ||
      trimmedDegree === "" ||
      trimmedCity1 === "" ||
      trimmedEduDescription === ""
    ) {
      // Display an error message or handle the empty input values
      // For now, let's assume you want to prevent adding empty items
      return;
    }

    // Create a new item with trimmed values
    const newItem = {
      school: trimmedSchool,
      degree: trimmedDegree,
      city1: trimmedCity1,
      edudescription: trimmedEduDescription,
      start: educationValues.start, // Add other properties here
      end: educationValues.end,
    };

    // Update educationData using Redux action
    const newEducationData = [...educationData, newItem];
    dispatch(setEducationData(newEducationData));
    dispatch(
      setEducationValues({
        school: "",
        degree: "",
        city1: "",
        edudescription: "",
        start: "",
        end: "",
      })
    );
  };
  const [prompt, setSuggestionsInput] = useState("");
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
  const submitForm = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("authToken");
      const response = await axios({
        method: "post",
        url: "/api/v1/openai-education",
        headers: {
          Authorization: "Bearer " + token,
        },
        data: {
          prompt: prompt,
        },
      });

      const res = response.data.response;
      setResult(res);
    } catch (error) {
      showToast(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col mb-5 items-start">
      <h2 className="text-[17px] font-semibold">
        Military Awards and Training, Education, Certifications, and Accolades:
      </h2>
      <p>
        Include all Education and Training including Military trainings and
        Awards, Degrees, Certifications, Trainings, Recognitions, Awards and
        Accolades.
      </p>
      <h3
        onClick={showAddItem1}
        className="font-semibold my-3 flex gap-2 cursor-pointer items-center"
      >
        Add Item {addItem1 ? <FaCircleXmark /> : <FaCirclePlus />}
      </h3>

      {addItem1 ? (
        <>
          {" "}
          <div className="flex gap-x-6 items-end w-full">
            <div className="flex flex-col gap-2 w-2/4">
              <label htmlFor="school">
                Service Branch/ School/ Organization
              </label>
              <input
                className="w-full p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] outline-none border-[0.5px] border-[#323232] rounded-lg"
                type="text"
                id="school"
                name="school"
                placeholder="Your School"
                onChange={handleChange}
                value={educationValues.school}
              />
            </div>
            <div className="flex flex-col gap-2 w-2/4">
              <label htmlFor="degree">Degree/ Certification</label>
              <input
                className="w-full p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] outline-none border-[0.5px] border-[#323232] rounded-lg"
                type="text"
                id="degree"
                name="degree"
                placeholder="Degree"
                onChange={handleChange}
                value={educationValues.degree}
              />
            </div>
          </div>
          <div className="flex gap-x-6 items-center my-4 w-full">
            <div className="flex gap-2 items-center w-2/4">
              <div className="flex flex-col gap-2 w-2/4">
                <label htmlFor="start">Start Date</label>
                <input
                  type="date"
                  name="start"
                  id="start"
                  placeholder="Start Date"
                  onChange={handleChange}
                  value={educationValues.start}
                  className="w-full p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] outline-none border-[0.5px] border-[#323232] rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2 w-2/4">
                <label htmlFor="end">End Date</label>
                <input
                  type="date"
                  name="end"
                  id="end"
                  placeholder="End Date"
                  onChange={handleChange}
                  value={educationValues.end}
                  className="w-full p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] outline-none border-[0.5px] border-[#323232] rounded-lg "
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-2/4">
              <label htmlFor="city1">City, State</label>
              <input
                type="text"
                name="city1"
                id="city1"
                placeholder="City"
                onChange={handleChange}
                value={educationValues.city1}
                className="w-full p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] outline-none border-[0.5px] border-[#323232] rounded-lg "
              />
            </div>
          </div>
          <div className="my-4 w-full flex-col">
            <div className="flex justify-between relative items-center">
              <label htmlFor="edudescription">Description</label>
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
                <div className="px-5 w-full flex flex-col gap-4 pb-5 absolute bg-white z-10 top-10 left-36 rounded-md  shadow-black shadow-md max-[1100px]:left-0">
                  {/* Display loader if loading is true */}

                  <>
                    <div className="flex flex-col sm:flex-row pt-[15px] items-center gap-[15px] ">
                      <div className="w-full sm:w-[75%] flex items-center gap-2 border-b border-black">
                        <FaSearch />
                        <input
                          type="text"
                          className="w-full py-3 px-3 bg-transparent outline-none"
                          onChange={(e) => setSuggestionsInput(e.target.value)}
                        />
                      </div>
                      <div className="w-full sm:w-[25%] flex justify-center">
                        <button
                          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
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
                        {result.map((item) => (
                          <div
                            key={item.id}
                            onClick={() => {
                              dispatch(
                                appendEdudescriptionInput(item.description)
                              );
                              dispatch(
                                setEducationJobdescription(item.description)
                              );
                              console.log(educationValuesDis);
                              showSuggestion();
                            }}
                          >
                            <ul className="divide-y divide-gray-200">
                              <div className="flex-1">
                                <li className="flex items-center py-4 px-6">
                                  <p className="text-gray-600 text-base cursor-copy">
                                    {item.description}
                                  </p>
                                </li>
                              </div>
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                </div>
              ) : null}
            </div>
            <textarea
              name="edudescription"
              id="edudescription"
              className="w-full mt-2 py-3 bg-cosretBlue-300 px-3 text-black text-[12px] outline-none border-[0.5px] border-[#323232] rounded-lg"
              placeholder="Description"
              cols="30"
              rows="7"
              onChange={handleChange}
              value={educationValues.edudescription}
            ></textarea>
          </div>
          <button
            onClick={handleAdd}
            disabled={editIndex !== -1}
            className="px-4 text-white rounded-md py-2 bg-clearanceGrey cursor-pointer hover:bg-clearanceDarkBlue"
          >
            Done
          </button>
        </>
      ) : null}

      <div className="w-full flex flex-col gap-4 my-6">
        {/* Component Data */}
        {educationData.map((data, index) => {
          return (
            <div key={index}>
              <div className="flex justify-between bg-clearanceGrey py-4 px-4 text-white rounded-md">
                <div className="flex flex-col gap-1">
                  <h2>{data.school}</h2>
                  <div className="flex gap-3">
                    <h3>{data.degree}</h3>
                    <h3>{data.city1}</h3>
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
                      dispatch(deleteEducation(index));
                    }}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EducationComponent;
