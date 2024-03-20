import React from "react";
import Image from "next/image";
import Badge from "../assets/badgeimg.svg";
import Lock from "../assets/briefcase-dollar.svg";

const Badges = ({ img, badgeName }) => {
  return (
    <div className="relative w-[160px] h-[150px">
      <div className="relative flex justify-center hover:top-[6px] hover:left-[5px]">
        <Image alt="badge" src={img} className="rounded-lg z-40 relative " />
        <div className="absolute top-[120px] left-0 z-50">
          <div className="flex  items-center gap-2 rounded mx-2 py-[2px] px-3 backdrop-blur-sm bg-white/20 text-white">
            <p className="capitalize text-[13px] ">{badgeName}</p>
            <Image alt="bagdge lock" src={Lock} className="w-[30]" />
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-[#222482] p-[18px] absolute w-full top-[2px] left-[1px] h-full m-1 "></div>
    </div>
  );
};

export default Badges;
