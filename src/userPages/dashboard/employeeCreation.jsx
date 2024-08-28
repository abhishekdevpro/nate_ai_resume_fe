import React, { useState, useRef } from "react";
import DashboardLayout from "./layout";
import Profile from "../../assets/profile.webp";
import axios from "axios";
const EmployeeCreation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [imgData, setImgData] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImgData(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("email", email);
    formData.append("mobile", phoneNumber);
    formData.append("address", address);
    if (selectedFile) formData.append("photo", selectedFile);

    const token = localStorage.getItem("adminAuthToken");

    axios({
      method: "POST",
      url: "https://api.resumesquad.net/api/admin/employee",
      headers: { Authorization: token },
      data: formData,
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <DashboardLayout>
        <div className="w-full flex h-screen flex-col gap-[20px] ">
          <h2 className="text-white font-bold text-[25px]">
            Employee Creation
          </h2>
          <div className="bg-white h-full overflow-y-scroll xl:rounded-tl-[20px] hide-scrollbar py-4 md:py-7 px-4 md:px-8 xl:px-10">
            <div className="mt-7 overflow-x-auto">
              <form className="mt-2 w-full ">
                <div className="flex items-center justify-between gap-x-[40px]">
                  <div className="w-2/4 ">
                    <div className="flex flex-col justify-between gap-0 align-middle w-full">
                      <div className="flex items-center justify-between gap-x-[10px]">
                        <div className="w-2/4 relative my-2">
                          <label
                            htmlFor="fname"
                            className="text-[14px] absolute left-0 text-[#718EBF] font-medium"
                          >
                            First Name
                          </label>
                          <input
                            className="w-full p-[10px] bg-[#E6EFF580] px-3 text-black text-[12px] mt-7 focus:outline-none border-[1px] border-[#00000033] rounded-lg"
                            id="fname"
                            type="text"
                            name="fname"
                            placeholder="First Name"
                            value={firstName}
                            onChange={handleFirstNameChange}
                          />
                        </div>
                        <div className="w-2/4 relative my-2">
                          <label
                            htmlFor="name"
                            className="text-[14px] font-medium absolute left-0 text-[#718EBF]"
                          >
                            Last Name
                          </label>
                          <input
                            className="w-full p-[10px] bg-[#E6EFF580] px-3 text-black text-[12px] mt-7 focus:outline-none border-[1px] border-[#00000033] rounded-lg"
                            id="lname"
                            type="text"
                            name="lname"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={handleLastNameChange}
                          />
                        </div>
                      </div>
                      <div className="w-full relative my-2">
                        <label
                          htmlFor="email"
                          className="text-[14px] font-medium absolute left-0  text-[#718EBF]"
                        >
                          E-mail:
                        </label>
                        <input
                          className="w-full p-[10px] bg-[#E6EFF580] px-3 text-black text-[12px] mt-7 focus:outline-none border-[1px] border-[#00000033] rounded-lg"
                          value={email}
                          onChange={handleEmailChange}
                          id="email"
                          type="email"
                          name="email"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="w-full relative my-2">
                        <label
                          htmlFor="phoneNumber"
                          className="text-[14px] font-medium absolute left-0  text-[#718EBF]"
                        >
                          Phone Number:
                        </label>
                        <input
                          className="w-full p-[10px] bg-[#E6EFF580] px-3 text-black text-[12px] mt-7 focus:outline-none border-[1px] border-[#00000033] rounded-lg"
                          id="phoneNumber"
                          type="tel"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          value={phoneNumber}
                          onChange={handlePhoneNumberChange}
                        />
                      </div>

                      <div className="w-full relative my-2 ">
                        <label
                          htmlFor="address"
                          className="text-[14px] font-medium absolute left-0  text-[#718EBF]"
                        >
                          Address
                        </label>
                        <input
                          className="w-full p-[10px] bg-[#E6EFF580] px-3 text-black text-[12px] mt-7 focus:outline-none border-[1px] border-[#00000033] rounded-lg"
                          id="address"
                          type="text"
                          name="address"
                          placeholder="Enter Your Address"
                          value={address}
                          onChange={handleAddressChange}
                        />
                      </div>
                      <div className="w-full relative my-2 ">
                        <button
                          onClick={handleSubmit}
                          type="button"
                          className="text-white bg-[#1814F3]  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                        >
                          Add Employee
                        </button>
                        <button
                          type="button"
                          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-[#000]  bg-[#E6EFF5] rounded-lg  border-[1px] border-[#00000033]  "
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="w-2/4  mb-3">
                    <div className="w-full my-2 flex flex-col gap-[12px] items-center">
                      <div className="border-[#00000033] flex justify-center w-[80%]">
                        {imgData ? (
                          <img
                            src={imgData}
                            className="w-full h-full object-fill"
                          />
                        ) : (
                          <img src={Profile} className="w-[80%] object-cover" />
                        )}
                      </div>

                      <input
                        type="file"
                        accept="image/png, image/jpeg"
                        id="image"
                        name="image"
                        className="w-full"
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                      />
                      <label
                        htmlFor="image"
                        className="text-center cursor-pointer"
                      >
                        Upload Photo
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default EmployeeCreation;
