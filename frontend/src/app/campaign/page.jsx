"use client";
import React from "react";
import Criterion from "@/components/campaignComponents/criterion";
import InputCampaign from "@/components/campaignComponents/inputCampaign";
import Reward from "@/components/campaignComponents/reward";
import Start from "@/components/campaignComponents/start";
import { useSearchParams } from "next/navigation";

const page = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  return (
    <>
      {tab === "start" && <Start />}
      {tab === "inputs" && <InputCampaign />}
      {tab === "criterion" && <Criterion/>}
      {tab === "rewards" && <Reward/>}
    </>
  );
};

export default page;
