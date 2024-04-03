import React from "react";
import { Button } from "..";
import SocialTask from "../campaignComponents/socialTask";
import Image from "next/image";
import VerxioGold from "../../assets/VerxioCoin.svg";
import { CloseCircle } from "iconsax-react";

const CampaignPreview = ({ setCampaignModalOpen }) => {
  return (
    <div className="bg-[#000]/40  absolute w-full h-full top-0 left-0 z-50 p-10 text-[#484851] ">
      <div className="bg-white w-full h-full flex p-6 border rounded-lg ">
        <div className="w-[60%] border-r p-6 ">
          <div className="flex justify-end mb-5">
            <Button name="share " outline className="bg-white" />
          </div>
          <div className="flex flex-col gap-2 ">
            <div>
              <p className="text-[32px]">
                Launch Campaign: <span className="font-bold">Join LexiFay</span>{" "}
              </p>
              <p className="text-[32px] font-bold">
                <span>4000</span> Vpoints
              </p>
            </div>
            <div className="flex gap-2">
              <p className="border-[#34A90B] border bg-[#DAFCDE] text-[#34A90B] px-2 py-1 rounded-sm text-xs">
                Ongoing
              </p>
              <p className=" border border-[#484851] text-[#484851] px-2 py-1 rounded-sm text-xs">
                2024 April 2 - April 10
              </p>
            </div>
          </div>
          <div className="border my-10 border-[#93939F]"></div>
          <div>
            <p className="text-[32px] font-bold mb-5">Description</p>
            <p className="text-[18px]">
              Join Lexifay and embark on an exciting journey with us! We're
              thrilled to announce our latest campaign, where we're inviting
              1000 participants to become integral members of our thriving
              community. As part of this exclusive opportunity, each participant
              will receive 200 points to kickstart their journey with Lexifay.
              Your mission? Simply join our various platforms and immerse
              yourself in the vibrant ecosystem we've cultivated. By joining us
              on this adventure, you'll not only gain access to cutting-edge
              technologies and groundbreaking projects but also forge meaningful
              connections with like-minded individuals passionate about the
              future of Web 3.
            </p>
          </div>
          <div className="mt-12 mb-5 relative">
            <p className="text-[32px] font-bold mb-5">Task</p>
            <SocialTask />
            <SocialTask />
            <SocialTask />
            <SocialTask />
            <SocialTask />
          </div>
        </div>
        <div className="w-[40%]">
          <div className=" p-6">
            <div className="flex justify-end mb-7">
              {/* <Button name="share " outline className="bg-white" /> */}
              <CloseCircle size={30}  onClick={()=> setCampaignModalOpen(false)}/>
            </div>
            <div className="relative mb-7">
              <div className="border border-primary bg-white rounded-lg px-5 relative z-50">
                <p className="text-[30px] ">
                  Points: <span className="font-bold">200</span>
                </p>
                <div className="flex justify-center py-7">
                  <Image alt="coin" src={VerxioGold} className="w-[200px]" />
                </div>
              </div>
              <div className="rounded-lg border border-primary h-full absolute w-full top-[6px] left-[6px] "></div>
            </div>
            <Button name="claim rewards" />
          </div>
          <div className="border border-[#B6B8EC] my-8"></div>
          <div className="p-6">
            <div className="flex items-center gap-2">
              <p className="text-[24px] font-bold">Participants</p>
              <p className="border rounded p-1 px-2">
                +<span>101</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignPreview;
