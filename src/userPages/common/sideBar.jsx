import React, { useState } from "react";
import {
  FaArrowDown,
  FaArrowRight,
  FaArrowRightFromBracket,
  FaBars,
  FaCartShopping,
  FaChartBar,
  FaChartColumn,
  FaPen,
  FaRegMessage,
  FaSearchengin,
  FaUser,
  FaWrench,
} from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { setUserSidebar } from "../../state/reducer/sidebarSlice";
const SideBar = () => {
  const offCanvas = useSelector((state) => state.menuSlice.offCanvas);
  const [activeTab, setActiveTab] = useState(null);

  const handleTabs = (tabName) => {
    setActiveTab((prev) => (prev === tabName ? null : tabName));
  };
  const navigate = useNavigate();

  const divVar = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };
  const handleLogout = () => {
    localStorage.removeItem("customerAuthToken");
    navigate("/user/login");
  };
  const userSidebar = useSelector((state) => state.sidebarSlice.userSidebar);
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-[20%] hidden  text-[12px] font-semibold h-screen p-[20px] xl:flex flex-col gap-[12px] bg-[#E3DFD6] text-[#8D77AB]">
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
                Upload Resume
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
    </>
  );
};

export default SideBar;
