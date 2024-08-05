"use client";
import React from "react";
import Image from "next/image";
import ImageOverlay from "@/components/Auth/imageOverlay";
import Inputs from "@/components/Auth/signUpInput";
import { useRouter } from "next/navigation";

function SignUp() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center md:h-full pt-24 mb-20 ">
      {/* left poster */}
      <div className="w-4/5 h-full shadow-md p-3 md:flex md:justify-between md:items-center">
        <div className=" md:w-[45%] h-full hidden md:flex md:items-center md:justify-center bg-purple-300 rounded-tr-[100px] rounded-tl-xl rounded-bl-[100px]">
          <Image
            alt="img"
            src="/unifordScholar/r11.png"
            className="h-4/5 w-4/5"
            height={600}
            width={400}
          />
        </div>

        {/* Right content  */}
        <div className=" flex flex-col justify-start md:items-start  items-center  h-full  md:w-[45%]  w-full  ">
          <div className=" flex  mt-10">
            <p className="md:text-7xl  sm:text-9xl text-7xl  font-bold  text-[#203a63] ">
              Uniwave
            </p>
            <ImageOverlay />
          </div>

          <p className="md:text-5xl  sm:text-7xl text-4xl md:mt-1  mt-7 ">
            Create an account
          </p>
          <p className=" text-[#969696] md:text-lg  sm:text-2xl text-lg md:mt-1   mt-2  ml-1">
            Please enter your details to sign up
          </p>

          {/* Input all the data here */}
          <Inputs />

          <div className="flex justify-center items-center w-[80%]">
            <hr className="w-[40%] h-[2px] bg-[#D9D9D9]" />
            <p className="p-4">or</p>
            <hr className="w-[40%] h-[2px] bg-[#D9D9D9]" />
          </div>

          <p className="text-lg md:pl-[22%] ">
            Already have an account?{" "}
            <a
              onClick={() => router.push("/login")}
              className="underline hover:cursor-pointer font-semibold text-[#548702] md:pl-2"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
