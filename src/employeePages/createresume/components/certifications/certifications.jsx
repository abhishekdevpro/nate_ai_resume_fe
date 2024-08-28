import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCertification,
  setCertificationData,
  setCertificationValues,
} from "../../../../state/reducer/employeeCreateResumeSlice";
import {
  FaArrowDown,
  FaArrowUp,
  FaCirclePlus,
  FaCircleXmark,
  FaTrash,
} from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

function CertificationComponent(props) {
  const certificationData = useSelector(
    (state) => state.employeeCreateResumeSlice.certificationData
  );
  const certificationValues = useSelector(
    (state) => state.employeeCreateResumeSlice.certificationValues
  );
  const dispatch = useDispatch();
  const inputValues = useSelector((state) => state.skillInputs);

  const [addItem4, setAddItem4] = useState(false);
  const showAddItem4 = () => {
    setAddItem4((prev) => !prev);
  };

  const handleChange = (event) => {
    dispatch(setCertificationValues({ certifications: event.target.value }));
  };

  //Edit Item Function
  const [editIndex, setEditIndex] = useState(-1);

  const updateItem = () => {
    if (editIndex !== -1) {
      const updatedFormData = [...certificationData];
      updatedFormData[editIndex] = certificationValues.certifications;
      dispatch(setCertificationData(updatedFormData));
      dispatch(setCertificationValues({ certifications: "" }));
      setEditIndex(-1);
    }
  };

  const editItem = (index) => {
    setAddItem4(true);
    dispatch(
      setCertificationValues({ certifications: certificationData[index] })
    );
    setEditIndex(index);
  };

  //Editing Functionality Ends here
  const handleAdd = () => {
    if (editIndex !== -1) {
      return;
    }
    const trimmedValue = certificationValues.certifications.trim();
    if (trimmedValue) {
      const newData = [...certificationData, trimmedValue];
      dispatch(setCertificationData(newData));
      dispatch(setCertificationValues({ certifications: "" }));
    }
  };

  // shifting functionality for changing the index of the data

  const moveItemUp = (index) => {
    if (index === 0) return;
    const newData = [...certificationData];
    [newData[index], newData[index - 1]] = [newData[index - 1], newData[index]];
    dispatch(setCertificationData(newData));
  };

  const moveItemDown = (index) => {
    if (index === certificationData.length - 1) return;
    const newData = [...certificationData];
    [newData[index], newData[index + 1]] = [newData[index + 1], newData[index]];
    dispatch(setCertificationData(newData));
  };
  return (
    <div className="w-full flex flex-col mb-5 items-start">
      <h2 className="text-[17px] font-semibold">Certifications</h2>
      <p>
        Include all Certifications that contains your courses, diplomas, etc.
      </p>
      <h3
        onClick={showAddItem4}
        className="font-semibold my-3 flex gap-2 cursor-pointer items-center"
      >
        Add Item {addItem4 ? <FaCircleXmark /> : <FaCirclePlus />}
      </h3>
      {addItem4 ? (
        <div className="flex gap-x-6 flex-wrap items-baseline w-full">
          <input
            className="w-4/5 p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] outline-none border-[0.5px] border-[#323232] rounded-lg"
            type="text"
            id="certifications"
            name="certifications"
            placeholder="certifications"
            onChange={handleChange}
            value={certificationValues.certifications}
          />
          <button
            onClick={handleAdd}
            className="px-4 text-white rounded-md mt-4 py-2 bg-clearanceGrey cursor-pointer hover:bg-clearanceDarkBlue"
          >
            Done
          </button>
        </div>
      ) : null}

      <div className="flex flex-wrap gap-2 my-6">
        {certificationData.map((data, index) => {
          return (
            <div
              key={index}
              className="flex justify-between gap-2 bg-clearanceGrey py-2 items-center rounded-lg px-4 text-white"
            >
              <h3>{data}</h3>

              <div className="flex gap-2">
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
                    dispatch(deleteCertification(index));
                  }}
                >
                  <FaTrash />
                </button>

                {index > 0 && (
                  <button
                    className="px-4 py-2 text-white bg-[#4a47f3] hover:bg-blue-700 rounded"
                    onClick={() => moveItemUp(index)}
                  >
                    <FaArrowUp />
                  </button>
                )}
                {index < certificationData.length - 1 && (
                  <button
                    className="px-4 py-2 text-white bg-[#4a47f3] hover:bg-blue-700 rounded"
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
}

export default CertificationComponent;
