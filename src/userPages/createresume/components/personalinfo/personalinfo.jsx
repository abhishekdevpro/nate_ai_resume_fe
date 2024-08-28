import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FaCirclePlus, FaCircleXmark } from "react-icons/fa6";
import { setImageValue } from "../../../../state/reducer/imageSlice";
import { setPersonalInfoValues } from "../../../../state/reducer/createResumeSlice";
function PersonalInfoComponent(props) {
  const inputValues = useSelector((state) => state.personalInfoInput);
  const dispatch = useDispatch();

  const [additionalInfo, setAdditionalInfo] = useState(false);
  const showAdditionalInfo = () => {
    setAdditionalInfo((prev) => !prev);
  };

  const personalInfoValues = useSelector(
    (state) => state.createResumeSlice.personalInfoValues
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setPersonalInfoValues({ ...personalInfoValues, [name]: value }));
  };

  const handleImagePreview = (e) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const imageData = event.target.result;
      // Dispatch the action to set the image data in the Redux store
      dispatch(setImageValue(imageData));
    };

    if (e.target.files.length > 0) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Use useEffect to log the updated imageValue when it changes

  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <input
          type="text"
          id="docname"
          name="docname"
          value={personalInfoValues.docname}
          placeholder="Untitled"
          className="px-2 py-1 w-36 outline-none text-[14px]"
          onChange={handleChange}
        />
        <label htmlFor="docname"></label>
      </div>
      <div className="flex items-start w-full my-4">
        <h2 className="text-[17px] text font-bold">Personal Information</h2>
      </div>

      <form className="mt-2 w-full" onSubmit={() => {}}>
        <div className="flex flex-col justify-between gap-0 align-middle w-full">
          <div className="flex items-center justify-between gap-x-[10px]">
            <div className="w-full relative my-2">
              <label htmlFor="jobTitle" className="text-[12px] absolute left-0">
                Desired Job Title:
              </label>
              <input
                className="w-full p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] mt-7 focus:outline-none border-[0.5px] border-[#323232] rounded-lg"
                id="jobTitle"
                type="text"
                value={personalInfoValues.jobTitle}
                name="jobTitle"
                placeholder="jobTitle"
                onChange={handleChange}
              />
            </div>

            {/* <div className="w-2/4 flex flex-col gap-2 mb-3">
              <label htmlFor="image">Upload A Image</label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImagePreview}
                className="w-full"
              />
            </div> */}
          </div>
          <div className="flex items-center justify-between gap-x-[10px]">
            <div className="w-full relative my-2">
              <label
                htmlFor="firstName"
                className="text-[12px] absolute left-0"
              >
                First Name:
              </label>
              <input
                className="w-full p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] mt-7 focus:outline-none border-[0.5px] border-[#323232] rounded-lg"
                id="firstName"
                type="text"
                value={personalInfoValues.firstName}
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
              />
            </div>

            <div className="w-full relative my-2">
              <label htmlFor="lastName" className="text-[12px] absolute left-0">
                Last Name:
              </label>
              <input
                className="w-full p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] mt-7 focus:outline-none border-[0.5px] border-[#323232] rounded-lg"
                id="lastName"
                type="text"
                value={personalInfoValues.lastName}
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-x-[10px]">
            <div className="w-full relative my-2">
              <label htmlFor="email" className="text-[12px] absolute left-0">
                E-mail:
              </label>
              <input
                className="w-full p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] mt-7 focus:outline-none border-[0.5px] border-[#323232] rounded-lg"
                id="email"
                type="email"
                value={personalInfoValues.email}
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
              />
            </div>

            <div className="w-full relative my-2">
              <label
                htmlFor="phoneNumber"
                className="text-[12px] absolute left-0"
              >
                Phone Number:
              </label>
              <input
                className="w-full p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] mt-7 focus:outline-none border-[0.5px] border-[#323232] rounded-lg"
                id="phoneNumber"
                type="tel"
                value={personalInfoValues.phoneNumber}
                name="phoneNumber"
                placeholder="Phone Number"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-x-[10px]">
            <div className="w-full relative my-2">
              <label htmlFor="city" className="text-[12px] absolute left-0">
                City
              </label>
              <input
                className="w-full p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] mt-7 focus:outline-none border-[0.5px] border-[#323232] rounded-lg"
                id="city"
                type="text"
                value={personalInfoValues.city}
                name="city"
                placeholder="Enter Your City"
                onChange={handleChange}
              />
            </div>

            <div className="w-full relative my-2">
              <label htmlFor="country" className="text-[12px] absolute left-0">
                State:
              </label>
              <input
                className="w-full p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] mt-7 focus:outline-none border-[0.5px] border-[#323232] rounded-lg"
                id="country"
                type="text"
                value={personalInfoValues.country}
                name="country"
                placeholder="Country"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-x-[10px]">
            <div className="w-full relative my-2">
              <label htmlFor="address" className="text-[12px] absolute left-0">
                Address:
              </label>
              <input
                className="w-full p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] mt-7 focus:outline-none border-[0.5px] border-[#323232] rounded-lg"
                id="address"
                type="text"
                name="address"
                value={personalInfoValues.address}
                placeholder="Your Address"
                onChange={handleChange}
              />
            </div>

            <div className="w-full relative my-2">
              <label
                htmlFor="postalcode"
                className="text-[12px] absolute left-0"
              >
                Postal Code:
              </label>
              <input
                className="w-full p-[10px] bg-cosretBlue-300 px-3 text-black text-[12px] mt-7 focus:outline-none border-[0.5px] border-[#323232] rounded-lg"
                id="postalcode"
                type="text"
                name="postalcode"
                value={personalInfoValues.postalcode}
                placeholder="Postal Code"
                onChange={handleChange}
              />
            </div>
          </div>
          {/* <h2
            onClick={showAdditionalInfo}
            className="text-[14px] mt-4 font-semibold w-full flex gap-3 items-center cursor-pointer"
          >
            Add Additional Info
            {additionalInfo ? <FaCircleXmark /> : <FaCirclePlus />}
          </h2> */}
        </div>
      </form>
    </div>
  );
}

export default PersonalInfoComponent;
