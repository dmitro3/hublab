"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Logo, SidebarMenuItem } from "./atoms";
import Image from "next/image";
import AxiosLogo from "../assets/AxiosLogo.svg";
import { useNav } from "../context/nav_context";
import { NavigationItems } from "../components/atoms/sideBarData";
import Button from "./Button";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Sidebar = () => {
  const { isOpen, setUser } = useNav();

  return (
    <>
      <nav
        className={`
      ${
        isOpen ? "translate-x-0 absolute h-full z-50" : "max-lg:hidden"
      } w-[300px] bg-primary z-50 h-full`}
      >
        <div className="flex justify-center items-center px-[5%]">
          <Logo className="py-12" />
        </div>
        <div className="mx-5">
          <Button name="Profile" className="my-7" />
        </div>
        <div className="flex flex-col justify-between h-full">
          <ul className="">
            {NavigationItems.map((item, index) => (
              <SidebarMenuItem key={`sidebar-item-${index}`} {...item} />
            ))}
          </ul>
          <div className="flex justify-center " style={{ backgroundColor: '#00ADEF' }}>
            <WalletMultiButton labels={{ 'no-wallet': 'Connect Wallet' }}/>
          </div>
          <div className="flex justify-center items-center gap-3">
            <p className="text-white text-[12px]">Powered by</p>
            <Image src={AxiosLogo} alt="Axios Logo" width={50} height={50} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
