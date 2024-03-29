"use client";
import Image from "next/image";
import React, { useState } from "react";
import { PointsModal } from "../../components";

const QuestionFormat = ({ headerText, description }) => {
  return (
    <div className="relative">
      <section className="z-4 bg-white relative w-full h-full border border-primary  p-3 rounded-lg flex items justify-between">
        <div className="rounded-lg border border-primary z-[-1] h-full absolute w-full top-[6px] left-[6px]"></div>

        <div>
          <h2 className="semibold text-[18px]">{headerText}</h2>
          <p className="normal text-[14px]">{description}</p>
        </div>
        <PointsModal />
      </section>
    </div>
  );
};

export default QuestionFormat;
