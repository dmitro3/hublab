"use client";
import Image from "next/image";
import React, { useState } from "react";
import { PointsModal } from "../../components";
import { toast } from "react-toastify";

const QuestionFormat = ({
  headerText,
  description,
  value,
  setShowQuestions,
  showQuestions,
}) => {
  return (
    <div className="relative">
      <section className="z-4 bg-white relative w-full h-full border border-primary  p-3 rounded-lg flex items-center justify-between cursor-pointer">
        <div
          className="border w-[94%]"
          onClick={() => {
            console.log(value);

            if (showQuestions[value]?.point === 0) {
              toast.info("input campaign point");
            } else {
              setShowQuestions((prevState) => ({
                ...prevState,
                [value]: {
                  ...prevState[value],
                  show: true,
                },
              }));
            }
          }}
        >
          <div className="rounded-lg border border-primary z-[-1] h-full absolute w-full top-[6px] left-[6px]"></div>
          <div>
            <h2 className="semibold text-[18px]">{headerText}</h2>
            <p className="normal text-[14px]">{description}</p>
          </div>
        </div>
        <PointsModal setShowQuestions={setShowQuestions} value={value}/>
      </section>
    </div>
  );
};

export default QuestionFormat;
