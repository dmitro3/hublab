import React from "react";
import Image from "next/image";
import VerxioGold from "../../assets/VerxioCoin.svg";

const SocialTask = () => {
  return (
    <div className="relative mb-3">
      <div className="flex justify-between items-center px-2 py-1 border rounded bg-white relative z-50 ">
        <p>follow @_lexifay on X</p>
        <p className="flex items-center border rounded p-1 ">
          <Image alt="coin" src={VerxioGold} className="w-[23px] top-4" />
          <span>40</span>points
        </p>
      </div>
      <div className="rounded border bg-[#484851] h-full absolute w-full top-[5px] left-[5px] "></div>
    </div>
  );
};

export default SocialTask;
