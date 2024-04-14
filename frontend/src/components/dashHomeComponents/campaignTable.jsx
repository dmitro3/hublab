"use client";
import { useState } from "react";
import { Table, TableBody } from "./table";

const CampaignTable = () => {
  const [campaignData] = useState([
    {
      id: 1,
      name: "Ultimate Speed Lexi",
      participants: 9734,
      participantsWithReward: 6789,
      points: 876,
      link: "https://www.",
      page: "campaignpreview",
      status: "ongoing",
    },
    {
      id: 2,
      name: "Ultimate Speed Lexi",
      participants: 9734,
      participantsWithReward: 6789,
      points: 876,
      link: "https://www.",
      page: "campaignpreview",
      status: "upcoming",
    },
    {
      id: 3,
      name: "Ultimate Speed Lexi",
      participants: 9734,
      participantsWithReward: 6789,
      points: 876,
      link: "https://www.",
      page: "campaignpreview",
      status: "closed",
    },
    {
      id: 4,
      name: "Ultimate Speed Lexi",
      participants: 9734,
      participantsWithReward: 6789,
      points: 876,
      link: "https://www.",
      page: "campaignpreview",
      status: "deleted",
    },
  ]);

  return (
    <section className="w-full gap-6 shadow px-2 md:px-5 py-[18px] rounded-[14px]">
      <h2 className="text-primary font-semibold text-[28px] my-3">
        All Campaign
      </h2>

      <div className="flex max-w-full overflow-x-auto w-full">
        <Table
          tableHeads={[
            "Campaigns",
            "Status",
            "Campaign Link",
            "Participants",
            "Participants With Reward",
            "Points",
          ]}
        >
          <TableBody tableData={campaignData} />
        </Table>
      </div>
    </section>
  );
};

export default CampaignTable;
