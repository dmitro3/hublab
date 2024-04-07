"use client";
import React, { useState } from "react";
import { Button } from "..";
import SocialTask from "../campaignComponents/socialTask";
import Image from "next/image";
import VerxioGold from "../../assets/VerxioCoin.svg";
import { CloseCircle } from "iconsax-react";
import PreviewTask from "../campaignComponents/previewTask";
import CampaignLink from "./campainLink";
import { useSelector, useDispatch } from "react-redux";
import { useAccount } from "@particle-network/connect-react-ui";
import mintVerxioTokens from "@/utils/claimVerxioToken";
import { toast } from "react-toastify";
import { RiExternalLinkFill } from "react-icons/ri";

const CampaignPreview = ({
  setCampaignModalOpen,
  reward,
  totalPoints,
  totalReward,
  campaignId,
}) => {
  const [totalPointArray, setTotalPointArray] = useState([]);
  const [transactionUrl, setTransactionUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const user = useAccount();
  const userId = useSelector((state) => state.generalStates.userId);
  const status = useSelector((state) => state.campaign.campaign.status);

  console.log("User Account", user);

  const dispatch = useDispatch();

  const addValueToArray = (newValue) => {
    // Copy the current array state
    const newArray = [...totalPointArray];

    // Push the new value into the copied array
    newArray.push(newValue);

    // Update the state variable 'array' with the modified array
    setTotalPointArray(newArray);
  };

  // console.log(reward);
  console.log(totalPointArray);

  const handleClaimRewards = async (total) => {
    if (!user) {
      toast.info("Please connect your wallet 😒");
      return;
    }

    if (total > 0) {
      setLoading(true);
      try {
        const destinationAddress = user;
        const claimAmount = total;
        const url = await mintVerxioTokens(destinationAddress, claimAmount);
        setTransactionUrl(url);
        setLoading(false);
        toast.success(`${claimAmount} Verxio soulbound token claimed 🎊`);
      } catch (error) {
        toast.error("Error claiming rewards:");
        console.log("Error claiming rewards:", error);
      }
    } else {
      toast.info("Complete task first 😶‍🌫️");
    }
  };

  let total = 0;

  for (let i = 0; i < totalPointArray.length; i++) {
    total += totalPointArray[i];
  }

  console.log("The total number is:", total);
  return (
    <>
      <div className="bg-white w-full h-full flex flex-col p-6 border rounded-lg overflow-hidden">
        <div className="w-[100%] border-r p-6 ">
          <div className="flex justify-end mb-5 items-center gap-6">
            <Button
              name="share "
              outline
              className="bg-white"
              onClick={() => {
                if(campaignId){
                  setModalOpen(true);
                } else{
                  toast.info('Link will be available when you publish a campaign')
                }
              }}
            />
            {setCampaignModalOpen && (
              <div className=" cursor-pointer">
                {/* <Button name="share " outline className="bg-white" /> */}
                <CloseCircle
                  size={35}
                  onClick={() => setCampaignModalOpen(false)}
                />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2 ">
            <div>
              <p className="text-[32px] font-bold">
                {/* Launch Campaign:{" "} */}
                {reward?.title}
                {/* <span className="font-bold">{reward?.title}</span>{" "} */}
              </p>
              <p className="text-[18px] font-bold" style={{ color: "#00ADEF" }}>
                Reward Pool: <span>{totalReward.toLocaleString()}</span> Points
              </p>
            </div>
            <div className="flex gap-2">
              <p className="border-[#34A90B] border bg-[#DAFCDE] text-[#34A90B] px-2 py-1 rounded-sm text-xs">
                Ongoing
              </p>
              <p className=" border border-[#484851] text-[#484851] px-2 py-1 rounded-sm text-xs">
                {reward?.startDate} - {reward?.endDate}
              </p>
            </div>
          </div>
          <div className="border my-10 border-[#93939F]"></div>
          <div>
            <p className="text-[32px] font-bold mb-5">Description</p>
            {/* <p className="text-[18px] ">{reward?.description}</p> */}
            {/* <p className="text-[18px] ">{reward?.description}</p> */}
            <div
              dangerouslySetInnerHTML={{ __html: reward?.description }}
              className="flex flex-col gap-2"
            />
          </div>
          <p className="text-[32px] font-bold mb-5 mt-12">Task</p>

          <div className="mb-5 h-[40%] w-full relative overflow-scrol">
            <PreviewTask
              question={reward?.questions}
              // setTotalPointArray={setTotalPointArray}
              addValueToArray={addValueToArray}
            />
          </div>
        </div>
        <div className="w-[100%] flex">
          <div className=" p-6 w-[50%]">
            <div className="relative mb-7">
              <div className="border border-primary bg-white rounded-lg px-5 relative z-50">
                <p className="text-[30px] ">
                  Points:{" "}
                  <span className="font-bold">{total.toLocaleString()}</span>
                </p>
                <div className="flex justify-center py-7">
                  <Image alt="coin" src={VerxioGold} className="w-[200px]" />
                </div>
              </div>
              <div className="rounded-lg border border-primary h-full absolute w-full top-[6px] left-[6px] "></div>
            </div>
            <Button
              name="claim rewards"
              onClick={() => handleClaimRewards(total)}
              isLoading={loading}
            />
            {transactionUrl && (
              <p>
                <a
                  href={transactionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  View Transaction{" "}
                  <span className="text-red-500">
                    <RiExternalLinkFill />
                  </span>
                </a>
              </p>
            )}
          </div>
          {/* <div className="border border-[#B6B8EC] my-8"></div> */}
          {!setCampaignModalOpen && (
            <div className="p-6 w-[50%]">
              <div className="flex items-center gap-2">
                <p className="text-[24px] font-bold">Participants</p>
                <p className="border rounded p-1 px-2">
                  +<span>{reward?.participants}</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {modalOpen && (
        <CampaignLink campaignId={campaignId} setModalOpen={setModalOpen} />
      )}
    </>
  );
};

export default CampaignPreview;
