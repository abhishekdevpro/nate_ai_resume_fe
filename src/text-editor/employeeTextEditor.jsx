import React from "react";
import { setEditorValue } from "../state/reducer/employeeEditor";
import { useDispatch, useSelector } from "react-redux";
import {
  appendEditorValue,
  setTextEditorValue,
} from "../state/reducer/employeeTextEditor";
import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const EmployeeTextEditor = () => {
  const dispatch = useDispatch();

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  //   if (e.key === "enter") {
  //     dispatch(appendEditorValue(e.target.value + "\n"));
  //   }
  //   dispatch(setEditorValue(e.target.value));
  //   dispatch(setTextEditorValue(e.target.value));
  // };
  const handleChange = (content) => {
    dispatch(setTextEditorValue(content));
  };
  const textEditorValue = useSelector(
    (state) => state.employeeTextEditorSlice.textEditorValue
  );

  return (
    // <textarea
    //   name="text-editor"
    //   id="text-editor"
    //   value={useSelector(
    //     (state) => state.employeeTextEditorSlice.textEditorValue
    //   )}
    //   className="border border-black rounded-lg px-4 py-4"
    //   onChange={handleChange}
    //   cols="20"
    //   rows="7"
    // ></textarea>
    <div className="bg-white w-full h-full">
      <ReactQuill
        theme="snow"
        value={textEditorValue}
        onChange={handleChange}
        style={{ height: "200px", width: "100%", marginBottom: "70px" }}
      />
      {/* <p className="ql-editor">{textEditorValue}</p> */}
    </div>
  );
};

export default EmployeeTextEditor;
