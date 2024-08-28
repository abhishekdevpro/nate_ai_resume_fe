import React, { useEffect, useState } from "react";
import DashboardLayout from "./layout";
import moment from "moment";
import { Link } from "react-router-dom";
import AllCustomerSkeleton from "../../common/allCustomerSkeleton";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAdminActiveTab } from "../../state/reducer/sidebarSlice";

const Subscribers = () => {
  const [data, setData] = useState([]);

  const token = localStorage.getItem("adminAuthToken");
  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "GET",
        url: "https://api.resumesquad.net/api/admin/subscribers",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log(response);
          setData(response?.data?.data);
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
          <h2 className="text-white font-bold text-[25px]">Subscribers</h2>
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
                          Email
                        </p>
                      </div>
                    </td>
                    <td className="">
                      <div className="flex items-center pl-5">
                        <p className="text-base font-medium leading-none text-gray-700 mr-2">
                          Is Subscribed
                        </p>
                      </div>
                    </td>
                  </tr>
                  {data ? (
                    <>
                      {data?.map((item, index) => {
                        return (
                          <tr
                            key={index}
                            tabIndex="0"
                            className="focus:outline-none h-16 border border-gray-200 rounded"
                          >
                            <td>
                              <div className="ml-5">
                                <div className=" flex text-sm flex-shrink-0 justify-center items-center relative">
                                  {index + 1}
                                </div>
                              </div>
                            </td>
                            <td className="">
                              <div className="flex items-center pl-5">
                                <p className="text-sm font-medium leading-none text-gray-700 mr-2">
                                  {item?.email}
                                </p>
                              </div>
                            </td>
                            <td className="">
                              <div className="flex items-center pl-5">
                                <p className="text-sm font-medium leading-none text-gray-700 mr-2">
                                  {item?.is_subscribe === 1 ? "true" : "false"}
                                </p>
                              </div>
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

export default Subscribers;
