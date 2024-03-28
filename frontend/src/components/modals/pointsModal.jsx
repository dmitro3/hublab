"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { Button } from "../../components";

const PointsModal = ({ openPoints, setOpenPoints }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenPoints(false); // Close the modal if clicked outside
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openPoints, setOpenPoints]);

  return (
    <section
      className={`w-[250px] absolute  bg-white rounded-lg z-[999] shadow-sm ${
        openPoints ? "block" : "hidden"
      }`}
    >
      <div
        ref={modalRef}
        className="w-full h-full flex flex-col items-center justify-center text-[#B2B0B0] font-normal"
      >
        <div className="w-full flex items-center justify-center gap-2 border-b border-gray-200 p-3">
          <Image
            src={"/images/verxioToken.svg"}
            height={50}
            width={50}
            alt="verxio token"
          />
          <span className="py-2 px-5 rounded-lg font-medium text-[16px] text-[#484851] bg-[#DFDFF7]">
            40 Points
          </span>
        </div>
        <div className="w-full p-3">
          <Button outline name="Enter" className={"w-full"} />
        </div>
      </div>
    </section>
  );
};

export default PointsModal;
