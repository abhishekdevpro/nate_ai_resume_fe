import React, { useEffect, useState } from "react";
import DashboardLayout from "./layout";
import axios from "axios";
import { FaImage } from "react-icons/fa6";

import { useDispatch } from "react-redux";

import {
  setAddressInput,
  setCity,
  setClearance,
  setCountry,
  setDateofbirth,
  setDocname,
  setDrivinglicense,
  setEmail,
  setFirstName,
  setJobTitle,
  setLastName,
  setNationality,
  setPhoneNumber,
  setPlaceofbirth,
  setPostalcodeInput,
} from "../../state/reducer/personalInfoInputSlice";
import {
  setCustomSectionData,
  setEditorValue,
  setEducationData,
  setEmploymentData,
  setPersonalInfoValues,
  setSkillsData,
  setWebsiteData,
} from "../../state/reducer/createResumeSlice";
// import { setTextEditorValue } from "../../state/reducer/textEditor";
import { setTextEditorValue } from "../../state/reducer/userTextEditorSlice";
import { Link, useNavigate } from "react-router-dom";
import TimeHolder from "../common/timeHolder";
import { setUserSidebar } from "../../state/reducer/sidebarSlice";
const UploadProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserSidebar("uploadResume"));
  }, []);
  const [files, setFiles] = useState({});
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type === "application/pdf") {
        if (file.size <= 200 * 1024) {
          setFiles({
            name: file.name,
            size: file.size,
            url: URL.createObjectURL(file),
            originalFile: file,
          });
        } else {
          alert("File size must be less than 200KB.");
        }
      } else {
        alert("Please select a PDF file.");
      }
    }
  };

  const [remark, setRemark] = useState("");
  const handleRemarkChange = (e) => {
    setRemark(e.target.value);
  };

  const [loading, setLoading] = useState(false);

  console.log(files);
  const token = localStorage.getItem("customerAuthToken");

  const [isResumeUpload, setIsResumeUpload] = useState(false);

  const postThePdf = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("files", files?.originalFile);
    formData.append("remark", remark);
    try {
      const response = await axios.post(
        "https://api.resumesquad.net/api/user/resume-upload",
        formData,
        {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response);
      // console.log(JSON.parse(response.data[0].resume_parse_data));
      const jsonObj = JSON.parse(response.data.data[0].resume_parse_data);
      console.log(jsonObj);
      const data = jsonObj.templateData;
      const resumeId = response?.data?.data[0]?.id;
      const skill = data.skills;

      const employmentData = data.employmenthistory;
      const education = data.education;
      const social = data.social;
      const professionalsummary = data.professionalsummary;
      const firstName = data.firstname;
      const lastName = data.lastname;
      const wantedjobtitle = data.wantedjobtitle;
      const phoneNumber = data.phone;
      const docname = data.templatename;
      const placeofbirth = data.placeofbirth;
      const dateofbirth = data.dateofbirth;
      const email = data.email;
      const clearance = data.securityclearance;
      const nationality = data.nationality;
      const drivinglicense = data.drivinglicense;
      const country = data.country;
      const city = data.city;
      const address = data.address;
      const postalcode = data.postalcode;
      const untitledsection = data.untitledsection;

      dispatch(setFirstName(firstName));
      dispatch(setLastName(lastName));
      dispatch(setJobTitle(wantedjobtitle));
      dispatch(setPhoneNumber(phoneNumber));
      dispatch(setDocname(docname));
      dispatch(setSkillsData(skill));
      dispatch(setEmail(email));
      dispatch(setDateofbirth(dateofbirth));
      dispatch(setPlaceofbirth(placeofbirth));
      dispatch(setNationality(nationality));
      dispatch(setDrivinglicense(drivinglicense));
      dispatch(setDrivinglicense(nationality));
      dispatch(setCountry(country));
      dispatch(setCity(city));
      dispatch(setEmploymentData(employmentData));
      dispatch(setEducationData(education));
      dispatch(setWebsiteData(social));
      dispatch(setEditorValue(professionalsummary));
      dispatch(setTextEditorValue(professionalsummary));
      dispatch(setAddressInput(address));
      dispatch(setPostalcodeInput(postalcode));
      dispatch(setDocname(docname));
      dispatch(setClearance(clearance));
      dispatch(setCustomSectionData(untitledsection));
      dispatch(
        setPersonalInfoValues({
          docname: docname,
          jobTitle: wantedjobtitle,
          firstName: firstName,
          city: city,
          lastName: lastName,
          postalcode: postalcode,
          postalcode: postalcode,
          drivinglicense: drivinglicense,
          placeofbirth: placeofbirth,
          dateofbirth: dateofbirth,
          clearance: clearance,
          nationality: nationality,
          country: country,
          address: address,
          phoneNumber: phoneNumber,
        })
      );
      // navigate(`/user/create-resume/${resumeId}`);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setIsResumeUpload(true);
        setRemark("");
      }, 3000);
    } catch (error) {
      console.error(error);
      setIsResumeUpload(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      {loading === true ? (
        <div className="w-full flex justify-center h-screen bg-white overflow-y-scroll hide-scrollbar ">
          <TimeHolder />
        </div>
      ) : (
        <div className="w-full h-full overflow-y-scroll hide-scrollbar">
          {isResumeUpload === true ? (
            <div className="h-screen overflow-y-scroll hide-scrollbar rounded-tl-[50px] bg-white p-[30px] sm:p-[50px] flex flex-col  justify-center gap-[20px] items-center">
              <div className="w-full sm:w-[70%] xl:w-[50%] bg-[#E3DFD6] rounded-[12px] px-[25px] py-[35px] flex flex-col items-center gap-[20px]">
                <h2 className="text-[25px] text-center font-semibold">
                  Resume Uploaded Successfully
                </h2>
                <button
                  onClick={() => setIsResumeUpload(false)}
                  className="px-[20px] py-[10px] bg-[#8d77ab] text-white rounded-[7px] font-semibold"
                >
                  Upload Another Resume
                </button>
                <Link to={"/user/resume-list"} className="font-semibold">
                  Back To My Resumes
                </Link>
              </div>
            </div>
          ) : (
            <div className="h-screen overflow-y-scroll hide-scrollbar rounded-tl-[50px] bg-white p-[30px] sm:p-[50px] flex flex-col xl:flex-row justify-center gap-[30px] items-center">
              {/* <div className="w-full xl:w-[40%]">
                <div className="relative w-full  h-[450px] border-dotted border-2 border-black flex flex-col p-[50px] bg-clearanceLightBlue  rounded-[15px] justify-center text-[20px] font-semibold">
                  <div className="flex gap-[5px] items-center justify-center  text-center">
                    <div className="flex flex-col gap-[12px]">
                      <h2>Create Your CV From Scratch</h2>
                      <button
                        onClick={handleCreateResume}
                        className="px-[20px] py-[7px] bg-[#8d77ab] rounded-[7px] text-[#E3DFD6]"
                      >
                        Create Resume
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="w-full flex flex-col gap-[12px]  xl:w-[70%]">
                <div className="relative w-full  h-[250px] border-dotted border-2 border-black flex flex-col p-[50px] bg-clearanceLightBlue  rounded-[15px] justify-center text-[20px] font-semibold">
                  <input
                    type="file"
                    accept="application/pdf"
                    className="absolute  inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
                    onChange={handleChange}
                    name="resume"
                    id="resume"
                  />

                  <div className="flex gap-[5px] items-center justify-center  text-center">
                    <div className="flex flex-col gap-[12px]">
                      <div className="flex flex-col sm:flex-row gap-[7px] items-center">
                        <FaImage />
                        <h2>Upload A Resume</h2>
                      </div>
                      <p>Or</p>
                      <button className="px-[20px] py-[7px] bg-[#8d77ab] rounded-[7px] text-[#E3DFD6]">
                        Browse
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full text-[14px] flex justify-center">
                  <div className="w-full bg-white text-black flex flex-col gap-[20px] items-center rounded-[7px]">
                    <div className="w-full flex flex-col  gap-[7px]">
                      <label htmlFor="remark">
                        Do you want to add any remark to help us understand
                        more?
                      </label>
                      <textarea
                        type="text"
                        name="remark"
                        id="remark"
                        onChange={handleRemarkChange}
                        value={remark}
                        autoComplete="false"
                        className="p-[7px] h-[80px] outline-none border border-gray-200 rounded-[7px]"
                        required
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={postThePdf}
                  className="px-[20px] bg-[#8d77ab] font-medium text-white py-[10px] rounded-[7px]"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </DashboardLayout>
  );
};

export default UploadProfile;
