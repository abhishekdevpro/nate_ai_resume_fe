import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../common/topBar";

import Slideshow from "../common/slideShow";
import axios from "axios";
import Footer from "../common/footer";
import {
  showToastError,
  showToastSuccess,
} from "../../utils/toastify/toastify";
import { ToastContainer } from "react-toastify";

const EmployerForgotPassword = () => {
  const [forgotPasswordValues, setForgotPasswordValues] = useState("");
  const handleChange = (e) => {
    setForgotPasswordValues(e.target.value);
  };
  const formData = new FormData();
  formData.append("email", forgotPasswordValues);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios({
      method: "POST",
      url: "https://api.resumesquad.net/api/employee/forgot-password",
      headers: {
        "Content-Type": "Application/json",
      },
      data: formData,
    })
      .then((response) => {
        console.log(response);
        showToastSuccess(response?.data?.message?.toString());
      })
      .catch((err) => {
        console.log(err);
        showToastError(err?.response?.data?.message?.toString());
      });
  };
  return (
    <div className="flex flex-col">
      <Header />
      <div className="h-screen overflow-y-scroll hide-scrollbar   relative z-[1] flex flex-col gap-[30px] lg:flex-row lg:justify-between items-center p-[30px] sm:p-[50px] ">
        <div className=" w-full lg:w-[50%] flex flex-col gap-[20px] items-center justify-center">
          <Slideshow />
        </div>
        <div className="w-full lg:w-[50%]  flex justify-center items-center">
          <div className="rounded-[50px] shadow-md w-full sm:w-[70%] bg-[#FFFFFF4D] flex flex-col items-center justify-center p-[30px] sm:p-[50px]">
            <h2 className="text-[30px] font-bold text-center">
              Forgot Password?
            </h2>
            <div className="flex flex-col my-2 gap-2 w-full items-center">
              <div className="flex flex-col gap-2 w-[90%]">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="false"
                  value={forgotPasswordValues}
                  onChange={handleChange}
                  className="bg-white w-full px-2 py-2 rounded-md"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="bg-[#f25019] text-white w-[90%] py-2 my-2 rounded-md font-semibold"
              >
                Submit
              </button>

              <div className="w-[90%] text-center text-[15px] mt-2 flex flex-col items-center justify-between">
                <p>
                  <Link to="/employee/login">
                    <span className="font-semibold"> Back To Login</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmployerForgotPassword;
