import React from "react";
import Image from "next/image";
import SignOut from "../assets/SignOut.svg";
// import { useDispatch } from "react-redux";
import { useParticleConnect } from '@particle-network/connect-react-ui';
import { useRouter } from "next/navigation";


const LogoutButton = () => {

const { disconnect } = useParticleConnect();
    const onDisconnect = () => disconnect({ hideLoading: true });
    // const dispatch = useDispatch(); 
    // const router = useRouter();

    const handleLogout = () => {

        onDisconnect()
        // dispatch(resetState());
        // router.push("/");
    };

  return (
    <div
      onClick={handleLogout}
      className="flex items-center justify-center w-[100%] gap-3 cursor-pointer border"
    >
      <Image src={SignOut} alt="" />
      <p className="text-white">Logout</p>
    </div>
  );
};

export default LogoutButton;


