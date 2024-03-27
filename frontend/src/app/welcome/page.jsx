import Image from "next/image";
import { Button, VideoPlayer } from "@/components";

const page = () => {
  return (
    <section className="w-screen h-screen flex flex-col-reverse md:flex-row items-center">
      <div className="relative w-full h-full min-h-[50%] md:w-1/2">
        <VideoPlayer />
      </div>
      <div className="relative bg-[#F3F3FC] w-full h-full md:w-1/2 min-h-[50%] flex flex-col gap-12 text-center items-center justify-center p-4">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-semibold text-primary text-2xl md:text-[48px] leading-snug">
            Hey Champ!
            <span className="inline-flex relative top-5">
              <Image
                src={"/images/champ.svg"}
                height={70}
                width={70}
                alt="champ"
              />
            </span>
            We have <br className="hidden md:block" /> been expecting you.
          </h2>
          <p className="font-normal text-primary text-xl leading-snug">
            Step into a world of endless possibilities, connect
            <br className="hidden md:block" /> and get this thing rolling....
          </p>
        </div>
        <Button
          name="Connect Wallet"
          href={"/dashboard/profile"}
          className={"px-24"}
        />
      </div>
    </section>
  );
};

export default page;
