import Image from "next/image";

const DashboardCards = ({
  src,
  alt,
  headerText,
  number,
  borderColor,
  backgroundColor,
}) => {
  return (
    <secton
      className="relative z-[5] flex items-center flex-col rounded-lg p-6 border"
      style={{ borderColor: borderColor, backgroundColor: backgroundColor }}
    >
      <div
        className="rounded-lg border h-full w-full absolute left-[6px] top-[6px] z-[-1]"
        style={{ borderColor: borderColor }}
      ></div>

      <div className="relative flex items-center gap-3">
        <div
          className="relative rounded-lg border p-2"
          style={{ borderColor: borderColor, backgroundColor: backgroundColor }}
        >
          <span
            className="rounded-lg border h-full w-full absolute left-[4px] top-[4px]"
            style={{ borderColor: borderColor }}
          ></span>
          <Image src={src} height={30} width={30} alt={alt} />
        </div>

        <p className="font-normal text-[12px] text-[#424242]">{headerText}</p>
      </div>
      <h2 className="font-semibold text-[48px] text-primary">{number}</h2>
    </secton>
  );
};

export default DashboardCards;
