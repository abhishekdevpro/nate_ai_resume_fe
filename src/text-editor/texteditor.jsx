import React from "react";
import { setEditorValue } from "../state/reducer/editorSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  appendEditorValue,
  setTextEditorValue,
} from "../state/reducer/textEditor";

const TextEditor = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.key === "enter") {
      dispatch(appendEditorValue(e.target.value + "\n"));
    }
    dispatch(setEditorValue(e.target.value));
    dispatch(setTextEditorValue(e.target.value));
  };

  return (
    <textarea
      name="text-editor"
      id="text-editor"
      value={useSelector((state) => state.textEditor.textEditorValue)}
      className="border border-black rounded-lg px-4 py-4"
      onChange={handleChange}
      cols="20"
      rows="7"
    ></textarea>
  );
};

export default TextEditor;
