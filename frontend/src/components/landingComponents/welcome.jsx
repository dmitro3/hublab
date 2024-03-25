import Image from "next/image";
import { Button } from "@/components";

const Welcome = () => {
  return (
    <section className="w-screen h-screen flex flex-col md:flex-row items-center">
      <div className="w-full h-full md:w-1/2 bg-secondary"></div>
      <div className="bg-[#F3F3FC] w-full h-full md:w-1/2 flex flex-col gap-12 text-center items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-semibold text-primary text-2xl md:text-[48px] leading-snug">
            Hey Champ!
            <span className="inline">
              <Image
                src={"/images/champ.svg"}
                height={100}
                width={100}
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
        <Button name="Connect Wallet" href={"/profile"} />
      </div>
    </section>
  );
};

export default Welcome;
