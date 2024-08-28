import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../common/topBar";
import Slideshow from "../common/slideShow";
import axios from "axios";
import validator from "validator";
import Footer from "../common/footer";
import {
  showToastError,
  showToastSuccess,
} from "../../utils/toastify/toastify";

const CustomerResetPassword = () => {
  const { token } = useParams();
  const [resetPasswordValues, setResetPasswordValues] = useState({
    new_password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResetPasswordValues({ ...resetPasswordValues, [name]: value });
    const updatedValues = { ...resetPasswordValues, [name]: value };

    if (name === "new_password" || name === "confirm_password") {
      if (
        updatedValues.new_password &&
        updatedValues.confirm_password &&
        updatedValues.new_password !== updatedValues.confirm_password
      ) {
        setErrors({ ...errors, confirm_password: "Passwords do not match." });
      } else {
        const newErrors = { ...errors };
        delete newErrors.confirm_password;
        setErrors(newErrors);
      }

      if (
        name === "password" &&
        !validator.matches(
          value,
          /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/
        )
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          new_password:
            "Password must be at least 8 characters long and contain at least one capital letter and one special character.",
        }));
      } else if (name === "new_password") {
        const newErrors = { ...errors };
        delete newErrors.new_password;
        setErrors(newErrors);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("token", token);
    formData.append("new_password", resetPasswordValues.new_password);
    await axios({
      method: "POST",
      url: "https://api.resumesquad.net/api/user/reset-password",
      headers: {
        "Content-Type": "Application/json",
      },
      data: formData,
    })
      .then((response) => {
        console.log(response);
        localStorage.setItem("customerAuthToken", response?.data?.data?.token);
        showToastSuccess(response?.data?.message?.toString());

        navigate("/user");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        showToastError(err?.response?.data?.message?.toString());
      });
  };

  const [viewPassword, setViewPassword] = useState(false);
  const handleViewPassword = (index) => {
    setViewPassword(index === viewPassword ? null : index);
  };
  return (
    <div className="flex flex-col">
      <Header />
      <div className="h-screen overflow-y-scroll hide-scrollbar  relative z-[1] flex flex-col gap-[30px] lg:flex-row lg:justify-between items-center p-[30px] sm:p-[50px] ">
        <div className=" w-full lg:w-[50%] flex flex-col gap-[20px] items-center justify-center">
          <Slideshow />
        </div>
        <div className="w-full lg:w-[50%]  flex justify-center items-center">
          <div className="rounded-[50px] shadow-md w-full sm:w-[70%] bg-[#FFFFFF4D] flex flex-col items-center justify-center p-[30px] sm:p-[50px]">
            <h2 className="text-[30px] font-bold text-center">
              Reset Your Password !
            </h2>
            <div className="flex flex-col my-2 gap-2 w-full items-center">
              <div className="flex flex-col gap-2 w-[90%]">
                <label htmlFor="new_password">New Password</label>
                <div className="flex items-center gap-[7px]">
                  <input
                    type={viewPassword === "new_password" ? "text" : "password"}
                    name="new_password"
                    id="new_password"
                    autoComplete="false"
                    value={resetPasswordValues.new_password}
                    onChange={handleChange}
                    className="bg-white w-full px-2 py-2 rounded-md"
                  />
                  {viewPassword === "new_password" ? (
                    <FaEyeSlash
                      className="cursor-pointer"
                      onClick={() => handleViewPassword("new_password")}
                    />
                  ) : (
                    <FaEye
                      className="cursor-pointer"
                      onClick={() => handleViewPassword("new_password")}
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 w-[90%]">
                <label htmlFor="confirm_password">Confirm Password</label>
                <div className="flex items-center gap-[7px]">
                  <input
                    type={
                      viewPassword === "confirm_password" ? "text" : "password"
                    }
                    name="confirm_password"
                    id="confirm_password"
                    autoComplete="false"
                    value={resetPasswordValues.confirm_password}
                    onChange={handleChange}
                    className="bg-white w-full px-2 py-2 rounded-md"
                  />
                  {viewPassword === "confirm_password" ? (
                    <FaEyeSlash
                      className="cursor-pointer"
                      onClick={() => handleViewPassword("confirm_password")}
                    />
                  ) : (
                    <FaEye
                      className="cursor-pointer"
                      onClick={() => handleViewPassword("confirm_password")}
                    />
                  )}
                </div>
              </div>
              {errors.new_password && (
                <p className="text-red-700 font-medium text-center text-[14px]">
                  {errors.new_password}
                </p>
              )}
              {errors.confirm_password && (
                <p className="text-red-700 font-medium text-center text-[14px]">
                  {errors.confirm_password}
                </p>
              )}
              <button
                onClick={handleSubmit}
                className="bg-[#f25019] text-white w-[90%] py-2 my-2 rounded-md font-semibold"
              >
                Submit
              </button>
              <div className="w-[90%] text-center text-[15px] mt-2 flex flex-col items-center justify-between">
                <Link to="/user/login">
                  <span className="font-semibold"> Back To Login</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomerResetPassword;
