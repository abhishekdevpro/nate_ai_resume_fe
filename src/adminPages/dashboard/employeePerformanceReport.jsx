import React, { useState, useEffect } from "react";
import GaugeChart from "react-gauge-chart";
import DashboardLayout from "./layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAdminActiveTab } from "../../state/reducer/sidebarSlice";

const EmployeePerformanceReport = () => {
  const [percentage, setPercentage] = useState(0);
  const token = localStorage.getItem("adminAuthToken");
  const { id } = useParams();
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://api.resumesquad.net/api/admin/employee-performance/${id}`,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response?.data?.data?.percentage);
        const data = response?.data?.data?.percentage;
        const fetchedPercentage = data !== "" ? data : 0;
        console.log(fetchedPercentage, "fetchedPercentage");
        setPercentage(fetchedPercentage / 100);
      })
      .catch((error) => {
        console.error("Error fetching the performance data", error);
      });
  }, []);

  const date = new Date().getFullYear();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAdminActiveTab("employees"));
  }, []);
  return (
    <DashboardLayout>
      <div className="w-full flex h-screen flex-col gap-[20px]">
        <h2 className="text-white font-bold text-[25px]">
          Employee Performance Report
        </h2>
        <div className="bg-white w-full h-full flex items-center overflow-y-scroll xl:rounded-tl-[20px] hide-scrollbar py-4 md:py-7 px-4 md:px-8 xl:px-10">
          <div className="flex w-full flex-col xl:flex-row  gap-[20px]">
            <div className="w-full xl:w-[45%] flex flex-col gap-[50px]">
              <h1 className=" text-[32px] sm:text-[42px] font-bold leading-[1.3em]">
                Employee
                <br />
                Performance
              </h1>
              <div className="flex flex-col w-full">
                <div className="flex items-center gap-[12px]">
                  <div className="p-[10px] w-[50%] sm:w-[70%] text-center  bg-[#e46e6a] text-black font-semibold text-[15px]">
                    Between 0-20
                  </div>
                  <p>Below Par</p>
                </div>
                <div className="flex items-center gap-[12px]">
                  <div className="p-[10px] w-[50%] sm:w-[70%] text-center  bg-[#e9a5a2] text-black font-semibold text-[15px]">
                    Between 20-40
                  </div>
                  <p>Bad</p>
                </div>
                <div className="flex items-center gap-[12px]">
                  <div className="p-[10px] w-[50%] sm:w-[70%] text-center  bg-[#e8bfe9] text-black font-semibold text-[15px]">
                    Between 40-60
                  </div>
                  <p>Normal</p>
                </div>
                <div className="flex items-center gap-[12px]">
                  <div className="p-[10px] w-[50%] sm:w-[70%] text-center  bg-[#7eabee] text-black font-semibold text-[15px]">
                    Between 60-80
                  </div>
                  <p>Good</p>
                </div>
                <div className="flex items-center gap-[12px]">
                  <div className="p-[10px] w-[50%] sm:w-[70%] text-center  bg-[#70d0ac] text-black font-semibold text-[15px]">
                    Between 80-100
                  </div>
                  <p>Exceptional</p>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[55%] flex flex-col gap-[20px]">
              <h3 className="font-semibold text-[26px] sm:text-[30px] text-center leading-[1.3em]">
                Employee Performance
                <br />
                for the Year {date}
              </h3>
              <p className="text-center">IN PERCENTAGE</p>
              <GaugeChart
                id="gauge-chart"
                nrOfLevels={5}
                percent={percentage}
                colors={["#e46e6a", "#e9a5a2", "#e59ee2", "#7eabee", "#70cfad"]}
                arcWidth={0.3}
                textColor="#000000"
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EmployeePerformanceReport;
