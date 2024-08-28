import React, { useEffect, useState } from "react";
import DashboardLayout from "./layout";

import axios from "axios";
import Img from "../../assets/user/img.png";
import { FaCamera, FaEye, FaEyeSlash, FaKey, FaUser } from "react-icons/fa6";
import Img1 from "../../assets/user/img1.png";
import moment from "moment";
import validator from "validator";
import {
  showToastError,
  showToastSuccess,
} from "../../utils/toastify/toastify";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { setEmployeeSidebar } from "../../state/reducer/sidebarSlice";
import { setEmployee } from "../../state/reducer/userNameSlice";
const Profile = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("employeeAuthToken");
  const [data, setData] = useState(null);
  const fetchUserData = () => {
    axios({
      method: "GET",
      url: "https://api.resumesquad.net/api/employee/employeer-profile",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        console.log(res?.data?.data?.employee_info);
        let user = res?.data?.data?.employee_info;
        setData(user);
        setProfilePageValues({
          firstName: user?.first_name,
          lastName: user?.last_name,
          email: user?.email,
          phoneNumber: user?.phone,
        });
        dispatch(setEmployee(`${user?.first_name} ${user?.last_name}`));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchUserData();
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
  const [tabs, setTabs] = useState(1);
  const handleTabs = (index) => {
    setTabs(index);
  };
  const [changePasswordValues, setChangePasswordValues] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [img, setImg] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const blobUrl = URL.createObjectURL(file);
    setImg({
      file: file,
      url: blobUrl,
    });
  };
  const [errors, setErrors] = useState({});
  const handleChangePasswordValues = (e) => {
    const { name, value } = e.target;
    setChangePasswordValues({ ...changePasswordValues, [name]: value });
    const updatedValues = { ...changePasswordValues, [name]: value };

    if (name === "newPassword" || name === "confirmPassword") {
      if (
        updatedValues.newPassword &&
        updatedValues.confirmPassword &&
        updatedValues.newPassword !== updatedValues.confirmPassword
      ) {
        setErrors({ ...errors, confirmPassword: "Passwords do not match." });
      } else {
        const newErrors = { ...errors };
        delete newErrors.confirmPassword;
        setErrors(newErrors);
      }

      if (
        name === "newPassword" &&
        !validator.matches(
          value,
          /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/
        )
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          newPassword:
            "Password must be at least 8 characters long and contain at least one capital letter and one special character.",
        }));
      } else if (name === "newPassword") {
        const newErrors = { ...errors };
        delete newErrors.newPassword;
        setErrors(newErrors);
      }
    }
  };
  const [viewPassword, setViewPassword] = useState(false);
  const handleViewPassword = (index) => {
    setViewPassword(index === viewPassword ? null : index);
  };

  const formData = new FormData();
  formData.append("first_name", profilePageValues.firstName);
  formData.append("last_name", profilePageValues.lastName);
  // formData.append("phone", profilePageValues.phoneNumber);
  // formData.append("country", profilePageValues.country);
  formData.append("photo", img?.file);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "PUT",
      url: "https://api.resumesquad.net/api/employee/employeer-profile",
      headers: {
        Authorization: token,
      },
      data: formData,
    })
      .then((res) => {
        console.log(res);
        showToastSuccess(res?.data?.message?.toString());
        fetchUserData();
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
        showToastError(err?.response?.data?.message?.toString());
      });
  };
  const reqBody = {
    old_password: changePasswordValues.oldPassword,
    new_password: changePasswordValues.newPassword,
    confirm_password: changePasswordValues.confirmPassword,
  };
  const handleChangePasswordSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "PUT",
      url: "https://api.resumesquad.net/api/employee/change-password",
      headers: {
        Authorization: token,
      },
      data: reqBody,
    })
      .then((res) => {
        console.log(res);
        showToastSuccess(res?.data?.message?.toString());
      })
      .catch((err) => {
        console.log(err);
        showToastError(err?.response?.data?.message?.toString());
      });
  };

  const path = data?.photo;
  const host = "https://api.resumesquad.net";

  const fullUrl = `${host}${path}`;

  console.log(fullUrl);
  useEffect(() => {
    dispatch(setEmployeeSidebar("profile"));
  }, []);
  return (
    <div>
      <DashboardLayout>
        <div className="w-full sm:h-screen overflow-y-scroll hide-scrollbar flex flex-col  items-center justify-center">
          <div className="p-[15px] w-full ">
            <h1 className="text-white font-bold text-[25px]">
              Employee Profile
            </h1>
          </div>
          <div className="w-full h-[90%] p-[25px] bg-[#f8f9fb] overflow-y-scroll hide-scrollbar rounded-[12px] flex flex-col xl:flex-row gap-[20px] justify-center">
            <div className="w-full xl:w-[30%] bg-white  flex flex-col items-center ">
              <div className="flex flex-col p-[25px] gap-[7px]">
                <div className="flex relative items-center gap-[7px]">
                  {img !== null ? (
                    <img
                      src={img.url}
                      alt="image"
                      className="w-[120px] h-[120px] rounded-[70px] "
                    />
                  ) : (
                    <img
                      src={fullUrl}
                      alt="profile"
                      className="w-[120px] h-[120px] rounded-[70px] "
                    />
                  )}
                  <div className="absolute right-0 top-0 w-full h-full">
                    <label htmlFor="img">
                      <FaCamera />
                    </label>
                    <input
                      type="file"
                      name="img"
                      id="img"
                      onChange={handleImageChange}
                      className="opacity-0 h-full w-full"
                    />
                  </div>
                </div>
                <h2 className="font-semibold text-center">
                  {data?.first_name} {data?.last_name}
                </h2>
              </div>
              <div className="border-t text-[12px] flex flex-col gap-[7px] border-gray-400 p-[25px]">
                <div
                  onClick={() => handleTabs(1)}
                  className="flex cursor-pointer items-center gap-[12px]"
                >
                  <FaUser />
                  Edit Profile
                </div>

                <div
                  onClick={() => handleTabs(2)}
                  className="flex cursor-pointer items-center gap-[12px]"
                >
                  <FaKey />
                  Change Password
                </div>
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
              {tabs === 1 ? (
                <div className="w-full overflow-y-scroll hide-scrollbar h-full bg-white rounded-[12px] flex flex-col gap-[0px]">
                  <div className="w-full p-[20px] text-[14px] flex flex-col gap-[7px]">
                    <h2 className="font-semibold text-[17px]">Edit Profile</h2>
                    <p>Set Up Your Personal Information</p>
                  </div>
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
                        readOnly
                        autoComplete="false"
                      />
                    </div>
                    {/* <div className="w-full sm:w-[48.4%] flex flex-col gap-[7px]">
                      <label className="font-semibold" htmlFor="country">
                        Country :
                      </label>
                      <input
                        type="text"
                        name="country"
                        id="country"
                        className="p-[7px] text-[12px] outline-none border border-gray-400"
                        onChange={handleChange}
                        value={profilePageValues.country}
                        autoComplete="false"
                      />
                    </div> */}
                  </div>

                  <div className="w-full text-[14px] justify-center flex gap-[20px] items-center">
                    <button
                      onClick={handleSubmit}
                      className="bg-[#8d77ab] text-white px-[20px] py-[7px] rounded-[7px]"
                    >
                      Update Profile
                    </button>
                    <button className="bg-[#f8f9fb] text-[#8d8d8d] px-[20px] py-[7px] rounded-[7px]">
                      Cancel
                    </button>
                  </div>
                </div>
              ) : null}
              {tabs === 2 ? (
                <div className="w-full overflow-y-scroll hide-scrollbar h-full bg-white rounded-[12px] flex flex-col gap-[0px]">
                  <div className="w-full p-[20px] text-[14px] flex flex-col gap-[7px]">
                    <h2 className="font-semibold text-[17px]">
                      Change Password
                    </h2>
                  </div>
                  <div className="p-[20px] text-[12px] border-t border-gray-400 flex flex-wrap gap-[20px] justify-center">
                    <div className="w-full  flex flex-col gap-[7px]">
                      <label className="font-semibold" htmlFor="oldPassword">
                        Old Password
                      </label>
                      <div className="flex items-center gap-[7px]">
                        <input
                          type={
                            viewPassword === "oldPassword" ? "text" : "password"
                          }
                          name="oldPassword"
                          id="oldPassword"
                          className="w-full p-[7px] text-[12px] outline-none border border-gray-400"
                          onChange={handleChangePasswordValues}
                          value={changePasswordValues.oldPassword}
                          autoComplete="false"
                        />
                        {viewPassword === "oldPassword" ? (
                          <FaEyeSlash
                            className="cursor-pointer"
                            onClick={() => handleViewPassword("oldPassword")}
                          />
                        ) : (
                          <FaEye
                            className="cursor-pointer"
                            onClick={() => handleViewPassword("oldPassword")}
                          />
                        )}
                      </div>
                    </div>
                    <div className="w-full  flex flex-col gap-[7px]">
                      <label className="font-semibold" htmlFor="newPassword">
                        New Password
                      </label>
                      <div className="flex items-center gap-[7px]">
                        <input
                          type={
                            viewPassword === "newPassword" ? "text" : "password"
                          }
                          name="newPassword"
                          onChange={handleChangePasswordValues}
                          value={changePasswordValues.newPassword}
                          id="newPassword"
                          className="p-[7px] w-full text-[12px] outline-none border border-gray-400"
                          autoComplete="false"
                        />
                        {viewPassword === "newPassword" ? (
                          <FaEyeSlash
                            className="cursor-pointer"
                            onClick={() => handleViewPassword("newPassword")}
                          />
                        ) : (
                          <FaEye
                            className="cursor-pointer"
                            onClick={() => handleViewPassword("newPassword")}
                          />
                        )}
                      </div>
                    </div>
                    <div className="w-full  flex flex-col gap-[7px]">
                      <label
                        className="font-semibold"
                        htmlFor="confirmPassword"
                      >
                        Confirm Password
                      </label>
                      <div className="flex items-center gap-[7px]">
                        <input
                          type={
                            viewPassword === "confirmPassword"
                              ? "text"
                              : "password"
                          }
                          name="confirmPassword"
                          id="confirmPassword"
                          className="w-full p-[7px] text-[12px] outline-none border border-gray-400"
                          onChange={handleChangePasswordValues}
                          value={changePasswordValues.confirmPassword}
                          autoComplete="false"
                        />
                        {viewPassword === "confirmPassword" ? (
                          <FaEyeSlash
                            className="cursor-pointer"
                            onClick={() =>
                              handleViewPassword("confirmPassword")
                            }
                          />
                        ) : (
                          <FaEye
                            className="cursor-pointer"
                            onClick={() =>
                              handleViewPassword("confirmPassword")
                            }
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  {errors.newPassword && (
                    <p className="text-red-700 font-medium text-center text-[14px]">
                      {errors.newPassword}
                    </p>
                  )}
                  {errors.confirmPassword && (
                    <p className="text-red-700 font-medium text-center text-[14px]">
                      {errors.confirmPassword}
                    </p>
                  )}
                  <div className="w-full text-[14px] justify-center flex gap-[20px] items-center">
                    <button
                      onClick={handleChangePasswordSubmit}
                      className="bg-[#8d77ab] text-white px-[20px] py-[7px] rounded-[7px]"
                    >
                      Submit
                    </button>
                    <button className="bg-[#f8f9fb] text-[#8d8d8d] px-[20px] py-[7px] rounded-[7px]">
                      Cancel
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Profile;
