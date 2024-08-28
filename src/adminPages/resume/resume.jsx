import React from "react";
import { useSelector } from "react-redux";

const Resume = () => {
  const personalInfoValues = useSelector(
    (state) => state.createResumeSlice.personalInfoValues
  );
  const educationData = useSelector(
    (state) => state.createResumeSlice.educationData
  );
  const employmentData = useSelector(
    (state) => state.createResumeSlice.employmentData
  );
  const websiteData = useSelector(
    (state) => state.createResumeSlice.websiteData
  );
  const customSectionData = useSelector(
    (state) => state.createResumeSlice.customSectionData
  );
  const skillsData = useSelector((state) => state.createResumeSlice.skillsData);
  const editorValue = useSelector((state) => state.editor.editorValue);
  return (
    <div className="h-full bg-white min-h-[846px] overflow-y-scroll hide-scrollbar w-[600px] flex flex-col fira-sans-font gap-[12px] text-[12px] p-[15px]">
      <div className="flex flex-col gap-[12px]">
        {personalInfoValues.firstName || personalInfoValues.lastName ? (
          <h1 className="text-[20px] font-semibold">
            {personalInfoValues.firstName} {personalInfoValues.lastName}
          </h1>
        ) : null}
        {personalInfoValues.jobTitle ? (
          <h1 className="text-[14px] font-semibold">
            {personalInfoValues.jobTitle}
          </h1>
        ) : null}
        {personalInfoValues.phoneNumber ||
        personalInfoValues.email ||
        personalInfoValues.address ||
        personalInfoValues.city ||
        personalInfoValues.postalcode ||
        personalInfoValues.country ||
        personalInfoValues.nationality ||
        personalInfoValues.drivinglicense ||
        personalInfoValues.placeofbirth ||
        personalInfoValues.dateofbirth ? (
          <ul className="flex items-center flex-wrap  gap-[10px]">
            {personalInfoValues.phoneNumber ? (
              <li>{personalInfoValues.phoneNumber}</li>
            ) : null}
            {personalInfoValues.email ? (
              <li>{personalInfoValues.email}</li>
            ) : null}
            {personalInfoValues.address ? (
              <li>{personalInfoValues.address}</li>
            ) : null}
            {personalInfoValues.city ? (
              <li>{personalInfoValues.city}</li>
            ) : null}
            {personalInfoValues.postalcode ? (
              <li>{personalInfoValues.postalcode}</li>
            ) : null}
            {personalInfoValues.country ? (
              <li>{personalInfoValues.country}</li>
            ) : null}

            {personalInfoValues.nationality ? (
              <li>{personalInfoValues.nationality}</li>
            ) : null}
            {personalInfoValues.drivinglicense ? (
              <li>{personalInfoValues.drivinglicense}</li>
            ) : null}
            {personalInfoValues.placeofbirth ? (
              <li>{personalInfoValues.placeofbirth}</li>
            ) : null}
            {personalInfoValues.dateofbirth ? (
              <li>{personalInfoValues.dateofbirth}</li>
            ) : null}
          </ul>
        ) : null}
        {personalInfoValues.clearance ? (
          <div className="flex flex-col gap-[5px]">
            <h2 className="text-[14px] font-semibold">Security Clearance</h2>
            {personalInfoValues.clearance}
          </div>
        ) : null}
        {editorValue ? (
          <div className="border-t border-black pt-[5px]">{editorValue}</div>
        ) : null}

        {skillsData[0] ? (
          <>
            <h2 className="text-[14px] font-semibold">Skills</h2>
            <div className="flex flex-wrap w-full gap-[12px] items-center">
              {skillsData.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </div>
          </>
        ) : null}

        {websiteData[0] ? (
          <>
            <h2 className="text-[14px] font-semibold">Social Links</h2>
            <div className="flex flex-wrap w-full gap-[12px] items-center">
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
          </>
        ) : null}

        {employmentData[0] ? (
          <div className="flex flex-col gap-[7px]">
            <h2 className="text-[14px] font-semibold">Experience</h2>
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

        {educationData[0] ? (
          <div className="flex flex-col gap-[7px]">
            <h2 className="text-[14px] font-semibold">Education</h2>
            {educationData.map((item, index) => {
              return (
                <div key={index} className="flex flex-col gap-[4px]">
                  <p className="font-medium">{item.degree}</p>
                  <p>
                    {item.school} {item.city1}
                  </p>
                  <p>
                    {item.start} {item.end}
                  </p>
                  <p>{item.edudescription}</p>
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
                  <h2 className="text-[14px] font-semibold">
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
  );
};

export default Resume;
