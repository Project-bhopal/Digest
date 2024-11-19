"use client";
import Image from "next/image";
import img from "@/assets/card3.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMiniLink } from "react-icons/hi2";
import { FaPrint } from "react-icons/fa";
import { TfiMoreAlt } from "react-icons/tfi";
import { IoBookOutline } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { MdExpandMore } from "react-icons/md";

import "@/css/SocialBoxes.css";

function Post({ params }) {
  const articles = [
    "Must-Have Gadgets for the Ultimate Work-from-Home Setup",
    "Cutting-Edge Wearables Redefining Health and Fitness",
    "Pioneering the Future with Game-Changing Technological",
    "Unraveling the Artistry of Cinematic Deception",
    "Beyond Accelerating Business Connectivity and Innovation",
    "Next Wave of Innovations Redefining Our Digital World",
  ];
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <Image src={img} className="w-full h-[80vh] object-cover mt-5" />
        <div className="w-[59%] space-y-6">
          <span className="py-1 px-2 bg-[#C2FF74] text-black font-semibold text-[10px] tracking-[1px]">
            TECH MOVES
          </span>
          <h1 className="text-6xl font-bold">
            Strategies to Elevate Brand Stories and Capture Audience Attention
          </h1>
          <p className="text-lg">
            We are just an advanced breed of monkeys on a minor planet of a very
            average star. But we can understand the Universe. That makes us
            something very special.
          </p>
          <div className="h-40 border-t-4 flex flex-col justify-around border-b-4 pb-4">
            <div className=" flex items-center gap-5 ">
              <div className="w-fit flex items-center gap-5 group">
                <FaFacebookF className="text-black dark:text-white text-[20px] duration-200 group-hover:opacity-50 hover:opacity-100" />
                <FaXTwitter className="text-black dark:text-white text-[20px] duration-200 group-hover:opacity-50 hover:opacity-100" />
                <MdMail className="text-black dark:text-white text-[22px] duration-200 group-hover:opacity-50 hover:opacity-100" />
                <HiMiniLink className="text-black dark:text-white text-[22px] duration-200 group-hover:opacity-50 hover:opacity-100" />
                <FaPrint className="text-black dark:text-white text-[20px] duration-200 group-hover:opacity-50 hover:opacity-100" />
                <TfiMoreAlt className="text-black dark:text-white text-[20px] duration-200 group-hover:opacity-50 hover:opacity-100" />
              </div>
              <span className="text-gray-500 text-xs cursor-none">|</span>
              <p>6 min Read</p>
            </div>
            <div className="flex items-center space-x-4">
              <Image
                src={img}
                alt="Author"
                className="w-14 h-14 rounded-full"
              />
              <div>
                <p className="text-sm dark:text-gray-300">
                  By{" "}
                  <span className="font-semibold text-black dark:text-white">
                    TechInsider
                  </span>{" "}
                  - Senior Technology Analyst
                </p>
                <p className="text-sm font-normal">
                  Last updated: February 1, 2024 3:03 am
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-1">
            <span className="text-8xl font-bold align-text-top mt-[-20px]">
              A
            </span>
            <h1 className="font-semibold text-gra">
              dvancements are reshaping traditional business models and paving
              the way for innovation across various industries. From artificial
              intelligence and machine learning to blockchain and the Internet
              of Things.
            </h1>
          </div>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={
                <MdExpandMore className="text-3xl hover:text-lime duration-200" />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h1 className="flex items-center gap-2">
                <IoBookOutline className="text-[#59cf59]"/><span className="text-2xl font-bold">Contents</span>
              </h1>
                
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {articles.map((article, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 border-b cursor-pointer group"
                    >
                      {/* Number Badge */}
                      <div className="flex items-center justify-center w-7 h-7 group-hover:bg-[#6DBA16] duration-200 bg-gray-800 text-white text-sm font-bold ">
                        {index + 1}
                      </div>
                      {/* Article Text */}
                      <p className="text-gray-800 dark:text-gray-200 font-bold group-hover:text-[#6DBA16] duration-200">
                        {article}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Post;
