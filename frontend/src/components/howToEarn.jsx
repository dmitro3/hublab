// import Link from "next/link";
import { HowToEarnCards } from "@/components";
import { Image } from "iconsax-react";
import verxioPay from "../assets/verxioPlay.svg";
import verxioRefer from "../assets/verxioRefer.svg";

const HowToEarn = () => {
  return (
    <div className="w-full h-full">
      <section className="max-w-[1440px] bg-earnBg mx-auto px-[MIN(100px,8%)] flex flex-col gap-5 md:gap-12 py-4 md:py-24">
        <h2 className="font-medium text-2xl md:text-5xl color text-primary text-center my-4">
          How To Earn on Verxio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5">
          <HowToEarnCards
            headingText={"Quest"}
            description={
              "Learn and familiarise yourself with various aspects of cryptocurrency"
            }
            imageURL={"/images/questImage.svg"}
            className={
              "border-2 rounded-tr-[60px] rounded-bl-[60px] bg-[#91DBF8] border-[#00ADEF]"
            }
            headingTextColor={"text-[#fff]"}
            descriptionColor="#212121"
          />
          <HowToEarnCards
            headingText={"Bounties"}
            description={
              "Undertake tasks to contribute and to the protocol community and ecosystem"
            }
            imageURL={"/images/bountiesImage.svg"}
            className={
              "border-2 rounded-tl-[60px] rounded-br-[60px] bg-[#FF8ADF] border-[#EF00AD]"
            }
          />

          <HowToEarnCards
            headingText={"Contest"}
            description={"Showcase your skills, creativity, and expertise."}
            imageURL={"/images/contestImage.svg"}
            className={
              "border-2 rounded-tl-[60px] rounded-br-[60px] bg-[#DFFF8A] border-[#89BD00]"
            }
          />
          <HowToEarnCards
            headingText={"Projects"}
            description={
              "Work together and achieve a common goal or objective."
            }
            imageURL={"/images/projectsImage.svg"}
            className={
              "border-2 rounded-tr-[60px] rounded-bl-[60px] bg-[#A2A4E7] border-[#2E31AC]"
            }
          />
        </div>

        <div className="w-full min-h-6">
          <div>
            <Image src={verxioPay} alt="play" width={200} height={200} />
          </div>

          <Image src={verxioRefer} alt="refer" width={200} height={200} />
        </div>
      </section>
    </div>
  );
};

export default HowToEarn;
