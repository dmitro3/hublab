import SliderCards from "./sliderCards";

const sliderCardsData = [
  {
    headerText: "715,986 K+",
    description: "Verxio Minted Tokens",
  },
  {
    headerText: "201,986,372 M+",
    description: "Verxio Earners",
  },
  {
    headerText: "858,96 K+",
    description: "Verxio Communities",
  },
  //   {
  //     headerText: "858,96 K+",
  //     description: "Verxio Refferals",
  //   },
];

const SliderSection = () => {
  return (
    <section className="w-full h-full max-w-[1920px] mx-auto bg-earnBg ">
      <blockquote className="px-[MIN(100px,8%)] border-y-2 border-[#0D0E32] py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center md:flex-row gap-3">
        {[...sliderCardsData].map((data, index) => (
          <SliderCards {...data} key={index} />
        ))}
      </blockquote>
    </section>
  );
};

export default SliderSection;
