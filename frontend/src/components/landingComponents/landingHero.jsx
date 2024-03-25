"use client";
import Button from "../Button";
// import Image from "next/image";

const LandingPageHero = () => {
  return (
    <section className="relative flex flex-col w-full md:h-[803px] md:flex-row">
      <section className="relative bg-primary w-full h-full py-36">
        {/* <div className="h-full w-full overflow-hidden absolute top-[5%] left-[20%]">
          <Image
            src={"/images/heroDoddles.svg"}
            height={700}
            width={700}
            alt="doddles"
          />
        </div> */}
        <div className="relative h-full flex flex-col items-center justify-center text-center mx-auto gap-8 md:gap-12 px-[MIN(100px,8%)]">
          <div className="flex flex-col font-medium text-3xl md:text-6xl text-textColor leading-10 md:leading-[80px]">
            <h2>
              Embark on a Journey <br className="hidden md:block" /> Where{" "}
              Rewards begin <br className="hidden md:block" /> from
              <span className="text-[#00ADEF]"> day one</span>
            </h2>
          </div>

          <p className="font-normal text-lg text-[#DFDFF7]">
            Earn crypto simply by engaging. Expand your reach and attract{" "}
            <br className="hidden md:block" /> new audiences with our protocols
          </p>

          <div className="flex gap-3 items-center relative z-20">
            <Button name="Start Earning" />
            <Button name="Start Campaign" outline className="bg-primary" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default LandingPageHero;
