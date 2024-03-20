import React, { useState } from "react";
import Image from "next/image";
import Milestone from "../assets/Milestone.svg"
import Badgemodal from "../../../frontend/src/components/modals/badgemodal";

const MilestoneBadge = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative w-[200px]" onClick={() => setModalOpen(true)}>
      <div className="relative flex justify-center hover:top-[6px] hover:left-[5px]">
        <Image alt="badge" src={Milestone} className="rounded-lg z-40 relative " />
        <div className="absolute top-[105px] left-0 z-50">
        </div>
      </div>
      <div className="rounded-lg border border-[#222482] p-[18px] absolute w-full top-[2px] left-[1px] h-full m-1 "></div>
      {modalOpen && <Badgemodal setModalOpen={setModalOpen} />}
    </div>
  );
};

export default MilestoneBadge;
