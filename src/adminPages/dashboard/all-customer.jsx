import React, { useEffect, useState } from "react";
import DashboardLayout from "./layout";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import AllCustomerSkeleton from "../../common/allCustomerSkeleton";
import { useDispatch } from "react-redux";
import { setAdminActiveTab } from "../../state/reducer/sidebarSlice";

const AllCustomer = () => {
  const [data, setData] = useState([]);

  const token = localStorage.getItem("adminAuthToken");
  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "GET",
        url: "https://api.resumesquad.net/api/admin/customers",
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAdminActiveTab("customerInfo"));
  }, []);
  return (
    <div>
      <DashboardLayout>
        <div className="w-full flex h-screen flex-col gap-[20px] ">
          <h2 className="text-white font-bold text-[25px]">All Customers</h2>
          <div className="bg-white h-full overflow-y-scroll xl:rounded-tl-[20px] hide-scrollbar py-4 md:py-7 px-4 md:px-8 xl:px-10">
            <div className="mt-7 overflow-x-auto">
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
                          Status
                        </p>
                      </div>
                    </td>
                    <td className="pl-0">
                      <p className="text-base font-medium leading-none text-gray-600 ml-2">
                        More Info
                      </p>
                    </td>
                  </tr>
                  {data[0] ? (
                    <>
                      {data.map((item, index) => {
                        const formattedCreatedDate = moment(
                          item.created_at
                        ).format("YYYY-MM-DD");
                        return (
                          <tr
                            key={index}
                            tabIndex="0"
                            className="focus:outline-none h-16 border border-gray-200 rounded"
                          >
                            <td>
                              <div className="ml-5">
                                <div className=" flex text-sm flex-shrink-0 justify-center items-center relative">
                                  {item.s_no}
                                </div>
                              </div>
                            </td>
                            <td className="">
                              <div className="flex items-center pl-5">
                                <p className="text-sm font-medium leading-none text-gray-700 mr-2">
                                  {formattedCreatedDate}
                                </p>
                              </div>
                            </td>
                            <td className="pl-5">
                              <div className="flex items-center">
                                <p className="text-sm font-medium leading-none text-gray-600 ml-2">
                                  {item.first_name} {item.last_name}
                                </p>
                              </div>
                            </td>
                            <td className="pl-5">
                              <div className="flex items-center">
                                <p className="text-sm leading-none text-gray-600 ml-2">
                                  {item.email}
                                </p>
                              </div>
                            </td>
                            <td className="">
                              <div className="flex items-center">
                                <p className="text-sm leading-none text-gray-600 ml-2">
                                  {item.mobile}
                                </p>
                              </div>
                            </td>

                            <td className="pl-5">
                              <div className="flex items-center">
                                <p className="text-sm leading-none text-gray-600 ml-2">
                                  {item?.user_resume_current_status}
                                </p>
                              </div>
                            </td>
                            <td className="">
                              <Link to={`/admin/customer-info/${item.user_id}`}>
                                <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-200 rounded hover:bg-gray-200 focus:outline-none">
                                  View
                                </button>
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </>
                  ) : (
                    <AllCustomerSkeleton />
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

export default AllCustomer;
