"use client";
import homeimage from "@/assets/homeimage.webp";
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
import { PiArrowBendRightDownBold } from "react-icons/pi";
import spotlight1 from "@/assets/spotlight1.webp";
import spotlight2 from "@/assets/spotlight2.webp";
import spotlight3 from "@/assets/spotlight3.webp";
import spotlight4 from "@/assets/spotlight4.webp";

import card1 from "@/assets/card1.webp";
import card2 from "@/assets/card2.jpg";
import card3 from "@/assets/card3.jpg";
import card4 from "@/assets/card4.webp";

function TodaySection({ label, title, date, image }) {
  return (
    <>
      <div className={`px-6 py-4 dark:border-white`}>
        <section>
          {image ? (
            <Image src={image} />
          ) : (
            <span className=" py-[3px] px-2 bg-[#C2FF74] text-black font-semibold text-[10px]">
              {label}
            </span>
          )}
          <ul className="space-y-1 flex">
            <li className={`border-b border-gray-300 pb-4 flex gap-3`}>
              <div>
                <div className="flex items-center">
                  <p className="p hover:text-wite dark:hover:text-black duration-200 text-[26px] font-[600] cursor-pointer leading-8">
                    <span>{title}</span>
                  </p>
                </div>
                <div
                  className={`text-gray-500 dark:text-white text-xs flex gap-2 mt-3`}
                >
                  <h6 className="font-medium">{date}</h6>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

function SponsoredSection({category, text, image, by}) {
  return (
    <>
      <div className="bg-[#04031D] min-h-[550px]">
        <Image src={image} className="h-[350px] w-full object-cover" />
        <div className="text-white ps-[5%] relative">
          <span className="absolute top-[-18px] py-1 px-2 bg-[#C2FF74] text-black font-semibold text-[10px] tracking-[1px]">
            {category}
          </span>
          <div className="space-y-5 pt-3">
            <p className="p cursor-pointer text-[38px] font-bold leading-[50px] hover:text-black duration-200">
              {text}
            </p>
            <div className=" text-xs flex">
              <span className="">Sponsored by</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function HomebottomSection() {
  const todayItems = [
    {
      label: "Marketing",
      title:
        "Strategies to Elevate Brand Stories and Capture Audience Attention",
      author: "TechInsider",
      date: "February 1, 2024",
    },
    {
      label: "Tech Moves",
      title: "Building Meaningful Connections and Loyalty in Modern Marketing",
      author: "TechInsider",
      date: "February 1, 2024",
    },
    {
      label: "Tech Moves",
      title:
        "Navigating Optimizing Platforms for Effective Audience Engagement",
      author: "TechInsider",
      date: "February 1, 2024",
    },
    {
      label: "Tech Moves",
      title: "The Remarkable Developments Pushing the Limits of Innovation",
      author: "TechInsider",
      date: "February 1, 2024",
    },
    {
      label: "Tech Moves",
      title: "Creating Valuable and Persuasive for Targeted Audiences",
      author: "TechInsider",
      date: "January 31, 2024",
    },
    {
      label: "Tech Moves",
      title: "The Remarkable Developments Pushing the Limits of Innovation",
      author: "TechInsider",
      date: "February 1, 2024",
    },
    {
      label: "Tech Moves",
      title: "Creating Valuable and Persuasive for Targeted Audiences",
      author: "TechInsider",
      date: "January 31, 2024",
    },
    {
      label: "Tech Moves",
      title: "The Remarkable Developments Pushing the Limits of Innovation",
      author: "TechInsider",
      date: "February 1, 2024",
    },
    {
      label: "Tech Moves",
      title: "Creating Valuable and Persuasive for Targeted Audiences",
      author: "TechInsider",
      date: "January 31, 2024",
    },
    {
      label: "Tech Moves",
      title: "The Remarkable Developments Pushing the Limits of Innovation",
      author: "TechInsider",
      date: "February 1, 2024",
    },
    {
      label: "Tech Moves",
      title: "Creating Valuable and Persuasive for Targeted Audiences",
      author: "TechInsider",
      date: "January 31, 2024",
    },
    {
      label: "Tech Moves",
      title: "The Remarkable Developments Pushing the Limits of Innovation",
      author: "TechInsider",
      date: "February 1, 2024",
    },
    {
      label: "Tech Moves",
      title: "Creating Valuable and Persuasive for Targeted Audiences",
      author: "TechInsider",
      date: "January 31, 2024",
    },
  ];

  const techMoves = [
    {
      title: "White House Reminds Lawmakers not to Travel to Afghanistan",
      author: "TechInsider",
      date: "February 1, 2024",
      image: spotlight1,
    },
    {
      title: "New Cybersecurity Threats Emerge in the Digital Landscape",
      author: "TechInsider",
      date: "February 1, 2024",
      image: spotlight2,
    },
    {
      title: "Dive into Vibrant Festivals and Events for a Rich Experience",
      author: "TechInsider",
      date: "February 1, 2024",
      image: spotlight3,
    },
    {
      title: "Inspiring Stories at the Intersection of Art and Innovation",
      author: "TechInsider",
      date: "February 1, 2024",
      image: spotlight4,
    },
    {
      title: "Dive into Vibrant Festivals and Events for a Rich Experience",
      author: "TechInsider",
      date: "February 1, 2024",
      image: spotlight3,
    },
    {
      title: "Inspiring Stories at the Intersection of Art and Innovation",
      author: "TechInsider",
      date: "February 1, 2024",
      image: spotlight4,
    },
    {
      title: "Dive into Vibrant Festivals and Events for a Rich Experience",
      author: "TechInsider",
      date: "February 1, 2024",
      image: spotlight3,
    },
    {
      title: "Inspiring Stories at the Intersection of Art and Innovation",
      author: "TechInsider",
      date: "February 1, 2024",
      image: spotlight4,
    },
  ];
  const Sponsored = [
    {
      image: card1,
      category: "Advertising",
      text: "Intersection of Technology and Finance in Shaping the Economy",
      date: "January 31, 2024",
    },
    {
      image: card2,
      category: "Marketing",
      text:
        "Innovators Redefining Modern Industries Through Revolutionary Ideas",
      date: "January 31, 2024",
    },
    {
      image: card3,
      category: "Market Trends",
      text: "Analyzing Market Trends as Consumer Priorities Redefine Product",
      date: "January 31, 2024",
    },
    {
      image: card4,
      category: "Marketing",
      text: "Tech Weapons We Need To Combat Global Warming",
      date: "January 31, 2024",
    },
  ];

  return (
    <>
      <div className="flex w-full">
        <div className="w-[45%]">
          <h2 className="text-3xl font-bold ms-6 flex items-center">
            <HiArrowLongRight /> &nbsp;
            <span className="text-3xl"> Today</span>
          </h2>
          {todayItems.map((item) => (
            <div className="">
              <TodaySection
                label={item.label}
                title={item.title}
                date={item.date}
              />
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-3xl font-bold flex items-center mb-4">
            <span className="text-3xl">🔔 Sponsored</span>
          </h2>
          {Sponsored.map(item=>(
          <SponsoredSection 
            label={item.label}
            text={item.text}
            image={item.image}
            by={item.by}
            
            category={item.category}
          />
          ))}
        </div>
        <div className="w-[45%]">
          <h2 className="text-3xl font-bold ms-6 flex items-center">
            <span className="text-3xl"> Tech Moves</span>
            &nbsp;
            <PiArrowBendRightDownBold className="text-xl mt-3"/> 
          </h2>
          {techMoves.map((item) => (
            <div className="">
              <TodaySection
                label={item.label}
                title={item.title}
                date={item.date}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomebottomSection;
