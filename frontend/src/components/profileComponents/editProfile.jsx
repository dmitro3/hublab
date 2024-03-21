"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import Edit from "../../assets/edit.svg";
import ProfileImg  from "../../assets/profileImg.png";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup'

const EditProfile = () => {
  const [selectedImage, setSelectedImage] = useState("");

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
    interest: {},
    socials: {},
  };

  const validationchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().required("email is required"),
  });

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
          <Form>
            <div>
              <p>First Name</p>
              <Field name="firstName" />
            </div>
            <div>
              <p>Last Name</p>
              <Field name="lastName" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditProfile;
