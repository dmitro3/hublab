"use client";
import { useNav } from "@/context";
import { getCampaign, getUserCampaigns } from "@/store/slices/campaignSlice";
import { root } from "@/store/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const page = () => {
  const [campaign, setCampaign] = useState([]);
  //   const [singleCampaign, setSingleCampaign] = useState([]);

  //   const { singleCampaign, setSingleCampaign } = useNav();

  const dispatch = useDispatch();
  const router = useRouter();

  const userId = useSelector((state) => state.generalStates.userId);
  const reward = useSelector((state) => state.generalStates.rewards);
  console.log();

  useEffect(() => {
    getUsersCampaign();
  }, []);

  console.log(campaign);

  const getUsersCampaign = async () => {
    try {
      const response = await dispatch(
        getUserCampaigns({ id: "2mpkvSaewCLPij7xxutARnr6wSueAGDcNt9TU48opmsn" })
      );
      if (response?.payload?.success === true) {
        toast.success(response?.payload.message);
        setCampaign(response?.payload.capmaign);
        // router.push('/campaign')
      } else {
        toast.info("Create a profile");
        // dispatch(setEdit(true));
      }
    } catch (error) {
      console.error(error);
    }
  };

  //   const getSingleCampaign = async (id) => {
  //     try {
  //       const response = await dispatch(getCampaign({ id: id }));
  //       if (response.payload.success === true) {
  //         toast.success(response?.payload.message);
  //         setSingleCampaign(response?.payload.capmaign);
  //         router.push("/campaign");

  //       } else {
  //         // toast.info("Create a profile");
  //         // dispatch(setEdit(true));
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  return (
    <div className="p-4 w-full">
      {campaign.map((item) => (
        <Link
          href={`/campaign?id=${item._id}`}
          className="border border-primary rounded-lg p-3 cursor-pointer w-screen"
          //   onClick={() => getSingleCampaign(item._id)}
        >
          <div className=" flex justify-between items-center">
            <h2 className="capitalize">Title: {item.title}</h2>
            <p>Total reward point: {item.totalRewardPoint}</p>
          </div>
          <p> Total Participants: {item.participants}</p>
          <div className="flex gap-1 items-center">
            <p>From: {item.startDate}</p>
            <p>-</p>
            <p>to: {item.endDate}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default page;
