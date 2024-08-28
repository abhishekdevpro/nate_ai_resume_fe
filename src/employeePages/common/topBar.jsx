import React, { useState } from "react";
import {
  FaArrowRight,
  FaArrowRightFromBracket,
  FaBars,
  FaCheck,
  FaFile,
  FaRegPaperPlane,
  FaStar,
  FaUser,
  FaX,
} from "react-icons/fa6";
import { setOffCanvas } from "../../state/reducer/menuSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo 1.png";
import { setEmployeeSidebar } from "../../state/reducer/sidebarSlice";
const TopBar = () => {
  const dispatch = useDispatch();
  const employeeSidebar = useSelector(
    (state) => state.sidebarSlice.employeeSidebar
  );
  const navigate = useNavigate();
  const [offCanvas, setOffCanvas] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("employeeAuthToken");
    navigate("/employee/login");
  };
  const userName = useSelector((state) => state.userNameSlice.employee);
  return (
    <div className="w-full relative text-white bg-customGradient py-[10px] px-[15px] xl:px-[35px]  flex justify-between items-center">
      <Link to={"/employee"}>
        <div className="w-[80px] xl:w-[80px] xl:h-[80px]">
          <img src={Logo} alt="logo" className="w-full h-full object-fill" />
        </div>
      </Link>
      <div className="flex justify-center items-center gap-[35px]">
        <ul className="hidden sm:flex justify-center items-center gap-[15px] xl:gap-[35px]">
          <Link to={"/employee"} className="font-bold">
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
        <div className="w-full sm:w-[40%] top-0 left-0 fixed z-[90]  text-[12px] font-semibold h-screen p-[20px] xl:flex flex-col gap-[12px] bg-[#E3DFD6] text-[#8D77AB]">
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
      ) : null}
    </div>
  );
};

export default TopBar;
