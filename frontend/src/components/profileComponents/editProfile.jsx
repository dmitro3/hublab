"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import Edit from "../../assets/edit.svg";
import ProfileImg  from "../../assets/profileImg.png";
import XLogo from "../../assets/X-logo.svg";
import Linkedin from "../../assets/linkedin-logo.svg";
import Discord from "../../assets/discord-logo.svg";
import Github from "../../assets/github-logo.svg";
import Website from "../../assets/website-logo.svg";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import Socials from "../socials";

const EditProfile = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
    interest:[],
    twitter: "",
    linkedin: "",
    discord: "",
    github: "",
    instagram: "",
    website: "",
  };

  console.log(selectedOption?.map((items) => items.value));
  const validationchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().required("email is required"),
  });

  const options = [
    { value: "development", label: "Development" },
    { value: "content", label: "Content" },
    { value: "blockchain", label: "Blockchain" },
    { value: "trading", label: "Trading" },
    { value: "bounty", label: "Bounty" },
  ];

  return (
    <div>
      <div>
        <div className="w-[115px] h-[115px] bg-slate-500 relative rounded-full">
          {/* {selectedImage && ( */}
          <Image
            src={selectedImage === "" ? ProfileImg: selectedImage}
            alt="profile picture"
            width={200}
            height={200}
            className="w-full h-full rounded-full bg-cover"
          />
          {/* )} */}
          <div
            className="bg-white p-[10px] rounded-full z-20 absolute -right-3 shadow-md top-[70px] cursor-pointer "
            onClick={handleUploadButtonClick}
          >
            <Image src={Edit} alt="Edit image" className=" w-5" />
          </div>
        </div>
        <input
          name="profileImageDoc"
          type="file"
          capture="environment"
          className="hidden"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
        />
      </div>
      <Formik
        initialValues={initialValue}
        onSubmit={() => {}}
        validationSchema={validationchema}
      >
        {({ isValid, handleSubmit, values, dirty, setFieldValue }) => (
          <Form className="mt-10 text-[#0D0E32] font-medium text-[16px] flex flex-col gap-5">
            <div>
              <p className="">First Name</p>
              <Field
                name="firstName"
                placeholder="first name"
                className="border rounded-lg w-full bg-transparent px-[20px] py-[10px] mt-2 text-[14px] font-normal outline-1 outline-blue-400 border-[#222482]"
              />
            </div>
            <div>
              <p>Last Name</p>
              <Field
                name="lastName"
                placeholder="last name"
                className="border rounded-lg w-full bg-transparent px-[20px] py-[10px] mt-2 text-[14px] outline-1 outline-blue-400 font-normal border-[#222482]"
              />
            </div>
            <div>
              <p>Email Address</p>
              <Field
                name="email"
                placeholder="name@email.com"
                className="border rounded-lg w-full bg-transparent px-[20px] py-[10px] mt-2 text-[14px] outline-1 outline-blue-400 font-normal border-[#222482]"
              />
            </div>
            <div>
              <p>Bio</p>
              <Field
                name="bio"
                placeholder="description about yourself"
                as="textarea"
                className="border rounded-lg w-full bg-transparent px-[20px] py-[10px] mt-2 text-[14px] outline-1 outline-blue-400 font-normal border-[#222482]"
              />
            </div>
            <div>
              <p className="mb-2">Interest</p>
              <Select
                // className="bg-transparent"
                defaultValue={selectedOption}
                // onChange={setSelectedOption}
                onChange={(selectedOptions) => {
                  setSelectedOption(selectedOptions); // Update local state
                  setFieldValue(
                    "interest",
                    selectedOptions.map((option) => option.value)
                  ); // Update Formik field value
                }}
                options={options}
                isMulti
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused
                      ? "none"
                      : state.onKeyDown
                      ? "none"
                      : "#222482",
                    outlineColor: "none",
                    outlineWidth: 0,
                    paddingLeft: 10,
                    paddingTop: 5,
                    paddingBottom: 5,
                    backgroundColor: 'transparent',
                    borderRadius: 8,
                    fontSize: 14,
                    "&:hover": {
                      // Remove border color change on hover
                      borderColor: "none",
                    },
                  }),
                }}
              />
            </div>

            <div>
              <p className="mb-2">Socials</p>
              <div className="font-normal">
                <Socials
                  name="twitter"
                  logo={XLogo}
                  setFieldValue={setFieldValue}
                  values={values}
                />
                <Socials
                  name="linkedin"
                  logo={Linkedin}
                  setFieldValue={setFieldValue}
                />
                <Socials
                  name="discord"
                  logo={Discord}
                  setFieldValue={setFieldValue}
                />
                <Socials
                  name="github"
                  logo={Github}
                  setFieldValue={setFieldValue}
                />
                <Socials
                  name="instagram"
                  logo={XLogo}
                  setFieldValue={setFieldValue}
                />
                <Socials
                  name="website"
                  logo={Website}
                  setFieldValue={setFieldValue}
                />
              </div>
            </div>
            <button type="button" onClick={() => console.log(values)}>
              submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditProfile;
