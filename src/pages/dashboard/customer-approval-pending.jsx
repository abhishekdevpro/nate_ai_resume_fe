import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import DashboardLayout from "./layout";
const CustomerApprovalPending = () => {
  const [data, setData] = useState(null);
  const array = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  const getResume = async () => {
    await axios({
      url: "https://api.resumesquad.net/api/admin/get-resume?resume_status_id=5",
      method: "GET",
      headers: {},
    })
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getResume();
  }, []);
  const dateConveter = (str) => {
    const date = new Date(str);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    return currentDate;
  };
  return (
    <div>
      <DashboardLayout>
        <div className="w-full flex h-screen flex-col gap-[20px] ">
          <h2 className="text-white font-bold text-[25px]">
            Customer Approval Pending
          </h2>
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
                          Date Created
                        </p>
                      </div>
                    </td>
                    <td className="pl-5">
                      <div className="flex items-center">
                        <p className="text-base font-medium leading-none text-[#718EBF] ml-2">
                          UserId
                        </p>
                      </div>
                    </td>

                    <td className="pl-5">
                      <p className="text-base font-medium leading-none text-[#718EBF] ml-2 ">
                        More Info
                      </p>
                    </td>
                  </tr>

                  {data ? (
                    <>
                      {data.map((item, index) => {
                        return (
                          <tr
                            key={index}
                            tabIndex="0"
                            className="focus:outline-none h-16 border border-gray-200 rounded"
                          >
                            <td>
                              <div className="ml-5">
                                <div className=" flex text-sm flex-shrink-0 justify-center items-center relative text-[#232323]">
                                  {item.s_no}
                                </div>
                              </div>
                            </td>
                            <td className="">
                              <div className="flex items-center pl-5">
                                <p className="text-sm  leading-none text-[#232323] mr-2">
                                  {item.user_first_name} {item.user_last_name}
                                </p>
                              </div>
                            </td>
                            <td className="pl-5">
                              <div className="flex items-center">
                                <p className="text-sm  leading-none text-[#232323] ml-2">
                                  {item.user_email}
                                </p>
                              </div>
                            </td>
                            <td className="pl-5">
                              <div className="flex items-center">
                                <p className="text-sm leading-none text-[#232323] ml-2">
                                  {item.user_mobile}
                                </p>
                              </div>
                            </td>
                            <td className="">
                              <div className="flex items-center">
                                <p className="text-sm leading-none text-[#232323] ml-7">
                                  {dateConveter(item.resume_created_at)}
                                </p>
                              </div>
                            </td>
                            <td className="pl-10">
                              <div className="flex items-center">
                                <p className="text-sm leading-none text-[#232323] ml-2">
                                  {item.user_id}
                                </p>
                              </div>
                            </td>

                            <td className="pl-5">
                              <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-200 rounded hover:bg-gray-200 focus:outline-none">
                                View
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      <tr
                        tabIndex="0"
                        className="focus:outline-none h-16 border border-gray-200 rounded animate-pulse"
                      >
                        <td>
                          <div className="ml-5">
                            <div className="h-4 w-10 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-center pl-5">
                            <div className="h-4 w-24 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <div className="h-4 w-36 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <div className="h-4 w-14 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-center">
                            <div className="h-4 w-32 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-10">
                          <div className="flex items-center">
                            <div className="h-4 w-10 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div class="h-10 bg-gray-200 rounded"></div>
                        </td>
                      </tr>
                      <tr
                        tabIndex="0"
                        className="focus:outline-none h-16 border border-gray-200 rounded animate-pulse"
                      >
                        <td>
                          <div className="ml-5">
                            <div className="h-4 w-10 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-center pl-5">
                            <div className="h-4 w-24 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <div className="h-4 w-36 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <div className="h-4 w-14 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-center">
                            <div className="h-4 w-32 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-10">
                          <div className="flex items-center">
                            <div className="h-4 w-10 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div class="h-10 bg-gray-200 rounded"></div>
                        </td>
                      </tr>
                      <tr
                        tabIndex="0"
                        className="focus:outline-none h-16 border border-gray-200 rounded animate-pulse"
                      >
                        <td>
                          <div className="ml-5">
                            <div className="h-4 w-10 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-center pl-5">
                            <div className="h-4 w-24 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <div className="h-4 w-36 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <div className="h-4 w-14 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-center">
                            <div className="h-4 w-32 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-10">
                          <div className="flex items-center">
                            <div className="h-4 w-10 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div class="h-10 bg-gray-200 rounded"></div>
                        </td>
                      </tr>
                      <tr
                        tabIndex="0"
                        className="focus:outline-none h-16 border border-gray-200 rounded animate-pulse"
                      >
                        <td>
                          <div className="ml-5">
                            <div className="h-4 w-10 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-center pl-5">
                            <div className="h-4 w-24 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <div className="h-4 w-36 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <div className="h-4 w-14 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-center">
                            <div className="h-4 w-32 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-10">
                          <div className="flex items-center">
                            <div className="h-4 w-10 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div class="h-10 bg-gray-200 rounded"></div>
                        </td>
                      </tr>
                      <tr
                        tabIndex="0"
                        className="focus:outline-none h-16 border border-gray-200 rounded animate-pulse"
                      >
                        <td>
                          <div className="ml-5">
                            <div className="h-4 w-10 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-center pl-5">
                            <div className="h-4 w-24 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <div className="h-4 w-36 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <div className="h-4 w-14 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-center">
                            <div className="h-4 w-32 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-10">
                          <div className="flex items-center">
                            <div className="h-4 w-10 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div class="h-10 bg-gray-200 rounded"></div>
                        </td>
                      </tr>
                      <tr
                        tabIndex="0"
                        className="focus:outline-none h-16 border border-gray-200 rounded animate-pulse"
                      >
                        <td>
                          <div className="ml-5">
                            <div className="h-4 w-10 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-center pl-5">
                            <div className="h-4 w-24 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <div className="h-4 w-36 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <div className="h-4 w-14 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-center">
                            <div className="h-4 w-32 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-10">
                          <div className="flex items-center">
                            <div className="h-4 w-10 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div class="h-10 bg-gray-200 rounded"></div>
                        </td>
                      </tr>
                      <tr
                        tabIndex="0"
                        className="focus:outline-none h-16 border border-gray-200 rounded animate-pulse"
                      >
                        <td>
                          <div className="ml-5">
                            <div className="h-4 w-10 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-center pl-5">
                            <div className="h-4 w-24 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <div className="h-4 w-36 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <div className="h-4 w-14 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-center">
                            <div className="h-4 w-32 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-10">
                          <div className="flex items-center">
                            <div className="h-4 w-10 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div class="h-10 bg-gray-200 rounded"></div>
                        </td>
                      </tr>
                      <tr
                        tabIndex="0"
                        className="focus:outline-none h-16 border border-gray-200 rounded animate-pulse"
                      >
                        <td>
                          <div className="ml-5">
                            <div className="h-4 w-10 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-center pl-5">
                            <div className="h-4 w-24 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <div className="h-4 w-36 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div className="flex items-center">
                            <div className="h-4 w-14 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex items-center">
                            <div className="h-4 w-32 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-10">
                          <div className="flex items-center">
                            <div className="h-4 w-10 bg-gray-200 rounded"></div>
                          </div>
                        </td>
                        <td className="pl-5">
                          <div class="h-10 bg-gray-200 rounded"></div>
                        </td>
                      </tr>
                      ;
                    </>
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

export default CustomerApprovalPending;
