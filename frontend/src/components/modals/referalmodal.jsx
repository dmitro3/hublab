"use client";
import React, { useState } from "react";
import Button from "../Button";
import Image from "next/image";
import Check from "../../assets/check-icon.svg";
import { CloseCircle } from "iconsax-react";

const Referralmodal = ({ setModalOpen }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    const textToCopy = document.getElementById("text-to-copy").innerText;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopySuccess(true);
      })
      .catch((err) => {
        setCopySuccess(false);
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="bg-[#000]/40  absolute w-full h-full top-0 left-0 z-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-[25px] font-medium text-[#484851]">
            Refer a friend and get 500 points
          </h2>
          <CloseCircle
            size={32}
            onClick={() => {
              setModalOpen(false);
              setCopySuccess(false);
            }}
            className="cursor-pointer"
          />
        </div>
        <p className="mb-8 text-[13px]">
          Explore Verxio and earn daily with your friends.
        </p>
        <div className="bg-[#DFDFF7] p-5 rounded-md flex justify-between items-center gap-6">
          <p className="p-2 rounded-lg bg-white text-[12px]" id="text-to-copy">
            https://verxio.xyz/?ref=0x5465cB5cOAdD53efbC60000644AA70204B20576
          </p>
          <div className="-top-3">
            <Button name="copy link" onClick={handleCopy} />
          </div>
        </div>
        {copySuccess && (
          <div className="flex items-center gap-2 mt-2 cursor-pointer">
            <Image alt="check icon" src={Check} />
            <p>Copied!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Referralmodal;
