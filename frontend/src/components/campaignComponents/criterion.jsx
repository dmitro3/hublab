"use client";
import { useState } from "react";
import { Button } from "@/components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { setCriterion } from "@/store/slices/statesSlice";

const Criterion = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [index, setIndex] = useState(0);


  const dispatch = useDispatch()

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const data = [
    {
      name: "Everyone on Verxio",
      subName: " All verxio users can participate in the campaign",
      choice:'everone'
    },
    {
      name: "Custom List",
      subName: "Upload a list of addresses who will participate in the campaign",
      choice:'everone'
    },
    {
      name: "Point Specific",
      subName: "Those with a specific token point balance can participate",
      choice:'point specific'
    },
    {
      name: "New Earners",
      subName: "Those that have never participated in any campaign before",
      choice: 'new earners'
    },
  ];

  return (
    <section className="relative w-full space-y-3 text-[#484851] mt-10">
      <div className="my-3">
        <p className="font-semibold text-[24px]">
          <span className="mr-3 text-">*</span>Choose the eligibilty status of
          those to participate in this Quest
        </p>
      </div>

      <div className="relative w-full  flex flex-col items-center gap-3 border border-primary rounded-lg p-6">
        <div
          onClick={() => setShowOptions(!showOptions)}
          className="w-full bg-[#FFE5F8] border border-primary rounded-lg p-6 flex justify-between items-center gap-3 cursor-pointer"
        >
          <div>
            <h2 className="semibold text-[18px]">{data[index]?.name}</h2>
            <p className="normal text-[14px]">{data[index]?.subName}</p>
          </div>

          <span className={"cursor-pointer"}>
            {showOptions ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </div>
        <div className="w-full mt-8">
          <Button
            name="Continue"
            href="/campaign?tab=rewards"
            className="w-full text-[20px] mt-"
          />
        </div>
      </div>

      {showOptions && (
        <section className="absolute bg-white z-[50] w-[600px] top-[8rem] right-[2rem] flex flex-col items-center gap-3 rounded-lg p-3 shadow-sm ">
          {data.map((items, index) => (
            <div
              key={index}
              onClick={() => {
                setIndex(index);
                setShowOptions(false);
                dispatch(setCriterion(items.choice))
              }}
              className="w-full bg-white border border-primary rounded-lg p-2 flex flex-col items-start cursor-pointer  hover:shadow-sm hover:border-[3px]"
            >
              <h2 className="semibold text-[18px]">{items.name}</h2>
              <p className="normal text-[14px]">{items.subName}</p>
            </div>
          ))}
        </section>
      )}
    </section>
  );
};

export default Criterion;
