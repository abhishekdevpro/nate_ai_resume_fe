import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCustomSectionValues,
  setCustomSectionData,
  deleteCustomSection,
  setEducationCustomDescription,
  setCustomSectionDescription,
} from "../../../../state/reducer/createResumeSlice";
import {
  FaArrowDown,
  FaArrowUp,
  FaCirclePlus,
  FaCircleXmark,
  FaTrash,
} from "react-icons/fa6";
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
import { CustomSectionTextEditor } from "../../../common/textEditor";
const CustomSection = () => {
  const inputValues = useSelector((state) => state.untitledInputs);

  const customSectionValues = useSelector(
    (state) => state.createResumeSlice.customSectionValues
  );
  const customSectionData = useSelector(
    (state) => state.createResumeSlice.customSectionData
  );
  const customSectionDescription = useSelector(
    (state) => state.createResumeSlice.customSectionDescription
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
    dispatch(setCustomSectionValues(customSectionData[index]));
    dispatch(setSectionTitle(customSectionData[index].sectionTitle));
    dispatch(setActivity(customSectionData[index].activity));
    dispatch(setCustomStartDate(customSectionData[index].customStartDate));
    dispatch(setCustomEndDate(customSectionData[index].customEndDate));
    dispatch(setCustomSectionCity(customSectionData[index].customSectionCity));
    dispatch(
      setCustomSectionDescription(
        customSectionData[index].customSectionDescription
      )
    );
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

    dispatch(
      setCustomSectionValues({
        activity: "",
        sectionTitle: "",
        customSectionCity: "",
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

  // shifting functionality for changing the index of the data

  const moveItemUp = (index) => {
    if (index === 0) return;
    const newData = [...customSectionData];
    [newData[index], newData[index - 1]] = [newData[index - 1], newData[index]];
    dispatch(setCustomSectionData(newData));
  };

  const moveItemDown = (index) => {
    if (index === customSectionData.length - 1) return;
    const newData = [...customSectionData];
    [newData[index], newData[index + 1]] = [newData[index + 1], newData[index]];
    dispatch(setCustomSectionData(newData));
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
                <div className="flex flex-col gap-2 w-2/4">
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

            <button
              onClick={AddItem}
              className="px-4 text-white rounded-md py-2 bg-clearanceGrey cursor-pointer hover:bg-clearanceDarkBlue"
            >
              Done
            </button>
          </>
        ) : null}
        <div className="w-full flex flex-col gap-4 my-6">
          {customSectionData.map((data, index) => {
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

                  {index > 0 && (
                    <button
                      className="px-4 py-2 text-clearanceGrey bg-clearanceDarkBlue rounded"
                      onClick={() => moveItemUp(index)}
                    >
                      <FaArrowUp />
                    </button>
                  )}
                  {index < customSectionData.length - 1 && (
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

export default CustomSection;
