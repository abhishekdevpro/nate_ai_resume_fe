import React from "react";
import DashboardLayout from "./layout";

import Img from "../../assets/images/profile.png";
const MyOrders = () => {


    return (
        <div>
            <DashboardLayout>

                <div className="w-full flex h-screen flex-col gap-[20px] ">
                <h2 className="text-white font-bold text-[25px]">My Orders</h2>
                    <div className="bg-white w-full h-full  xl:rounded-tl-[20px] hide-scrollbar p-4 md:p-7 xl:p-10">
                        <div className="">
                            <div className="whitespace-nowrap">
                                <div>

                                  



                                        <div className="w-full flex justify-between items-center gap-[20px] ">

                                            <div className="w-full sm:w-[50%] xl:w-[50%]">
                                                <h1 className="text-black  leading-6 font-bold text-[25px]">Order 1</h1>
                                                <p className="text-black text-base font-medium">Agent: Sample Agent</p>
                                                <p className="text-black text-base font-medium">Task: Buy Property</p>
                                            </div>

                                            <div className="w-full sm:w-[50%] xl:w-[50%]">
                                                <p className="text-black text-sm leading-6 font-bold">Complete</p>
                                                <h2 className="text-black text-[20px] font-bold ">45%</h2>

                                            </div>

                                            <div className="w-full sm:w-[50%] xl:w-[50%]">
                                                <p className="text-black text-sm leading-6 font-normal">Expected Completion</p>
                                                <p className="text-black text-base font-medium">Oct 12,2019</p>
                                                <p className="text-black text-base font-normal">15 Days</p>
                                            </div>

                                        </div>

                                    

                                </div>

                                <div className="mt-5">

                                    <h2 className="text-black font-bold text-[20px] mb-4">
                                        Recommendations
                                    </h2>
                                    <div className="w-full  gap-[20px]">

                                        <div className="w-full sm:w-[100%] xl:w-[100%] bg-[#f8f9fb]  p-5 py-5 flex justify-between items-center">
                                            <p className="text-black text-sm leading-6  font-normal">23% incrrease in home listing is word you like to view?</p>
                                            <div>
                                                <button className="me-2 focus:ring-2 focus:ring-offset-2  text-sm leading-none text-gray-600 py-3 px-5 bg-gray-200 rounded hover:bg-gray-200 focus:outline-none">
                                                    Yes
                                                </button>
                                                <button className="focus:ring-2 focus:ring-offset-2  text-sm leading-none text-gray-600 py-3 px-5 bg-gray-200 rounded hover:bg-gray-200 focus:outline-none">
                                                    No
                                                </button>
                                            </div>
                                        </div>
                                        <div className="w-full sm:w-[50%] xl:w-[100%]  bg-[#f8f9fb] p-5 py-5 mt-4 flex justify-between items-center">
                                            <p className="text-black text-sm leading-6 text-center font-normal">We recommend that you purchase soon price are 11% below average.</p>
                                            <div>
                                                <button className="me-2 focus:ring-2 focus:ring-offset-2  text-sm leading-none text-gray-600 py-3 px-5 bg-gray-200 rounded hover:bg-gray-200 focus:outline-none">
                                                    Yes
                                                </button>
                                                <button className="focus:ring-2 focus:ring-offset-2  text-sm leading-none text-gray-600 py-3 px-5 bg-gray-200 rounded hover:bg-gray-200 focus:outline-none">
                                                    No
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div className="mt-4 flex items-center justify-center">

                                    <button
                                        type="button"
                                        className="text-black  bg-transparent focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-5 border-[#000]"
                                    >
                                       Minimize
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-full h-full  xl:rounded-tl-[20px] hide-scrollbar p-4 md:p-7 xl:p-10">
                        <div className="">
                            <div className="whitespace-nowrap">
                                <div>

                                   <div className="w-full flex justify-center flex-wrap xl:flex-nowrap gap-[20px]">



                                        <div className="w-full flex justify-between items-center gap-[20px] ">

                                            <div className="w-full sm:w-[50%] xl:w-[50%]">
                                                <h1 className="text-black  leading-6 font-bold text-[25px]">Order 2</h1>
                                              
                                                <p className="text-black text-base font-medium">Task: Buy Property</p>
                                            </div>

                                            <div className="w-full sm:w-[50%] xl:w-[50%]">
                                                <p className="text-black text-sm leading-6 font-bold">Complete</p>
                                                <h2 className="text-black text-[20px] font-bold ">75%</h2>

                                            </div>

                                            <div className="w-full sm:w-[50%] xl:w-[50%]">
                                                <p className="text-black text-sm leading-6 font-normal">Expected Completion</p>
                                                <p className="text-black text-base font-medium">Oct 12,2019</p>
                                                <p className="text-black text-base font-normal">15 Days</p>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                               


                                <div className="mt-4 flex items-center justify-center">

                                    <button
                                        type="button"
                                        className="text-black  bg-transparent focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-5 border-[#000]"
                                    >
                                      Expand
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </DashboardLayout>
        </div>
    );
};

export default MyOrders;
