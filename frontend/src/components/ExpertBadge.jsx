import React from "react";
import Image from "next/image";
import Expert from "../assets/Expert.svg"

const ExpertBadge = () => {
  return (
    <div className="relative w-[200px]">
      <div className="relative flex justify-center hover:top-[6px] hover:left-[5px]">
        <Image alt="badge" src={Expert} className="rounded-lg z-40 relative " />
        <div className="absolute top-[105px] left-0 z-50">
        </div>
      </div>
      <div className="rounded-lg border border-[#222482] p-[18px] absolute w-full top-[2px] left-[1px] h-full m-1 "></div>
    </div>
  );
};

export default ExpertBadge;
