"use client";
import FAQ from "@/components/Home/FAQ";

import FeedbackSlideshow from "@/components/Home/FeedbackSlideshow";
import Accordion from "@/components/Home/Accordion";
import Link from "next/link";
import Researchers from "@/components/Home/Researchers";
import CompanySlideshow from "@/components/Scholar/CompanySlideshow";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import Benefits from "@/components/Scholar/Benefits";

import { FaTasks } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import Tool from "@/components/tools/Tool";
import PopularPostsCarousel from "@/components/grant-program/GrantProgramsCardsCarousel";

export default function Home() {
    const [trendingDomains] = useState([
        "Engineering",
        "Medical",
        "Research Scholar",
        "Management",
        "Environmental Activist",
        "Agriculture",
        "Innovators",
    ]);
    const router = useRouter();
    const [skilledButton, setSkilled] = useState(false);
    const handleScholarClick = () => {
        setSkilled(true);
        // Set a timeout to hide the "Application Closed" message after 5 seconds
        setTimeout(() => {
            setSkilled(false);
        }, 5000);
    };
    const handleKeyDown = (event: any) => {
        if (event.key === "Enter") {
            toast("Uniwave AI coming soon");
        }
    };
    return (
        <main className="w-full max-w-screen-xl mx-auto">
            {/* MainContent */}
            <div className="bg-[#f6f8fa] border rounded-2xl w-[95%] mx-auto py-4 lg:py-24 mt-20 overflow-hidden">
                {/* hero content and grid */}
                <div className=" w-full justify-center lg:px-40 flex flex-col md:flex-row">
                    <div className="w-full lg:w-1/2 pl-10 lg:p-0 mt-5 lg:mt-0">
                        <div className="flex items-center">
                            <h1 className="text-3xl lg:text-5xl text-[#28487c] font-bold">
                                UN Fransico
                            </h1>
                            <br />
                            <div className="flex justify-center ml-4">
                                <div className="w-6 h-6 bg-primaryGreen rounded-full "></div>
                                <div className="w-6 h-6 bg-[#C8BBFF] rounded-full ml-[-4px]"></div>
                                <div className="w-6 h-6 bg-[#FF5690] rounded-full ml-[-6px] "></div>
                            </div>
                        </div>
                        <h1 className="text-xl md:text-3xl lg:text-3xl my-4 font-bold text-gray-500 lg:mb-6">
                            Learn What School Doesn't Teach You
                        </h1>
                        {/* search section */}
                        <div className="flex flex-col gap-7">
                            {/* <div className="border flex items-center lg:w-3/4 m-2 rounded-full overflow-hidden bg-white">
                <div className="p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-search"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                  </svg>
                </div>
                <input
                  type="text"
                  onKeyDown={handleKeyDown}
                  placeholder="Find your Institute."
                  className="w-full border-0 p-5 focus:outline-none"
                />
              </div> */}
                            <div className="flex flex-col gap-3 justify-between">
                                <p className="px-6 py-3 rounded-xl bg-white text-gray-500 w-4/5 flex items-center justify-center gap-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="#65bd67"
                                        className="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                                    </svg>
                                    At UN Francisco, you can gain practical knowledge and learn real-world skills that will help you transform your life at work, school, and home.
                                </p>
                                {/* <p className="text-gray-500">
                  Join hands with world className scholars and seize the boundless oppurtunities and
                  growth
                </p> */}
                            </div>
                            <button
                                onClick={() => {
                                    router.push("/donation");
                                }}
                                className="bg-[#28487c] my-6 w-32 px-3 py-2 rounded-xl text-white text-lg font-bold "
                            >
                                Enrol free membership
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-80 lg:h-[35rem] px-8 lg:px-0 py-4 gap-4 lg:w-1/2">
                        {/* <Link href={"/getHired"}>
                            <img
                                alt="img"
                                className="w-full rounded-2xl hover:scale-105 duration-500 shadow-xl animate-bounce "
                                src={"/home/getHired.png"}
                            />
                        </Link>
                        <Link href={"/unifordResources"}>
                            <img
                                alt="img"
                                className="w-full rounded-2xl hover:scale-105 duration-500 shadow-xl"
                                src={"/home/resourceLib.png"}
                            />
                        </Link>
                        <Link href={"/scholar"}>
                            <img
                                alt="img"
                                className="w-full rounded-2xl hover:scale-105 duration-500 shadow-xl"
                                src={"/home/research.png"}
                            />
                        </Link>
                        <Link href={"/research"}>
                            <img
                                alt="Img"
                                className="w-full rounded-2xl hover:scale-105 duration-500 shadow-xl"
                                src={"/home/scholar.png"}
                            />
                        </Link> */}
                        <img
                            alt="Globe"
                            src="/home/Vector.svg"
                            className=" w-full"
                        />
                    </div>
                </div>
            </div>

            <div className="w-[95%] h-full min-h-0.5 rounded-xl my-24 p-4 bg-[#FEFCEF] shadow-xl mx-auto flex md:flex-row-reverse flex-col gap-4 justify-between">
                <img
                    alt="img"
                    src="/home/resourceLib.jpg"
                    className="w-full md:w-2/5 rounded-xl"
                />
                <div className="flex flex-col w-full p-5 justify-between md:w-2/5">
                    <div className="flex flex-col gap-4">
                        <div className="space-y-2">
                            <h1 className="text-4xl font-bold text-gray-600">
                                Career Resources
                            </h1>
                            {/* <h1 className='text-4xl font-bold text-gray-600'><span className='inline text-primaryGreen'> Uniford Scholar</span> Today</h1> */}
                        </div>
                        <p>
                            Unlock resources worth ₹2,00,000 at no cost through our exclusive membership program.{" "}
                            {/* <span className="text-gray-500 text-lg font-bold">student</span>{" "}
                            to{" "}
                            <span className="text-lg font-bold text-gray-500">
                                specialized scholar
                            </span>{" "}
                            for unrivaled oppurtunities and growth{" "} */}
                        </p>
                    </div>
                    <div className="hidden mt-3 lg:flex gap-2 lg:gap-5">
                        <div className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#65bd67"
                                className="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                            </svg>
                            <p className="whitespace-nowrap">Softwares</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#65bd67"
                                className="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                            </svg>
                            <p className="whitespace-nowrap">Courses</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#65bd67"
                                className="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                            </svg>
                            <p className="whitespace-nowrap">Packages</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#65bd67"
                                className="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                            </svg>
                            <p className="whitespace-nowrap">Premium Courses</p>
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            router.push("/uniwave-resources");
                        }}
                        className="bg-[#28487c] whitespace-nowrap my-4 w-3/5 lg:w-2/5 h-12 rounded-xl text-white text-lg font-bold"
                    >
                        Explore Now
                    </button>
                </div>
            </div>
            {/* <div className=" w-full">
                <Tool description={'asdf'} id={'1'} toolContent={[
                    {
                        imgSrc: 'https://magicui.design/showcase/infisical.png',
                        title: 'adsfasd',
                        description: 'asd'
                    },
                    {
                        imgSrc: 'https://magicui.design/showcase/infisical.png',
                        title: 'adsfasd',
                        description: 'asd'
                    },
                    {
                        imgSrc: 'https://magicui.design/showcase/infisical.png',
                        title: 'adsfasd',
                        description: 'asd'
                    },
                    {
                        imgSrc: 'https://magicui.design/showcase/infisical.png',
                        title: 'adsfasd',
                        description: 'asd'
                    },
                    {
                        imgSrc: 'https://magicui.design/showcase/infisical.png',
                        title: 'adsfasd',
                        description: 'asd'
                    },
                ]} toolImage={''} toolName={'asdf'} />
            </div> */}
            

          <div className="my-24 w-[95%]">
                <Researchers />
            </div>

            <div className="w-full md:w-11/12 lg:w-4/5 mx-auto bg-white md:rounded-full border shadow-xl my-24 p-4 lg:p-8">
                <div className="flex justify-between gap-4 text-3xl font-bold items-center">
                    <h1 className="text-black text-base w-40">Trusted by:</h1>
                    <CompanySlideshow />
                </div>
            </div>

            <div className="bg-[#EFF2F573] w-full rounded-xl py-4 my-24">
                {/* be a scholar today */}
                <div className="w-11/12 rounded-xl p-4 bg-white mx-auto flex md:flex-row flex-col gap-4">
                    <img
                        alt="img"
                        src="/home/applyAs.png"
                        className="w-full md:w-2/5 rounded-xl"
                    />
                    <div className="flex flex-col w-full p-5 justify-between">
                        <Link href={"#"} className="text-primaryGreen self-end">
                            View more
                        </Link>
                        <div className="flex flex-col gap-4">
                            <div className="space-y-2">
                                <h1 className="text-4xl font-bold text-gray-600">Internship Oppurtunities </h1>
                                {/* <h1 className="text-4xl font-bold text-gray-600">
                                    <span className="inline text-primaryGreen">
                                        {" "}
                                        Uniwave Scholar
                                    </span>{" "}
                                    Today
                                </h1> */}
                            </div>
                            <p>
                                <span className="font-bold"> <FaRocket className="inline" /> For Freshers:</span>
                                Begin your career journey with hands-on experience in real company projects. Learn 11 essential skills to kickstart your professional growth.
                                <br /> <br /> <span className="font-bold"><FaRocket className="inline" /> For Experienced Individuals:</span>
                                Apply for paid internships by submitting your project portfolio through our Common Application Form (CAF).
                            </p>
                        </div>
                        <div className="hidden lg:flex gap-2 lg:gap-5">
                            <div className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="#65bd67"
                                    className="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                                </svg>
                                <p>Career Track For Internship</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="#65bd67"
                                    className="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                                </svg>
                                <p>Application fee refund</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="#65bd67"
                                    className="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                                </svg>
                                <p>Pro Resources</p>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                router.push("/scholar");
                            }}
                            className="bg-[#28487c] whitespace-nowrap my-4 w-3/5 lg:w-2/5 h-12 rounded-xl text-white text-lg font-bold"
                        >
                            Join as a scholar
                        </button>
                    </div>
                </div>

                {/* why Uniwave */}
                {/* <div className="mt-16 lg:my-16 p-5 w-11/12 mx-auto">
                    <h3 className="text-4xl font-semibold text-center">
                        Why become a{" "}
                        <span className="text-4xl text-primaryGreen">Uniwave Scholar?</span>{" "}
                    </h3>
                    <Benefits />
                </div> */}
            </div>

            {/* research and dev */}
            {/* <div className="bg-[#f6f8fa] shadow-md w-11/12 mx-auto rounded-xl py-5 lg:p-10 my-24">
                <div className="w-11/12 flex gap-8 flex-col md:flex-row mx-auto items-center relative">
                    <div className="w-full md:w-1/2">
                        <div className="w-full bg-[#D9D9D9] rounded-3xl overflow-hidden">
                            <img
                                alt="img"
                                src="https://i.ibb.co/PgCbZHH/rnd4.jpg"
                                height={400}
                                width={400}
                                className="h-full w-full"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col p-5 gap-5 ">
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-5xl font-bold mb-4">Research and </h1>
                                <h1 className="text-5xl text-primaryGreen font-bold">
                                    Development
                                </h1>
                            </div>
                            <Link
                                href={"/research"}
                                className="text-primaryGreen absolute top-0 right-0"
                            >
                                View more
                            </Link>
                        </div>
                        <p>
                            Uniwave Foundation works on various projects to address real-world
                            environmental challenges, providing funding, grants, and
                            mentorship to R&D teams. We also welcome skilled and passionate
                            students interested in research to join{" "}
                        </p>
                        <button
                            onClick={() => router.push("/research")}
                            className="bg-[#28487c] my-4 w-2/5 h-12 rounded-xl text-white text-lg font-bold hidden lg:block"
                        >
                            Explore Resources
                        </button>
                    </div>
                </div>
            </div> */}

            <div className="bg-[#EFF2F573] w-full rounded-xl px-0 py-10 lg:p-10 my-8">
                <div className="w-11/12 rounded-3xl p-5 flex flex-col-reverse md:flex-row mx-auto items-center bg-white  shadow-md">
                    <div className="w-full md:w-1/2 flex flex-col p-5 gap-5">
                        <div>
                            <h1 className="text-3xl font-bold">
                                Social Internship
                            </h1>
                            {/* <h1 className='text-3xl'><span className='inline text-primaryGreen'>Researcher?</span></h1> */}
                        </div>
                        <p>
                            Complete your social internship and get your membership fee refunded.
                        </p>
                        <div className="hidden lg:flex gap-2 lg:gap-5">
                            <div className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="#65bd67"
                                    className="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                                </svg>
                                <p className="flex font-semibold">Grants for research</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="#65bd67"
                                    className="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                                </svg>
                                <p className="flex font-semibold">International Program </p>
                            </div>
                            <div className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="#65bd67"
                                    className="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                                </svg>
                                <p className="flex font-semibold">Internship Referral</p>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                handleScholarClick();
                            }}
                            className="bg-[#28487c] my-4 w-2/5 h-12  rounded-xl text-white text-lg font-bold"
                        >
                            {skilledButton ? <p>Registeration Closed</p> : <p>Apply Now</p>}
                        </button>
                    </div>

                    <div className="w-full md:w-1/2">
                        <img
                            alt="img"
                            src="https://i.ibb.co/LkW1smp/skilled-Researcher1.png"
                            className="rounded-xl"
                        />
                    </div>
                </div>
                {/* trending domains */}
                {/* <div className="my-24">
                    <h1 className="text-4xl text-center font-bold my-10">
                        Trending <span className="text-primaryGreen">Domains:</span>
                    </h1>
                    <div className="md:flex md:flex-wrap md:justify-center grid grid-cols-2 gap-4 my-5 w-11/12 mx-auto">
                        {trendingDomains.map((item, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className="shadow-md md:w-[14rem]  text-xs sm:text-base flex items-center justify-center p-4 rounded-full bg-[#EBE8FD]"
                                >
                                    <p>{item}</p>
                                </div>
                            );
                        })}
                    </div>
                </div> */}
            </div>

            <div className="bg-[#F6FAFF] w-full rounded-xl p-4 md:p-8 my-24">
                <div className="flex flex-col md:flex-row items-center w-11/12 mx-auto gap-10 py-10 bg-white rounded-2xl shadow-xl shadow-slate-400 p-6">
                    {/* Left Section */}
                    <div className="space-y-6 lg:w-1/2 w-full">
                        <h3 className="text-2xl font-bold text-gray-900">
                            Complaint Process
                        </h3>
                        <p className="text-lg text-black">
                            <FaRocket className="inline" /> If you find that any donated product violates company policies, copyrights, or other regulations, please inform us via email or support care. <br /> <br /><FaRocket className="inline" /> We assure you that appropriate action will be taken, and the offending resources will be removed. <br /> <br /><FaRocket className="inline" />
                            As donated resources are listed directly, there are instances where we might not verify them immediately. <br /><br /> <FaRocket className="inline" /> We request you to notify us of any such issues. <br />

                        </p>

                        <div className="my-10">
                            <h3 className="text-xl font-bold text-gray-900 my-5">
                                Here&apos;s what we offer:
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 ">
                                    <div>
                                        <FaTasks className="text-blue-800 text-2xl" />
                                    </div>
                                    <div>
                                        <span className="font-bold">Email:</span>{' '} complaint@uniford.org <br /> info@uniford.org
                                    </div>
                                </li>
                                <li className="flex items-center gap-3 ">
                                    <div>
                                        {" "}
                                        <FaAward className="text-blue-800 text-2xl" />
                                    </div>
                                    <Link href={'https://www.linkedin.com/company/uniwave-x/'}>
                                        <span className="font-bold text-blue-400 underline">Help Desk</span>
                                    </Link>
                                </li>

                            </ul>
                            <br /> <br />
                            <FaRocket className="inline" /> <span className="font-bold">Donation Policy</span>
                            We do not accept free donations, as we are not beggars. We strive to provide 10x value to those who donate to us.
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="lg:flex hidden items-center justify-center md:w-1/2">
                        <img
                            alt="Globe"
                            src="/home/Vector.svg"
                            className=" object-cover globe drop-shadow-2xl"
                        />
                    </div>
                </div>
                <div className="my-20 mx-auto w-11/12 flex flex-col gap-5 items-center rounded-xl shadow-xl p-10">
                    <h1 className="text-4xl w-full text-center font-bold">Donate Us
                    </h1>
                    <p className="text-center text-xl text-gray-500">We welcome those who wish to donate premium software, websites, notes, or any <br /> kind of courses for our foundation&apos;s volunteers and members.</p>
                    <button className="bg-purple-600 py-2 px-10 text-white rounded-lg">Submit</button>
                </div>
                {/* unknown title */}
                <div className=" my-32">
                    <div>
                        <h1 className="text-3xl mx-4 mt-16">Explore and Apply</h1>
                        <p className="mx-4">
                            Pick the Right Opportunity that best suits your skills and
                            Interest .
                        </p>
                        <Accordion />
                    </div>
                </div>
            </div>

            {/* <div className='bg-[#EFF2F573] my-5 p-5'>
        <OurPartners />
      </div> */}

<div className="flex flex-col w-full h-full  rounded-2xl pt-10 md:px-4">
            <h3 className="font-bold text-2xl">Our Event and Conferences</h3>
            <div className="w-4/5 my-10 mx-auto">
              <PopularPostsCarousel />
            </div>
          </div>
            <div className="py-10 mb-24">
                <FeedbackSlideshow />
            </div>
            <FAQ />
        </main>
    );
}
