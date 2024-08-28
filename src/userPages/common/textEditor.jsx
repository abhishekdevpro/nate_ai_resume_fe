import React, { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import parse from "html-react-parser";

import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setEducationTextEditor,
  setTextEditorValue,
} from "../../state/reducer/userTextEditorSlice";
import {
  setCustomSectionDescription,
  setEducationDescription,
  setEmploymentDescription,
  setEmploymentValues,
} from "../../state/reducer/createResumeSlice";
import ReactQuill from "react-quill";
export const ProfileSummaryTextEditor = () => {
  const dispatch = useDispatch();

  const handleChange = (content) => {
    dispatch(setTextEditorValue(content));
  };

  const textEditorValue = useSelector(
    (state) => state.userTextEditorSlice.textEditorValue
  );
  console.log(textEditorValue);
  return (
    <div className="bg-white w-full h-full">
      <ReactQuill
        theme="snow"
        value={textEditorValue}
        onChange={handleChange}
        style={{ height: "200px", width: "100%", marginBottom: "70px" }}
      />
    </div>
  );
};
// educationTextEditor

export const EducationTextEditor = () => {
  const { quill, quillRef } = useQuill();
  const [editorContent, setEditorContent] = useState("");
  const dispatch = useDispatch();

  // const handleChange = (content, delta, source, editor) => {
  //   setEditorContent(editor.root.innerHTML);
  //   console.log(editor);
  // };
  const handleChange = (content) => {
    dispatch(setTextEditorValue(content));
  };

  const textEditorValue = useSelector(
    (state) => state.userTextEditorSlice.textEditorValue
  );
  console.log(textEditorValue);
  return (
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
// employment Text Editor

export const EmploymentTextEditor = () => {
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(
      setEmploymentValues({ ...employmentValues, jobdescription: value })
    );
  };
  // const employmentDescription = useSelector(
  //   (state) => state.createResumeSlice.employmentDescription
  // );
  const employmentData = useSelector(
    (state) => state.createResumeSlice.employmentData
  );
  const employmentValues = useSelector(
    (state) => state.createResumeSlice.employmentValues
  );
  console.log(employmentValues);
  return (
    <div className="bg-white w-full h-full">
      <ReactQuill
        theme="snow"
        value={employmentValues.jobdescription}
        onChange={handleChange}
        style={{ height: "200px", width: "100%", marginBottom: "70px" }}
      />
    </div>
  );
};

// customSection Text Editor

export const CustomSectionTextEditor = () => {
  const { quill, quillRef } = useQuill();
  const [editorContent, setEditorContent] = useState("");
  const dispatch = useDispatch();

  if (quill) {
    quill.on("text-change", () => {
      setEditorContent(quill.root.innerHTML);
    });
  }

  const handleChange = (content, delta, source, editor) => {
    setEditorContent(editor.root.innerHTML);
  };

  useEffect(() => {
    dispatch(setCustomSectionDescription(editorContent));
  }, [editorContent]);
  const customSectionDescription = useSelector(
    (state) => state.createResumeSlice.customSectionDescription
  );
  console.log(customSectionDescription);
  return (
    <div className="bg-white w-full h-full">
      <div ref={quillRef} />
    </div>
  );
};
