import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCirclePlus, FaCircleXmark } from "react-icons/fa6";
import TextEditor from "../../../../text-editor/texteditor";
import axios from "axios";
import {
  appendEditorValue,
  setTextEditorValue,
} from "../../../../state/reducer/textEditor";

import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

const ProfessionalSummary = () => {
  const [prompt, setSuggestionsInput] = useState("");
  const editorValue = useSelector((state) => state.textEditor.textEditorValue);
  const dispatch = useDispatch();
  const job = useSelector((state) => state.personalInfoInput.jobTitle);
  useEffect(() => {
    console.log(job);
    setSuggestionsInput(job);
    const timer = setTimeout(() => {
      submitForm();
    }, 2000);
    return () => clearTimeout(timer);
  }, [useSelector((state) => state.personalInfoInput.jobTitle)]);
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
        url: "/api/v1/openAi",
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

      // Display an error toast
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full my-7 text-[12px] flex flex-col gap-5">
      <h2 className="text-[17px] font-semibold  left-0 w-full flex justify-between relative">
        Professional Summary:
        <div
          onClick={showSuggestion}
          className="flex gap-2 text-[14px] items-center cursor-pointer"
        >
          {suggestions ? <FaCircleXmark /> : <FaCirclePlus />}
          AI - Assist
        </div>
        {suggestions ? (
          <div className="px-[20px] w-full flex flex-col gap-4 pb-5 absolute bg-white z-10 top-10 left-[0px] rounded-md  shadow-black shadow-md max-[1100px]:left-0 text-[12px]">
            {/* Display loader if loading is true */}

            <>
              <div className="flex flex-col sm:flex-row pt-[15px] items-center gap-[15px] ">
                <div className="w-full sm:w-[75%] flex items-center gap-2 border-b border-black">
                  <FaSearch />
                  <input
                    type="text"
                    className="w-full p-[7px] bg-transparent outline-none"
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
                        dispatch(appendEditorValue(item.description));
                      }}
                    >
                      <ul className="divide-y divide-gray-200">
                        <div className="flex-1">
                          <li className="flex items-center py-4 px-6">
                            <p
                              onClick={showSuggestion}
                              className="text-gray-600 text-base cursor-copy"
                            >
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
      </h2>
      <p>
        Write 2-5 Sentences that highlight the value you can provide to a team
        and organization. Mention your previous role, experience & most
        importantly - your biggest achievements, best qualities and skills
      </p>
      <TextEditor name="text-editor" id="text-editor" />
    </div>
  );
};

export default ProfessionalSummary;
