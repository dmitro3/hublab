"use client";
import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Image from "next/image";
import UploadIcon from "../../assets/upload-icon.svg";
import Calender from "../../assets/calender.svg";
import Button from "../Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const Reward = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  console.log(selectedDate);

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

  const handleDateChange = (date) => {
    const formattedDate = dayjs(date).format("DD/MM/YYYY");
    // setSelectedDate(formattedDate)
    console.log(formattedDate);
  };

  const initialValues = {
    participants: "",
    method: "",
    coin: "verxio points",
    endDate: "",
  };

  return (
    <div className="mt-10 w-[60%]">
      <Formik onSubmit={() => {}} initialValues={initialValues}>
        {({ isValid, handleSubmit, values, dirty, setFieldValue }) => (
          <Form className="flex flex-col gap-11">
            <div>
              <p className="font-semibold text-[24px] mb-5">
                <span className="mr-3 text-">*</span>Number of Participants to
                be Rewarded
              </p>
              <Field
                className="border outline-none bg-transparent font-normal text-[14px] rounded-lg w-full px-5 py-3 border-[#0D0E32]"
                name="title"
                placeholder="Enter a name"
              />
            </div>
            <div>
              <p className="font-semibold text-[24px] mb-5">
                <span className="mr-3 text-">*</span>Method of Reward
              </p>
              <Field
                className="border outline-none bg-transparent font-normal text-[14px] rounded-lg w-full px-5 py-3 border-[#0D0E32]"
                name="title"
                placeholder="Enter a name"
              />
            </div>
            <div>
              <p className="font-semibold text-[24px] mb-5">
                <span className="mr-3 text-">*</span>Reward Coin
              </p>
              <div className="flex justify-start">
                <Button
                  name="verxio point"
                  className="px-4 py-2 bg-white text-primary border rounded-[10px] border-primary text-[14px]"
                  shade="left-[4px] bg-[#0D0E32] border-none rounded-[10px]"
                />
              </div>
            </div>

            <div>
              <p className="font-semibold text-[24px] mb-5">
                <span className="mr-3 text-">*</span>Rewards
              </p>
              <div className="flex justify-end text-end border rounded-lg border-primary px-16 py-5 text-[#484851] text-[16px] ">
                <div>
                  <p className="flex items-center">
                    Number of participants:{" "}
                    <span className="text-[32px] font-bold ml-2">2500</span>
                  </p>
                  <p>
                    Number of points:{" "}
                    <span className="text-[32px] font-bold ml-2">
                      40 points
                    </span>
                  </p>
                  <div className="border my-3"></div>
                  <p className="text-[32px] font-bold">100,000</p>
                </div>
              </div>
              <div className="flex justify-end text-end border rounded-lg border-primary px-16 py-5 text-[#484851] text-[16px] mt-4">
                <p>
                  Total Reward:{" "}
                  <span className="text-[32px] font-bold">100,000</span> points
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-10">
              <Button
                type="button"
                name="publish"
                className="border border-primary font-medium text-[16px]"
                shade="border-primary"
                onClick={() => console.log(values)}
              />
              <Button
                type="button"
                name="preview"
                className="font-medium text-[16px]"
                outline
                onClick={() => console.log(values)}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Reward;
