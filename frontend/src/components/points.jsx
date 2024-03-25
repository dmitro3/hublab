import Image from 'next/image';
import React from 'react'
import VerxioCoin from "../assets/verxio-coin.svg";

const Points = () => {
  return (
    <div>
      <h2 className="text-[20px] md:text-[28px] font-semibold text-[#0D0E32] mb-3">Points</h2>
      <div className="bg-[#ADEF00] p-5 rounded-2xl border border-[#486006] shadow-xl">
        <p className="text-[20px] font-medium mb-3">Balance</p>
        <div className="flex gap-2 xl:gap-4 items-center border rounded-xl px-4 xl:px-9 py- border-[#486006]">
          <Image alt="Verxio Point Icon" src={VerxioCoin} className="w-10 mt-1" />
          <p className="font-semibold text-[20px] xl:text-[30px]">0</p>
        </div>
        <div className="flex justify-end mt-3 lg:mt-4">
          <p className="text-[13px]">
            Today's earnings:{" "}
            <span className="font-semibold text-[15px]">0</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Points