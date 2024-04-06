"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { campaignDetailsData, dashboardCardData } from "@/utils/data";
import { useRouter } from "next/navigation";
import ResponsiveChart from "@/components/dashHomeComponents/chart";
import CampaignTable from "@/components/dashHomeComponents/campaignTable";
import DashboardCards from "@/components/dashHomeComponents/dashboardCards";

const Page = () => {

  const router = useRouter();
  const [campaignData, setCampaignData] = useState([]);
  const userId = useSelector((state) => state.generalStates.userId);
  console.log(userId);

  useEffect(() => {
    if (userId === "") {
      router.push("/welcome");
    }
  }, []);

  useEffect(() => {
    setCampaignData(campaignDetailsData);
  }, []);


  return (
    <section className="w-full h-full p-10">
      <section className="border rounded-lg p-6 flex flex-col items-cente gap-3">
        <h2 className="text-primary font-semibold text-[28px]">Dashboard</h2>

        <section className="flex items-center gap-3 flex-wrap ">
          <Link
            href={"/create-campaign"}
            className="border-2 border-[#00ADEF] rounded-lg bg-[#E0F7FF] flex flex-col items-center justify-center"
          >
            <Image
            src={"/images/creatCampaign.svg"}
            height={50}
            width={50}
            alt={"add Button"}
          />
            <h3 className="text-[#424242] font-normal text-[14px] p-12">
              Create Campaign
            </h3>
          </Link>
          {dashboardCardData.map((data, index) => (
          <DashboardCards key={index} {...data} />
        ))}
        </section>

        <section className="flex flex-col w-full h-full items-start">
          <ResponsiveChart />
          {/* <ResponsiveChart /> */}
        </section>

        <section>
          <CampaignTable campaignData={campaignData} />
        </section>
      </section>
    </section>
  );
};

export default Page;