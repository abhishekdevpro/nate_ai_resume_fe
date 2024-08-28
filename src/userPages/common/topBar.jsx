import React, { useState } from "react";
import {
  FaArrowRight,
  FaArrowRightFromBracket,
  FaBars,
  FaCartShopping,
  FaChartColumn,
  FaPen,
  FaUser,
  FaX,
} from "react-icons/fa6";
import { setOffCanvas } from "../../state/reducer/menuSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo 1.png";
import { setUserSidebar } from "../../state/reducer/sidebarSlice";
const TopBar = () => {
  const dispatch = useDispatch();
  const userSidebar = useSelector((state) => state.sidebarSlice.userSidebar);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("customerAuthToken");
    navigate("/user/login");
  };
  const userName = useSelector((state) => state.userNameSlice.user);
  const [offCanvas, setOffCanvas] = useState(false);
  return (
    <div className="w-full text-white relative bg-customGradient py-[10px] px-[15px] xl:px-[35px]  flex justify-between items-center">
      <Link to={"/user"}>
        <div className="w-[80px] xl:w-[80px] xl:h-[80px]">
          <img src={Logo} alt="logo" className="w-full h-full object-fill" />
        </div>
      </Link>
      <div className="flex justify-center items-center gap-[35px]">
        <ul className="hidden sm:flex justify-center items-center gap-[15px] xl:gap-[35px]">
          <Link to={"/user"} className="font-bold">
            HOME
          </Link>
          <Link to={"#"} className="font-bold">
            AI+
          </Link>
          <Link to={"#"} className="font-bold">
            RESOURCES
          </Link>
          <Link to={"#"} className="font-bold">
            ABOUT US
          </Link>
          <Link to={"#"} className="font-bold">
            SERVICES
          </Link>
          <Link to={"#"} className="font-bold">
            BLOGS
          </Link>
        </ul>
        <h3 className="font-bold px-[20px] py-[12px] rounded-[7px] bg-[#8d77ab]">
          Welcome ! {userName}
        </h3>
        {offCanvas ? (
          <FaX
            onClick={() => {
              setOffCanvas(false);
            }}
          />
        ) : (
          <FaBars
            onClick={() => {
              setOffCanvas(true);
            }}
            className="cursor-pointer xl:hidden"
          />
        )}
      </div>
      {offCanvas ? (
        <div className="w-full sm:w-[40%] fixed z-[99] top-0 left-0  text-[12px] font-semibold h-screen p-[20px] xl:flex flex-col gap-[12px] bg-[#E3DFD6] text-[#8D77AB]">
          <div className="w-full flex justify-end">
            <div className="bg-[#8d77ab] h-[30px] w-[30px] flex items-center justify-center rounded-[30px]">
              <FaX
                onClick={() => setOffCanvas(false)}
                className="text-[#e3dfd6]"
              />
            </div>
          </div>
          <div className="w-full flex gap-[5px]">
            <p className="font-bold text-[14px]">RESUME AI</p>
          </div>
          <div className="w-full flex flex-col gap-[12px]">
            <h3 className="text-[#c1c8cb] font-semibold text-[14px]">MENU</h3>
            <button
              onClick={() => {
                dispatch(setUserSidebar("dashboard"));
                navigate("/user/dashboard");
              }}
              className={`w-full p-[10px] rounded-md   justify-between flex gap-[5px] items-center transition-all ${
                userSidebar === "dashboard"
                  ? "bg-[#8D77AB] text-[#E3DFD6]"
                  : "bg-[#E3DFD6] text-[#8D77AB]"
              } hover:bg-[#8D77AB] hover:text-[#E3DFD6] `}
            >
              <div className="flex gap-[12px] items-center ">
                <FaBars />
                Dashboard
              </div>
              <FaArrowRight />
            </button>
            <div className="relative w-full">
              <Link
                onClick={() => dispatch(setUserSidebar("resume-list"))}
                to={"/user/resume-list"}
              >
                <button
                  className={`w-full p-[10px] rounded-md   justify-between flex gap-[5px] items-center transition-all ${
                    userSidebar === "resume-list"
                      ? "bg-[#8D77AB] text-[#E3DFD6]"
                      : "bg-[#E3DFD6] text-[#8D77AB]"
                  } hover:bg-[#8D77AB] hover:text-[#E3DFD6] `}
                >
                  <div className="flex gap-[12px] items-center">
                    <FaCartShopping />
                    Resume List
                  </div>
                  <FaArrowRight />
                </button>
              </Link>
            </div>

            <Link
              onClick={() => dispatch(setUserSidebar("uploadResume"))}
              to={"/user/upload-resume"}
            >
              <button
                className={`w-full p-[10px] rounded-md   justify-between flex gap-[5px] items-center transition-all ${
                  userSidebar === "uploadResume"
                    ? "bg-[#8D77AB] text-[#E3DFD6]"
                    : "bg-[#E3DFD6] text-[#8D77AB]"
                } hover:bg-[#8D77AB] hover:text-[#E3DFD6] `}
              >
                <div className="flex gap-[12px] items-center">
                  <FaPen />
                  Create/Upload Resume
                </div>
                <FaArrowRight />
              </button>
            </Link>

            <Link
              onClick={() => dispatch(setUserSidebar("payments"))}
              to={"/user/payment"}
            >
              <button
                className={`w-full p-[10px] rounded-md   justify-between flex gap-[5px] items-center transition-all ${
                  userSidebar === "payments"
                    ? "bg-[#8D77AB] text-[#E3DFD6]"
                    : "bg-[#E3DFD6] text-[#8D77AB]"
                } hover:bg-[#8D77AB] hover:text-[#E3DFD6] `}
              >
                <div className="flex gap-[12px] items-center">
                  <FaChartColumn />
                  Payments
                </div>
                <FaArrowRight />
              </button>
            </Link>

            <Link
              onClick={() => dispatch(setUserSidebar("profile"))}
              to={"/user/my-profile"}
            >
              <button
                className={`w-full p-[10px] rounded-md   justify-between flex gap-[5px] items-center transition-all ${
                  userSidebar === "profile"
                    ? "bg-[#8D77AB] text-[#E3DFD6]"
                    : "bg-[#E3DFD6] text-[#8D77AB]"
                } hover:bg-[#8D77AB] hover:text-[#E3DFD6] `}
              >
                <div className="flex gap-[12px] items-center">
                  <FaUser />
                  My Profile
                </div>
                <FaArrowRight />
              </button>
            </Link>
            {/* <button className="w-full p-[10px] rounded-md text-[#7d848c] justify-between flex gap-[5px] items-center">
              <div className="flex gap-[12px] items-center">
                <FaRegMessage />
                Approved Resumes
              </div>
            </button>
            <div className="w-full text-[#7d848c] flex flex-col gap-[12px]">
              <p>OTHERS</p>
              <button className="w-full p-[10px] rounded-md text-[#7d848c] justify-between flex gap-[5px] items-center">
                <div className="flex gap-[12px] items-center">
                  <FaWrench />
                  resource
                </div>
              </button>
            </div> */}
            <button
              onClick={handleLogout}
              className="w-full p-[10px] rounded-md bg-[#E3DFD6] text-[#8D77AB] justify-between flex gap-[5px] items-center transition-all hover:bg-[#8D77AB] hover:text-[#E3DFD6]"
            >
              <div className="flex gap-[12px] items-center">
                <FaArrowRightFromBracket />
                Logout
              </div>
              <FaArrowRight />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TopBar;
