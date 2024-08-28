import React, { useState } from "react";
import DashboardLayout from "./layout";
import axios from "axios";
import { FaImage } from "react-icons/fa6";
import gif from "../../assets/gif.gif";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

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
import { setTextEditorValue } from "../../state/reducer/textEditor";
import { Navigate, useNavigate } from "react-router-dom";
const UploadProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [files, setFiles] = useState({});
  const handleChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file && file.type === "application/pdf") {
      setFiles({
        name: file.name,
        size: file.size,
        url: URL.createObjectURL(file),
        originalFile: file,
      });
      postThePdf(file);
    } else {
      alert("Please select a PDF file.");
    }
  };
  console.log(files);
  const token = localStorage.getItem("customerAuthToken");
  const postThePdf = async (fileToPost) => {
    const formData = new FormData();
    formData.append("files", fileToPost);

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
      console.log(JSON.parse(response.data.data[0].resume_parse_data));
      const jsonObj = JSON.parse(response.data.data[0].resume_parse_data);
      const data = jsonObj.templateData;
      console.log(jsonObj.templateData);
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
      navigate("/admin/create-resume");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DashboardLayout>
      <div className=" bg-white p-[30px] sm:p-[50px] flex flex-col xl:flex-row justify-center gap-[30px] items-center">
        <div className="w-full xl:w-[40%]">
          <div className="relative w-full  h-[450px] border-dotted border-2 border-black flex flex-col p-[50px] bg-clearanceLightBlue  rounded-[15px] justify-center text-[20px] font-semibold">
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
                <div className="flex gap-[7px] items-center">
                  <FaImage />
                  <h2>Upload A Resume</h2>
                </div>
                <p>Or</p>
                <button className="px-[20px] py-[7px] bg-clearanceDarkBlue rounded-[7px] text-white">
                  Browse
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[60%] flex flex-col p-[15px] items-center gap-[12px]">
          <img src={gif} alt="gif" className="w-full sm:w-[80%]" />
          <div className="w-full flex flex-col gap-[7px]">
            <div className="w-full flex flex-col gap-[4px]">
              <div className="w-full flex justify-between gap-[15px] items-center">
                <p>Image.jpg</p>
                <FaCheckCircle />
              </div>
              <div className="relative w-full h-[10px] rounded-[50px] bg-gray-500">
                <div className="absolute w-full left-0 top-0 bg-clearanceDarkBlue h-full rounded-[50px]"></div>
              </div>
              <div className="flex justify-between items-center">
                <p>10 MB</p>
                <p>100%</p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-[4px]">
              <div className="w-full flex justify-between gap-[15px] items-center">
                <p>My resume.pdf</p>
                <FaCheckCircle />
              </div>
              <div className="relative w-full h-[10px] rounded-[50px] bg-gray-300">
                <div className="absolute w-[80%] left-0 top-0 bg-clearanceDarkBlue h-full rounded-[50px]"></div>
              </div>
              <div className="flex justify-between items-center">
                <p>2 MB</p>
                <p>65%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UploadProfile;
