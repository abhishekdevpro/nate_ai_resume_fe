import React from "react";
import DashboardLayout from "./layout";

const ActiveCustomer = () => {
  const array = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  return (
    <div>
      <DashboardLayout>
        <div className="w-full flex h-screen flex-col gap-[20px] ">
          <h2 className="text-white font-bold text-[25px]">
            Active Customer
          </h2>
          <div className="bg-white h-full overflow-y-scroll xl:rounded-tl-[20px] hide-scrollbar py-4 md:py-7 px-4 md:px-8 xl:px-10">
            <div className="mt-7 overflow-x-auto">
            <table className="w-full whitespace-nowrap">
                <tbody>
                 
                          <tr
                    tabIndex="0"
                    className="focus:outline-none h-16 border border-gray-200 rounded">
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
                         CV
                        </p>
                      </div>
                    </td>
                    <td className="pl-5">
                      <div className="flex items-center">
                        <p className="text-base font-medium leading-none text-[#718EBF] ml-2">
                        Ai
                        </p>
                      </div>
                    </td>
                   
                    <td className="pl-5">
                      <p className="text-base font-medium leading-none text-[#718EBF] ml-2">
                      More Info
                      </p>
                    </td>
                  </tr>
                  {array.map((item, index) => {
                    return (
                    <tr
                      key={index}
                      tabIndex="0"
                      className="focus:outline-none h-16 border border-gray-200 rounded"
                    >
                    
                      <td>
                           <div className="ml-5">
                             <div className=" flex text-sm flex-shrink-0 justify-center items-center relative text-[#232323]">
                              01.
                             </div>
                           </div>
                         </td>
                         <td className="">
                           <div className="flex items-center pl-5">
                             <p className="text-sm  leading-none text-[#232323] mr-2">
                               Example
                             </p>
                           </div>
                         </td>
                         <td className="pl-5">
                           <div className="flex items-center">
                             <p className="text-sm  leading-none text-[#232323] ml-2">
                               example@gmail.com
                             </p>
                           </div>
                         </td>
                         <td className="pl-5">
                           <div className="flex items-center">
                             <p className="text-sm leading-none text-[#232323] ml-2">
                               +91 8956225980
                             </p>
                           </div>
                         </td>
                         <td className="">
                           <div className="flex items-center">
                             <p className="text-sm leading-none text-[#232323] ml-2">
                               Uploaded
                             </p>
                           </div>
                         </td>
                         <td className="pl-5">
                           <div className="flex items-center">
                             <p className="text-sm leading-none text-[#232323] ml-2">
                               Artificial
                             </p>
                           </div>
                         </td>
                        
                         <td className="pl-5">
                          
                         <button className="focus:ring-2 focus:ring-offset-2  text-sm leading-none text-gray-600 py-3 px-5 bg-gray-200 rounded hover:bg-gray-200 focus:outline-none">
                            More Info
                          </button>
                        </td>
                    </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        
        </div>
      </DashboardLayout>
    </div>
  );
};

export default ActiveCustomer;
