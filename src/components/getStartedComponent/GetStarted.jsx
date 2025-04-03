"use client";

import Link from "next/link";
import React,{useState} from "react";
import { LoginForm } from "@/components/login-form"
import { X } from "lucide-react";
import { SignIn } from "@clerk/nextjs";

const GetStarted = () => {
    const [isFormActive, setIsIsFormActive] = useState(false);
  return (
    <div id="getStarted" className="getStarted relative">
      <div className="h-screen w-full p-12 flex items-center flex-col backdrop-blur-md bg-[#ffffffaa]">
        <h1 className="text-5xl text-center font-bold font-[cursive] text-black">
          Identifiez Vous
        </h1>
        <div className="flex max-w-[800px] shadow-lg  rounded-sm bg-white mt-10 p-5">
          <div className="flex flex-col w-2/4 items-center justify-center p-10">
            <div className="flex items-start justify-center w-[300px] overflow-hidden rounded-sm">
              <img src="/getstarted1.jpg" alt="influence" width="100%" />
            </div>
            <h1 className="text-2xl text-gray-700 font-bold italic">
              Influenceur
            </h1>
            <button onClick={()=>setIsIsFormActive(true)} className=" bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-500 xl:text-[20px] text-2xl text-white px-5 py-3 cursor-pointer mt-3 ">
              S'inscrire
            </button>
          </div>
          <div className="flex flex-col w-2/4 items-center justify-center p-10">
            <div className="flex items-start justify-center w-[300px] overflow-hidden rounded-sm">
              <img src="/getstarted2.jpg" alt="influence" width="100%" />
            </div>
            <h1 className="text-2xl text-gray-700 font-bold italic">
              Entreprise
            </h1>
            <button onClick={()=>setIsIsFormActive(true)} className=" bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-500 xl:text-[20px] text-2xl text-white px-5 py-3 cursor-pointer mt-3 ">
              S'inscrire
            </button>
          </div>
        </div>
          </div>
      { isFormActive && <div className="flex items-center justify-center h-screen  w-full  flex-col gap-6 fixed top-0 left-2/4 right-2/4 translate-x-[-50%] backdrop-blur-md bg-[#ffffff91] z-50 ">
        <div onClick={()=>setIsIsFormActive(false)} className="bg-[#891ca4f3] cursor-pointer flex items-center justify-center w-[30px] h-[30px] overflow-hidden rounded-full">
        <X color={'#fff'} />
          </div>
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div
            className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            {/* <GalleryVerticalEnd className="size-4" /> */}
          </div>
          theBridge
        </a>
        {/* <LoginForm className={'max-w-sm'} /> */}
        <SignIn />
      </div> }
    </div>
  );
};

export default GetStarted;
