"use client";
import Button from "@/components/Button";
import React, { useState } from "react";
import Image from "next/image";
import XLogo from "../../../assets/X-logo.svg";
import Check from "../../../assets/check-icon.svg";
import EarlyAdopter from "../../../assets/early-adopter.svg";
import Completionist from "../../../assets/completionalist.svg";
import Milestone from "../../../assets/milestone.svg";
// import Expert from "../../../assets/";
import BulletPoint from "../../../assets/bullet-point.svg";
import Socials from "@/components/socials";
import Points from "@/components/points";
import Badges from "@/components/badges";
import Referralmodal from "@/components/modals/referalmodal";
import EditProfile from "@/components/profileComponents/editProfile";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [edit, setEdit] = useState(false);

  const interests = ["Development", "Content", "Earning", "Trading"];

  const int = [
    {
      int: "Development",
    },
  ];

  return (
    <>
      <div className="border m-7 flex rounded-xl ">
        <div className=" border-r w-[60%] p-5">
          <div className="flex justify-between items-center mb-6 mt-1">
            <h2 className="text-[28px] font-semibold text-[#0D0E32]">
              My Profile
            </h2>
            {edit ? (
              <Button
                name="Save Profile"
                outline
                onClick={() => setEdit(false)}
              />
            ) : (
              <Button
                name="Edit Profile"
                outline
                onClick={() => setEdit(true)}
              />
            )}
          </div>

          {edit ? (
            <>
              <div className="relative">
                <div className="flex text-center border border-[#222482] rounded-lg relative z-50 bg-white hover:top-2 hover:left-[7px]">
                  <div className="border-r w-[50%] p-5 flex flex-col justify-end">
                    <div className="flex relative justify-center ">
                      <div className="w-[115px] h-[115spx] bg-slate-500   rounded-full">
                        {!selectedImage && (
                          <Image
                            src={EarlyAdopter}
                            alt="profile picture"
                            width={200}
                            height={200}
                            className="w-full h-full rounded-full bg-cover"
                          />
                        )}
                        {/* <div
                      className="bg-white p-[10px] rounded-full z-20 absolute -right-2 shadow-md top-[124px] cursor-pointer "
                      // onClick={handleUploadButtonClick}
                    >
                      <Image
                        src={EarlyAdopter}
                        alt="Edit image"
                        className=" w-6"
                      />
                    </div> */}
                      </div>
                      <input
                        name="profileImageDoc"
                        type="file"
                        capture="environment"
                        className="hidden"
                        accept="image/*"
                        // ref={fileInputRef}
                        // onChange={handleImageChange}
                      />
                    </div>
                    <p className="text-[16px] font-semibold">
                      Kiraichi Enioluwa
                    </p>
                    <p className="text-[12px] font-normal">
                      kirachienioluwa@gmail.com
                    </p>
                  </div>
                  <div className="text-center w-[50%] p-5 flex flex-col justify-center items-center">
                    <p className="text-[16px] font-semibold mb-2">INTERESTS</p>
                    <ul className="text-[13px] font-normal flex flex-col  items-start gap-1">
                      {interests.map((items, index) => (
                        <div key={index} className="flex items-center  gap-2">
                          <Image
                            alt="bullet point"
                            src={BulletPoint}
                            className="-[16px]"
                          />
                          <li className="top-1">{items}</li>
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="rounded-2xl border border-[#222482] p-[18px] absolute w-full top-[4px] left-[3px] h-full m-1 "></div>
              </div>
              <div className="mt-10">
                <p className="font-normal text-[20px] mb-2 text-[#0D0E32]">
                  Bio
                </p>
                <p className="border rounded-lg p-3 text-[#757575] text-[16px] border-[#222482] shadow-md">
                  Passionate Web3 enthusiast exploring the intersection of
                  blockchain technology and community growth
                </p>
              </div>
              <div className="mt-10">
                <p className="font-normal text-[20px] mb-2 text-[#0D0E32]">
                  Social
                </p>
                <Socials />
                <Socials />
                <Socials />
                <Socials />
                <Socials />
                <Socials />
              </div>
            </>
          ) : (
            <EditProfile />
          )}
        </div>
        <div className="w-[40%] p-5">
          <Points />
          <div className="flex justify-between items-center p-4 border rounded-xl border-[#222482] mt-6">
            <div className=" w-[60%]">
              <p className="text-[13px]">Accumulated points</p>
              <div className="flex justify-center">
                <p className="font-semibold text-[20px]">11, 6878.568</p>
              </div>
            </div>
            <Button name="claim rewards" outline className="" />
          </div>
          <h2 className="text-[28px] font-semibold text-[#0D0E32] mb-3 mt-9">
            Badges
          </h2>
          <div className="grid grid-cols-2 gap-10">
            <Badges img={EarlyAdopter} />
            <Badges img={Completionist} />
            <Badges img={Milestone} />
            <Badges img={Milestone} />
          </div>

          <h2 className="text-[28px] font-semibold text-[#0D0E32] mb-3 mt-9">
            Referal
          </h2>
          <div className="relative">
            <div className="border border-[#222482] rounded-lg p-3 bg-white relative z-50 hover:top-1 hover:left-[5px]">
              <div className="flex justify-between">
                <p>Refer a friend and get 500 points</p>
                <Button
                  name="get link"
                  outline
                  onClick={() => setModalOpen(true)}
                />
              </div>
              <div className="flex gap-2 border border-[#222482] rounded-lg w-[70%] justify-around p-2 text-[#0D0E32]">
                <div className="flex gap-3 w-[50%] border-r border-[#222482]">
                  <Image alt="check icon" src={Check} />
                  <p>21 referrals</p>
                </div>
                <div className="flex gap-3 w-[50%]">
                  <Image alt="check icon" src={Check} />
                  <p>4000 points</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-[#222482] p-[18px absolute w-full top-[1px] left-[1px] h-full m-1 "></div>
          </div>
        </div>
      </div>
      {modalOpen && <Referralmodal setModalOpen={setModalOpen} />}
    </>
  );
};

export default Page;
