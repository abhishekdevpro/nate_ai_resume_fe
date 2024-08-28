import React, { useState } from "react";
import "./stepper.css";
import { IoIosCheckboxOutline } from "react-icons/io";
import { CiInboxIn } from "react-icons/ci";
import { FaBox } from "react-icons/fa";
import { BsPersonCheck } from "react-icons/bs";
import { VscServerProcess } from "react-icons/vsc";
import { IoCloudDone } from "react-icons/io5";

const Stepper = () => {
  const steps = ["Resume Uploded", "Alloted", "In Process", "Step 4"];
  const [currentStep, setCurrentStep] = useState(4);
  const [complete, setComplete] = useState();

  return (
    <>
      <div className="flex justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item text-[13px] ${
              currentStep === i + 1 && "active"
            } ${(i + 1 < currentStep || complete) && "complete"} `}>
            <div className="step">
              {i + 1 < currentStep || complete ? (
                <IoIosCheckboxOutline size={24} />
              ) : (
                <div>
                  {i === 0 ? <FaBox size={15} /> : ""}
                  {i === 1 ? <BsPersonCheck size={19} /> : ""}
                  {i === 2 ? <VscServerProcess size={21} /> : ""}
                  {i === 3 ? <IoCloudDone size={21} /> : ""}
                </div>
              )}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stepper;
