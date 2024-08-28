import React, { useEffect, useState } from "react";
import DashboardLayout from "./layout";
import img from "../../assets/images/profile.png";
import img1 from "../../assets/images/1.png";

import Stepper from "./stepper";
import { RiBox1Line } from "react-icons/ri";
import { useParams } from "react-router-dom";
import axios from "axios";

const Dsahboard = () => {
  const array = [0];

  const [data, setData] = useState([]);

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
  return (
    <div>
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
              <h3 className="uppercase font-semibold text-blue-800">Contact</h3>

              <table>
                <tbody>
                  <tr className="text-[13px] font-semibold text-gray-500 text-left">
                    <th>Address</th>
                    <th className="pl-10">Email</th>
                  </tr>
                  <tr className="text-[15px] font-semibold  text-gray-700 ">
                    <td className="w-[50%]">
                      1/a, New Kila, New Road, New Area, Near new House, 110001
                    </td>
                    <td className="w-[50%] pl-10 align-top">{data.email}</td>
                  </tr>
                </tbody>
              </table>
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
              <Stepper />
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
          <div className="w-full sm:w-[45%] xl:w-[33%] shadow-lg bg-white p-1">
            <h3 className="font-semibold text-[20px] ml-4">Original</h3>
            <img src={img1} alt="" />
          </div>
          <div className="w-full sm:w-[45%] xl:w-[33%] shadow-lg bg-white p-1">
            <h3 className="font-semibold text-[20px] ml-4">Ai Enhanced</h3>
            <img src={img1} alt="" />
          </div>
          <div className="w-full sm:w-[45%] xl:w-[33%] shadow-lg bg-white p-1">
            <h3 className="font-semibold text-[20px] ml-4">
              Employee Approved
            </h3>
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="w-full flex h-screen flex-col gap-[20px] mt-5">
          <div className="bg-white h-full overflow-y-scroll  hide-scrollbar  px-4 md:px-8 xl:px-10">
            <div className="mt-7 overflow-x-auto">
              <h2 className="text-black font-bold text-[25px]">
                Completed Customer
              </h2>
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
                    <td className="">
                      <div className="flex items-center">
                        <p className="text-base font-medium leading-none text-gray-600 ml-2">
                          Phone No.
                        </p>
                      </div>
                    </td>
                    <td className="pl-5">
                      <div className="flex items-center">
                        <p className="text-base font-medium leading-none text-gray-600 ml-2">
                          Referred By
                        </p>
                      </div>
                    </td>
                    <td className="pl-5">
                      <div className="flex items-center">
                        <p className="text-base font-medium leading-none text-gray-600 ml-2">
                          Status
                        </p>
                      </div>
                    </td>
                    {/* <td className="pl-0">
                      <button className="text-base font-medium focus:ring-2 focus:ring-offset-2 focus:ring-red-300">
                        MORE INFO
                      </button>
                    </td> */}
                  </tr>
                  <tr
                    tabIndex="0"
                    className="focus:outline-none h-16 border border-gray-200 rounded"
                  >
                    <td>
                      <div className="ml-5">
                        <div className=" flex text-sm flex-shrink-0 justify-center items-center relative">
                          {data.s_no}
                        </div>
                      </div>
                    </td>
                    <td className="">
                      <div className="flex items-center pl-5">
                        <p className="text-sm font-medium leading-none text-gray-700 mr-2">
                          01/02/2024
                        </p>
                      </div>
                    </td>
                    <td className="pl-5">
                      <div className="flex items-center">
                        <p className="text-sm font-medium leading-none text-gray-600 ml-2">
                          {data.first_name} {data.last_name}
                        </p>
                      </div>
                    </td>
                    <td className="pl-5">
                      <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-2">
                          {data.email}
                        </p>
                      </div>
                    </td>
                    <td className="">
                      <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-2">
                          {data.mobile}
                        </p>
                      </div>
                    </td>
                    <td className="pl-5">
                      <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-2">
                          {data?.preferred_communication?.name}
                        </p>
                      </div>
                    </td>
                    <td className="pl-5">
                      <div className="flex items-center">
                        <p className="text-sm leading-none text-gray-600 ml-2">
                          {data?.resume_status?.name}
                        </p>
                      </div>
                    </td>
                    {/* <td className="">
                      <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-200 rounded hover:bg-gray-200 focus:outline-none">
                        View
                      </button>
                    </td> */}
                  </tr>
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
