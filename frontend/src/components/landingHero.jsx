"use client";
import { Button } from "@/components";

const LandingPageHero = () => {
  return (
    <section className="relative flex flex-col w-full md:h-[923px] md:flex-row">
      <section className="relative bg-primary w-full h-full py-36">
        <div className="relative top-[10%] h-full flex flex-col gap-8 md:gap-12 px-[MIN(100px,8%)]">
          <div className="flex flex-col font-medium text-3xl md:text-6xl text-textColor leading-10 md:leading-[80px]">
            <h2>
              Embark on a<br className="hidden md:block" /> Journey Where{" "}
              <br className="hidden md:block" /> Rewards begin{" "}
              <br className="hidden md:block" /> from{" "}
              <span className="text-[#00ADEF]">day one</span>
            </h2>
          </div>

          <p className="font-normal text-lg text-[#DFDFF7]">
            Earn crypto simply by engaging. Expand your reach and attract new
            audiences with our protocols
          </p>

          <div className="flex items-center">
            <Button>Start Earning</Button>
            <Button>Start Campaign</Button>
          </div>
        </div>
      </section>
      <div className="h-full w-full bg-herobg bg-no-repeat bg-center bg-cover"></div>
    </section>
  );
};

export default LandingPageHero;
