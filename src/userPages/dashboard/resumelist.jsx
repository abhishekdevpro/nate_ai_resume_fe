import { useEffect, useState } from "react";
import DashboardLayout from "./layout";
import axios from "axios";
import moment from "moment";
import { FaBars, FaTelegram, FaX } from "react-icons/fa6";
import { pdfjs, Document, Page } from "react-pdf";
import {
  showToastError,
  showToastSuccess,
} from "../../utils/toastify/toastify";
import { useDispatch } from "react-redux";
import { setUserSidebar } from "../../state/reducer/sidebarSlice";
import OriginalResume from "../resume/resume";
import {
  setCertificationData,
  setCustomSectionData,
  setEducationData,
  setEmploymentData,
  setPersonalInfoValues,
  setSkillsData,
  setWebsiteData,
} from "../../state/reducer/createResumeSlice";
import { setTextEditorValue } from "../../state/reducer/userTextEditorSlice";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const UserResumeList = () => {
  const array = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  const [showResume, setShowResume] = useState(false);
  const [path, setPath] = useState("");
  const [statusId, setStatusId] = useState("");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [originalResumeData, setOriginalResumeData] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const [remark, setRemark] = useState("");
  const handleChange = (e) => {
    setRemark(e.target.value);
  };
  const [modal, setModal] = useState(false);
  const handleModal = (index) => {
    setModal(index === modal ? null : index);
  };
  const [resumeId, setResumeId] = useState(null);
  console.log(resumeId, "resumeId");
  const [data, setData] = useState([]);
  const token = localStorage.getItem("customerAuthToken");
  const fetchData = async () => {
    await axios({
      method: "GET",
      url: "https://api.resumesquad.net/api/user/get-resume",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        setData(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const [handleResponse, setHandleResponse] = useState(null);
  const handleSubmit = () => {
    if (remark.trim()) {
      axios({
        method: "PUT",
        url: "https://api.resumesquad.net/api/employee/update-resume-status",
        headers: {
          Authorization: token,
        },
        data: {
          resume_id: resumeId,
          resume_status_id: statusId,
          remark: remark,
        },
      })
        .then((res) => {
          console.log(res);
          showToastSuccess(res?.data?.message);
          setModal(false);
          setRemark("");
          fetchData();
        })
        .catch((err) => {
          console.log(err);
          showToastError(err?.response?.data?.message);
        });
    } else {
      setHandleResponse("Please fill the input");
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserSidebar("resume-list"));
  }, []);

  const [historyDetails, setHistoryDetails] = useState([]);
  const handleGetHistory = (id) => {
    axios({
      method: "GET",
      url: `https://api.resumesquad.net/api/user/resume-status-history/${id}`,
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

  console.log(statusId, resumeId, remark, "statusId");
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
          <div className="w-full flex flex-col items-center gap-[20px]">
            <div className="w-full  flex justify-center items-start gap-[20px]">
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
            {statusId === 4 || statusId === 6 ? (
              <div className="flex items-center gap-[12px]">
                <button
                  onClick={() => {
                    setStatusId(5);
                    setModal("remark");
                  }}
                  className="px-[20px] py-[12px] rounded-[7px] bg-white"
                >
                  Approved
                </button>
                <button
                  onClick={() => {
                    setStatusId(6);
                    setModal("remark");
                  }}
                  className="px-[20px] py-[12px] rounded-[7px] bg-white"
                >
                  Sent For Rework
                </button>
                <button
                  onClick={() => {
                    setStatusId(7);
                    setModal("remark");
                  }}
                  className="px-[20px] py-[12px] rounded-[7px] bg-white"
                >
                  Pay & Download
                </button>
              </div>
            ) : statusId === 5 ? (
              <button
                onClick={() => {
                  setModal("remark");
                }}
                className="px-[20px] py-[12px] rounded-[7px] bg-white"
              >
                Pay & Download
              </button>
            ) : statusId === 7 ? (
              <button
                onClick={() => setModal("remark")}
                className="px-[20px] py-[12px] rounded-[7px] bg-white"
              >
                Download
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
      <DashboardLayout>
        <div className="w-full flex h-screen flex-col gap-[20px] ">
          <h2 className="text-white font-bold text-[25px]">Resume List</h2>
          <div className="bg-white w-full h-full overflow-y-scroll xl:rounded-tl-[20px] hide-scrollbar py-4 md:py-7 px-4 md:px-8 xl:px-10">
            <div className="flex items-center gap-[7px]">
              <p className="font-medium">Total Resumes:</p>
              <p>{data?.length}</p>
            </div>
            <div className="mt-7 overflow-x-auto">
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
                      <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-[#718EBF] mr-2">
                          Name
                        </p>
                      </div>
                    </td>
                    <td className="pl-5">
                      <div className="flex items-center">
                        <p className="text-base font-medium leading-none text-[#718EBF] ml-2">
                          Email
                        </p>
                      </div>
                    </td>
                    <td className="pl-5">
                      <div className="flex items-center">
                        <p className="text-base font-medium leading-none text-[#718EBF] ml-2">
                          Phone No.
                        </p>
                      </div>
                    </td>
                    <td className="">
                      <div className="flex items-center">
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
                    <td className="pl-5">
                      <button className="text-base font-medium  text-[#718EBF]">
                        More Info
                      </button>
                    </td>
                  </tr>
                  {data?.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        tabIndex="0"
                        className="focus:outline-none h-16 border border-gray-200 rounded relative"
                      >
                        <td>
                          <div className="ml-5">
                            <div className=" flex text-sm flex-shrink-0 justify-center items-center relative text-[#232323]">
                              {item?.s_no}
                            </div>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-center pl-5">
                            <p className="text-sm  leading-none text-[#232323] mr-2">
                              {item?.user_first_name} {item?.user_last_name}
                            </p>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <p className="text-sm  leading-none text-[#232323] ml-2">
                              {item?.user_email}
                            </p>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <p className="text-sm leading-none text-[#232323] ml-2">
                              {item?.user_mobile}
                            </p>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-center">
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
                            className="text-base font-medium cursor-pointer  text-[#718EBF]"
                          >
                            {item?.resume_status_name}
                          </p>
                        </td>

                        <td className="pl-5">
                          <div className="flex justify-center items-center gap-[10px]">
                            <button
                              onClick={() => {
                                setShowResume(true);
                                setPath(
                                  `https://api.resumesquad.net/${item.resume_file_path}`
                                );
                                setStatusId(item?.resume_status_id);
                                setResumeId(item?.resume_id);
                                setOriginalResumeData(
                                  item?.ai_resume_parse_data?.templateData
                                );
                              }}
                              className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-200 rounded hover:bg-gray-200 focus:outline-none"
                            >
                              View
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
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
                    onClick={handleSubmit}
                    className="px-[20px] py-[10px] bg-[#8d76ac] text-white rounded-[7px]"
                  >
                    Submit
                  </button>
                </div>
                {remark.trim() ? null : (
                  <p className="text-red-500">{handleResponse}</p>
                )}
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
        </div>
      </DashboardLayout>
    </div>
  );
};

export default UserResumeList;
