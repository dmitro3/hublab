"use client";
import { useState } from "react";
import { Button } from "@/components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Criterion = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <section className="relative w-full space-y-3">
      <div className="my-3">
        <p className="font-semibold text-[24px]">
          <span className="mr-3 text-">*</span>Choose the eligibilty status of
          those to participate in this Quest
        </p>
      </div>

      <div className="relative w-full  flex flex-col items-center gap-3 border border-primary rounded-lg p-6">
        <div className="w-full bg-[#FFE5F8] border border-primary rounded-lg p-6 flex justify-between items-center gap-3">
          <div>
            <h2 className="semibold text-[18px]">Everyone on Verxio</h2>
            <p className="normal text-[14px]">
              All verxio earners can participate
            </p>
          </div>

          <span
            className={"cursor-pointer"}
            onClick={() => setShowOptions(!showOptions)}
          >
            {showOptions ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </div>
        <div className="w-full mt-8">
          <Button name="Continue" className="w-full" />
        </div>
      </div>

      {showOptions && (
        <section className="absolute bg-white z-[50] w-[600px] top-[8rem] right-[2rem] flex flex-col items-center gap-3 rounded-lg p-3 shadow-sm">
          <div className="w-full bg-white border border-primary rounded-lg p-2 flex flex-col items-start cursor-pointer transition-all duration-300 hover:shadow-sm">
            <h2 className="semibold text-[18px]">Everyone on Verxio</h2>
            <p className="normal text-[14px]">
              All verxio earners can participate
            </p>
          </div>
          <div className="w-full bg-white border border-primary rounded-lg p-2 flex flex-col items-start cursor-pointer transition-all duration-300 hover:shadow-sm">
            <h2 className="semibold text-[18px]">Point Specific</h2>
            <p className="normal text-[14px]">
              Those with a specific point balance can participate
            </p>
          </div>
          <div className="w-full bg-white border border-primary rounded-lg p-2 flex flex-col items-start cursor-pointer transition-all duration-300 hover:shadow-sm">
            <h2 className="semibold text-[18px]">New Earners</h2>
            <p className="normal text-[14px]">
              Those that have never participated in any quest before
            </p>
          </div>
        </section>
      )}
    </section>
  );
};

export default Criterion;
