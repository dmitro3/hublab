import React from "react";
import Link from "next/link";
import Image from "next/image";

const Task = ({ name, logo, task, taskLink }) => {
  return (
    <section className="relative w-full">
      <div
        className={`relative w-full border rounded-lg z-50 flex items-center gap-3
         border-[#222482] shadow-sm hover:scale-[1.02] hover:shadow-md p-2 bg-white`}
      >
        <div className="w-[25%] border-r flex justify-cente items-center px-3 py-2 gap-2">
          <Image src={logo} alt="X logo" className="w-4 sm:w-5" />
          <p className="text-[13px] sm:text-[14px] hidden md:block">{name}</p>
        </div>

        <Link
          className="w-[50%] font-normal text-[#424242] text-[16px]"
          href={taskLink}
        >
          {task}
        </Link>

        <div className="w-[25%] self-end flex items-center gap-2 border border-primary p-2 rounded-lg">
          <Image
            src={"/images/verxioTokenGold.svg"}
            alt="Point logo"
            height={30}
            width={30}
          />
          <span>40 Points</span>
        </div>
      </div>
      <div className="rounded-lg border bg-primary z-10 h-full w-full absolute left-[6px] top-[4px] shadow-sm hover:scale-[1.02] hover:shadow-md"></div>
    </section>
  );
};

export default Task;
