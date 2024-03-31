"use client";
import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Image from "next/image";
import UploadIcon from "../../assets/upload-icon.svg";
import Calender from "../../assets/calender.svg";
import Button from "../Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useSelector, useDispatch } from "react-redux";
import dayjs from "dayjs";
import { setRewards } from "@/store/slices/statesSlice";
import { root } from "@/store/store";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { toast } from "react-toastify";
import { CloseCircle } from "iconsax-react";
import CampaignSuccess from "../../assets/campaignSuccess.svg";
import { createCampaign } from "@/store/slices/campaignSlice";
const data = [
  {
    name: "Random Selection",
    choice: "random",
  },
  {
    name: "Early Birds Selection",
    choice: "early",
  },
];

const Reward = () => {
  const [participants, setParticipants] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  // const [selectedOption, setSelectedOption] = useState("");
  const [index, setIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  const totalcampaignPoint = useSelector(
    (state) => state.generalStates.totalCampaignPoint
  );
  const title = useSelector((state) => state.generalStates?.start?.title);
  const description = useSelector(
    (state) => state.generalStates?.start?.description
  );
  const startDate = useSelector(
    (state) => state.generalStates?.start?.startDate
  );
  const endDate = useSelector((state) => state.generalStates?.start?.endDate);
  const questions = useSelector((state) => state.generalStates?.input);
  const eligibility = useSelector((state) => state.generalStates?.criterion);

  console.log(totalcampaignPoint);

  const totalReward = participants * totalcampaignPoint;

  const initialValues = {
    title: title,
    description: description,
    startDate: startDate,
    endDate: endDate,
    questions: questions,
    eligibility: eligibility,
    participants: "",
    method: "",
    rewardCoin: "verxio points",
    totalRewardPoint: "",
    rewardWith: "spl token",
  };

  const createNewCampaign = async (values) => {
    try {
      const response = await dispatch(
        createCampaign({
          data: {
            title: title,
            description: description,
            coverBannerUrl:
              "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcondusiv.com%2Fsequential-io-always-outperforms-random-io-on-hard-disk-drives-or-ssds%2F&psig=AOvVaw0gIZMjG4dtsc3otXxWQgHx&ust=1711935077938000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPi7q6KtnYUDFQAAAAAdAAAAABAE",
            profileId: "1",
            startDate: startDate,
            endDate: endDate,
            questions: questions,
            eligibility: eligibility,
            participants: values.participants,
            methodofReward: values.method,
            rewardCoin: "verxio points",
            totalRewardPoint: totalReward,
            reward: "spl token",
          },
          // id: 1,
        })
      );
      if (response.payload.success === true) {
        toast.success(response.payload.message);
        console.log(response);
        setModalOpen(true)
        setTimeout(()=>{
          setModalOpen(false)
        },3000)
      } else {
        toast.error(response.payload.message);
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <div className={`mt-10 w-[60%] text-[#484851] `}>
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
                  name="participants"
                  placeholder="Enter a amount"
                  onChange={(e) => {
                    setFieldValue("participants", e.target.value);
                    setParticipants(Number(e.target.value));
                  }}
                />
              </div>
              <div>
                <p className="font-semibold text-[24px] mb-5">
                  <span className="mr-3 text-">*</span>Method of Reward
                </p>

                <div
                  onClick={() => setShowOptions(!showOptions)}
                  className="w-full border border-primary rounded-lg px-5 py-3 flex justify-between items-center gap-3 cursor-pointer relative"
                >
                  <div>
                    <h2 className="semibold text-[18px]">
                      {data[index]?.name}
                    </h2>
                  </div>

                  <span className={"cursor-pointer"}>
                    {showOptions ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                  {showOptions && (
                    <section className="absolute bg-white z-50 w-full top-[70px] left-0 flex flex-col items-center gap-3 rounded-lg p-3 shadow-lg ">
                      {data.map((items, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            setIndex(index);
                            setShowOptions(false);
                            setFieldValue("method", items.choice);
                            // dispatch(setCriterion(items.choice));
                          }}
                          className="w-full bg-white border border-primary rounded-lg p-2 flex flex-col items-start cursor-pointer  hover:shadow-sm hover:border-[3px]"
                        >
                          <h2 className="semibold text-[18px]">{items.name}</h2>
                        </div>
                      ))}
                    </section>
                  )}
                </div>
              </div>
              <div className="relative z-40 -right-[1px]">
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
                      <span className="text-[32px] font-bold ml-2">
                        {participants}
                      </span>
                    </p>
                    <p>
                      Number of points:{" "}
                      <span className="text-[32px] font-bold ml-2">
                        {totalcampaignPoint} points
                      </span>
                    </p>
                    <div className="border my-3"></div>
                    <p className="text-[32px] font-bold">{totalReward}</p>
                  </div>
                </div>
                <div className="flex justify-end text-end border rounded-lg border-primary px-16 py-5 text-[#484851] text-[16px] mt-4">
                  <p>
                    Total Reward:{" "}
                    <span className="text-[32px] font-bold">{totalReward}</span>{" "}
                    points
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-8">
                <Button
                  type="button"
                  name="publish"
                  className="border border-primary font-medium text-[20px]"
                  shade="border-primary"
                  onClick={() => {
                    console.log(values);
                    setFieldValue("totalRewardPoint", totalReward);
                    dispatch(setRewards(values));
                    createNewCampaign(values)
                  }}
                />
                <Button
                  type="button"
                  name="preview"
                  className="font-medium text-[20px] bg-white"
                  outline
                  onClick={() => console.log(values)}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {modalOpen && (
        <div
          className={`bg-[#000]/40  absolute w-full h-screen top-0 left-0 z-50 flex justify-center items-center px-28 ${
            modalOpen && "overflow-hidden"
          }`}
        >
          <div className="bg-white p-5 rounded-lg">
            <div className="flex justify-end mb-2">
              <CloseCircle
                size={32}
                onClick={() => {
                  setModalOpen(false);
                }}
                className="cursor-pointer w-7 sm:w-10"
              />
            </div>
            <div className="flex justify-center ">
              <Image
                alt="success"
                src={CampaignSuccess}
                className="w-[250px]"
              />
            </div>

            <p className="text-[20px] text-center">
              You have successfully published your engagement....{" "}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Reward;
