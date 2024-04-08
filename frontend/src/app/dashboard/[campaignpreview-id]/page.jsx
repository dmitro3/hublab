"use client";
// import Image from "next/image";
import { Button } from "@/components";
import { useState } from "react";
// import VerxioGold from "@/assets/VerxioCoin.svg";

const page = () => {
  const [loading, setLoading] = useState(false);

  return (
    <section className="w-full h-full p-10">
      <section className="w-full border rounded-lg p-6 flex flex-col items-center md:flex-row gap-3">
        {/* ID: {params?.[`campaignpreview-${id}`]} */}
        <section className="w-full h-full md:w-[60%]">
          <div className="border-b py-[20px]">
            <h2>
              Launch Campaign:{" "}
              <span>
                Join LexiFay <br />
                200,000 VPoint
              </span>
            </h2>

            <blockquote className="flex items-center justify-between">
              <button
                className={`py-2 px-6 rounded-lg border font-normal text-[14px] text-[#34A90B] border-[#34A90B] bg-[#DAFCDE]`}
              >
                Ongoing
              </button>
              <button
                className={`py-2 px-6 rounded-lg border font-normal text-[14px] text-[#484851] border-[#484851]`}
              >
                2024 April 02 - 2024 April 10
              </button>
            </blockquote>
          </div>

          <h2 className="text-primary font-semibold text-[28px] my-3">
            Description
          </h2>

          <p className="font-normal text-[18px] text-[#484851] my-3">
            Join Lexifay and embark on an exciting journey with us! We're
            thrilled to announce our latest campaign, where we're inviting 1000
            participants to become integral members of our thriving community.
            As part of this exclusive opportunity, each participant will receive
            200 points to kickstart their journey with Lexifay. Your mission?
            Simply join our various platforms and immerse yourself in the
            vibrant ecosystem we've cultivated. By joining us on this adventure,
            you'll not only gain access to cutting-edge technologies and
            groundbreaking projects but also forge meaningful connections with
            like-minded individuals passionate about the future of Web 3.
          </p>

          <p className="font-normal text-[18px] text-[#484851] my-3">
            As part of this exclusive opportunity, each participant will receive
            200 points to kickstart their journey with Lexifay. Your mission?
            Simply join our various platforms and immerse yourself in the
            vibrant ecosystem we've cultivated
          </p>

          <p className="font-normal text-[18px] text-[#484851] my-3">
            By joining us on this adventure, you'll not only gain access to
            cutting-edge technologies and groundbreaking projects but also forge
            meaningful connections with like-minded individuals passionate about
            the future of Web 3.
          </p>

          <div>
            <h2 className="text-primary font-semibold text-[28px] my-3">
              Tasks
            </h2>
          </div>
        </section>
        <section className="w-full h-full md:w-[40%]">
          <div className=" p-6">
            <div className="relative mb-7">
              <div className="border border-primary bg-white rounded-lg px-5 relative z-50">
                <p className="text-[30px] ">
                  Points: <span className="font-bold">200</span>
                </p>
                <div className="flex justify-center py-7">
                  {/* <Image alt="coin" src={VerxioGold} className="w-[200px]" /> */}
                </div>
              </div>
              <div className="rounded-lg border border-primary h-full absolute w-full top-[6px] left-[6px] "></div>
            </div>
            <Button
              name="claim rewards"
              // onClick={() => handleClaimRewards(total)}
              isLoading={loading}
            />
            {/* {transactionUrl && (
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
            )} */}
          </div>
          <div className="border border-[#B6B8EC] my-8"></div>
          <div className="p-6">
            <div className="flex items-center gap-2">
              <p className="text-[24px] font-bold">Participants</p>
              {/* <p className="border rounded p-1 px-2">
                +<span>{reward?.participants.toLocaleString()}</span>
              </p> */}
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default page;
