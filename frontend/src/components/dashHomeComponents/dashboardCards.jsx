import Image from "next/image";

const DashboardCards = ({ src, alt, headerText, number }) => {
  return (
    <secton className="flex items-start flex-col">
      <div className="flex items-center gap-3">
        <span>
          <Image src={src} height={30} width={30} alt={alt} />
        </span>

        <p>{headerText}</p>
      </div>
      <h2>{number}</h2>
    </secton>
  );
};

export default DashboardCards;

