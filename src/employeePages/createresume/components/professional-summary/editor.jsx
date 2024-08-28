import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCirclePlus, FaCircleXmark } from "react-icons/fa6";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import EmployeeTextEditor from "../../../../text-editor/employeeTextEditor";
import {
  appendEditorValue,
  setTextEditorValue,
} from "../../../../state/reducer/employeeTextEditor";
import { toast } from "react-toastify";
const ProfessionalSummary = () => {
  const [suggestionsInput, setSuggestionsInput] = useState("");
  const jobTitle = useSelector(
    (state) => state.employeeCreateResumeSlice.personalInfoValues.jobTitle
  );
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  const [suggestions, setSuggestions] = useState(false);
  const showSuggestion = () => {
    setSuggestions((prev) => !prev);
  };

  useEffect(() => {
    setSuggestionsInput(jobTitle);
  }, [jobTitle]);
  const token = localStorage.getItem("employeeAuthToken");
  const submitForm = async () => {
    setLoading(true);
    const toastId = toast.loading("Hold On A Second!");

    try {
      const res = await axios({
        method: "post",
        url: "https://api.resumesquad.net/api/user/ai-job-description",
        headers: {
          Authorization: token,
        },
        data: {
          title: suggestionsInput,
          keyword: "job description",
        },
      });

      console.log(res?.data?.data?.content);
      const content = res?.data?.data?.content;
      const sentences = content
        .split(".")
        .map((sentence) => sentence.trim())
        .filter((sentence) => sentence);
      setResult(sentences);
      toast.update(toastId, {
        render: "Fetched Successfully",
        type: "success",
        isLoading: false,
        autoClose: 5000,
      });
    } catch (err) {
      console.log(err, "lavi");
      toast.update(toastId, {
        render: "Error in fetching the data.",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
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
                    value={suggestionsInput}
                  />
                </div>
                <div className="w-full sm:w-[25%] flex justify-center">
                  <button
                    className="bg-clearanceGrey text-clearanceDarkBlue font-semibold hover:text-white py-2 px-4   rounded"
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
                  <ul className="divide-y divide-gray-200">
                    <div className="flex-1">
                      <li className="flex flex-col gap-[12px]  text-[12px]">
                        {/* <p
                        onClick={() => {
                          showSuggestion();
                          dispatch(
                            setTextEditorValue(
                              result?.toString()
                            )
                          );
                        }}
                        className="text-gray-600 text-base cursor-pointer"
                      >
                        {result?.toString()}
                      </p> */}
                        {result.map((item, index) => (
                          <div
                            key={index}
                            onClick={() => {
                              dispatch(setTextEditorValue(item));
                              setResult([]);
                            }}
                          >
                            <ul className=" border-b border-gray-200 pb-[10px] ">
                              <div className="flex-1">
                                <li className="flex items-center ">
                                  <p
                                    onClick={showSuggestion}
                                    className="text-gray-600  cursor-pointer"
                                  >
                                    {item}
                                  </p>
                                </li>
                              </div>
                            </ul>
                          </div>
                        ))}
                      </li>
                    </div>
                  </ul>
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
      <EmployeeTextEditor name="text-editor" id="text-editor" />
    </div>
  );
};

export default ProfessionalSummary;
