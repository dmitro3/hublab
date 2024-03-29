"use client";
import Image from "next/image";
import React, { useState } from "react";
import { PointsModal } from "../../components";

const QuestionFormat = ({ headerText, description, points }) => {
  const [openPoints, setOpenPoints] = useState(false);

  const openPointsModal = () => {
    setOpenPoints(true);
  };

  const closePointsModal = () => {
    setOpenPoints(false);
  };
  return (
    <React.Fragment>
      <section className="z-4 bg-white relative w-full h-full border border-primary  p-3 rounded-lg flex items justify-between">
        <div className="rounded-lg border border-primary z-[-1] h-full absolute w-full top-[6px] left-[6px]"></div>

        <div>
          <h2 className="semibold text-[18px]">{headerText}</h2>
          <p className="normal text-[14px]">{description}</p>
        </div>

        <button
          onClick={() => openPointsModal()}
          className="flex items-center p-2 border border-primary rounded-lg gap-2"
        >
          <Image
            src={"/images/verxioToken.svg"}
            height={20}
            width={20}
            alt="doddles"
          />
          <span className="medium text-[14px]">{points}</span>
          <Image
            src={"/images/verxioAdd.svg"}
            height={20}
            width={20}
            alt={"verxio token"}
          />
        </button>
      </section>

      <div className="absoulute top-[30%] right-[20%]">
        {openPoints && (
          <PointsModal
            openPoints={openPoints}
            setOpenPoints={setOpenPoints}
            closePointsModal={closePointsModal}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default QuestionFormat;
