"use client";
import Button from "../Button";
import Image from "next/image";

const LandingPageHero = () => {
  return (
    <section className="relative flex flex-col w-full md:h-[803px] md:flex-row">
      <section className="relative bg-primary w-full h-full py-36">
        <span className="z-1 absolute top-5 left-[35%] md:top-16 md:left-[20%] animate-customrotate">
          <Image
            src={"/images/vShapedOne.svg"}
            height={50}
            width={50}
            alt="doddles"
          />
        </span>
        <span className="z-1 absolute top-[45%] md:top-[60%] left-[10%] animate-custombounce">
          <Image
            src={"/images/vShapedTwo.svg"}
            height={50}
            width={50}
            alt="doddles"
          />
        </span>

        <span className="z-1 absolute top-[90%] left-[50%] animate-customrotate">
          <Image
            src={"/images/vShapedFour.svg"}
            height={50}
            width={50}
            alt="doddles"
          />
        </span>

        <span className="z-1 absolute top-30 right-[0] md:right-[20%] animate-custombounce ">
          <Image
            src={"/images/vShapedFive.svg"}
            height={50}
            width={50}
            alt="doddles"
          />
        </span>
        <span className="z-1 absolute top-[65%] right-[10%] animate-customrotate">
          <Image
            src={"/images/vShapedThree.svg"}
            height={50}
            width={50}
            alt="doddles"
          />
        </span>

        <section className="relative w-full h-full bg-heroDoddle bg-no-repeat bg-cover bg-center">
          <div className="relative h-full flex flex-col items-center justify-center text-center mx-auto gap-8 md:gap-12 px-[MIN(100px,8%)]">
            <div className="flex flex-col font-medium text-3xl md:text-6xl text-textColor leading-10 md:leading-[80px]">
              <h2>
                Create and Manage <br className="hidden md:block" /> Tokenized{" "}
                ad Campaigns <br className="hidden md:block" /> in
                <span className="text-[#00ADEF]"> Minutes</span>
              </h2>
            </div>

            <p className="font-normal text-lg text-[#DFDFF7]">
              Grow your business by rewarding community particpiation with{" "}
              <br className="hidden md:block" /> crypto incentives.
            </p>

            <div className="flex gap-3 items-center relative z-20">
              {/* <Button name="Start Earning" href={"/welcome"} /> */}
              <Button href="/create_campaign?tab=start" name="Start Campaign" />
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default LandingPageHero;
