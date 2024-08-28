import React from "react";
import { Link } from "react-router-dom";
import Img2 from "../../assets/images/google.png";
import Img3 from "../../assets/images/square-linkedin-logo-isolated-white-background_469489-892.jpg.avif";

import Img1 from "../../assets/images/login-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setEmployerSignUpValues } from "../../state/reducer/employerRegisterSlice";
import Slideshow from "../common/slideShow";
import axios from "axios";
import Footer from "../common/footer";

const EmployerSignUp = () => {
  const dispatch = useDispatch();
  const EmployerSignUpValues = useSelector(
    (state) => state.employerSign.employerSignUpValues
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      setEmployerSignUpValues({ ...EmployerSignUpValues, [name]: value })
    );
  };

  const handleSubmit = async (e) => {
    const reqBody = {
      first_name: EmployerSignUpValues.first_name,
      last_name: EmployerSignUpValues.last_name,
      email: EmployerSignUpValues.email,
      phone: EmployerSignUpValues.phone,
      password: EmployerSignUpValues.password,
    };
    e.preventDefault();
    await axios({
      method: "POST",
      url: "https://api.resumesquad.net/api/employee/auth/signup",
      headers: {
        "Content-Type": "Application/json",
      },
      data: reqBody,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex flex-col">
      <div className="h-screen overflow-y-scroll hide-scrollbar    relative z-[1] flex flex-col gap-[30px] lg:flex-row lg:justify-between items-center p-[30px] sm:p-[50px]">
        <div className=" w-full lg:w-[50%] flex flex-col items-center justify-center">
          <Slideshow />
        </div>
        <div className="w-full lg:w-[50%]  flex justify-center items-center">
          <div className="rounded-[50px] shadow-md w-full sm:w-[70%] bg-[#FFFFFF4D] flex flex-col items-center justify-center p-[30px]  sm:p-[50px]">
            <h2 className="text-[30px] font-bold text-center">
              Create An Account
            </h2>
            <div className="flex flex-col my-2 gap-2 w-full items-center">
              <div className="flex flex-col sm:flex-row items-center gap-2 w-[90%]">
                <div className="w-full xl:w-[50%] flex flex-col gap-2">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    autoComplete="false"
                    value={EmployerSignUpValues.first_name}
                    onChange={handleChange}
                    className="bg-white w-full px-2 py-2 rounded-md"
                  />
                </div>
                <div className="w-full xl:w-[50%] flex flex-col gap-2">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="false"
                    value={EmployerSignUpValues.last_name}
                    onChange={handleChange}
                    className="bg-white w-full px-2 py-2 rounded-md"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-[90%]">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="false"
                  value={EmployerSignUpValues.email}
                  onChange={handleChange}
                  className="bg-white w-full px-2 py-2 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2 w-[90%]">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  onChange={handleChange}
                  autoComplete="false"
                  value={EmployerSignUpValues.phone}
                  className="bg-white w-full px-2 py-2 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2 w-[90%]">
                <label htmlFor="email">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="false"
                  value={EmployerSignUpValues.password}
                  onChange={handleChange}
                  className="bg-white w-full px-2 py-2 rounded-md"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="bg-[#f25019] text-white w-[90%] py-2 my-2 rounded-md font-semibold"
              >
                Sign Up
              </button>
              <p className="font-semibold">or Continue with</p>
              <div className="w-[90%] flex justify-center gap-5">
                <Link
                  to="#"
                  className="w-[50%] bg-white rounded-[5px] flex justify-center px-[35px]  py-2 cursor-pointer text-lg"
                >
                  <img src={Img2} alt="google" className="w-[20px]" />
                </Link>
                <Link
                  to="#"
                  className="w-[50%] bg-white rounded-[5px] flex justify-center px-[35px]  py-2 cursor-pointer text-lg"
                >
                  <img src={Img3} alt="google" className="w-[20px]" />
                </Link>
              </div>
              <div className="w-[90%] text-center text-[15px] mt-2 flex flex-col items-center justify-between">
                <p>
                  Already Have An Account?{" "}
                  <Link to="/employee/login">
                    <span className="font-semibold">Log In</span>
                  </Link>
                </p>
                <p className="font-semibold mt-5 text-center text-[15px]">
                  Try to be Login as Customer ?{" "}
                  <Link to="/user/login" className="text-blue-700">
                    Log In
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

export default EmployerSignUp;
