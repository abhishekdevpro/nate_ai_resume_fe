import React from "react";
import { useSelector } from "react-redux";

const Resume2 = () => {
  const personalInfoValues = useSelector(
    (state) => state.createResumeSlice.personalInfoValues
  );
  const educationData = useSelector(
    (state) => state.createResumeSlice.educationData
  );
  const employmentData = useSelector(
    (state) => state.createResumeSlice.employmentData
  );
  const customSectionData = useSelector(
    (state) => state.createResumeSlice.customSectionData
  );
  const skillsData = useSelector((state) => state.createResumeSlice.skillsData);
  const websiteData = useSelector(
    (state) => state.createResumeSlice.websiteData
  );
  const editorValue = useSelector((state) => state.editor.editorValue);
  return (
    <div className="h-full bg-white min-h-[846px] overflow-y-scroll hide-scrollbar w-[600px] flex flex-col fira-sans-font gap-[12px] sm:text-[11px] text-[7px] ">
      {personalInfoValues.firstName ||
      personalInfoValues.lastName ||
      personalInfoValues.jobTitle ? (
        <div className="w-full flex flex-col gap-[7px] p-[30px] bg-[#f7f7f7] text-black">
          <h1 className="text-[20px] font-semibold">
            {personalInfoValues.firstName} {personalInfoValues.lastName}
          </h1>
          {personalInfoValues.jobTitle ? (
            <h2>{personalInfoValues.jobTitle}</h2>
          ) : null}
        </div>
      ) : null}
      <div className=" flex w-full">
        <div className="w-[40%] flex flex-col gap-[12px]  p-[15px]">
          {personalInfoValues.address ||
          personalInfoValues.city ||
          personalInfoValues.country ||
          personalInfoValues.phoneNumber ||
          personalInfoValues.email ||
          personalInfoValues.postalcode ||
          personalInfoValues.drivinglicense ||
          personalInfoValues.nationality ||
          personalInfoValues.dateofbirth ||
          personalInfoValues.placeofbirth ? (
            <div className="flex flex-col gap-[5px]">
              <h2 className="text-[10px] font-semibold">Contact</h2>
              <div className="flex flex-col gap-[2px]">
                {personalInfoValues.phoneNumber ? (
                  <p className="flex items-center gap-[4px]">
                    <span className="font-medium">PHONE - </span>
                    {personalInfoValues.phoneNumber}
                  </p>
                ) : null}
                {personalInfoValues.email ? (
                  <p className="flex items-center flex-wrap gap-[4px]">
                    <span className="font-medium">EMAIL - </span>
                    {personalInfoValues.email}
                  </p>
                ) : null}
                {personalInfoValues.address ? (
                  <p className="flex flex-wrap items-center gap-[4px]">
                    <span className="font-medium">ADDRESS - </span>
                    {personalInfoValues.address}
                  </p>
                ) : null}
                {personalInfoValues.city ||
                personalInfoValues.postalcode ||
                personalInfoValues.country ? (
                  <p className="flex items-center flex-wrap gap-[4px]">
                    <span className="font-medium">CITY - </span>
                    {personalInfoValues.city} {personalInfoValues.postalcode}{" "}
                    {personalInfoValues.country}
                  </p>
                ) : null}
                {personalInfoValues.nationality ? (
                  <p className="flex items-center gap-[4px]">
                    <span className="font-medium">NATIONALITY - </span>
                    {personalInfoValues.nationality}
                  </p>
                ) : null}
                {personalInfoValues.placeofbirth ||
                personalInfoValues.dateofbirth ? (
                  <p className="flex items-center flex-wrap gap-[4px]">
                    <span className="font-medium">
                      DATE / PLACE OF BIRTH -{" "}
                    </span>
                    {personalInfoValues.dateofbirth} {" / "}
                    {personalInfoValues.placeofbirth}
                  </p>
                ) : null}
                {personalInfoValues.drivinglicense ? (
                  <p className="flex items-center flex-wrap gap-[4px]">
                    <span className="font-medium">DRIVING LICENSE - </span>
                    {personalInfoValues.drivinglicense}
                  </p>
                ) : null}
              </div>
            </div>
          ) : null}
          {editorValue ? (
            <div className="flex border-t border-black pt-[10px] flex-col gap-[5px]">
              <h2 className="text-[10px] font-semibold">
                Professional Summary
              </h2>
              <p>{editorValue}</p>
            </div>
          ) : null}

          {skillsData[0] ? (
            <div className="flex flex-col gap-[7px]">
              <h2 className="text-[10px] font-semibold">Skills</h2>
              <ul className="list-disc">
                {skillsData.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          ) : null}

          {websiteData[0] ? (
            <div className="flex flex-col gap-[7px]">
              <h2 className="text-[10px] font-semibold">Social Links</h2>
              <div className="flex flex-col w-full gap-[4px]">
                {websiteData.map((item, index) => {
                  return (
                    <a
                      target="_blank"
                      className="underline"
                      key={index}
                      href={item.link}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>
          ) : null}

          {educationData[0] ? (
            <div className="flex flex-col gap-[7px]">
              <h2 className="text-[10px] font-semibold">Education</h2>
              {educationData.map((item, index) => {
                return (
                  <div key={index} className="flex flex-col gap-[2px]">
                    <p className="font-medium">{item.degree}</p>
                    <p>
                      {item.school} {item.city1}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        <div className="w-[60%] p-[15px] border-l border-black flex flex-col gap-[12px]">
          {employmentData[0] ? (
            <div className="flex flex-col gap-[7px]">
              <h2 className="text-[12px] font-semibold">Experience</h2>
              {employmentData.map((item, index) => {
                return (
                  <div key={index} className="flex flex-col gap-[4px]">
                    <p className="font-medium">{item.jobtitle1}</p>
                    <p>
                      {item.employer} {item.jobcity}
                    </p>
                    <p>
                      {item.jobstart} {item.jobend}
                    </p>
                    <p>{item.jobdescription}</p>
                  </div>
                );
              })}
            </div>
          ) : null}

          {customSectionData[0] ? (
            <div className="flex flex-col gap-[7px]">
              {customSectionData.map((item, index) => {
                return (
                  <div key={index} className="flex flex-col gap-[4px]">
                    <h2 className="text-[12px] font-semibold">
                      {item.sectionTitle}
                    </h2>
                    <p>
                      {item.activity} {item.customSectionCity}
                    </p>
                    <p>
                      {item.customStartDate} {item.customEndDate}
                    </p>
                    <p>{item.customDescription}</p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Resume2;
