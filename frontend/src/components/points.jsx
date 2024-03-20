import Image from 'next/image';
import React from 'react'
import coin from '../assets/briefcase-dollar.svg'

const Points = () => {
  return (
    <div>
      <h2 className="text-[28px] font-semibold text-[#0D0E32] mb-3">Points</h2>
      <div className="bg-[#ADEF00] p-5 rounded-2xl border border-[#486006] shadow-xl">
        <p className="text-[20px] font-medium mb-3">Balance</p>
        <div className="flex gap-4 border rounded-xl px-9 py-2 border-[#486006]">
          <Image alt="verxio cooin" src={coin} className="w-8" />
          <p className="font-semibold text-[30px]">6,986.63</p>
        </div>
        <div className="flex justify-end mt-6">
          {/* <div className="flex justify-between mb-4"> */}
          <p className="text-[13px]">
            Today's earnings:{" "}
            <span className="font-semibold text-[20px]">2,344.97</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Points