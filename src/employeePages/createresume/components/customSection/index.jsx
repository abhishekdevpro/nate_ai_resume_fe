import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCustomSectionValues,
  setCustomSectionData,
  deleteCustomSection,
  setEducationCustomDescription,
} from "../../../../state/reducer/employeeCreateResumeSlice";
import { FaCirclePlus, FaCircleXmark, FaTrash } from "react-icons/fa6";
import { FaEdit, FaSearch } from "react-icons/fa";
import {
  appendCustomDescription,
  setActivity,
  setCustomDescription,
  setCustomEndDate,
  setCustomSectionCity,
  setCustomStartDate,
  setSectionTitle,
} from "../../../../state/reducer/untitledInputSlice";
// import { toast, ToastContainer } from "react-toastify";

import axios from "axios";
const CustomSection = () => {
  const inputValues = useSelector((state) => state.untitledInputs);

  const customSectionValues = useSelector(
    (state) => state.employeeCreateResumeSlice.customSectionValues
  );
  const customSectionData = useSelector(
    (state) => state.employeeCreateResumeSlice.customSectionData
  );
  const dispatch = useDispatch();

  //Edit Item Function
  const [editIndex, setEditIndex] = useState(-1);

  const updateItem = () => {
    if (editIndex !== -1) {
      const updatedFormData = [...customSectionData];

      // Update the specific item within the array
      updatedFormData[editIndex] = customSectionValues;

      dispatch(setCustomSectionData(updatedFormData));
      dispatch(setSectionTitle(""));
      dispatch(setActivity(""));
      dispatch(setCustomStartDate(""));
      dispatch(setCustomEndDate(""));
      dispatch(setCustomSectionCity(""));
      dispatch(setCustomDescription(""));

      dispatch(
        setCustomSectionValues({
          sectionTitle: "",
          activity: "",
          customStartDate: "",
          customEndDate: "",
          customSectionCity: "",
          customDescription: "",
        })
      );

      setEditIndex(-1);
    }
  };

  const editItem = (index) => {
    // Enable editing for the Skills field
    setAddItem(true);
    dispatch(setCustomSectionValues(customSectionData[index]));
    dispatch(setSectionTitle(customSectionData[index].sectionTitle));
    dispatch(setActivity(customSectionData[index].activity));
    dispatch(setCustomStartDate(customSectionData[index].customStartDate));
    dispatch(setCustomEndDate(customSectionData[index].customEndDate));
    dispatch(setCustomSectionCity(customSectionData[index].customSectionCity));
    dispatch(setCustomDescription(customSectionData[index].customDescription));
    setEditIndex(index);
  };

  const [addItem, setAddItem] = useState(false);
  const showAddItem = () => {
    setAddItem((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setCustomSectionValues({ ...customSectionValues, [name]: value }));
  };

  const AddItem = () => {
    if (editIndex !== -1) {
      return;
    }
    const trimmedActivity = customSectionValues.activity
      ? customSectionValues.activity.trim()
      : "";
    const trimmedSectionTitle = customSectionValues.sectionTitle
      ? customSectionValues.sectionTitle.trim()
      : "";
    const trimmedCustomSectionCity = customSectionValues.customSectionCity
      ? customSectionValues.customSectionCity.trim()
      : "";
    const trimmedCustomDescription = customSectionValues.customDescription
      ? customSectionValues.customDescription.trim()
      : "";

    if (
      trimmedActivity === "" ||
      trimmedSectionTitle === "" ||
      trimmedCustomSectionCity === ""
    ) {
      return;
    }

    const newItem = {
      sectionTitle: trimmedSectionTitle,
      activity: trimmedActivity,
      customSectionCity: trimmedCustomSectionCity,
      customStartDate: customSectionValues.customStartDate, // Add other properties here
      customEndDate: customSectionValues.customEndDate,
    };

    const newCustomSectionData = [...customSectionData, newItem];
    dispatch(setCustomSectionData(newCustomSectionData));
    dispatch(setSectionTitle(""));
    dispatch(setActivity(""));
    dispatch(setCustomStartDate(""));
    dispatch(setCustomEndDate(""));
    dispatch(setCustomSectionCity(""));
    dispatch(setCustomDescription(""));

    dispatch(
      setCustomSectionValues({
        activity: "",
        sectionTitle: "",
        customSectionCity: "",
        customDescription: "",
        customStartDate: "",
        customEndDate: "",
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

  // const showToast = (error) => {
  //   toast.error(`${error}`, {
  //     data: {
  //       title: "Error",
  //       text: error,
  //     },
  //   });
  // };
  const submitForm = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("authToken");
      const response = await axios({
        method: "post",
        url: "/api/v1/openai-custom",
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
      // Display an error toast
      // showToast(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full flex flex-col mb-5 items-start">
        <h3
          onClick={showAddItem}
          className="font-semibold text-[17px] my-3 flex gap-2 cursor-pointer items-center"
        >
          Add Custom Section {addItem ? <FaCircleXmark /> : <FaCirclePlus />}
        </h3>

        {addItem ? (
          <>
            <div className="flex flex-col gap-2 w-full sm:w-[30%] mb-5">
              <label htmlFor="sectionTitle"></label>
              <input
                className="w-full p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] outline-none border-[0.5px] border-[#323232]"
                type="text"
                id="sectionTitle"
                name="sectionTitle"
                placeholder="Section Title"
                onChange={handleChange}
                value={customSectionValues.sectionTitle}
              />
            </div>
            <div className="flex gap-x-6 items-center w-full">
              <div className="flex flex-col gap-2 w-2/4">
                <label htmlFor="activity">Activity</label>
                <input
                  className="w-full p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] outline-none border-[0.5px] border-[#323232] rounded-lg"
                  type="text"
                  id="activity"
                  name="activity"
                  placeholder="Activity"
                  onChange={handleChange}
                  value={customSectionValues.activity}
                />
              </div>
              <div className="flex flex-col gap-2 w-2/4">
                <label htmlFor="customSectionCity">City</label>
                <input
                  type="text"
                  name="customSectionCity"
                  id="customSectionCity"
                  placeholder="City"
                  onChange={handleChange}
                  value={customSectionValues.customSectionCity}
                  className="w-full p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] outline-none border-[0.5px] border-[#323232] rounded-lg "
                />
              </div>
            </div>
            <div className="flex gap-x-6 items-center my-4 w-full">
              <div className="flex gap-2 items-center w-full">
                <div className="flex flex-col gap-2 w-[50%]">
                  <label htmlFor="customStartDate">Start Date</label>
                  <input
                    type="date"
                    name="customStartDate"
                    id="customStartDate"
                    placeholder="Start Date"
                    onChange={handleChange}
                    value={customSectionValues.customStartDate}
                    className="w-full p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] outline-none border-[0.5px] border-[#323232] rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-2 w-2/4">
                  <label htmlFor="customEndDate">End Date</label>
                  <input
                    type="date"
                    name="customEndDate"
                    id="customEndDate"
                    placeholder="End Date"
                    onChange={handleChange}
                    value={customSectionValues.customEndDate}
                    className="w-full p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] outline-none border-[0.5px] border-[#323232] rounded-lg "
                  />
                </div>
              </div>
            </div>
            {/* <div className="my-4 w-full flex-col">
              <div className="flex justify-between relative items-center">
                <label htmlFor="customDescription">Description</label>
                <div
                  onClick={showSuggestion}
                  className="flex gap-2 justify-end items-center cursor-pointer"
                >
                  {suggestions ? (
                    <FaCircleXmark size="18px" />
                  ) : (
                    <FaCirclePlus size="18px" />
                  )}
                  <strong>AI - Assist</strong>
                </div>
                {suggestions ? (
                  <div className="px-5 w-full flex flex-col gap-4 pb-5 absolute bg-white z-10 top-10 left-36 rounded-md  shadow-black shadow-md max-[1100px]:left-0">
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
                          {result?.map((item) => (
                            <div
                              key={item.id}
                              onClick={() => {
                                dispatch(
                                  appendCustomDescription(item.description)
                                );
                                dispatch(
                                  setEducationCustomDescription(
                                    item.description
                                  )
                                );
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
                name="customDescription"
                id="customDescription"
                className="w-full mt-2 py-3 bg-cosretBlue-300 px-3 text-black text-[12px] outline-none border-[0.5px] border-[#323232] rounded-lg"
                placeholder="Description"
                cols="30"
                rows="7"
                onChange={handleChange}
                value={customSectionValues.customDescription}
              ></textarea>
            </div> */}
            <button
              onClick={AddItem}
              className="px-4 text-white rounded-md py-2 bg-clearanceGrey cursor-pointer hover:bg-clearanceDarkBlue"
            >
              Done
            </button>
          </>
        ) : null}
        <div className="w-full flex flex-col gap-4 my-6">
          {customSectionData?.map((data, index) => {
            return (
              <div
                key={index}
                className="flex justify-between bg-clearanceGrey py-4 px-4 text-white rounded-md"
              >
                <div className="flex flex-col gap-1">
                  <h2>{data.activity}</h2>
                  <div className="flex gap-3">
                    <h3>{data.sectionTitle}</h3>
                    <h3>{data.customSectionCity}</h3>
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
                      dispatch(deleteCustomSection(index));
                    }}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CustomSection;
