"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  CampaignTable,
  ResponsiveChart,
  DashboardCards,
} from "@/components/dashHomeComponents";
import { dashboardCardData } from "@/utils/data";

const Page = () => {
  const [campaignData] = useState([
    {
      id: 1,
      name: "Join Lexifey",
      participants: 9734,
      participantsWithReward: 6789,
      points: 876,
      link: "https://www.figma.com/file/8JhQumgHxLkrNGV9SBCDpw/Verx",
      status: "ongoing",
    },
    {
      id: 2,
      name: "Emerald Earners",
      participants: 9734,
      participantsWithReward: 6789,
      points: 876,
      link: "https://www.figma.com/file/8JhQumgHxLkrNGV9SBCDpw/Verx",
      status: "upcoming",
    },
    {
      id: 3,
      name: "Ultimate Speed Lexifey Racers",
      participants: 9734,
      participantsWithReward: 6789,
      points: 876,
      link: "https://www.figma.com/file/8JhQumgHxLkrNGV9SBCDpw/Verx",
      status: "closed",
    },
    {
      id: 4,
      name: "Ultimate Speed Lexifey Racers",
      participants: 9734,
      participantsWithReward: 6789,
      points: 876,
      link: "https://www.figma.com/file/8JhQumgHxLkrNGV9SBCDpw/Verx",
      status: "deleted",
    },
  ]);

  const router = useRouter();
  const userId = useSelector((state) => state.generalStates.userId);

  console.log(userId);

  useEffect(() => {
    if (userId === "") {
      router.push("/welcome");
    }
  }, []);

  const colors = [
    { borderColor: "#3D41CC", backgroundColor: "#DFDFF7" },
    { borderColor: "#EF00AD", backgroundColor: "#FFE0F7" },
    { borderColor: "#ADEF00", backgroundColor: "#F7FFE0" },
    { borderColor: "#00ADEF", backgroundColor: "#E0F7FF" },
  ];

  return (
    <section className="w-full h-full p-10">
      <section className="w-full border rounded-lg p-6 flex flex-col items-cente gap-3">
        <h2 className="text-primary font-semibold text-[28px]">Dashboard</h2>

        <section className="flex items-center gap-3 flex-wrap">
          <Link
            href={"/create_campaign"}
            className="border-dashed border-2 border-[#00ADEF] rounded-lg bg-[#E0F7FF] flex flex-col p-12 cursor-pointer items-center justify-center"
          >
            <Image
              src={"/images/createCampaign.svg"}
              height={50}
              width={50}
              alt={"add Button"}
            />
            <h3 className="text-[#424242] font-normal text-[14px]">
              Create Campaign
            </h3>
          </Link>
          {dashboardCardData.map((data, index) => (
            <DashboardCards key={index} {...data} {...colors[index]} />
          ))}
        </section>

        <section className="w-full flex flex-col items-center md:flex-row my-5 border">
          <ResponsiveChart />
        </section>

        {/* <section>
          <CampaignTable campaignData={campaignData} />
        </section> */}
      </section>
    </section>
  );
};

export default Page;
