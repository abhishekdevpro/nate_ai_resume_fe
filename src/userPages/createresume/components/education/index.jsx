import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteEducation,
  setEducationData,
  setEducationDescription,
  setEducationJobdescription,
  setEducationValues,
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
import { EducationTextEditor } from "../../../common/textEditor";

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

  const educationDescription = useSelector(
    (state) => state.createResumeSlice.educationDescription
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
          eduDescription: "",
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
    dispatch(
      setEducationDescription(educationData[index].educationDescription)
    );
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
    // const trimmedEduDescription = educationValues.edudescription.trim();
    const trimmedEduDescription = educationDescription.trim();
    dispatch(setSchoolInput(""));
    dispatch(setdegreeInput(""));
    dispatch(setstartInput(""));
    dispatch(setendInput(""));
    dispatch(setCity1Input(""));
    dispatch(setEdudescriptionInput(""));

    // Check if any of the trimmed values are empty
    if (trimmedSchool === "" || trimmedDegree === "" || trimmedCity1 === "") {
      // Display an error message or handle the empty input values
      // For now, let's assume you want to prevent adding empty items
      return;
    }

    // Create a new item with trimmed values
    const newItem = {
      school: trimmedSchool,
      degree: trimmedDegree,
      city1: trimmedCity1,
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
      // showToast(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  // shifting functionality for changing the index of the data

  const moveItemUp = (index) => {
    if (index === 0) return;
    const newData = [...educationData];
    [newData[index], newData[index - 1]] = [newData[index - 1], newData[index]];
    dispatch(setEducationData(newData));
  };

  const moveItemDown = (index) => {
    if (index === educationData.length - 1) return;
    const newData = [...educationData];
    [newData[index], newData[index + 1]] = [newData[index + 1], newData[index]];
    dispatch(setEducationData(newData));
  };

  return (
    <div className="w-full flex flex-col mb-5 items-start">
      <h2 className="text-[17px] font-semibold">
        Training, Education, Certifications, and Accolades:
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

                  {index > 0 && (
                    <button
                      className="px-4 py-2 text-clearanceGrey bg-clearanceDarkBlue rounded"
                      onClick={() => moveItemUp(index)}
                    >
                      <FaArrowUp />
                    </button>
                  )}
                  {index < educationData.length - 1 && (
                    <button
                      className="px-4 py-2 text-clearanceGrey bg-clearanceDarkBlue rounded"
                      onClick={() => moveItemDown(index)}
                    >
                      <FaArrowDown />
                    </button>
                  )}
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
