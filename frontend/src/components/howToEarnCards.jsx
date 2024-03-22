import Image from "next/image";

const HowToEarnCards = ({ headingText, imageURL, description }) => {
  return (
    <div className="flex items-center justify-center gap-8">
      <Image src={imageURL} alt={`${headingText}`} width={50} height={50} />
      <div className="flex flex-col gap-3 items-start">
        <h2>{headingText}</h2>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default HowToEarnCards;
