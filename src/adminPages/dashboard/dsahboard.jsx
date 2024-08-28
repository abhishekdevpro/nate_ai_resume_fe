import React, { useEffect, useState } from "react";
import DashboardLayout from "./layout";
import img from "../../assets/images/profile.png";
import img1 from "../../assets/images/1.png";

import Stepper from "./stepper";
import { RiBox1Line } from "react-icons/ri";
import { useParams } from "react-router-dom";
import axios from "axios";
import { pdfjs, Document, Page } from "react-pdf";
import Skeleton from "../../common/skeleton";
import { setAdminActiveTab } from "../../state/reducer/sidebarSlice";
import { useDispatch } from "react-redux";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const Dsahboard = () => {
  const array = [0];

  const [data, setData] = useState([]);
  const [showResume, setShowResume] = useState(false);
  const [path, setPath] = useState("");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const { id } = useParams();
  const token = localStorage.getItem("adminAuthToken");
  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "GET",
        url: `https://api.resumesquad.net/api/admin/customers/${id}`,
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log(response.data.data);
          setData(response.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);
  const dateConveter = (str) => {
    const date = new Date(str);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    return currentDate;
  };
  const [trackingStatus, setTrackingStatus] = useState(null);
  const handleGetTracking = (resume_id) => {
    axios({
      method: "GET",
      url: `https://api.resumesquad.net/api/admin/resume-status-tracking/${resume_id}`,
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        setTrackingStatus(res?.data?.data?.resume_tracking_status);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAdminActiveTab("customerInfo"));
  }, []);
  return (
    <div>
      {/* {showResume ? (
        <div className=" bg-black z-20 w-[100%] fixed h-[100%] bg-opacity-40">
           <div className="right-[50px] w-full flex justify-end z-[99] top-[30px] relative">
            <button
              onClick={() => {
                setShowResume(false);
              }}
              className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-200 rounded hover:bg-gray-200 focus:outline-none z-[99]"
            >
              close
            </button>
          </div>
          <div className="flex w-[100%] h-[100vh] justify-center items-center fixed">
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
          </div>
        </div>
      ) : null} */}
      <DashboardLayout>
        <div className="flex flex-col xl:flex-row justify-center gap-3">
          <div className="w-full xl:w-[50%] bg-white shadow-lg px-[15px] py-5">
            <h3 className="text-[20px] font-semibold mb-[10px]">
              Client Profile
            </h3>
            <div className="flex">
              <img src={img} alt="" className="rounded-[50%]" />
              <table className="ml-6 text-left h-0">
                <tbody>
                  <tr className="text-[13px] font-light h-0 text-gray-500 ">
                    <th className="p-0">First Name</th>
                    <th className="pl-10">Last Name</th>
                    <th className="pl-10">Phone No.</th>
                  </tr>
                  <tr className=" text-[18px] font-semibold text-gray-700">
                    <td className="">{data.first_name}</td>
                    <td className="pl-10">{data.last_name}</td>
                    <td className="pl-10">{data.mobile}</td>
                  </tr>
                </tbody>
                <tbody className="bg-red"></tbody>
              </table>
            </div>
            <div className="mt-5">
              <div className="w-full flex flex-col gap-[0px]">
                <h3 className=" text-[13px] font-semibold text-gray-500 ">
                  Email
                </h3>
                <p className="text-[18px] font-semibold text-gray-700">
                  {data?.email}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] bg-white shadow-lg px-[15px] py-5">
            <h3 className="text-[20px] font-semibold mb-[10px]">
              Resume Tarcking
            </h3>
            <div className=" bg-blue-100 p-5">
              <div className="flex justify-center">
                <RiBox1Line size={40} />
                <div className="ml-10 flex justify-between w-full">
                  <div className="w-[50%]">
                    <h3 className="font-semibold text-[16px] ">Resume Name</h3>
                    {/* <h3> {data.preferred_communication.name}</h3> */}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[16px] text-right">
                      Amount 300$
                    </h3>
                    <h3>Referred Amount 300$</h3>
                  </div>
                </div>
              </div>
              <h3 className="text-[15px] my-4 text-gray-600 font-medium">
                Current Status: {data?.resume_status?.name}
              </h3>
              <Stepper trackingStatus={trackingStatus} />
            </div>
            <div className="border-solid border-gray-400 border-b-[2px] w-full my-3"></div>
            <div className="flex justify-center items-center">
              <div className="border-solid border-black border-[1px] p-2">
                <RiBox1Line size={40} />
              </div>
              <div className="ml-10 flex justify-between w-full ">
                <div className="w-[50%]">
                  <h3 className="font-semibold text-[13px] ">Resume Name</h3>
                  <h3 className="text-[13px]">
                    {" "}
                    {data?.preferred_communication?.name}
                  </h3>
                </div>
                <div>
                  <h3 className="font-semibold text-[13px] text-right">
                    Amount 300$
                  </h3>
                  <h3 className="text-[13px]">Referred Amount 300$</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center xl:flex-nowrap gap-3 mt-5">
          {showResume ? (
            <div className="w-full sm:w-[45%] h-[450px] flex flex-col  xl:w-[30%] shadow-lg bg-white p-1">
              <h3 className="font-semibold text-[20px] ml-4">Original</h3>
              <Document
                file={path}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={console.error}
                className="pdf-document "
              >
                <Page
                  pageNumber={pageNumber}
                  renderTextLayer={false}
                  height={320}
                  width={320}
                />
              </Document>
            </div>
          ) : null}

          {showResume ? (
            <div className="w-full sm:w-[45%] h-[450px] flex flex-col  xl:w-[30%] shadow-lg bg-white p-1">
              <h3 className="font-semibold text-[20px] ml-4">
                Employee Approved
              </h3>
              <Document
                file={path}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={console.error}
                className="pdf-document "
              >
                <Page
                  pageNumber={pageNumber}
                  renderTextLayer={false}
                  height={320}
                  width={320}
                />
              </Document>
            </div>
          ) : null}
        </div>
        <div className="w-full flex h-screen flex-col gap-[20px] mt-5">
          <div className="bg-white h-full overflow-y-scroll  hide-scrollbar  px-4 md:px-8 xl:px-10">
            <div className="mt-7 overflow-x-auto">
              <h2 className="text-black font-bold text-[25px]">Resumes</h2>
              <table className="w-full whitespace-nowrap">
                <tbody>
                  {/* Your table header remains the same */}
                  <tr
                    tabIndex="0"
                    className="focus:outline-none h-16 border border-gray-200 rounded"
                  >
                    <td>
                      <div className="ml-5 w-full flex justify-center items-center">
                        <div className="text-base font-medium flex flex-shrink-0 justify-center items-center relative text-[#718EBF]">
                          Resume Id
                        </div>
                      </div>
                    </td>

                    <td className="pl-5">
                      <div className="w-full flex justify-center items-center">
                        <button className="text-base font-medium focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-[#718EBF]">
                          More Info
                        </button>
                      </div>
                    </td>
                  </tr>

                  {data ? (
                    <>
                      {data?.user_resumes?.map((item, index) => {
                        return (
                          <tr
                            key={index}
                            tabIndex="0"
                            className="focus:outline-none h-16 border border-gray-200 rounded"
                          >
                            <td>
                              <div className="ml-5 w-full flex items-center justify-center">
                                <div className=" flex text-sm flex-shrink-0 justify-center items-center relative text-[#232323]">
                                  {item.id}
                                </div>
                              </div>
                            </td>

                            <td className="pl-5">
                              <div className="w-full flex justify-center items-center">
                                <button
                                  onClick={() => {
                                    setShowResume(true);
                                    setPath(
                                      `https://api.resumesquad.net/${item?.file_path}`
                                    );
                                    handleGetTracking(item?.id);
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
                    </>
                  ) : (
                    <Skeleton />
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Dsahboard;
