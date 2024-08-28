import React, { useState } from "react";
import DashboardLayout from "./layout";
import Chart1 from "../common/graph/chart1";
import LineChart from "../common/graph/linechart";
import PieChart from "../common/graph/piechart";

const EmployeeProductivity = () => {
  const [progress, setProgress] = useState(0);

  const handleIncrement = () => {
    if (progress < 3) {
      setProgress(progress + 1);
    }
  };

  const handleDecrement = () => {
    if (progress > 0) {
      setProgress(progress - 1);
    }
  };

  return (
    <div>
      <DashboardLayout>
        <div className="w-full flex h-screen flex-col gap-[20px] ">
          <h2 className="text-white font-bold text-[25px]">
            Employee Productivity
          </h2>
          <div className="bg-white w-full h-full overflow-y-scroll xl:rounded-tl-[20px] hide-scrollbar py-4 md:py-7 px-4 md:px-8 xl:px-10">
            <h2 className="text-[#1C1C1C] font-normal text-[18px] mb-4 ">
              Overview
            </h2>
            <div className="mt-4 overflow-x-auto">
              <div className="w-full whitespace-nowrap">
                <div className="flex items-center justify-between gap-x-[30px]">
                  <div className="w-1/4 relative my-2 bg-[#E3F5FF] rounded-[16px]">
                    <div className="py-6 px-9">
                      <h1 className="text-[#1C1C1C] font-medium text-[14px] mb-4 ">
                        Views
                      </h1>
                      <div className="flex items-center justify-between gap-x-[10px] mt-5">
                        <div>
                          <p className="text-[#1C1C1C] font-semibold text-[24px]">
                            7,265
                          </p>
                        </div>
                        <div>
                          <p className="text-[#1C1C1C] font-normal text-[12px]">
                            +11.02%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/4 relative my-2 bg-[#E5ECF6] rounded-[16px] ">
                    <div className="py-6 px-9">
                      <h1 className="text-[#1C1C1C] font-medium text-[14px] mb-4 ">
                        Visits
                      </h1>
                      <div className="flex items-center justify-between gap-x-[10px] mt-5">
                        <div>
                          <p className="text-[#1C1C1C] font-semibold text-[24px]">
                            3,671
                          </p>
                        </div>
                        <div>
                          <p className="text-[#1C1C1C] font-normal text-[12px]">
                            -0.03%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/4 relative my-2 bg-[#E3F5FF] rounded-[16px] ">
                    <div className="py-6 px-9">
                      <h1 className="text-[#1C1C1C] font-medium text-[14px] mb-4 ">
                        New Users
                      </h1>
                      <div className="flex items-center justify-between gap-x-[10px] mt-5">
                        <div>
                          <p className="text-[#1C1C1C] font-semibold text-[24px]">
                            156
                          </p>
                        </div>
                        <div>
                          <p className="text-[#1C1C1C] font-normal text-[12px]">
                            +15.03%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/4 relative my-2 bg-[#E5ECF6] rounded-[16px]">
                    <div className="py-6 px-9">
                      <h1 className="text-[#1C1C1C] font-medium text-[14px] mb-4 ">
                        Active Users
                      </h1>
                      <div className="flex items-center justify-between gap-x-[10px] mt-5">
                        <div>
                          <p className="text-[#1C1C1C] font-semibold text-[24px]">
                            2,318
                          </p>
                        </div>
                        <div>
                          <p className="text-[#1C1C1C] font-normal text-[12px]">
                            +6.08%
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-x-[20px] w-full mt-5">
                  <div className="w-3/4 relative my-2 bg-[#F7F9FB] rounded-[16px] ">
                    <div className="py-6 px-9 h-[400px]">
                      <div>
                        <p className="text-[#1C1C1C] font-semibold text-[18px]">
                          Total Users
                        </p>
                      </div>
                      <LineChart />
                    </div>
                  </div>
                  <div className="w-1/4 relative my-2 bg-[#F7F9FB] rounded-[16px]">
                    <div className="py-6 px-9 h-[400px]">
                      <div>
                        <p className="text-[#1C1C1C] font-semibold text-[18px]">
                          Traffic by Website
                        </p>
                      </div>
                      <div className="flex items-center justify-between gap-x-[10px] mt-5">
                        <div>
                          <p>Google</p>
                        </div>
                        <div>
                          {" "}
                          <div className="flex flex-col items-center">
                            <div className="flex mb-4">
                              {[1, 2, 3].map((step) => (
                                <div
                                  key={step}
                                  className={`w-8 h-8 mr-2 rounded-full ${
                                    progress >= step
                                      ? "bg-blue-500"
                                      : "bg-gray-200"
                                  }`}
                                />
                              ))}
                            </div>
                            <div className="flex space-x-4">
                              <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={handleDecrement}
                              >
                                -
                              </button>
                              <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={handleIncrement}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-x-[10px] mt-5">
                        <div>
                          <p>YouTube</p>
                        </div>
                        <div>
                          <p>+11.02%</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-x-[10px] mt-5">
                        <div>
                          <p>Instagram</p>
                        </div>
                        <div>
                          <p>+11.02%</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-x-[10px] mt-5">
                        <div>
                          <p>Pinterest</p>
                        </div>
                        <div>
                          <p>+11.02%</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-x-[10px] mt-5">
                        <div>
                          <p>Facebook</p>
                        </div>
                        <div>
                          <p>+11.02%</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-x-[10px] mt-5">
                        <div>
                          <p>Twitter</p>
                        </div>
                        <div>
                          <p>+11.02%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-x-[20px] mt-5">
                  <div className="w-2/4 relative my-2 bg-[#F7F9FB] rounded-[16px]">
                    <div className="py-6 px-9 h-[400px]">
                      <div>
                        <p className="text-[#1C1C1C] font-semibold text-[18px]">
                          Traffic by Device
                        </p>
                      </div>
                      <Chart1 />
                    </div>
                  </div>
                  <div className="w-2/4 relative my-2 bg-[#F7F9FB] rounded-[16px] ">
                    <div className="py-6 px-9 h-[400px]">
                      <div>
                        <p className="text-[#1C1C1C] font-semibold text-[18px]">
                          Traffic by Location
                        </p>
                      </div>
                      <PieChart />
                    </div>
                  </div>
                </div>
                <div className="mt-5 h-[400px]">
                  <div className="w-4/4 relative my-2 bg-[#F7F9FB] rounded-[16px]">
                    <div className="py-6 px-9 h-[400px]">
                      <div>
                        <p className="text-[#1C1C1C] font-semibold text-[18px]">
                          Marketing & SEO
                        </p>
                      </div>
                      <div className="w-full flex justify-center">
                        <div className="w-[80%]">
                          <Chart1 />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default EmployeeProductivity;
