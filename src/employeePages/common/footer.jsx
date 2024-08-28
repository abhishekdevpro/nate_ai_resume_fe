import React, { useState } from "react";
import Logo from "../../assets/logo 1.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { showToastSuccess } from "../../utils/toastify/toastify";
import { ToastContainer } from "react-toastify";
import validator from "validator";
const Footer = () => {
  const [footerValue, setFooterValue] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const email = e.target.value;
    setFooterValue(email);
    if (email && !validator.isEmail(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };
  const date = new Date().getFullYear();
  const token = localStorage.getItem("employeeAuthToken");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.isEmail(footerValue)) {
      axios({
        method: "POST",
        url: "https://api.resumesquad.net/api/user/user-subscribe",
        headers: {
          Authorization: token,
        },
        data: {
          email: footerValue,
        },
      })
        .then((res) => {
          console.log(res);
          showToastSuccess(res?.data?.message?.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setEmailError("Please enter a valid email address.");
    }
  };
  return (
    <div className="w-full px-[25px] sm:px-[35px] py-[50px] bg-customGradient flex flex-col sm:flex-row  justify-evenly gap-[30px]">
      <ToastContainer />
      <div className="w-full xl:w-[30%] flex flex-col gap-[20px]">
        <div className="w-full flex justify-center items-center gap-[20px]">
          <div className="w-[100px] h-[100px]">
            <img src={Logo} alt="logo" className="w-full h-full object-fill" />
          </div>
          <div className="w-[70%] flex flex-col gap-[7px]">
            <input
              type="text"
              name="footerValue"
              id="footerValue"
              value={footerValue}
              onChange={handleChange}
              className="w-full p-[10px] bg-white  rounded-[10px] outline-none text-[14px]"
            />
            <button
              onClick={handleSubmit}
              className="text-[20px] cursor-pointer tracking-[4px] font-semibold text-white"
            >
              SUBSCRIBE NOW
            </button>
            {emailError && (
              <span className="text-red-500 text-[14px] text-center">
                {emailError}
              </span>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col gap-[7px]">
          <h3 className="text-[24px] font-semibold text-white ">
            ResumeSquad.Net
          </h3>
          <h4 className="text-[18px] font-semibold text-white">
            Is An AI-Enabled HR Technology Company Based At North Carolina, USA
          </h4>
        </div>
      </div>
      <div className="w-full xl:w-[50%] flex flex-col justify-between gap-[20px]">
        <div className="w-full text-white  justify-between font-medium text-[17px] gap-[20px] flex  flex-wrap items-center">
          <Link to={"#"} className="xl:w-[30%]">
            --Privacy policy
          </Link>
          <Link to={"#"} className="xl:w-[30%]">
            --Terms of Use
          </Link>
          <Link to={"#"} className="xl:w-[30%]">
            --How It Works
          </Link>
          <Link to={"#"} className="xl:w-[30%]">
            --Data Sharing
          </Link>
          <Link to={"#"} className="xl:w-[30%]">
            --Refunds
          </Link>
          <Link to={"#"} className="xl:w-[30%]">
            --Contact Us
          </Link>
        </div>
        <div className="w-full text-white flex justify-end text-[14px] font-semibold">
          Copyright {date} ResumeSquad
        </div>
      </div>
    </div>
  );
};

export default Footer;
