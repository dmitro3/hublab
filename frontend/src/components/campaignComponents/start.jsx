"use client";
import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import Image from "next/image";
import UploadIcon from "../../assets/upload-icon.svg";
import Calender from "../../assets/calender.svg";
import Button from "../Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { setStart } from "@/store/slices/statesSlice";
import { root } from "@/store/store";

const Start = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  console.log(selectedDate);

  const fileInputRef = useRef(null);

  const dispatch = useDispatch();
  const router = useRouter()

  const start = useSelector((state)=> state.generalStates.start)



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
    title: start?.title || "",
    description: start?.description || "",
    startDate: start?.startDate || "",
    endDate: start?.endDate || "",
    bannerImg: start?.bannerImg || "",
  };

  return (
    <div className="mt-10 w-[60%] text-[#484851]">
      <Formik onSubmit={() => {}} initialValues={initialValues}>
        {({ isValid, handleSubmit, values, dirty, setFieldValue }) => (
          <Form className="flex flex-col gap-8">
            <div>
              <p className="font-semibold text-[24px] mb-5">
                <span className="mr-3 text-">*</span>Title
              </p>
              <Field
                className="border outline-none bg-transparent font-normal text-[14px] rounded-lg w-full px-5 py-3 border-[#0D0E32]"
                name="title"
                placeholder="Enter a name"
              />
            </div>
            <div>
              <p className="font-semibold text-[24px] mb-5">
                <span className="mr-3 text-">*</span>Cover Banner
              </p>
              <div className="w-[65%]">
                <div className="px-28 py-24 rounded-lg border border-primary border-dashed bg-[#E7E7F9]">
                  <div className="border rounded-lg px-2 py-1 border-[#0D0E32] ">
                    <div className="flex items-center gap-2 justify-center">
                      <Image alt="upload" src={UploadIcon} />
                      <button
                        className="text-[14px]"
                        onClick={handleUploadButtonClick}
                      >
                        Upload Image
                      </button>
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
                </div>
                <div className="flex justify-between items-center text-[13px] mt-2">
                  <p>PNG / SVG / JPEG / 120*804</p>
                  <p>Max 24MB</p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-semibold text-[24px] mb-5">
                <span className="mr-3 text-">*</span>Description
              </p>
              <div className="h-[150px] border  bg-transparent font-normal text-[14px] rounded-lg w-full border-[#0D0E32]">
                <Field
                  className="w-full h-full min-h-full max-h-[150px] bg-transparent px-5 py-1 outline-none border"
                  name="description"
                  as="textarea"
                  placeholder="Enter a name"
                />
              </div>
            </div>

            <div>
              <p className="font-semibold text-[24px] mb-5">
                <span className="mr-3 text-">*</span>Schedule
              </p>
              <div className="w-[70%] relative">
                <div className="flex gap-10 items-center px-6 py-4 border border-primary rounded-lg w-full relative z-40 bg-white">
                  <div className="flex gap-2 items-center">
                    <p className="text-[#484851]">Start</p>
                    <DatePicker
                      format="DD/MM/YYYY"
                      // defaultValue={start?.startDate} 
                      // value={selectedDate}
                      onChange={(date) => {
                        handleDateChange(date);
                        console.log(date)
                        setFieldValue(
                          "startDate",
                          dayjs(date).format("DD/MM/YYYY")
                        );
                      }}
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <p className="text-[#484851] text-[14px]">End</p>
                    <DatePicker
                      format="DD/MM/YYYY"
                      // defaultValue={start?.endDate}
                      // value={selectedDate}
                      onChange={(date) => {
                        handleDateChange(date);
                        setFieldValue(
                          "endDate",
                          dayjs(date).format("DD/MM/YYYY")
                        );
                      }}
                    />
                  </div>
                </div>
                <div className="rounded-lg border border-primary p-[18px] absolute w-full top-[4px] left-[3px] h-full m-1 "></div>
              </div>
            </div>
            <div className="mt-5">
              <Button
                type="button"
                // href="/campaign?tab=inputs"
                name="continue"
                className="text-[20px]"
                onClick={() => {
                  console.log(values);
                  dispatch(setStart(values));
                  router.push("/campaign?tab=inputs");
                }}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Start;
