"use client";
import CampaignPreview from "@/components/modals/campaignPreview";
import { useNav } from "@/context";
import { getCampaign } from "@/store/slices/campaignSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";

const page = () => {
  // const { singleCampaign, setSingleCampaign } = useNav();
  const [singleCampaign, setSingleCampaign] = useState({});

  const dispatch = useDispatch();

  const reward = useSelector((state) => state.generalStates.rewards);

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  console.log(id);
  console.log(singleCampaign);

  const getSingleCampaign = async () => {
    try {
      const response = await dispatch(getCampaign({ id: id }));
      if (response.payload.success === true) {
        toast.success(response?.payload.message);
        setSingleCampaign(response?.payload.capmaign);
      } else {
        // toast.info("Create a profile");
        // dispatch(setEdit(true));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSingleCampaign();
  }, []);

  return (
    <div className="h-full">
      {singleCampaign && Object.keys(singleCampaign).length !== 0 && (
        <CampaignPreview
          reward={singleCampaign}
          totalReward={singleCampaign.totalRewardPoint}
        />
      )}
    </div>
  );
};

export default page;
