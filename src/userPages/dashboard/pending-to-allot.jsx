import React from "react";
import DashboardLayout from "./layout";

const PendingToAllot = () => {
  const array = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  return (
    <div>
      <DashboardLayout>
        <div className="w-full flex h-screen flex-col gap-[20px] ">
          <h2 className="text-white font-bold text-[25px]">Pending To Allot</h2>
          <div className="bg-white h-full overflow-y-scroll xl:rounded-tl-[20px] hide-scrollbar py-4 md:py-7 px-4 md:px-8 xl:px-10">
            <div className="mt-7 overflow-x-auto">
              <table className="w-full whitespace-nowrap">
                <tbody>
                  <tr
                    tabIndex="0"
                    className="focus:outline-none h-16 border border-gray-200 rounded">
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
                    <td className="pl-0">
                    <p className="text-base font-medium leading-none text-gray-600 ml-2 ">
                        More Info
                      </p>
                    </td>
                  </tr>

                  {array.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        tabIndex="0"
                        className="focus:outline-none h-16 border border-gray-200 rounded">
                        <td>
                          <div className="ml-5">
                            <div className=" flex text-sm flex-shrink-0 justify-center items-center relative">
                              1
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
                              Jane Doe
                            </p>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <p className="text-sm leading-none text-gray-600 ml-2">
                              Email@gamil.com
                            </p>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-center">
                            <p className="text-sm leading-none text-gray-600 ml-2">
                              9876543210
                            </p>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <p className="text-sm leading-none text-gray-600 ml-2">
                              Doe Fane
                            </p>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <p className="text-sm leading-none text-gray-600 ml-2">
                              Pending to Allot
                            </p>
                          </div>
                        </td>
                        <td className="">
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
          {/* <div className="w-full bg-white overflow-y-scroll hide-scrollbar p-[12px] flex flex-col gap-[20px] xl:rounded-tl-[20px]">
            <div className="w-full text-center font-semibold text-[11px] sm:text-[13px] xl:text-[14px] flex sm:gap-[15px] justify-between items-center border-b border-black pb-2">
              <div className="w-[10%] hidden sm:block">SR NO.</div>
              <div className="w-[20%] sm:w-[15%]">NAME</div>
              <div className="w-[45%] sm:w-[25%]">EMAIL</div>
              <div className="w-[20%] sm:w-[10%]">PHONE NO.</div>
              <div className="w-[10%] hidden xl:block">CV</div>
              <div className="w-[10%] hidden xl:block">AI</div>
              <div className="w-[20%] hidden sm:block">MORE INFO</div>
            </div>
            {array.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full text-center text-[11px] sm:text-[12px] flex justify-between items-center sm:gap-[15px]"
                >
                  <div className="w-[10%] hidden sm:block">01</div>
                  <div className="w-[20%] font-semibold sm:w-[15%]">Daniel</div>
                  <div className="w-[45%] font-semibold sm:w-[25%]">
                    daniel@example.com
                  </div>
                  <div className="w-[20%] sm:w-[10%]">1234567890</div>
                  <div className="w-[10%] hidden xl:block">Uploaded</div>
                  <div className="w-[10%] hidden xl:block">Enabled</div>
                  <div className="w-[20%] hidden sm:block sm:border sm:border-black sm:rounded-[20px] cursor-pointer sm:p-[5px]">
                    MORE INFO
                  </div>
                </div>
              );
            })}
          </div> */}
        </div>
      </DashboardLayout>
    </div>
  );
};

export default PendingToAllot;
