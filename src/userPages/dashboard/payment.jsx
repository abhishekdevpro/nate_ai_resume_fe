import React, { useEffect, useState } from "react";
import DashboardLayout from "./layout";
import { useDispatch } from "react-redux";
import { setUserSidebar } from "../../state/reducer/sidebarSlice";

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserSidebar("payments"));
  }, []);
  return (
    <div>
      <DashboardLayout>
        <div className="w-full flex h-screen flex-col gap-[20px] ">
          <h2 className="text-white font-bold text-[25px]">Payment Page</h2>
          <div className="bg-white w-full h-full overflow-y-scroll xl:rounded-tl-[20px] hide-scrollbar py-4 md:py-7 px-4 md:px-8 xl:px-10">
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
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Payment;
