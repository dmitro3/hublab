"use client";
import React, {useEffect} from "react";
import { Button } from "@/components";
import { useSearchParams, permanentRedirect, redirect } from "next/navigation";

const layout = ({ children }) => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

 

  return (
    <div className="px-10 py-8 relative">
      <div className="flex flex-col gap-10 justify-center items-center border rounded-lg bg-lightBlue py-6 mb-10 ">
        <h2 className="text-4xl text-white font-extrabold">CREATE CAMPAIGN</h2>
        <div className="flex gap-10 items-center justify-center">
          <Button
            name="start"
            href="/campaign?tab=start"
            className={`${
              tab === "start" ? "bg-white text-primary" : "bg-transparent"
            } px-8 py-1 border border-white rounded-[10px] text-[24px]`}
            shade={
              tab === "start" &&
              "left-[4px] bg-[#0D0E32] border-none rounded-[10px]"
            }
          />
          <Button
            name="inputs"
            // href="/campaign?tab=inputs"
            className={`${
              tab === "inputs"
                ? "bg-white text-primary"
                : "bg-transparent border-red-500"
            } px-8 py-1 border border-white rounded-[10px] text-[24px]`}
            shade={
              tab === "inputs" &&
              "left-[4px] bg-[#0D0E32] border-none rounded-[10px]"
            }
          />
          <Button
            name="criterion"
            // href="/campaign?tab=criterion"
            className={`${
              tab === "criterion"
                ? "bg-white text-primary"
                : "bg-transparent border-red-500"
            } px- py-1 border border-white rounded-[10px] text-[24px]`}
            shade={
              tab === "criterion" &&
              "left-[4px] bg-[#0D0E32] border-none rounded-[10px]"
            }
          />
          <Button
            name="rewards"
            // href="/campaign?tab=rewards"
            className={`${
              tab === "rewards"
                ? "bg-white text-primary"
                : "bg-transparent border-red-500"
            }  py-1 border border-white rounded-[10px] text-[24px]`}
            shade={
              tab === "rewards" &&
              "left-[4px] bg-[#0D0E32] border-none rounded-[10px]"
            }
          />
        </div>
      </div>
      <div className="border rounded-lg p-6">
        <div className="space-y-3 text-[#484851]">
          <p className="font-semibold text-[24px]">
            <span className="mr-3 text-">*</span>Campaign Category
          </p>
          <div className="flex gap-4">
            <Button
              name="engagement"
              outline
              shade="hidden"
              className="rounded-xl"
            />
            <Button
              name="awareness"
              outline
              shade="hidden"
              className="rounded-xl"
            />
            <Button
              name="interaction"
              outline
              shade="hidden"
              className="rounded-xl"
            />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default layout;
