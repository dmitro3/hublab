import { howToEarnData } from "@/utils/data";
import { HowToEarnCards } from "../components";

const HowToEarn = () => {
  return (
    <section className="px-[MIN(100px,8%)] border border-red-500 top-36">
      <h2>How To Earn</h2>

      <section className="flex">
        {howToEarnData.map((data, index) => (
          <HowToEarnCards key={index} {...data} />
        ))}
      </section>
    </section>
  );
};

export default HowToEarn;
