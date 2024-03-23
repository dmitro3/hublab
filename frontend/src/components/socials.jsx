import Image from "next/image";
import React from "react";
import XLogo from "../assets/X-logo.svg";

const Socials = ({ name, logo, setFieldValue, values }) => {

  return (
    <div className="border rounded-lg flex mb-3 border-[#222482] shadow-sm hover:scale-[1.02] hover:shadow-md">
      <div className="w-[30%] border-r flex justify-cente items-center px-5 py-2 gap-2">
        <Image src={logo} alt="X logo" className="w-5" />
        <p>{name}</p>
      </div>
      <input
      placeholder={`enter your ${name} link`}
        className="w-[70%] bg-transparent outline-none px-3"
        onChange={(e) => {
          setFieldValue(name, e.target.value);
        }}
      />
      {/* <p className="w-[70%] flex items-center justify-center">
        https://twitter.com/kirachienioluwa

      </p> */}
    </div>
  );
};

export default Socials;
