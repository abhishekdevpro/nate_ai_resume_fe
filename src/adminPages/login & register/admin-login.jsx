import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../common/topBar";
import Slideshow from "../common/slideShow";
import axios from "axios";
import { setAdminLoginValues } from "../../state/reducer/adminLoginSlice";
import Footer from "../common/footer";
import { showToastError } from "../../utils/toastify/toastify";
import { ToastContainer } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const adminLoginValues = useSelector(
    (state) => state.adminLoginSlice.adminLoginValues
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setAdminLoginValues({ ...adminLoginValues, [name]: value }));
  };
  const handleSubmit = async (e) => {
    const reqBody = {
      email: adminLoginValues.email,
      password: adminLoginValues.password,
    };
    e.preventDefault();
    await axios({
      method: "POST",
      url: "https://api.resumesquad.net/api/admin/auth/login",
      headers: {
        "Content-Type": "Application/json",
      },
      data: reqBody,
    })
      .then((response) => {
        console.log(response.data.data.token);
        localStorage.setItem("adminAuthToken", response.data.data.token);
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
        showToastError(err?.response?.data?.message?.toString());
      });
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full flex flex-col">
      <Header />
      <div className="h-screen overflow-y-scroll hide-scrollbar relative z-[1] flex flex-col gap-[30px] lg:flex-row lg:justify-between items-center p-[30px] sm:p-[50px] ">
        <div className=" w-full lg:w-[50%] flex flex-col gap-[20px] items-center justify-center">
          <Slideshow />
        </div>
        <div className="w-full lg:w-[50%]  flex justify-center items-center">
          <div className="rounded-[50px] shadow-md w-full sm:w-[70%] bg-[#FFFFFF4D] flex flex-col items-center justify-center p-[30px] sm:p-[50px]">
            <h2 className="text-[30px] font-bold text-center">
              Login For Admin
            </h2>
            <div className="flex flex-col my-2 gap-2 w-full items-center">
              <div className="flex flex-col gap-2 w-[90%]">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="false"
                  value={adminLoginValues.email}
                  onChange={handleChange}
                  className="bg-white w-full px-2 py-2 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2 w-[90%]">
                <label htmlFor="password">Password</label>
                <div className="w-full bg-white flex items-center px-2 py-2 rounded-md">
                  <input
                    type={showPassword === true ? "text" : "password"}
                    name="password"
                    id="password"
                    autoComplete="false"
                    value={adminLoginValues.password}
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none"
                  />
                  {showPassword === true ? (
                    <FaRegEyeSlash
                      onClick={handleShowPassword}
                      className="cursor-pointer"
                    />
                  ) : (
                    <FaRegEye
                      onClick={handleShowPassword}
                      className="cursor-pointer"
                    />
                  )}
                </div>
              </div>
              <Link to="/admin/forgot-password" className="w-[90%]">
                <h3 className="w-full sm:w-[90%]">Forgot Password?</h3>
              </Link>
              <button
                onClick={handleSubmit}
                className="bg-[#f25019] text-white w-[90%] py-2 my-2 rounded-md font-semibold"
              >
                Login
              </button>
              {/* <p className="font-semibold">or Continue with</p> */}
              {/* <div className="w-full flex justify-center gap-5">
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
                </div> */}
              <div className="w-[90%] text-center text-[15px] mt-2 flex flex-col items-center justify-between">
                {/* <p>
                  Don't have an Account Yet?
                  <Link to="/admin/sign">
                    <span className="font-semibold"> Register For Free</span>
                  </Link>
                </p> */}
                <p className="font-semibold mt-5 text-center text-[15px]">
                  Try to be Login as Employer ?{" "}
                  <Link to="/employee/login" className="text-blue-700">
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

export default AdminLogin;
