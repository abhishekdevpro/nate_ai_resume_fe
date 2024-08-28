import React, { useEffect, useState } from "react";
import {
  FaArrowDown,
  FaArrowRight,
  FaArrowRightFromBracket,
  FaBars,
  FaCartShopping,
  FaChartBar,
  FaChartColumn,
  FaRegMessage,
  FaSearchengin,
  FaUser,
  FaUserGroup,
  FaWrench,
} from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  setAdminActiveTab,
  setAdminSidebar,
} from "../../state/reducer/sidebarSlice";
const SideBar = () => {
  const offCanvas = useSelector((state) => state.menuSlice.offCanvas);
  const adminSidebar = useSelector((state) => state.sidebarSlice.adminSidebar);
  const dispatch = useDispatch();
  const adminActiveTab = useSelector(
    (state) => state.sidebarSlice.adminActiveTab
  );

  const handleTabs = (tabs) => {
    dispatch(setAdminActiveTab(tabs === adminActiveTab ? null : tabs));
  };
  useEffect(() => {
    dispatch(setAdminSidebar(adminActiveTab));
  }, [adminActiveTab]);
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
    localStorage.removeItem("adminAuthToken");
    navigate("/admin/login");
  };
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
              handleTabs("dashboard");
              navigate("/admin/dashboard");
            }}
            className={`w-full p-[10px] rounded-md   justify-between flex gap-[5px] items-center transition-all ${
              adminSidebar === "dashboard"
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
          <div className="w-full relative">
            <button
              onClick={() => handleTabs("customerInfo")}
              className={`w-full p-[10px] rounded-md   justify-between flex gap-[5px] items-center transition-all ${
                adminSidebar === "customerInfo"
                  ? "bg-[#8D77AB] text-[#E3DFD6]"
                  : "bg-[#E3DFD6] text-[#8D77AB]"
              } hover:bg-[#8D77AB] hover:text-[#E3DFD6] `}
            >
              <div className="flex gap-[12px] items-center ">
                <FaChartBar />
                Customer Info
              </div>
              {adminSidebar === "customerInfo" ? (
                <FaArrowDown />
              ) : (
                <FaArrowRight />
              )}
            </button>
            {adminSidebar === "customerInfo" && (
              <motion.div
                variants={divVar}
                initial="hidden"
                animate="visible"
                className="w-full pt-[10px] z-[99] text-[11px] text-left flex flex-col bg-[#E3DFD6] items-start px-[15px] gap-[7px]"
              >
                <button onClick={() => navigate("/admin/all-customer")}>
                  All
                </button>
                <button onClick={() => navigate("/admin/subscribers")}>
                  Subscribers
                </button>
              </motion.div>
            )}
          </div>
          <div className="relative w-full">
            <button
              onClick={() => handleTabs("resume-list")}
              className={`w-full p-[10px] rounded-md   justify-between flex gap-[5px] items-center transition-all ${
                adminSidebar === "resume-list"
                  ? "bg-[#8D77AB] text-[#E3DFD6]"
                  : "bg-[#E3DFD6] text-[#8D77AB]"
              } hover:bg-[#8D77AB] hover:text-[#E3DFD6] `}
            >
              <div className="flex gap-[12px] items-center">
                <FaCartShopping />
                Resume List
              </div>
              {adminSidebar === "resume-list" ? (
                <FaArrowDown />
              ) : (
                <FaArrowRight />
              )}
            </button>
            {adminSidebar === "resume-list" && (
              <motion.div
                variants={divVar}
                initial="hidden"
                animate="visible"
                className="w-full pt-[10px] z-[99] text-[11px] text-left flex flex-col bg-[#E3DFD6] items-start px-[15px] gap-[7px]"
              >
                <button onClick={() => navigate("/admin/resume-list")}>
                  All Resumes
                </button>
                <button
                  onClick={() => {
                    navigate("/admin/resume-pending");
                  }}
                >
                  Uploaded
                </button>
                <button onClick={() => navigate("/admin/resume-allotted-ai")}>
                  In Edit
                </button>
                <button
                  onClick={() => navigate("/admin/resume-allotted-formatting")}
                >
                  Sent for Approval
                </button>
                {/* <button
                  onClick={() => navigate("/admin/resume-allotted-manualedit")}
                >
                  Allotted For Manual Edit
                </button> */}
                <button
                  onClick={() => navigate("/admin/customer-approval-pending")}
                >
                  Approved
                </button>
                {/* <button onClick={() => navigate("/admin/payment-pending")}>
                  Payment Pending
                </button> */}
                <button onClick={() => navigate("/admin/rework-needed")}>
                  Rework Needed
                </button>
                <button onClick={() => navigate("/admin/completed")}>
                  Completed
                </button>
              </motion.div>
            )}
          </div>
          <div className="relative w-full">
            <button
              onClick={() => handleTabs("employees")}
              className={`w-full p-[10px] rounded-md   justify-between flex gap-[5px] items-center transition-all ${
                adminSidebar === "employees"
                  ? "bg-[#8D77AB] text-[#E3DFD6]"
                  : "bg-[#E3DFD6] text-[#8D77AB]"
              } hover:bg-[#8D77AB] hover:text-[#E3DFD6] `}
            >
              <div className="flex gap-[12px] items-center">
                <FaUserGroup />
                Employees
              </div>
              {adminSidebar === "employees" ? (
                <FaArrowDown />
              ) : (
                <FaArrowRight />
              )}
            </button>
            {adminSidebar === "employees" && (
              <motion.div
                variants={divVar}
                initial="hidden"
                animate="visible"
                className="w-full pt-[10px] z-[99] text-[11px] text-left flex flex-col bg-[#E3DFD6] items-start px-[15px] gap-[7px]"
              >
                <Link to={"/admin/all-employees"}>All Employees</Link>
                <button onClick={() => navigate("/admin/employee-creation")}>
                  Create New
                </button>
              </motion.div>
            )}
          </div>
          <Link
            onClick={() => handleTabs("payments")}
            to={"/admin/payment"}
            className={`w-full p-[10px] rounded-md   justify-between flex gap-[5px] items-center transition-all ${
              adminSidebar === "payments"
                ? "bg-[#8D77AB] text-[#E3DFD6]"
                : "bg-[#E3DFD6] text-[#8D77AB]"
            } hover:bg-[#8D77AB] hover:text-[#E3DFD6] `}
          >
            <div className="flex gap-[12px] items-center">
              <FaChartColumn />
              Payments
            </div>
            <FaArrowRight />
          </Link>
          <Link to={"/admin/profile"} onClick={() => handleTabs("my-profile")}>
            <button
              className={`w-full p-[10px] rounded-md   justify-between flex gap-[5px] items-center transition-all ${
                adminSidebar === "my-profile"
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
