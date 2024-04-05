"use client";
import { Link } from "next/link";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import DashboardCards from "@/components/dashHomeComponents/dashboardCards";

const page = () => {
  const dashboardCardData = [
    {
      headerText: "All Campaigns",
      number: "72",
      imgUrl: "/images/allCampaigns.svg",
      alt: "allCampaign",
    },
    {
      headerText: "All Participants",
      number: "1,802",
      imgUrl: "/images/allParticipants.svg",
      alt: "allParticipants",
    },
    {
      imgUrl: "/images/claimedPoints",
      alt: "claimedPoints",
      headerText: "Claimed Points",
      number: "60,6969",
    },
    {
      imgUrl: "/images/participantsWithReward.svg",
      alt: "participantsWithReward",
      headerText: "Participants with rewards",
      number: "860",
    },
  ];

  const router = useRouter();
  const userId = useSelector((state) => state.generalStates.userId);

  console.log(userId);

  useEffect(() => {
    if (userId === "") {
      router.push("/welcome");
    }
  }, []);
  return (
    <section className="w-full h-full p-10">
      <section className="border rounded-lg p-6 flex flex-col items-cente gap-3">
        <h2 className="text-primary font-semibold text-[28px]">Dashboard</h2>

        <section className="flex items-center gap-3 flex-wrap ">
          <Link
            href={"/create-campaign"}
            className="border-2 border-[#00ADEF] rounded-lg bg-[#E0F7FF] flex items-center justify-center"
          >
            <Image
              src={"/images/creatCampaign.svg"}
              height={50}
              width={50}
              alt={"add Button"}
            />
            <h3 className="text-[#424242] font-normal text-[14px]">
              Create Campaign
            </h3>
          </Link>
          {dashboardCardData.map((data, index) => (
            <DashboardCards key={index} {...data} />
          ))}
        </section>
      </section>
    </section>
  );
};

export default page;