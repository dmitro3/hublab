import React from 'react'
import Button from '../Button';
import Image from 'next/image';
import Check from "../../assets/check-icon.svg";

const Referral = ({setModalOpen}) => {
  return (
    <div className="mt-3">
      {/* <p className="font-normal text-[20px] mb-2 text-[#0D0E32]">Referral</p> */}
      <div className="relative">
        <div className="border border-[#222482] rounded-lg p-3 bg-white relative z-50 hover:top-1 hover:left-[5px]">
          <div className="flex justify-between">
            <p>Refer a friend and get 500 points</p>
            <Button
              name="get link"
              outline
              onClick={() => setModalOpen(true)}
            />
          </div>
          <div className="flex gap-2 border border-[#222482] rounded-lg w-[60%] mt-5 justify-around p-2 text-[#0D0E32] text-[13px]">
            <div className="flex gap-3 w-[50%] border-r border-[#222482]">
              <Image alt="check icon" src={Check} />
              <p>21 referrals</p>
            </div>
            <div className="flex gap-3 w-[50%]">
              <Image alt="check icon" src={Check} />
              <p>4000 points</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-[#222482] p-[18px absolute w-full top-[1px] left-[1px] h-full m-1 "></div>
      </div>
    </div>
  );
}

export default Referral