import React from "react";
import { useSelector } from "react-redux";

const Resume3 = () => {
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
    <div className="h-full bg-white min-h-[846px] overflow-y-scroll hide-scrollbar w-[600px] flex flex-col fira-sans-font gap-[12px] sm:text-[11px] text-[10px] p-[20px]">
      {personalInfoValues.firstName || personalInfoValues.lastName ? (
        <h1 className="text-[20px] font-semibold">
          {personalInfoValues.firstName} {personalInfoValues.lastName}
        </h1>
      ) : null}
      {personalInfoValues.jobTitle ||
      personalInfoValues.city ||
      personalInfoValues.country ||
      personalInfoValues.email ||
      personalInfoValues.phoneNumber ||
      personalInfoValues.address ||
      personalInfoValues.postalcode ||
      personalInfoValues.drivinglicense ||
      personalInfoValues.nationality ||
      personalInfoValues.placeofbirth ||
      personalInfoValues.dateofbirth ? (
        <div className="flex flex-col gap-[7px]">
          {personalInfoValues.jobTitle ? (
            <h2 className="text-[16px] font-medium">
              {personalInfoValues.jobTitle}
            </h2>
          ) : null}
          {personalInfoValues.city ||
          personalInfoValues.country ||
          personalInfoValues.email ||
          personalInfoValues.phoneNumber ||
          personalInfoValues.address ||
          personalInfoValues.postalcode ||
          personalInfoValues.drivinglicense ||
          personalInfoValues.nationality ||
          personalInfoValues.placeofbirth ||
          personalInfoValues.dateofbirth ? (
            <div className="flex flex-wrap items-center gap-[7px]">
              {personalInfoValues.city ? (
                <p>{personalInfoValues.city}</p>
              ) : null}
              {personalInfoValues.country ? (
                <p>{personalInfoValues.country}</p>
              ) : null}
              {personalInfoValues.email ? (
                <p>{personalInfoValues.email}</p>
              ) : null}
              {personalInfoValues.phoneNumber ? (
                <p>{personalInfoValues.phoneNumber}</p>
              ) : null}
              {personalInfoValues.address ? (
                <p>{personalInfoValues.address}</p>
              ) : null}
              {personalInfoValues.postalcode ? (
                <p>{personalInfoValues.postalcode}</p>
              ) : null}
              {personalInfoValues.drivinglicense ? (
                <p>{personalInfoValues.drivinglicense}</p>
              ) : null}
              {personalInfoValues.nationality ? (
                <p>{personalInfoValues.nationality}</p>
              ) : null}
              {personalInfoValues.placeofbirth ? (
                <p>{personalInfoValues.placeofbirth}</p>
              ) : null}
              {personalInfoValues.dateofbirth ? (
                <p>{personalInfoValues.dateofbirth}</p>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}
      {editorValue ? <p>{editorValue}</p> : null}
      {personalInfoValues.clearance ? (
        <div className="flex flex-col gap-[4px]">
          <h2 className="font-semibold text-[12px]">SECURITY CLEARANCE</h2>
          <p>{personalInfoValues.clearance}</p>
        </div>
      ) : null}
      {employmentData[0] ? (
        <div className="w-full flex flex-col gap-[7px]">
          <h2 className="font-semibold text-[12px] ">
            RELEVANT WORK EXPERIENCE
          </h2>
          {employmentData.map((item, index) => {
            return (
              <div className="flex flex-col gap-[4px]" key={index}>
                <div className="flex justify-between items-center font-medium">
                  <h3 className="">
                    {item.jobtitle1} {item.jobcity}
                  </h3>
                  <h3>
                    {item.jobstart} - {item.jobend}
                  </h3>
                </div>
                <h4>{item.employer}</h4>
                <p>{item.jobdescription}</p>
              </div>
            );
          })}
        </div>
      ) : null}
      {educationData[0] ? (
        <div className="w-full flex flex-col gap-[7px]">
          <h2 className="font-semibold text-[12px] ">EDUCATION</h2>
          {educationData.map((item, index) => {
            return (
              <div className="flex flex-col gap-[4px]" key={index}>
                <div className="flex justify-between items-center font-medium">
                  <h3 className="">
                    {item.school} {item.city1}
                  </h3>
                  <h3>
                    {item.start} - {item.end}
                  </h3>
                </div>
                <h4>{item.degree}</h4>
                <p>{item.edudescription}</p>
              </div>
            );
          })}
        </div>
      ) : null}
      {skillsData[0] ? (
        <div className="flex flex-col gap-[7px]">
          <h2 className="text-[12px] font-semibold">Skills</h2>
          <div className="flex flex-col gap-[2px]">
            {skillsData.map((item, index) => {
              return (
                <p className="font-medium" key={index}>
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      ) : null}

      {websiteData[0] ? (
        <div className="flex flex-col gap-[7px]">
          <h2 className="text-[12px] font-semibold">Social Links</h2>
          <div className="flex flex-col w-full gap-[2px]">
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

      {customSectionData[0] ? (
        <div className="w-full flex flex-col gap-[7px]">
          {customSectionData.map((item, index) => {
            return (
              <div className="flex flex-col gap-[4px]" key={index}>
                <h2 className="font-semibold text-[12px] ">
                  {item.sectionTitle}
                </h2>
                <div className="flex justify-between items-center font-medium">
                  <h3 className="">
                    {item.activity} {item.customSectionCity}
                  </h3>
                  <h3>
                    {item.customStartDate} - {item.customEndDate}
                  </h3>
                </div>
                <p>{item.customDescription}</p>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Resume3;
