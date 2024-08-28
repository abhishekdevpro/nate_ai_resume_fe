import React, { useState } from "react";
import DashboardLayout from "./layout";

const Payment = () => {
  const array = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = array.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <DashboardLayout>
        <div className="w-full flex h-screen flex-col gap-[20px] ">
          <h2 className="text-white font-bold text-[25px]">Payment Page</h2>
          <div className="bg-white w-full h-full overflow-y-scroll xl:rounded-tl-[20px] hide-scrollbar py-4 md:py-7 px-4 md:px-8 xl:px-10">
            <h2 className="text-[#1814F3] font-bold text-[20px] mb-4 rounded-tl-10 rounded-tr-10 underline underline-offset-3 decoration-4 decoration-[#1814F3] dark:decoration-[#1814F3]">
              All Transaction
            </h2>
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
                          Description
                        </div>
                      </div>
                    </td>
                    <td className="">
                      <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-[#718EBF] mr-2">
                          Transaction ID
                        </p>
                      </div>
                    </td>
                    <td className="pl-5">
                      <div className="flex items-center">
                        <p className="text-base font-medium leading-none text-[#718EBF] ml-2">
                          Type
                        </p>
                      </div>
                    </td>
                    <td className="pl-5">
                      <div className="flex items-center">
                        <p className="text-base font-medium leading-none text-[#718EBF] ml-2">
                          Card
                        </p>
                      </div>
                    </td>
                    <td className="">
                      <div className="flex items-center">
                        <p className="text-base font-medium leading-none text-[#718EBF] ml-2">
                          Date
                        </p>
                      </div>
                    </td>
                    <td className="pl-5">
                      <div className="flex items-center">
                        <p className="text-base font-medium leading-none text-[#718EBF] ml-2">
                          Amount
                        </p>
                      </div>
                    </td>

                    <td className="pl-5">
                      <button className="text-base font-medium focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-[#718EBF]">
                        Receipt
                      </button>
                    </td>
                  </tr>
                  {currentItems.map((item, index) => (
                    <tr
                      key={index}
                      tabIndex="0"
                      className="focus:outline-none h-16 border border-gray-200 rounded"
                    >
                      {/* Your table body content remains the same */}
                      <td>
                        <div className="ml-5">
                          <div className=" flex text-sm flex-shrink-0 justify-center items-center relative text-[#232323]">
                            Spotify Subscription
                          </div>
                        </div>
                      </td>
                      <td className="">
                        <div className="flex items-center pl-5">
                          <p className="text-sm  leading-none text-[#232323] mr-2">
                            #12548796
                          </p>
                        </div>
                      </td>
                      <td className="pl-5">
                        <div className="flex items-center">
                          <p className="text-sm  leading-none text-[#232323] ml-2">
                            Shopping
                          </p>
                        </div>
                      </td>
                      <td className="pl-5">
                        <div className="flex items-center">
                          <p className="text-sm leading-none text-[#232323] ml-2">
                            1234****
                          </p>
                        </div>
                      </td>
                      <td className="">
                        <div className="flex items-center">
                          <p className="text-sm leading-none text-[#232323] ml-2">
                            28Jan, 12.30 AM
                          </p>
                        </div>
                      </td>
                      <td className="pl-5">
                        <div className="flex items-center">
                          <p className="text-sm leading-none text-[#FE5C73] ml-2">
                            -$2,500
                          </p>
                        </div>
                      </td>

                      <td className="pl-5">
                        <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-200 rounded hover:bg-gray-200 focus:outline-none">
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Pagination */}
              <div className="mt-4 flex justify-end">
                {Array.from(
                  { length: Math.ceil(array.length / itemsPerPage) },
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => paginate(index + 1)}
                      className={`px-3 py-2 mx-1 text-sm font-medium ${
                        currentPage === index + 1
                          ? "text-white bg-[#1814F3] border-[#1814F3]"
                          : "text-[#1814F3] border border-gray-300 hover:bg-gray-100 hover:text-[#1814F3]"
                      } focus:outline-none`}
                    >
                      {index + 1}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Payment;
