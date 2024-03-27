import React from "react";
import { Button } from "@/components";

const layout = ({ children }) => {
  return (
    <div className="px-10 py-8">
      <div className="flex flex-col gap-10 justify-center items-center border rounded-lg bg-lightBlue py-6 mb-10 ">
        <h2 className="text-4xl text-white font-extrabold">CREATE CAMPAIGN</h2>
        <div className="w-[%] flex gap-10 items-center justify-center">
          <Button
            name="start"
            className="px-8 py-1 bg-white text-primary border rounded-[10px] border-primary text-[24px]"
            shade="left-[4px] bg-[#0D0E32] border-none rounded-[10px]"
          />
          <Button
            name="inputs"
            outline
            className="px-8 py-1 bg-white text-primary border rounded-[10px] border-primary text-[24px]"
            shade="left-[4px] bg-[#0D0E32] border-none rounded-[10px]"
          />
          <Button
            name="criterion"
            className="px- py-1 bg-white text-primary border rounded-[10px] border-primary text-[24px]"
            shade="left-[4px] bg-[#0D0E32] border-none rounded-[10px]"
          />
          <Button
            name="rewards"
            className="px- py-1 bg-white text-primary border rounded-[10px] border-primary text-[24px]"
            shade="left-[4px] bg-[#0D0E32] border-none rounded-[10px]"
          />
        </div>
      </div>
      <div className="border rounded-lg p-6">
        <div>
          <p className="font-semibold text-[24px] mb-5">
            <span className="mr-3 text-">*</span>Campaign Category
          </p>
          <div className="flex gap-4">
            <Button name="engagement" outline shade="hidden"  className='rounded-xl'/>
            <Button name="awareness" outline shade="hidden" className='rounded-xl' />
            <Button name="interaction" outline shade="hidden"className='rounded-xl' />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default layout;
