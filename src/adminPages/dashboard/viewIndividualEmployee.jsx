import React, { useEffect, useState } from "react";
import DashboardLayout from "./layout";

import axios from "axios";
import Img from "../../assets/user/img.png";
import { FaCamera, FaEye, FaEyeSlash, FaKey, FaUser } from "react-icons/fa6";
import Img1 from "../../assets/user/img1.png";
import moment from "moment";
import validator from "validator";
import { Link, useParams } from "react-router-dom";
import { setAdminActiveTab } from "../../state/reducer/sidebarSlice";
import { useDispatch } from "react-redux";
const ViewIndividualEmployee = () => {
  const token = localStorage.getItem("adminAuthToken");
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://api.resumesquad.net/api/admin/employee/${id}`,
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        console.log(res?.data?.data?.Employee);
        let user = res?.data?.data?.Employee;
        setData(user);
        setProfilePageValues({
          firstName: user?.first_name,
          lastName: user?.last_name,
          email: user?.email,
          phoneNumber: user?.phone,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [profilePageValues, setProfilePageValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfilePageValues({ ...profilePageValues, [name]: value });
  };

  const path = data?.photo;
  const host = "https://api.resumesquad.net";

  const fullUrl = `${host}${path}`;

  console.log(fullUrl);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAdminActiveTab("employees"));
  }, []);
  return (
    <div>
      <DashboardLayout>
        <div className="w-full h-screen overflow-y-scroll hide-scrollbar flex flex-col  items-center justify-center">
          <div className="p-[15px] w-full ">
            <h1 className="text-white font-bold text-[25px]">
              Employee Profile
            </h1>
          </div>
          <div className="w-full h-[90%] p-[25px] bg-[#f8f9fb] overflow-y-scroll hide-scrollbar rounded-[12px] flex flex-col xl:flex-row gap-[20px] justify-center">
            <div className="w-full xl:w-[30%] bg-white  flex flex-col items-center ">
              <div className="flex flex-col p-[25px] gap-[7px]">
                <div className="flex relative items-center gap-[7px]">
                  {data?.photo ? (
                    <img
                      src={fullUrl}
                      alt="profile"
                      className="w-[120px] h-[120px] rounded-[70px] "
                    />
                  ) : (
                    <img
                      src={Img}
                      alt="profile"
                      className="w-[120px] h-[120px] rounded-[70px] "
                    />
                  )}
                </div>
                <h2 className="font-semibold text-center">
                  {data?.first_name} {data?.last_name}
                </h2>
              </div>
            </div>
            <div className="w-full xl:w-[70%] flex flex-col gap-[12px]">
              <div className="w-full h-[150px] flex">
                <img
                  src={Img1}
                  alt="image"
                  className="w-full h-full object-fill"
                />
              </div>
              <div className="w-full overflow-y-scroll hide-scrollbar h-full bg-white rounded-[12px] flex flex-col gap-[0px]">
                <div className="p-[20px] text-[12px] border-t border-gray-400 flex flex-wrap gap-[20px] justify-center">
                  <div className="w-full sm:w-[48.4%] flex flex-col gap-[7px]">
                    <label className="font-semibold" htmlFor="firstName">
                      First Name :
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="p-[7px] text-[12px] outline-none border border-gray-400"
                      onChange={handleChange}
                      value={profilePageValues.firstName}
                      autoComplete="false"
                      readOnly
                    />
                  </div>
                  <div className="w-full sm:w-[48.4%] flex flex-col gap-[7px]">
                    <label className="font-semibold" htmlFor="lastName">
                      Last Name :
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="p-[7px] text-[12px] outline-none border border-gray-400"
                      onChange={handleChange}
                      value={profilePageValues.lastName}
                      autoComplete="false"
                      readOnly
                    />
                  </div>
                  <div className="w-full  flex flex-col gap-[7px]">
                    <label className="font-semibold" htmlFor="email">
                      Email :
                    </label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={profilePageValues.email}
                      id="email"
                      className="p-[7px] text-[12px] outline-none border border-gray-400"
                      autoComplete="false"
                      readOnly
                    />
                  </div>
                  <div className="w-full  flex flex-col gap-[7px]">
                    <label className="font-semibold" htmlFor="phoneNumber">
                      Phone Number :
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      className="p-[7px] text-[12px] outline-none border border-gray-400"
                      onChange={handleChange}
                      value={profilePageValues.phoneNumber}
                      autoComplete="false"
                      readOnly
                    />
                  </div>
                </div>
                <div className="w-full text-[14px] my-[20px] justify-center flex gap-[20px] items-center">
                  <Link to={`/admin/employee-performance-report/${data?.id}`}>
                    <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none  py-3 px-5 bg-[#8d77ab] rounded text-white focus:outline-none">
                      View Performance
                    </button>
                  </Link>
                </div>
                {/* <div className="w-full text-[14px] justify-center flex gap-[20px] items-center">
                  <button
                    onClick={handleSubmit}
                    className="bg-[#5552f4] text-white px-[20px] py-[7px] rounded-[7px]"
                  >
                    Update Profile
                  </button>
                  <button className="bg-[#f8f9fb] text-[#8d8d8d] px-[20px] py-[7px] rounded-[7px]">
                    Cancel
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default ViewIndividualEmployee;
