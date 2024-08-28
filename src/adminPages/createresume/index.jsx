"use client";
import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
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

// import { toast, ToastContainer } from "react-toastify";

const CreateResume = () => {
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
  // const fetchTemplateData = () => {
  //   const token = localStorage.getItem("authToken");

  //   axios({
  //     method: "get",
  //     url: `/api/v1/template/${template}`,
  //     headers: {
  //       Authorization: "Bearer " + token,
  //     },
  //   })
  //     .then((response) => {
  //       console.table("social", response.data.Data.untitledsection);
  //       const data = response.data.Data;
  //       const skill = data.skills;
  //       const employmentData = data.employmenthistory;
  //       const education = data.education;
  //       const social = data.social;
  //       const professionalsummary = data.professionalsummary;
  //       const firstName = data.firstname;
  //       const lastName = data.lastname;
  //       const wantedjobtitle = data.wantedjobtitle;
  //       const phoneNumber = data.phone;
  //       const docname = data.templatename;
  //       const placeofbirth = data.placeofbirth;
  //       const dateofbirth = data.dateofbirth;
  //       const email = data.email;
  //       const clearance = data.securityclearance;
  //       const nationality = data.nationality;
  //       const drivinglicense = data.drivinglicense;
  //       const country = data.country;
  //       const city = data.city;
  //       const address = data.address;
  //       const postalcode = data.postalcode;
  //       const untitledsection = data.untitledsection;

  //       dispatch(setFirstName(firstName));
  //       dispatch(setLastName(lastName));
  //       dispatch(setJobTitle(wantedjobtitle));
  //       dispatch(setPhoneNumber(phoneNumber));
  //       dispatch(setDocname(docname));
  //       dispatch(setSkillsData(skill));
  //       dispatch(setEmail(email));
  //       dispatch(setDateofbirth(dateofbirth));
  //       dispatch(setPlaceofbirth(placeofbirth));
  //       dispatch(setNationality(nationality));
  //       dispatch(setDrivinglicense(drivinglicense));
  //       dispatch(setDrivinglicense(nationality));
  //       dispatch(setCountry(country));
  //       dispatch(setCity(city));
  //       dispatch(setEmploymentData(employmentData));
  //       dispatch(setEducationData(education));
  //       dispatch(setWebsiteData(social));
  //       dispatch(setEditorValue(professionalsummary));
  //       dispatch(setTextEditorValue(professionalsummary));
  //       dispatch(setAddressInput(address));

  //       dispatch(setPostalcodeInput(postalcode));
  //       dispatch(setDocname(docname));
  //       dispatch(setClearance(clearance));
  //       dispatch(setCustomSectionData(untitledsection));
  //       dispatch(
  //         setPersonalInfoValues({
  //           docname: docname,
  //           jobTitle: wantedjobtitle,
  //           firstName: firstName,
  //           city: city,
  //           lastName: lastName,
  //           postalcode: postalcode,
  //           postalcode: postalcode,
  //           drivinglicense: drivinglicense,
  //           placeofbirth: placeofbirth,
  //           dateofbirth: dateofbirth,
  //           clearance: clearance,
  //           nationality: nationality,
  //           country: country,
  //           address: address,
  //           phoneNumber: phoneNumber,
  //         })
  //       );
  //     })
  //     .catch((error) => {
  //       if (error.response.data) {
  //         navigate("/pagenotfound");
  //       }
  //     });
  //   setLeftSkeleton(false);
  // };
  // useEffect(() => {
  //   setLeftSkeleton(true);
  //   fetchTemplateData();
  // }, []);
  const data = {
    templatename: useSelector((state) => state.personalInfoInput.docname),
    wantedjobtitle: useSelector((state) => state.personalInfoInput.jobTitle),
    firstname: useSelector((state) => state.personalInfoInput.firstName),
    lastname: useSelector((state) => state.personalInfoInput.lastName),
    city: useSelector((state) => state.personalInfoInput.city),
    country: useSelector((state) => state.personalInfoInput.country),
    phone: useSelector((state) => state.personalInfoInput.phoneNumber),
    address: useSelector((state) => state.personalInfoInput.address),
    postalcode: useSelector((state) => state.personalInfoInput.postalcode),
    drivinglicense: useSelector(
      (state) => state.personalInfoInput.drivinglicense
    ),
    securityclearance: useSelector(
      (state) => state.personalInfoInput.clearance
    ),
    dateofbirth: useSelector((state) => state.personalInfoInput.dateofbirth),
    placeofbirth: useSelector((state) => state.personalInfoInput.placeofbirth),
    skills: useSelector((state) => state.skills.skillsData),
    employmenthistory: useSelector((state) => state.employment.employmentData),
    education: useSelector((state) => state.education.educationData),
    social: useSelector((state) => state.website.websiteData),
    professionalsummary: useSelector(
      (state) => state.textEditor.textEditorValue
    ),
    placeofbirth: useSelector((state) => state.editor.placeofbirth),
    dateofbirth: useSelector((state) => state.editor.dateofbirth),
    clearance: useSelector((state) => state.editor.clearance),
    email: useSelector((state) => state.personalInfoInput.email),
    drivinglicense: useSelector(
      (state) => state.personalInfoInput.drivinglicense
    ),
    nationality: useSelector((state) => state.personalInfoInput.nationality),
    placeofbirth: useSelector((state) => state.personalInfoInput.placeofbirth),
    dateofbirth: useSelector((state) => state.personalInfoInput.dateofbirth),
    docname: useSelector((state) => state.personalInfoInput.docname),
    untitledsection: useSelector(
      (state) => state.customSection.customSectionData
    ),
  };
  const [leftSkeleton, setLeftSkeleton] = useState(false);

  // const showToast = (error) => {
  //   toast.error(`${error}`, {
  //     data: {
  //       title: "Error",
  //       text: error,
  //     },
  //   });
  // };
  const token = localStorage.getItem("authToken");
  // const handlePostRequest = () => {
  //   axios({
  //     method: "put",
  //     url: `/api/v1/template/${template}`,
  //     data: {
  //       data: data,
  //     },
  //     headers: {
  //       Authorization: "Bearer " + token,
  //       "content-type": "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       // showToast(error.response.data.message);
  //     });
  // };
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log(data);
  //     captureImage();
  //     handlePostRequest(data);
  //   }, 4000);
  //   return () => clearTimeout(timer);
  // }, [data]);
  const loading = () => {
    setIsLoading(true);
  };
  const selectedTemplate = useSelector(
    (state) => state.template.selectedTemplate
  );

  const dispatch = useDispatch();

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
            <div className="w-2/4 h-full xl:h-[900px] hide-scrollbar overflow-y-scroll text-[12px] sm:p-[20px] flex flex-col relative gap-2 outline-none items-center max-[1100px]:w-full ">
              <PersonalinfoComponent />
              <ProfessionalSummary />
              <EmployementComponent />
              <EducationComponent />
              <WebsiteComponent />
              <SkillComponent />
              <CustomSection />
            </div>
          )}

          <div className=" w-1/2 right-0 h-full overflow-y-scroll sm:p-5 py-[30px] max-[1100px]:relative max-[1100px]:overflow-visible max-[1100px]:w-full max-[650px]:p-0 bg-[#4a47f3] hide-scrollbar">
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
              <div className="">
                <div className="flex justify-between items-center p-[15px] w-full flex-wrap mb-5 gap-4">
                  <div className="flex  w-full  flex-col sm:flex-row justify-between sm:items-center gap-[15px] sm:gap-[70px]">
                    <div>
                      {isLoading ? (
                        <div
                          aria-label="Loading..."
                          role="status"
                          className="flex justify-betwee space-x-2"
                        >
                          <svg
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            xmlns="http://www.w3.org/2000/svg"
                            className="animate-spin w-4 h-4 text-white"
                          >
                            <path d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12"></path>
                          </svg>
                          <span className="text-xs font-medium text-white">
                            Saving...
                          </span>
                        </div>
                      ) : (
                        <div
                          aria-label="Loading..."
                          role="status"
                          className="flex justify-betwee space-x-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-check2-all w-4 h-4 text-white"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"
                              fill="#ffffff"
                            ></path>
                            <path
                              d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                          <span className="text-xs font-medium text-white">
                            Saved
                          </span>
                        </div>
                      )}
                    </div>
                    <Link to={"/admin/templates"}>
                      <button className="bg-clearanceGrey px-[20px] py-[7px] text-white text-[14px] rounded-[7px]">
                        Choose Templates
                      </button>
                    </Link>
                  </div>
                  {/* <Link to={`/create-resume/${template}/templates`}>
                <div className="flex gap-2 items-center text-white font-semibold cursor-pointer">
                  <FaBorderAll />
                  <h2>Select Template</h2>
                </div>
              </Link> */}

                  {/* <div className="flex gap-5">
                {colors.map((item) => (
                  <span
                    key={item}
                    style={{ backgroundColor: item }}
                    className="h-9 w-9 rounded-3xl bg-slate-500 opacity-80 cursor-pointer hover:opacity-100"
                    onClick={() => dispatch(setColorValue(item))}
                  />
                ))}
              </div> */}
                </div>

                <div
                  ref={resumeRef}
                  className=" w-full  flex justify-center h-[900px] overflow-y-scroll hide-scrollbar"
                >
                  {selectedTemplate === 1 ? <Resume /> : null}
                  {selectedTemplate === 2 ? <Resume2 /> : null}
                  {selectedTemplate === 3 ? <Resume3 /> : null}
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
