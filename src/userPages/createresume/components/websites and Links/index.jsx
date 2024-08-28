import React, { useState } from "react";
import {
  deleteWebsite,
  setWebsiteData,
  setWebsiteValues,
} from "../../../../state/reducer/createResumeSlice";
import {
  FaArrowDown,
  FaArrowUp,
  FaCirclePlus,
  FaCircleXmark,
  FaTrash,
} from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  setLabel,
  setLink,
} from "../../../../state/reducer/websitesInputSlice";
const WebsiteComponent = () => {
  const websiteValues = useSelector(
    (state) => state.createResumeSlice.websiteValues
  );
  const websiteData = useSelector(
    (state) => state.createResumeSlice.websiteData
  );
  const dispatch = useDispatch();
  const inputValues = useSelector((state) => state.websiteInputs);

  //Edit Item Function
  const [editIndex, setEditIndex] = useState(-1);

  const updateItem = () => {
    if (editIndex !== -1) {
      // Update the existing field
      const updatedFormData = [...websiteData];

      updatedFormData[editIndex] = websiteValues;
      dispatch(setWebsiteData(updatedFormData));
      dispatch(setLabel(""));
      dispatch(setLink(""));
      dispatch(setWebsiteValues({ label: "", link: "" }));
      setEditIndex(-1);
    }
  };

  const editItem = (index) => {
    // Enable editing for the Skills field
    dispatch(setWebsiteValues(websiteData[index]));
    dispatch(setLabel(websiteData[index].label));
    dispatch(setLink(websiteData[index].link));
    console.log(websiteData[index]);
    setEditIndex(index);
  };

  //AddItem Function

  const [addItem, setAddItem] = useState(false);
  const showAddItem = () => {
    setAddItem((prev) => !prev);
  };

  //To hold on the Values of InputFields
  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch(setWebsiteValues({ ...websiteValues, [name]: value }));
  };

  //to add A Item
  const AddItem = () => {
    if (editIndex !== -1) {
      return;
    }
    if (websiteValues.label.trim() && websiteValues.link.trim()) {
      // Update websiteData using Redux action
      const newWebsiteData = [...websiteData, websiteValues];
      dispatch(setWebsiteData(newWebsiteData));
      dispatch(setLabel(""));
      dispatch(setLink(""));
      dispatch(setWebsiteValues({ label: "", link: "" }));
    }
  };
  // shifting functionality for changing the index of the data

  const moveItemUp = (index) => {
    if (index === 0) return;
    const newData = [...websiteData];
    [newData[index], newData[index - 1]] = [newData[index - 1], newData[index]];
    dispatch(setWebsiteData(newData));
  };

  const moveItemDown = (index) => {
    if (index === websiteData.length - 1) return;
    const newData = [...websiteData];
    [newData[index], newData[index + 1]] = [newData[index + 1], newData[index]];
    dispatch(setWebsiteData(newData));
  };
  return (
    <div className="w-full flex flex-col mb-5 items-start">
      <h2 className="text-[17px] font-semibold">Websites & Social Links</h2>
      <p>
        You can add links to websites you want hiring managers to see! Perhaps
        It will be a link to your Portfolio, linkedIn profile, or personal
        website
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
              <label htmlFor="label">Label</label>
              <input
                className="w-full p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] outline-none border-[0.5px] border-[#323232] rounded-lg"
                type="text"
                id="label"
                name="label"
                placeholder="Label"
                onChange={handleChange}
                value={websiteValues.label}
              />
            </div>
            <div className="flex flex-col gap-2 w-2/4">
              <label htmlFor="link">Link</label>
              <input
                className="w-full p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] outline-none border-[0.5px] border-[#323232] rounded-lg"
                type="text"
                id="link"
                name="link"
                placeholder="Link"
                onChange={handleChange}
                value={websiteValues.link}
              />
            </div>
          </div>
          <button
            onClick={AddItem}
            className="px-4 text-white rounded-md mt-4 py-2 bg-clearanceGrey cursor-pointer hover:bg-clearanceDarkBlue"
          >
            Done
          </button>
        </>
      ) : null}
      <div className="w-full flex flex-col gap-4 my-6">
        {websiteData.map((data, index) => {
          return (
            <div
              key={index}
              className="flex justify-between bg-clearanceGrey py-4 px-4 text-white rounded-md"
            >
              <div className="flex gap-4">
                <h2>{data.label}</h2>
                <h3>{data.link}</h3>
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
                    dispatch(deleteWebsite(index));
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
                {index < websiteData.length - 1 && (
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
  );
};

export default WebsiteComponent;
