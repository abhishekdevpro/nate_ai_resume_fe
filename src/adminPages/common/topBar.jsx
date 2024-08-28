import React, { useEffect, useState } from "react";
import {
  FaArrowDown,
  FaArrowRight,
  FaArrowRightFromBracket,
  FaBars,
  FaCartShopping,
  FaChartBar,
  FaChartColumn,
  FaUser,
  FaUserGroup,
  FaX,
} from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo 1.png";
import { setAdminSidebar } from "../../state/reducer/sidebarSlice";
import { motion } from "framer-motion";
const TopBar = () => {
  const dispatch = useDispatch();
  const [offCanvas, setOffCanvas] = useState(false);
  const [activeTabs, setActiveTabs] = useState("");
  const handleTabs = (tabs) => {
    setActiveTabs(tabs === activeTabs ? null : tabs);
  };
  useEffect(() => {
    dispatch(setAdminSidebar(activeTabs));
  }, [activeTabs]);
  const adminSidebar = useSelector((state) => state.sidebarSlice.adminSidebar);

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
  const userName = useSelector((state) => state.userNameSlice.admin);
  const handleLogout = () => {
    localStorage.removeItem("adminAuthToken");
    navigate("/admin/login");
  };
  return (
    <div className="w-full relative text-white bg-customGradient py-[10px] px-[15px] xl:px-[35px]  flex justify-between items-center">
      <Link to={"/admin"}>
        <div className="w-[80px] xl:w-[80px] xl:h-[80px]">
          <img src={Logo} alt="logo" className="w-full h-full object-fill" />
        </div>
      </Link>
      <div className="flex justify-center items-center gap-[35px]">
        <ul className="hidden sm:flex justify-center items-center gap-[15px] xl:gap-[35px]">
          <Link to={"/admin"} className="font-bold">
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
        <div className="w-full sm:w-[40%]  fixed top-0 left-0 z-[99] text-[12px] font-semibold h-screen p-[20px] xl:flex flex-col gap-[12px] bg-[#E3DFD6] text-[#8D77AB]">
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
                    onClick={() =>
                      navigate("/admin/resume-allotted-formatting")
                    }
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
              onClick={() => {
                dispatch(setAdminSidebar("payments"));
              }}
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
            <Link
              to={"/admin/profile"}
              onClick={() => dispatch(setAdminSidebar("my-profile"))}
            >
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
      ) : null}
    </div>
  );
};

export default TopBar;
