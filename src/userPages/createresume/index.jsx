"use client";
import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Resume2 from "../resume/resume2";
import SkillComponent from "../createresume/components/skills/index";
import EmployementComponent from "../createresume/components/employement-history/index";
import EducationComponent from "../createresume/components/education/index";
import WebsiteComponent from "../createresume/components/websites and Links/index";
import PersonalinfoComponent from "./components/personalinfo/personalinfo";
import ProfessionalSummary from "./components/professional-summary/editor";

import CustomSection from "./components/customSection";
import DashboardLayout from "../dashboard/layout";
import Resume from "../resume/resume";
import Resume3 from "../resume/resume3";
import Resume1 from "../resume/resume1";
import CertificationComponent from "./components/certifications/certifications";
import {
  setCustomSectionData,
  setEditorValue,
  setEducationData,
  setEmploymentData,
  setPersonalInfoValues,
  setSkillsData,
  setWebsiteData,
} from "../../state/reducer/createResumeSlice";
import { setTextEditorValue } from "../../state/reducer/userTextEditorSlice";
import { showToastError } from "../../utils/toastify/toastify";
import { setUserSidebar } from "../../state/reducer/sidebarSlice";

// import { toast, ToastContainer } from "react-toastify";

const CreateResume = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const inputValues = useSelector((state) => state.personalInfoInput);
  const [image, setImage] = useState({ preview: "", data: "" });
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  // const handleSubmit = async (e) => {
  //   const token = localStorage.getItem("authToken");
  //   let formData = new FormData();
  //   formData.append("image", image.data);
  //   axios({
  //     method: "post",
  //     url: `/api/v1/upload`,
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //       Authorization: "Bearer " + token,
  //     },
  //     data: formData,
  //   }).then((response) => {
  //     if (response) setStatus(response.statusText);
  //   });
  // };

  // const { template } = useParams();
  // async function captureImage() {
  //   console.log("template", template);
  //   if (resumeRef.current) {
  //     await html2canvas(resumeRef.current).then((canvas) => {
  //       canvas.toBlob(function (blob) {
  //         let formData = new FormData();
  //         formData.append("image", blob, "screenshot.png");
  //         formData.append("templateId", template);
  //         const token = localStorage.getItem("authToken");
  //         axios({
  //           method: "post",
  //           url: `/api/v1/upload`,
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //             Authorization: "Bearer " + token,
  //           },
  //           data: formData,
  //         })
  //           .then((response) => {
  //             if (response) setStatus(response.statusText);
  //           })
  //           .catch((error) => {
  //             showToast(error);
  //           });
  //       }, "image/png");
  //     });
  //   }
  // }

  const token = localStorage.getItem("customerAuthToken");
  const fetchTemplateData = () => {
    axios({
      method: "get",
      url: `https://api.resumesquad.net/api/user/get-resume/${id}`,
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response?.data?.data, "data fetched");
        const data =
          response?.data?.data?.ai_resume_parse_data_user?.templateData;
        const skill = data?.skills;
        const employmentData = data?.employmenthistory;
        const education = data?.education;
        const social = data?.social;
        const professionalsummary = data?.professionalsummary;
        const firstName = data?.firstname;
        const lastName = data?.lastname;
        const wantedjobtitle = data?.wantedjobtitle;
        const phoneNumber = data?.phone;
        const docname = data?.templatename;
        const placeofbirth = data?.placeofbirth;
        const dateofbirth = data?.dateofbirth;
        const email = data?.email;
        const clearance = data?.securityclearance;
        const nationality = data?.nationality;
        const drivinglicense = data?.drivinglicense;
        const country = data?.country;
        const city = data?.city;
        const address = data?.address;
        const postalcode = data?.postalcode;
        const untitledsection = data?.untitledsection;

        dispatch(setEmploymentData(employmentData || []));
        dispatch(setEducationData(education || []));
        dispatch(setWebsiteData(social || []));
        dispatch(setEditorValue(professionalsummary));
        dispatch(setTextEditorValue(professionalsummary));
        dispatch(setSkillsData(skill || []));

        dispatch(setCustomSectionData(untitledsection || []));
        dispatch(
          setPersonalInfoValues({
            docname: docname,
            jobTitle: wantedjobtitle,
            firstName: firstName,
            city: city,
            lastName: lastName,
            postalcode: postalcode,
            drivinglicense: drivinglicense,
            placeofbirth: placeofbirth,
            dateofbirth: dateofbirth,
            clearance: clearance,
            nationality: nationality,
            country: country,
            address: address,
            phoneNumber: phoneNumber,
            email: email,
          })
        );
      })
      .catch((error) => {
        console.log(error, "data fetched");
      });
    setLeftSkeleton(false);
  };
  useEffect(() => {
    setLeftSkeleton(true);
    fetchTemplateData();
  }, []);

  const personalInfoValues = useSelector(
    (state) => state.createResumeSlice.personalInfoValues
  );
  const textEditorValue = useSelector(
    (state) => state.userTextEditorSlice.textEditorValue
  );
  const customSectionData = useSelector(
    (state) => state.createResumeSlice.customSectionData
  );
  const educationData = useSelector(
    (state) => state.createResumeSlice.educationData
  );
  const employmentData = useSelector(
    (state) => state.createResumeSlice.employmentData
  );
  const skillsData = useSelector((state) => state.createResumeSlice.skillsData);
  const websiteData = useSelector(
    (state) => state.createResumeSlice.websiteData
  );
  const [leftSkeleton, setLeftSkeleton] = useState(false);
  const data = {
    templatename: personalInfoValues?.docname,
    wantedjobtitle: personalInfoValues?.jobTitle,
    firstname: personalInfoValues?.firstName,
    lastname: personalInfoValues?.lastName,
    city: personalInfoValues?.city,
    country: personalInfoValues?.country,
    phone: personalInfoValues?.phoneNumber,
    address: personalInfoValues?.address,
    postalcode: personalInfoValues?.postalcode,
    drivinglicense: personalInfoValues?.drivinglicense,
    securityclearance: personalInfoValues?.clearance,
    dateofbirth: personalInfoValues?.dateofbirth,
    placeofbirth: personalInfoValues?.placeofbirth,
    skills: skillsData,
    education: educationData,
    social: websiteData,
    professionalsummary: textEditorValue,
    email: personalInfoValues?.email,
    nationality: personalInfoValues?.nationality,
    docname: personalInfoValues?.docname,
    untitledsection: customSectionData,
    employmenthistory: employmentData,
  };
  // const showToast = (error) => {
  //   toast.error(`${error}`, {
  //     data: {
  //       title: "Error",
  //       text: error,
  //     },
  //   });
  // };
  const handlePostRequest = () => {
    axios({
      method: "put",
      url: `https://api.resumesquad.net/api/user/resume-update/${id}`,
      data: {
        templateData: data,
      },
      headers: {
        Authorization: token,
        "content-type": "application/json",
      },
    })
      .then((response) => {
        setIsLoading(false);
        console.log(response, "data sent");
      })
      .catch((error) => {
        showToastError(error.response.data.message);
        console.log(error, "data sent error");
      });
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(data);
      handlePostRequest(data);
    }, 4000);
    return () => clearTimeout(timer);
  }, [data]);
  const loading = () => {
    setIsLoading(true);
  };
  const selectedTemplate = useSelector(
    (state) => state.template.selectedTemplate
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserSidebar("uploadResume"));
  }, []);
  const resumeRef = useRef();
  return (
    <>
      <DashboardLayout>
        <div
          className="flex gap-2 relative  bg-white h-full overflow-y-scroll xl:rounded-tl-[20px] hide-scrollbar py-[20px] px-[20px]  max-[1100px]:flex-col"
          onChange={loading}
        >
          {/* <ToastContainer /> */}

          {leftSkeleton ? (
            <div>
              <div
                role="status"
                className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center m-[50px]"
              >
                <div className="w-full">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[700px] mb-4 "></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[700px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[700px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[700px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[700px]"></div>
                </div>
              </div>
              <div
                role="status"
                className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center m-[50px]"
              >
                <div className="w-full">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[700px] mb-4 "></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[700px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[700px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[700px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[700px]"></div>
                </div>
              </div>
              <div
                role="status"
                className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center m-[50px]"
              >
                <div className="w-full">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[700px] mb-4 "></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[700px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[700px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[700px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[700px]"></div>
                </div>
              </div>
              <div
                role="status"
                className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center m-[50px]"
              >
                <div className="w-full">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[700px] mb-4 "></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[700px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[700px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[700px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[700px]"></div>
                </div>
              </div>
              <div
                role="status"
                className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center m-[50px]"
              >
                <div className="w-full">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[700px] mb-4 "></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[700px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[700px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[700px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[700px]"></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-2/4 h-full xl:h-[1050px] hide-scrollbar overflow-y-scroll text-[12px] sm:p-[20px] flex flex-col relative gap-2 outline-none items-center max-[1100px]:w-full ">
              <PersonalinfoComponent />
              <ProfessionalSummary />
              <EmployementComponent />
              <EducationComponent />
              <CertificationComponent />
              <WebsiteComponent />
              <SkillComponent />
              <CustomSection />
            </div>
          )}

          <div className=" w-1/2 right-0 h-full overflow-y-scroll sm:p-5 py-[30px] max-[1100px]:relative max-[1100px]:overflow-visible max-[1100px]:w-full max-[650px]:p-0 bg-clearanceDarkBlue hide-scrollbar">
            {leftSkeleton ? (
              <div className="flex justify-center">
                <div
                  role="status"
                  className="border border-gray-200 rounded shadow animate-pulse md:p-[10px] dark:border-gray-700 w-[80vh] mr-[20px] p-[300px] overflow-hidden flex justify-center h-[90vh] items-center"
                >
                  <div className="flex items-center justify-center mb-4 bg-gray-300 rounded dark:bg-gray-700 h-[80vh]  w-[80%] "></div>
                </div>
              </div>
            ) : (
              <div className="w-full ">
                <div className="flex justify-between items-center p-[15px] w-full  mb-5 gap-4">
                  <div class="flex justify-between space-x-2">
                    <div>
                      {isLoading ? (
                        <div
                          aria-label="Loading..."
                          role="status"
                          class="flex justify-betwee space-x-2"
                        >
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            xmlns="http://www.w3.org/2000/svg"
                            className="animate-spin w-4 h-4 text-clearanceGrey"
                          >
                            <path d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12"></path>
                          </svg>
                          <span className="text-xs font-medium text-clearanceGrey">
                            Saving...
                          </span>
                        </div>
                      ) : (
                        <div
                          aria-label="Loading..."
                          role="status"
                          class="flex justify-betwee space-x-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-check2-all"
                            viewBox="0 0 16 16"
                            className="w-4 h-4 text-clearanceGrey"
                          >
                            <path
                              d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"
                              fill="#8d77ab"
                            ></path>
                            <path
                              d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"
                              fill="#8d77ab"
                            ></path>
                          </svg>
                          <span className="text-xs font-medium text-clearanceGrey">
                            Saved
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-[15px] sm:gap-[70px]">
                    <Link to={`/user/templates/${id}`}>
                      <button className="bg-clearanceGrey px-[20px] py-[7px] text-white text-[14px] rounded-[7px]">
                        Choose Templates
                      </button>
                    </Link>
                  </div>
                </div>

                <div
                  ref={resumeRef}
                  className=" w-full  flex justify-center h-[900px] overflow-y-scroll hide-scrollbar"
                >
                  {selectedTemplate === 1 ? <Resume /> : null}
                  {selectedTemplate === 2 ? <Resume2 /> : null}
                  {selectedTemplate === 3 ? <Resume3 /> : null}
                  {selectedTemplate === 4 ? <Resume1 /> : null}
                  {/* {selectedTemplate === 3 ? <Resume3 /> : null}
                  {selectedTemplate === 4 ? <Resume4 /> : null}
                  {selectedTemplate === 5 ? <Resume5 /> : null} */}
                </div>
              </div>
            )}
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};
export default CreateResume;
