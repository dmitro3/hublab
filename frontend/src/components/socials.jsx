import Image from 'next/image';
import React from 'react'
import XLogo from "../assets/X-logo.svg";

const Socials = () => {
  return (
    <div className="border rounded-lg flex mb-3 border-[#222482] shadow-sm">
      <div className="w-[30%] border-r flex justify-cente items-center px-5 py-1 gap-2">
        <Image src={XLogo} alt="X logo" className="w-5" />
        <p>Twitter</p>
      </div>
      <p className="w-[70%] flex items-center justify-center">
        https://twitter.com/kirachienioluwa
      </p>
    </div>
  );
}

export default Socials