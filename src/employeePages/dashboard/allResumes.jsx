import { useEffect, useState } from "react";
import DashboardLayout from "./layout";
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import {
  showToastError,
  showToastSuccess,
} from "../../utils/toastify/toastify";
import { ToastContainer, toast } from "react-toastify";
import { pdfjs, Document, Page } from "react-pdf";
import { FaBars, FaX } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setEmployeeSidebar } from "../../state/reducer/sidebarSlice";
import Resume from "../resume/resume";
import OriginalResume from "../../userPages/resume/resume";
import {
  setCertificationData,
  setCustomSectionData,
  setEditorValue,
  setEducationData,
  setEmploymentData,
  setPersonalInfoValues,
  setSkillsData,
  setWebsiteData,
} from "../../state/reducer/createResumeSlice";
import { setTextEditorValue } from "../../state/reducer/userTextEditorSlice";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const EmployeeAllResumes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setEmployeeSidebar("allResumes"));
  }, []);
  const [data, setData] = useState([]);
  const token = localStorage.getItem("employeeAuthToken");
  const [showResume, setShowResume] = useState(false);
  const [path, setPath] = useState("");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const [originalResumeData, setOriginalResumeData] = useState(null);
  const navigate = useNavigate();
  const fetchData = async () => {
    await axios({
      method: "GET",
      url: "https://api.resumesquad.net/api/employee/get-resume",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res?.data?.data, "data");
        setData(res?.data?.data || []);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleAiAutomation = (id) => {
    const toastId = toast.loading("Hold On A Second!");
    axios({
      method: "POST",
      url: `https://api.resumesquad.net/api/employee/resume-ai-automation/${id}`,
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        console.log(res);
        toast.update(toastId, {
          render: res?.data?.message,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        fetchData();
      })
      .catch((err) => {
        console.log(err);
        toast.update(toastId, {
          render: err?.response?.data?.message,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      });
  };
  const [modal, setModal] = useState(false);
  const handleModal = (index) => {
    setModal(index === modal ? null : index);
  };
  const [resumeId, setResumeId] = useState("");
  const [remark, setRemark] = useState("");
  const handleChange = (e) => {
    setRemark(e.target.value);
  };
  const handleApprovalResume = () => {
    const data = {
      resume_id: resumeId,
      resume_status_id: 4,
      remark: remark,
    };
    axios({
      method: "PUT",
      url: "https://api.resumesquad.net/api/employee/update-resume-status",
      headers: {
        Authorization: token,
      },
      data: data,
    })
      .then((res) => {
        console.log(res);
        showToastSuccess(res?.data?.message?.toString());
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [acceptedResumes, setAcceptedResumes] = useState(() => {
    const savedResumes = localStorage.getItem("acceptedResumes");
    return savedResumes ? JSON.parse(savedResumes) : [];
  });

  useEffect(() => {
    localStorage.setItem("acceptedResumes", JSON.stringify(acceptedResumes));
  }, [acceptedResumes]);

  const handleAcceptResume = (id) => {
    axios({
      method: "POST",
      url: `https://api.resumesquad.net/api/employee/accept-resume`,
      headers: {
        Authorization: token,
      },
      data: {
        resume_id: id,
      },
    })
      .then((res) => {
        console.log(res);
        showToastSuccess(res?.data?.message);
        setAcceptedResumes((prevAcceptedResumes) => [
          ...prevAcceptedResumes,
          id,
        ]);
        fetchData();
      })
      .catch((err) => {
        console.log(err);
        showToastError(err?.response?.data?.message);
      });
  };

  const [showOptions, setShowOptions] = useState(false);
  const handleShowOptions = (index) => {
    setShowOptions(index === showOptions ? null : index);
  };

  const [historyDetails, setHistoryDetails] = useState([]);
  const handleGetHistory = (id) => {
    axios({
      method: "GET",
      url: `https://api.resumesquad.net/api/employee/resume-status-history/${id}`,
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        console.log(res?.data?.data);
        setHistoryDetails(res?.data?.data || []);
      })
      .catch((err) => {
        console.log(err);
        showToastError(err?.response?.data?.message);
      });
  };
  console.log(originalResumeData?.address, "originalData");
  useEffect(() => {
    if (originalResumeData !== null) {
      dispatch(
        setPersonalInfoValues({
          jobTitle: originalResumeData?.wantedjobtitle,
          firstName: originalResumeData?.firstname,
          lastName: originalResumeData?.lastname,
          city: originalResumeData?.city,
          country: originalResumeData?.country,
          email: originalResumeData?.email,
          phoneNumber: originalResumeData?.phone,
          address: originalResumeData?.address,
          postalcode: originalResumeData?.postalcode,
          drivinglicense: originalResumeData?.drivinglicense,
          nationality: originalResumeData?.nationality,
          placeofbirth: originalResumeData?.placeofbirth,
          dateofbirth: originalResumeData?.dateofbirth,
          clearance: originalResumeData?.securityclearance,
          docName: originalResumeData?.templatename,
        })
      );
      dispatch(setEducationData(originalResumeData?.education || []));
      dispatch(setEmploymentData(originalResumeData?.employmenthistory || []));
      dispatch(setTextEditorValue(originalResumeData?.professionalsummary));
      dispatch(setSkillsData(originalResumeData?.skills || []));
      dispatch(setCertificationData(originalResumeData?.certifications || []));
      dispatch(setWebsiteData(originalResumeData?.websitedata || []));
      dispatch(setCustomSectionData(originalResumeData?.customsection || []));
    }
  }, [originalResumeData]);
  return (
    <div>
      {showResume ? (
        <div className=" bg-black z-20 overflow-y-scroll p-[30px] w-[100%] fixed flex flex-col gap-[12px] h-[100%] bg-opacity-40">
          <div className="right-[50px] w-full flex justify-end z-[99]  relative">
            <button
              onClick={() => {
                setShowResume(false);
              }}
              className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-200 rounded hover:bg-gray-200 focus:outline-none z-[99]"
            >
              close
            </button>
          </div>
          <div className="w-full  flex justify-center items-start gap-[20px]">
            {/* <OriginalResume /> */}
            <div className="w-[423px] h[600px]">
              <Document
                file={path}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={console.error}
                className="pdf-document"
              >
                <Page
                  pageNumber={pageNumber}
                  renderTextLayer={false}
                  height={600}
                />
              </Document>
            </div>
            <div className="w-[423] h-[600px] overflow-y-scroll">
              <OriginalResume />
            </div>
          </div>
        </div>
      ) : null}
      <DashboardLayout>
        <div className="w-full flex h-screen flex-col gap-[20px] ">
          <h2 className="text-white font-bold text-[25px]">Resume List</h2>
          <div className="bg-white w-full h-full overflow-y-scroll xl:rounded-tl-[20px] hide-scrollbar py-4 md:py-7 px-4 md:px-8 xl:px-10">
            <div className="mt-7 h-full overflow-x-auto">
              <table className="w-full whitespace-nowrap">
                <tbody>
                  {/* Your table header remains the same */}
                  <tr
                    tabIndex="0"
                    className="focus:outline-none h-16 border border-gray-200 rounded"
                  >
                    <td>
                      <div className="ml-5">
                        <div className="text-base font-medium flex flex-shrink-0 justify-center items-center relative text-[#718EBF]">
                          SL NO
                        </div>
                      </div>
                    </td>
                    <td className="">
                      <div className="flex justify-center items-center pl-5">
                        <p className="text-base font-medium leading-none text-[#718EBF] mr-2">
                          Name
                        </p>
                      </div>
                    </td>
                    <td className="pl-5">
                      <div className="flex justify-center items-center">
                        <p className="text-base font-medium leading-none text-[#718EBF] ml-2">
                          Email
                        </p>
                      </div>
                    </td>
                    <td className="pl-5">
                      <div className="flex  justify-center items-center">
                        <p className="text-base font-medium leading-none text-[#718EBF] ml-2">
                          Phone No.
                        </p>
                      </div>
                    </td>
                    <td className="">
                      <div className="flex justify-center items-center">
                        <p className="text-base font-medium leading-none text-[#718EBF] ml-2">
                          Created Date
                        </p>
                      </div>
                    </td>
                    <td className="pl-5">
                      <button className="text-base font-medium  text-[#718EBF]">
                        Status
                      </button>
                    </td>

                    <td className="pl-5 text-center">
                      <button className="text-base font-medium  text-[#718EBF]">
                        Action
                      </button>
                    </td>
                  </tr>
                  {data.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        tabIndex="0"
                        className="focus:outline-none h-16 border border-gray-200 rounded relative"
                      >
                        <td>
                          <div className="ml-5">
                            <div className=" flex justify-center text-sm flex-shrink-0  items-center relative text-[#232323]">
                              {item?.s_no}
                            </div>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex justify-center items-center pl-5">
                            <p className="text-sm  leading-none text-[#232323] mr-2">
                              {item?.user_first_name} {item?.user_last_name}
                            </p>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex justify-center items-center">
                            <p className="text-sm  leading-none text-[#232323] ml-2">
                              {item?.user_email}
                            </p>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex justify-center items-center">
                            <p className="text-sm leading-none text-[#232323] ml-2">
                              {item?.user_mobile}
                            </p>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex justify-center items-center">
                            <p className="text-sm leading-none text-[#232323] ml-2">
                              {moment(item?.resume_created_at).format(
                                "YYYY-MM-DD"
                              )}
                            </p>
                          </div>
                        </td>
                        <td className="pl-5">
                          <p
                            onClick={() => {
                              handleModal("history");
                              handleGetHistory(item?.resume_id);
                            }}
                            className="text-base font-medium cursor-pointer text-[#718EBF]"
                          >
                            {item?.resume_status_name}
                          </p>
                        </td>
                        <td className="pl-5 ">
                          <div className="flex justify-center">
                            {showOptions === item?.resume_id ? (
                              <FaX
                                onClick={() => setShowOptions(false)}
                                className="cursor-pointer"
                              />
                            ) : (
                              <FaBars
                                onClick={() =>
                                  handleShowOptions(item?.resume_id)
                                }
                                className="cursor-pointer"
                              />
                            )}
                          </div>
                          {showOptions === item?.resume_id ? (
                            <div className="absolute z-[2] flex flex-col w-[30%] xl:w-[20%] bg-white p-[15px] rounded-[7px] shadow-lg border border-gray-200 top-[50px] right-[-20px]  justify-center gap-[12px]">
                              <button
                                onClick={() => {
                                  if (
                                    item?.resume_status_id === 2 ||
                                    item?.resume_status_id === 3 ||
                                    item?.resume_status_id === 4 ||
                                    item?.resume_status_id === 5 ||
                                    item?.resume_status_id === 6 ||
                                    item?.resume_status_id === 7
                                  ) {
                                    setShowResume(true);
                                    setPath(
                                      `https://api.resumesquad.net/${item.resume_file_path}`
                                    );
                                    setOriginalResumeData(
                                      item?.ai_resume_parse_data?.templateData
                                    );
                                  } else {
                                    showToastError("First Accept the resume!");
                                  }
                                  setShowOptions(false);
                                }}
                                className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-200 rounded hover:bg-gray-200 focus:outline-none"
                              >
                                View
                              </button>
                              <button
                                onClick={() => {
                                  if (
                                    item?.resume_status_id === 2 ||
                                    item?.resume_status_id === 3 ||
                                    item?.resume_status_id === 4 ||
                                    item?.resume_status_id === 5 ||
                                    item?.resume_status_id === 6 ||
                                    item?.resume_status_id === 7
                                  ) {
                                    navigate(
                                      `/employee/create-resume/${item?.resume_id}`
                                    );
                                  } else {
                                    showToastError("First Accept the resume!");
                                  }
                                }}
                                className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-200 rounded hover:bg-gray-200 focus:outline-none"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => {
                                  handleAiAutomation(item?.resume_id);
                                  setShowOptions(false);
                                }}
                                className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-200 rounded hover:bg-gray-200 focus:outline-none"
                              >
                                Ai Automation
                              </button>
                              <button
                                onClick={() => {
                                  setResumeId(item?.resume_id);
                                  handleModal("remark");
                                  setShowOptions(false);
                                }}
                                className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-200 rounded hover:bg-gray-200 focus:outline-none"
                              >
                                Send for Approval
                              </button>
                              {item?.resume_status_id === 3 ||
                              item?.resume_status_id === 4 ||
                              item?.resume_status_id === 5 ||
                              item?.resume_status_id === 7 ||
                              item?.resume_status_id === 7 ? (
                                <button
                                  onClick={() => {
                                    setShowOptions(false);
                                    showToastError("This is already Accepted");
                                  }}
                                  className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-200 rounded hover:bg-gray-200 focus:outline-none"
                                >
                                  {item?.resume_status_id === 2 ? "" : "Hired"}
                                </button>
                              ) : item?.resume_status_id === 2 ? null : (
                                <button
                                  onClick={() => {
                                    handleAcceptResume(item?.resume_id);
                                    setShowOptions(false);
                                  }}
                                  className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-200 rounded hover:bg-gray-200 focus:outline-none"
                                >
                                  Accept
                                </button>
                              )}
                            </div>
                          ) : null}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {modal == "remark" ? (
          <div className="w-full h-full bg-black bg-opacity-[.5] text-white z-[99] p-[30px] flex flex-col items-center justify-center fixed top-0 left-0">
            <div className="w-full sm:w-[60%] xl:w-[40%] bg-white text-black p-[20px] sm:p-[30px] xl:p-[40px] flex flex-col gap-[20px] items-center rounded-[7px]">
              <div className="w-full flex flex-col  gap-[7px]">
                <label htmlFor="remark">Remark*</label>
                <textarea
                  type="text"
                  name="remark"
                  id="remark"
                  onChange={handleChange}
                  value={remark}
                  autoComplete="false"
                  className="p-[7px] h-[80px] outline-none border border-gray-200 rounded-[7px]"
                  required
                />
              </div>
              <div className="flex items-center gap-[12px]">
                <button
                  onClick={handleModal}
                  className="px-[20px] py-[10px] bg-[#8d76ac] text-white rounded-[7px]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleApprovalResume}
                  className="px-[20px] py-[10px] bg-[#8d76ac] text-white rounded-[7px]"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        ) : null}
        {modal === "history" && (
          <div className="w-full h-screen top-0 left-0 fixed bg-black bg-opacity-[0.5] p-[20px] flex items-center justify-center">
            <div className="w-full h-full  overflow-y-scroll hide-scrollbar sm:w-[50%] xl:w-[30%] p-[15px] rounded-[7px] bg-white flex flex-col gap-[12px]">
              <div className="flex flex-col w-full">
                <div className="w-full flex justify-between items-center">
                  <h2 className=" font-semibold text-[25px]">History</h2>
                  <FaX className="cursor-pointer" onClick={handleModal} />
                </div>
                {historyDetails?.length !== 0 ? (
                  <div className="w-full flex flex-col gap-[20px] p-[20px]">
                    {historyDetails?.map((item, index) => {
                      const time = item?.date_time?.split("T")[1];
                      const formattedTimeString = time.replace("Z", "");
                      const formattedTime = moment(
                        formattedTimeString,
                        "HH:mm:ss"
                      ).format("hh:mm A");
                      console.log(formattedTime);
                      return (
                        <ul
                          key={index}
                          className="flex pl-[13px] border-l-2 border-gray-200 flex-col list-disc"
                        >
                          <li className="text-[16px] font-semibold">
                            {item?.status}
                          </li>
                          <p>by {item?.action_by_name}</p>
                          <div className="text-[12px] flex items-center gap-[4px]">
                            <p>
                              {moment(item?.data_time).format("YYYY-MM-DD")}{" "}
                              {formattedTime}
                            </p>
                          </div>
                        </ul>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-center font-medium text-black">
                    No History Available Yet!
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </DashboardLayout>
    </div>
  );
};

export default EmployeeAllResumes;
