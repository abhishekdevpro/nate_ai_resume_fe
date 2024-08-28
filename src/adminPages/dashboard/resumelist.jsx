import { useEffect, useState } from "react";
import DashboardLayout from "./layout";
import axios from "axios";
import moment from "moment";
import { FaBars, FaTelegram, FaX } from "react-icons/fa6";
import AllCustomerSkeleton from "../../common/allCustomerSkeleton";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import {
  showToastError,
  showToastSuccess,
} from "../../utils/toastify/toastify";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { setAdminActiveTab } from "../../state/reducer/sidebarSlice";
const ResumeList = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("adminAuthToken");
  const [employees, setEmployees] = useState([]);
  const [employeeId, setEmployeeId] = useState("");
  const [resumeId, setResumeId] = useState("");
  const [timeArr, setTimeArr] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    if (date) {
      const formattedDate = format(date, "yyyy-MM-dd HH:mm:ss");
      setSelectedDate(formattedDate);
    } else {
      setSelectedDate("");
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "GET",
        url: "https://api.resumesquad.net/api/admin/get-resume",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log(res?.data?.data, "data fetched");
          setData(res?.data?.data || []);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  const [modal, setModal] = useState(false);
  const handleModal = (index) => {
    setModal(index === modal ? null : index);
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "GET",
        url: "https://api.resumesquad.net/api/admin/employee",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log(response?.data?.data);
          setEmployees(response?.data?.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  const handleSubmit = (resumeId, employeeId, selectedDate) => {
    axios({
      method: "POST",
      url: "https://api.resumesquad.net/api/admin/assign-resume",
      headers: {
        Authorization: token,
      },
      data: {
        resume_id: resumeId,
        assigned_to_employee_id: employeeId,
        due_date: selectedDate,
      },
    })
      .then((res) => {
        console.log(res?.data?.message);
        showToastSuccess(res?.data?.message);
        setModal(false);
      })
      .catch((err) => {
        console.log(err);
        showToastError(err?.response?.data?.message);
        setModal(false);
      });
  };

  const handleUpdateResumeStatus = (id, status_id) => {
    const data = {
      resume_id: id,
      resume_status_id: status_id,
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
        showToastSuccess(res?.data?.message);
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
  const [resumeIdForReferral, setResumeIdForReferral] = useState(null);
  const [referralValues, setReferralValues] = useState({
    source: "",
    amount: "",
  });
  const handleReferralValuesChange = (e) => {
    const { name, value } = e.target;
    setReferralValues({ ...referralValues, [name]: value });
  };
  const handleSubmitReferral = (resume_id) => {
    const referralData = {
      resume_id: resume_id,
      source: referralValues.source,
      amount: Number(referralValues.amount),
    };
    axios({
      method: "POST",
      url: "https://api.resumesquad.net/api/admin/referral",
      headers: {
        Authorization: token,
      },
      data: referralData,
    })
      .then((res) => {
        console.log(res);
        showToastSuccess(res?.data?.message?.toString());
        setModal(false);
      })
      .catch((err) => {
        console.log(err);
        showToastError(err?.response?.data?.message?.toString());
      });
  };
  const [historyDetails, setHistoryDetails] = useState([]);
  const handleGetHistory = (id) => {
    axios({
      method: "GET",
      url: `https://api.resumesquad.net/api/admin/employee-status-history/${id}`,
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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAdminActiveTab("resume-list"));
  }, []);
  return (
    <div>
      <DashboardLayout>
        <div className=" w-full flex h-screen flex-col gap-[20px] ">
          <h2 className="text-white font-bold text-[25px]">Resume List</h2>
          <div className="bg-white w-full h-full overflow-y-scroll xl:rounded-tl-[20px] hide-scrollbar py-4 md:py-7 px-4 ">
            <div className="mt-7 h-full overflow-y-scroll hide-scrollbar overflow-x-auto">
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
                      <div className="flex justify-center items-center">
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
                        Actions
                      </button>
                    </td>
                  </tr>
                  {data.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        tabIndex="0"
                        className="focus:outline-none relative h-16 border border-gray-200 rounded"
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
                          <p className="text-base font-medium  text-[#718EBF]">
                            {item?.resume_status_name}
                          </p>
                        </td>
                        {/* <td className="pl-5">
                          <div className="flex items-center">
                            <p className="text-sm leading-none text-[#232323] ml-2">
                              Artificial
                            </p>
                          </div>
                        </td> */}

                        <td className="pl-5 text-center">
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
                            <div className="absolute z-[99] flex flex-col w-[30%] xl:w-[18%] bg-white p-[15px] rounded-[7px] shadow-lg border border-gray-200 top-[50px] right-[-20px] items-center justify-center gap-[12px]">
                              <button
                                onClick={() => {
                                  setModal("selectEmployee");
                                  setResumeId(item?.resume_id);
                                  setShowOptions(false);
                                }}
                                className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-[10px] px-[15px] bg-gray-200 rounded hover:bg-gray-200 focus:outline-none w-full text-[10px] font-medium text-center justify-center flex items-center gap-[7px]"
                              >
                                Assign
                              </button>
                              <button
                                onClick={() => {
                                  handleUpdateResumeStatus(item?.resume_id, 7);
                                }}
                                className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-[10px] px-[15px] bg-gray-200 rounded hover:bg-gray-200 focus:outline-none w-full text-[10px] font-medium text-center justify-center flex items-center gap-[7px]"
                              >
                                Completed
                              </button>
                              <button
                                onClick={() => {
                                  handleUpdateResumeStatus(item?.resume_id, 10);
                                }}
                                className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-[10px] px-[15px] bg-gray-200 rounded hover:bg-gray-200 focus:outline-none w-full text-[10px] font-medium text-center justify-center flex items-center gap-[7px]"
                              >
                                Recheck
                              </button>
                              <button
                                onClick={() => {
                                  setModal("addReferral");
                                  setShowOptions(false);
                                  setResumeIdForReferral(item?.resume_id);
                                }}
                                className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-[10px] px-[15px] bg-gray-200 rounded hover:bg-gray-200 focus:outline-none w-full text-[10px] font-medium text-center justify-center flex items-center gap-[7px]"
                              >
                                Add Referral
                              </button>
                              <button
                                onClick={() => {
                                  setModal("history");
                                  setShowOptions(false);
                                  handleGetHistory(item?.resume_id);
                                }}
                                className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-[10px] px-[15px] bg-gray-200 rounded hover:bg-gray-200 focus:outline-none w-full text-[10px] font-medium text-center justify-center flex items-center gap-[7px]"
                              >
                                History
                              </button>
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
        {modal === "selectEmployee" ? (
          <div className="w-full h-full top-0 overflow-y-scroll left-0 fixed bg-black bg-opacity-[0.5] p-[20px] flex items-center justify-center">
            <div className="w-full sm:w-[90%] flex flex-col gap-[20px] ">
              <div className="flex text-white font-bold justify-between items-center">
                <h2 className="text-white font-bold text-[25px]">
                  Employer List
                </h2>
                <FaX className="cursor-pointer" onClick={handleModal} />
              </div>
              <div className="bg-white w-full h-[600px] overflow-y-scroll xl:rounded-tl-[20px] hide-scrollbar py-4 md:py-7 px-4 md:px-8 xl:px-10">
                <div className="mt-7 overflow-x-auto">
                  <table className="w-full whitespace-nowrap">
                    <tbody>
                      <tr
                        tabIndex="0"
                        className="focus:outline-none h-16 border border-gray-200 rounded"
                      >
                        <td>
                          <div className="ml-5">
                            <div className="text-base font-medium flex flex-shrink-0 justify-center items-center relative">
                              SR NO.
                            </div>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-center pl-5">
                            <p className="text-base font-medium leading-none text-gray-700 mr-2">
                              Date
                            </p>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <p className="text-base font-medium leading-none text-gray-600 ml-2">
                              Name
                            </p>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <p className="text-base font-medium leading-none text-gray-600 ml-2">
                              Email
                            </p>
                          </div>
                        </td>

                        <td className="pl-0">
                          <p className="text-base font-medium leading-none text-gray-600 ml-2">
                            More Info
                          </p>
                        </td>
                      </tr>
                      {employees[0] ? (
                        <>
                          {employees.map((item, index) => {
                            const formattedCreatedDate = moment(
                              item?.Employee?.created_at
                            ).format("YYYY-MM-DD");
                            return (
                              <tr
                                key={index}
                                tabIndex="0"
                                className="focus:outline-none h-16 border border-gray-200 rounded"
                              >
                                <td>
                                  <div className="ml-5">
                                    <div className=" flex text-sm flex-shrink-0 justify-center items-center relative">
                                      {item?.s_no}
                                    </div>
                                  </div>
                                </td>
                                <td className="">
                                  <div className="flex items-center pl-5">
                                    <p className="text-sm font-medium leading-none text-gray-700 mr-2">
                                      {formattedCreatedDate}
                                    </p>
                                  </div>
                                </td>
                                <td className="pl-5">
                                  <div className="flex items-center">
                                    <p className="text-sm font-medium leading-none text-gray-600 ml-2">
                                      {item?.Employee?.first_name}{" "}
                                      {item?.Employee?.last_name}
                                    </p>
                                  </div>
                                </td>
                                <td className="pl-5">
                                  <div className="flex items-center">
                                    <p className="text-sm leading-none text-gray-600 ml-2">
                                      {item?.Employee?.email}
                                    </p>
                                  </div>
                                </td>

                                <td className="">
                                  <button
                                    onClick={() => {
                                      setModal("datepicker");
                                      setEmployeeId(item?.Employee?.id);
                                    }}
                                    className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-200 rounded hover:bg-gray-200 focus:outline-none"
                                  >
                                    View
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </>
                      ) : (
                        <AllCustomerSkeleton />
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {modal === "datepicker" && (
          <div className="fixed p-[30px] bg-black bg-opacity-[.5] w-full h-full flex items-center justify-center top-0 left-0">
            <div className="relative  p-5 border w-full sm:w-[70%] xl:w-[40%] shadow-lg rounded-[20px] bg-white">
              <div className="mt-3 text-center w-full flex flex-col gap-[20px]">
                <div className="flex text-black font-bold justify-between items-center">
                  <h2 className=" font-bold text-[25px]">Select a Dew Date</h2>
                  <FaX className="cursor-pointer" onClick={handleModal} />
                </div>
                <div className="w-full">
                  <DatePicker
                    inline
                    selected={selectedDate ? new Date(selectedDate) : null}
                    onChange={handleDateChange}
                    showTimeSelect
                    dateFormat="yyyy-MM-dd HH:mm:ss"
                  />
                </div>
              </div>
              <button
                className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-200 rounded hover:bg-gray-200 focus:outline-none"
                onClick={() => setModal("verification")}
              >
                Submit
              </button>
            </div>
          </div>
        )}

        {modal === "verification" && (
          <div className="w-full h-full top-0 overflow-y-scroll left-0 fixed bg-black bg-opacity-[0.5] p-[20px] flex items-center justify-center">
            <div className="w-full sm:w-[90%] flex flex-col gap-[20px] ">
              <div className="flex text-white font-bold justify-between items-center">
                <h2 className="text-white font-bold text-[25px]">
                  Assignment To Employee
                </h2>
                <FaX className="cursor-pointer" onClick={handleModal} />
              </div>
              <div className="bg-white w-full h-[600px] overflow-y-scroll xl:rounded-tl-[20px] hide-scrollbar py-4 md:py-7 px-4 md:px-8 xl:px-10">
                <div className="mt-7 overflow-x-auto">
                  <table className="w-full whitespace-nowrap">
                    <tbody>
                      <tr
                        tabIndex="0"
                        className="focus:outline-none h-16 border border-gray-200 rounded"
                      >
                        <td>
                          <div className="ml-5">
                            <div className="text-base font-medium flex flex-shrink-0 justify-center items-center relative">
                              Employee Id
                            </div>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-center pl-5">
                            <p className="text-base font-medium leading-none text-gray-700 mr-2">
                              Resume Id
                            </p>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <p className="text-base font-medium leading-none text-gray-600 ml-2">
                              Due Date
                            </p>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <p className="text-base font-medium leading-none text-gray-600 ml-2">
                              Assign
                            </p>
                          </div>
                        </td>
                      </tr>
                      <>
                        <tr
                          tabIndex="0"
                          className="focus:outline-none h-16 border border-gray-200 rounded"
                        >
                          <td>
                            <div className="ml-5">
                              <div className=" flex text-sm flex-shrink-0 justify-center items-center relative">
                                {employeeId}
                              </div>
                            </div>
                          </td>
                          <td className="">
                            <div className="flex items-center pl-5">
                              <p className="text-sm font-medium leading-none text-gray-700 mr-2">
                                {resumeId}
                              </p>
                            </div>
                          </td>
                          <td className="pl-5">
                            <div className="flex items-center">
                              <p className="text-sm font-medium leading-none text-gray-600 ml-2">
                                {selectedDate}
                              </p>
                            </div>
                          </td>

                          <td className="">
                            <button
                              onClick={() => {
                                handleSubmit(
                                  resumeId,
                                  employeeId,
                                  selectedDate
                                );
                              }}
                              className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-200 rounded hover:bg-gray-200 focus:outline-none"
                            >
                              Submit
                            </button>
                          </td>
                        </tr>
                      </>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
        {modal === "addReferral" && (
          <div className="w-full h-full top-0 overflow-y-scroll hide-scrollbar left-0 fixed bg-black bg-opacity-[0.5] p-[20px] flex items-center justify-center">
            <div className="w-full sm:w-[50%] p-[15px] rounded-[7px] bg-white flex flex-col gap-[12px]">
              <div className="flex  w-full justify-between items-center">
                <h2 className=" font-semibold text-[25px]">Add Referral</h2>
                <FaX className="cursor-pointer" onClick={handleModal} />
              </div>
              <div className="w-full flex flex-col gap-[7px]">
                <label htmlFor="source" className="font-medium">
                  Source
                </label>
                <textarea
                  name="source"
                  id="source"
                  onChange={handleReferralValuesChange}
                  value={referralValues?.source}
                  autoComplete="false"
                  className="p-[7px] border border-gray-200 rounded-[4px] outline-none bg-gray-100"
                  required
                ></textarea>
              </div>
              <div className="w-full flex flex-col gap-[7px]">
                <label htmlFor="amount" className="font-medium">
                  Amount
                </label>
                <input
                  type="text"
                  name="amount"
                  id="amount"
                  onChange={handleReferralValuesChange}
                  value={referralValues?.amount}
                  autoComplete="false"
                  required
                  className="p-[7px] border border-gray-200 rounded-[4px] outline-none bg-gray-100"
                />
              </div>
              <button
                onClick={() => {
                  if (referralValues?.source && referralValues?.amount !== "") {
                    handleSubmitReferral(resumeIdForReferral);
                  }
                }}
                className="px-[18px] py-[10px] rounded-[7px] bg-[#8d77ab] text-white"
              >
                Submit
              </button>
            </div>
          </div>
        )}
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

export default ResumeList;
