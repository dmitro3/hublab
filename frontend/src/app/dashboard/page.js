"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const page = () => {
  const router = useRouter();
  const userId = useSelector((state) => state.generalStates.userId);

  console.log(userId)

  useEffect(() => {
    if (userId === "") {
      router.push("/welcome");
    }
  }, []);
  return <div>page</div>;
};

export default page;
