import React, { useEffect } from "react";
import DashboardLayout from "./layout";
import { Link } from "react-router-dom";
import {
  FaBagShopping,
  FaChartLine,
  FaDollarSign,
  FaReadme,
  FaRegFile,
  FaRegMessage,
  FaRegUser,
} from "react-icons/fa6";
import { FaChartBar, FaFileUpload } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setUserSidebar } from "../../state/reducer/sidebarSlice";

const UserDashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserSidebar("dashboard"));
  }, []);
  return (
    <div>
      <DashboardLayout>
        <div className="w-full flex h-screen flex-col gap-[20px] ">
          <h2 className="text-white font-bold text-[25px]">Dashboard</h2>
          <div className="bg-white flex flex-col gap-[20px]  justify-start p-[30px] h-full overflow-y-scroll xl:rounded-tl-[20px] hide-scrollbar ">
            <div className="w-full flex flex-wrap gap-[30px] items-center justify-center">
              <Link
                to={"/user/resume-list"}
                className="w-full sm:w-[45%] xl:w-[30%] p-[30px] bg-[#e3dfd6] shadow-lg rounded-[4px] flex flex-col items-center gap-[12px]"
              >
                <FaRegFile className="text-[30px]" />
                <p className="font-medium text-[18px]">My Resumes</p>
              </Link>
              <Link
                to={"/user/upload-resume"}
                className="w-full sm:w-[45%] xl:w-[30%] p-[30px] bg-[#e3dfd6] shadow-lg rounded-[4px] flex flex-col items-center gap-[12px]"
              >
                <FaFileUpload className="text-[30px]" />
                <p className="font-medium text-[18px]">Upload Resume</p>
              </Link>
              <Link
                to={"/user/resume-list"}
                className="w-full sm:w-[45%] xl:w-[30%] p-[30px] bg-[#e3dfd6] shadow-lg rounded-[4px] flex flex-col items-center gap-[12px]"
              >
                <FaChartBar className="text-[30px]" />
                <p className="font-medium text-[18px]">Check Status</p>
              </Link>
              <Link
                to={"#"}
                className="w-full sm:w-[45%] xl:w-[30%] p-[30px] bg-[#e3dfd6] shadow-lg rounded-[4px] flex flex-col items-center gap-[12px]"
              >
                <FaRegMessage className="text-[30px]" />
                <p className="font-medium text-[18px]">Message</p>
              </Link>
              <Link
                to={"#"}
                className="w-full sm:w-[45%] xl:w-[30%] p-[30px] bg-[#e3dfd6] shadow-lg rounded-[4px] flex flex-col items-center gap-[12px]"
              >
                <FaDollarSign className="text-[30px]" />
                <p className="font-medium text-[18px]">Payments</p>
              </Link>
              <Link
                to={"#"}
                className="w-full sm:w-[45%] xl:w-[30%] p-[30px] bg-[#e3dfd6] shadow-lg rounded-[4px] flex flex-col items-center gap-[12px]"
              >
                <FaReadme className="text-[30px]" />
                <p className="font-medium text-[18px]">Read Resources</p>
              </Link>
              <Link
                to={"#"}
                className="w-full sm:w-[45%] xl:w-[30%] p-[30px] bg-[#e3dfd6] shadow-lg rounded-[4px] flex flex-col items-center gap-[12px]"
              >
                <FaBagShopping className="text-[30px]" />
                <p className="font-medium text-[18px]">My Jobs - Inactive</p>
              </Link>
              <Link
                to={"#"}
                className="w-full sm:w-[45%] xl:w-[30%] p-[30px] bg-[#e3dfd6] shadow-lg rounded-[4px] flex flex-col items-center gap-[12px]"
              >
                <FaChartLine className="text-[30px]" />
                <p className="font-medium text-[18px]">
                  Resume Score - Inactive
                </p>
              </Link>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default UserDashboard;
