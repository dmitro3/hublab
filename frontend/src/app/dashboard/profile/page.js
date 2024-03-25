"use client";
import Button from "@/components/Button";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProfileImg from "../../../assets/profileImg.png";
import Linkedin from "../../../assets/linkedin-logo.svg";
import Discord from "../../../assets/discord-logo.svg";
import Github from "../../../assets/github-logo.svg";
import XLogo from "../../../assets/X-logo.svg";
import Website from "../../../assets/website-logo.svg";
import Check from "../../../assets/check-icon.svg";
// import ProfileImg from "../../../assets/profileImg.png";
import EarlyAdopter from "../../../assets/EarlyBadge.svg";
import Completionist from "../../../assets/Completionist.svg";
import Milestone from "../../../assets/milestone.svg";
import Expert from "../../../assets/Expert.svg";
import BulletPoint from "../../../assets/bullet-point.svg";
import Socials from "@/components/socials";
import Points from "@/components/points";
import Badges from "@/components/badges";
import Referralmodal from "@/components/modals/referalmodal";
import EditProfile from "@/components/profileComponents/editProfile";
import Referral from "@/components/profileComponents/referral";
import { getProfile } from "@/store/slices/profileSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [edit, setEdit] = useState(false);
  const [userProfile, setUserProfile] = useState({});

  const dispatch = useDispatch();

  const interests = ["Development", "Content", "Earning", "Trading"];

  useEffect(() => {
    // getUserProfile()

    const getUserProfile = async () => {
      try {
        const response = await dispatch(getProfile({ id: 1 }));
        console.log(response);
        if (response.payload.success === true) {
          console.log("success");
          toast.success(response?.payload.message);
          setUserProfile(response?.payload.profile);
        } else {
          toast.error(response?.payload.message);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUserProfile();
  }, [dispatch]);

  console.log(userProfile);

  return (
    <>
      <div className="border m-3 sm:m-7 flex rounded-xl ">
        <div className=" border-r w-[100%] sm:w-[70%] p-3 sm:p-5">
          <div className="flex justify-between items-center mb-6 mt-1">
            <h2 className="text-[28px] font-semibold text-[#0D0E32]">
              My Profile
            </h2>
            {edit ? null : ( // /> //   onClick={() => setEdit(false)} //   outline //   name="Save Profile" // <Button
              <Button
                name="Edit Profile"
                outline
                onClick={() => setEdit(true)}
              />
            )}
          </div>

          {!edit ? (
            <>
              <div className="relative">
                <div className="flex text-center border border-[#222482] rounded-lg relative z-50 bg-white hover:top-2 hover:left-[7px]">
                  <div className="border-r w-[50%] p-5 flex flex-col justify-end">
                    <div className="flex relative justify-center ">
                      <div className="w-[115px] h-[115spx] bg-slate-500   rounded-full">
                        {/* {!selectedImage && ( */}
                        <Image
                          src={ProfileImg}
                          alt="profile picture"
                          width={200}
                          height={200}
                          className="w-full h-full rounded-full bg-cover"
                        />
                        {/* )} */}
                      </div>
                    </div>
                    <p className="text-[16px] font-semibold capitalize">
                      {userProfile.firstName} {userProfile.lastName}
                    </p>
                    <p className="text-[12px] font-normal">
                      {userProfile.email}
                    </p>
                  </div>
                  <div className="text-center w-[50%] p-5 flex flex-col justify-center items-center">
                    <p className="text-[16px] font-semibold mb-2">INTERESTS</p>
                    <ul className="text-[13px] font-normal flex flex-col  items-start gap-1">
                      {userProfile?.interests?.map((items, index) => (
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
                  {userProfile.bio}
                </p>
              </div>

              <div className="mt-10">
                <p className="font-normal text-[20px] mb-2 text-[#0D0E32]">
                  Referral
                </p>
                {!edit && (
                  <Referral
                    setModalOpen={setModalOpen}
                    referalPoints={userProfile?.points?.referalPoints}
                  />
                )}
              </div>

              <div className="mt-10">
                <p className="font-normal text-[20px] mb-2 text-[#0D0E32]">
                  Socials
                </p>
                <div className="flex gap-6">
                  <Image alt="logo" src={XLogo} className="w-[50px]" />
                  <Image alt="logo" src={Linkedin} className="w-[50px]" />
                  <Image alt="logo" src={Discord} className="w-[50px]" />
                  <Image alt="logo" src={Github} className="w-[50px]" />
                </div>
              </div>
            </>
          ) : (
            <EditProfile />
          )}
        </div>
        <div className="w-[40%] p-5 hidden sm:block">
          <Points />
          <div className="flex justify-between items-center p-4 border rounded-xl border-[#222482] mt-6">
            <div className=" w-[50%]">
              <p className="text-[13px] xl:text-[16px]">Total points</p>
              <div className="flex justify-start">
                <p className="font-semibold text-[16px] md:text-[20px]">
                  {userProfile?.points?.totalPoints}
                </p>
              </div>
            </div>
            <Button
              name="claim rewards"
              outline
              className="px-[5px] text-[13px]"
            />
          </div>
          <h2 className="text-[28px] font-semibold text-[#0D0E32] mb-3 mt-9">
            Badges
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8  justify-center items-center">
            <Badges img={EarlyAdopter} />
            <Badges img={Completionist} />
            <Badges img={Milestone} />
            <Badges img={Expert} />
          </div>

          {edit && (
            <>
              <h2 className="text-[28px] font-semibold text-[#0D0E32] mb-3 mt-10">
                Referal
              </h2>
              <Referral
                setModalOpen={setModalOpen}
                referalPoints={userProfile?.points?.referalPoints}
              />
            </>
          )}
        </div>
      </div>
      {modalOpen && <Referralmodal setModalOpen={setModalOpen} />}
    </>
  );
};

export default Page;
