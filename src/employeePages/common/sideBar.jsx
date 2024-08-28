import React, { useState } from "react";
import {
  FaArrowDown,
  FaArrowRight,
  FaArrowRightFromBracket,
  FaCartShopping,
  FaChartBar,
  FaChartColumn,
  FaCheck,
  FaFile,
  FaRegMessage,
  FaRegPaperPlane,
  FaSearchengin,
  FaStar,
  FaUser,
  FaWrench,
} from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { setEmployeeSidebar } from "../../state/reducer/sidebarSlice";
const SideBar = () => {
  const offCanvas = useSelector((state) => state.menuSlice.offCanvas);
  const [activeTab, setActiveTab] = useState(null);

  const handleTabs = (tabName) => {
    setActiveTab((prev) => (prev === tabName ? null : tabName));
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const employeeSidebar = useSelector(
    (state) => state.sidebarSlice.employeeSidebar
  );

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
    localStorage.removeItem("employeeAuthToken");
    navigate("/employee/login");
  };
  return (
    <>
      <div className="w-[20%] hidden  text-[12px] font-semibold h-screen p-[20px] xl:flex flex-col gap-[12px] bg-[#E3DFD6] text-[#8D77AB]">
        <div className="w-full flex gap-[5px]">
          <p className="font-bold text-[14px]">RESUME AI</p>
        </div>
        <div className="w-full flex flex-col gap-[12px]">
          <h3 className="text-[#c1c8cb] font-semibold text-[14px]">MENU</h3>

          <Link
            onClick={() => dispatch(setEmployeeSidebar("allResumes"))}
            to={"/employee/all-resumes"}
          >
            <button
              className={`w-full p-[10px] rounded-md   justify-between flex gap-[5px] items-center transition-all ${
                employeeSidebar === "allResumes"
                  ? "bg-[#8D77AB] text-[#E3DFD6]"
                  : "bg-[#E3DFD6] text-[#8D77AB]"
              } hover:bg-[#8D77AB] hover:text-[#E3DFD6] `}
            >
              <div className="flex gap-[12px] items-center">
                <FaFile />
                All Resumes
              </div>
              <FaArrowRight />
            </button>
          </Link>
          <Link
            onClick={() => dispatch(setEmployeeSidebar("aiEnhanced"))}
            to={"/employee/ai-enhanced"}
          >
            <button
              className={`w-full p-[10px] rounded-md   justify-between flex gap-[5px] items-center transition-all ${
                employeeSidebar === "aiEnhanced"
                  ? "bg-[#8D77AB] text-[#E3DFD6]"
                  : "bg-[#E3DFD6] text-[#8D77AB]"
              } hover:bg-[#8D77AB] hover:text-[#E3DFD6] `}
            >
              <div className="flex gap-[12px] items-center">
                <FaStar />
                Ai Enhanced
              </div>
              <FaArrowRight />
            </button>
          </Link>
          <Link
            onClick={() => dispatch(setEmployeeSidebar("allotted"))}
            to={"/employee/allotted"}
          >
            <button
              className={`w-full p-[10px] rounded-md   justify-between flex gap-[5px] items-center transition-all ${
                employeeSidebar === "allotted"
                  ? "bg-[#8D77AB] text-[#E3DFD6]"
                  : "bg-[#E3DFD6] text-[#8D77AB]"
              } hover:bg-[#8D77AB] hover:text-[#E3DFD6] `}
            >
              <div className="flex gap-[12px] items-center">
                <FaRegPaperPlane />
                Allotted
              </div>
              <FaArrowRight />
            </button>
          </Link>
          <Link
            onClick={() => dispatch(setEmployeeSidebar("completed"))}
            to={"/employee/completed"}
          >
            <button
              className={`w-full p-[10px] rounded-md   justify-between flex gap-[5px] items-center transition-all ${
                employeeSidebar === "completed"
                  ? "bg-[#8D77AB] text-[#E3DFD6]"
                  : "bg-[#E3DFD6] text-[#8D77AB]"
              } hover:bg-[#8D77AB] hover:text-[#E3DFD6] `}
            >
              <div className="flex gap-[12px] items-center">
                <FaCheck />
                Completed
              </div>
              <FaArrowRight />
            </button>
          </Link>
          <Link
            onClick={() => dispatch(setEmployeeSidebar("profile"))}
            to={"/employee/my-profile"}
          >
            <button
              className={`w-full p-[10px] rounded-md   justify-between flex gap-[5px] items-center transition-all ${
                employeeSidebar === "profile"
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
            </button> */}
          {/* <div className="w-full text-[#7d848c] flex flex-col gap-[12px]">
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
