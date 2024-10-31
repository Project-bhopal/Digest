"use client";
import Image from "next/image";
import homeimage from "../assets/homeimage.webp";
import sportlightimage from '../assets/spotlightimage.webp'
import SectionsCard from "@/components/SectionsCard";
import { HiArrowLongRight } from "react-icons/hi2";
import { PiArrowBendRightDownBold } from "react-icons/pi";
import { IoStarSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import spotlight1 from '../assets/spotlight1.webp'
import spotlight2 from '../assets/spotlight2.webp'
import spotlight3 from '../assets/spotlight3.webp'
import spotlight4 from '../assets/spotlight4.webp'

import card1 from "../assets/card1.webp";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import card4 from "../assets/card4.webp";

import "../css/swiperbg.css";

import Recommendation from "@/components/Recommendation";
import { AiFillThunderbolt } from "react-icons/ai";
import { GrFlag } from "react-icons/gr";

export default function Home() {
  const recommendeddata = [
    {
      image: card1,
      category: "Advertising",
      title: "Intersection of Technology and Finance in Shaping the Economy",
      date: "January 31, 2024",
    },
    {
      image: card2,
      category: "Marketing",
      title:
        "Innovators Redefining Modern Industries Through Revolutionary Ideas",
      date: "January 31, 2024",
    },
    {
      image: card3,
      category: "Market Trends",
      title: "Analyzing Market Trends as Consumer Priorities Redefine Product",
      date: "January 31, 2024",
    },
    {
      image: card4,
      category: "Marketing",
      title: "Tech Weapons We Need To Combat Global Warming",
      date: "January 31, 2024",
    },
  ];
  const mustReaddata = [
    {
      image: card1,
      category: "Startups",
      title: "18 Top Fall Fashion Trends from New York Fashion",
      date: "January 31, 2024",
    },
    {
      image: card2,
      category: "Startups",
      title:
        "12 Summer Outfit Formulas for Lazy Girls Everywhere",
      date: "January 31, 2024",
    },
    {
      image: card3,
      category: "Market Trends",
      title: "Closer Look at Innovative Ventures Influencing Market Trends",
      date: "January 31, 2024",
    },
    {
      image: card4,
      category: "Startups",
      title: "Hidden Ways To Save Money That You Might Be Missing",
      date: "January 31, 2024",
    },
  ];


  const trendingItems = [
    {
      title: "Strategies to Elevate Brand Stories and Capture Audience Attention",
      author: "TechInsider",
      date: "February 1, 2024",
    },
    {
      title: "Building Meaningful Connections and Loyalty in Modern Marketing",
      author: "TechInsider",
      date: "February 1, 2024",
    },
    {
      title: "Navigating Optimizing Platforms for Effective Audience Engagement",
      author: "TechInsider",
      date: "February 1, 2024",
    },
    {
      title: "The Remarkable Developments Pushing the Limits of Innovation",
      author: "TechInsider",
      date: "February 1, 2024",
    },
    {
      title: "Creating Valuable and Persuasive for Targeted Audiences",
      author: "TechInsider",
      date: "January 31, 2024",
    },
  ];
  const spotlightItems = [
    {
      title: "White House Reminds Lawmakers not to Travel to Afghanistan",
      author: "TechInsider",
      date: "February 1, 2024",
      image : spotlight1
    },
    {
      title: "New Cybersecurity Threats Emerge in the Digital Landscape",
      author: "TechInsider",
      date: "February 1, 2024",
      image : spotlight2
    },
    {
      title: "Dive into Vibrant Festivals and Events for a Rich Experience",
      author: "TechInsider",
      date: "February 1, 2024",
      image: spotlight3
    },
    {
      title: "Inspiring Stories at the Intersection of Art and Innovation",
      author: "TechInsider",
      date: "February 1, 2024",
      image : spotlight4
    },
    
  ];
  const popularItems = [
    {
      title: "Forging Authentic Connections that Resonate with Consumers",
      author: "TechInsider",
      date: "February 1, 2024",
      image : spotlight1
    },
    {
      title: "Fashionable Summer Accessories to Dress Up Your Travel Look",
      author: "TechInsider",
      date: "February 1, 2024",
      image : spotlight2
    },
    {
      title: "David is Tommy Wiseau in the First Teaser for The Amazon Warrior",
      author: "TechInsider",
      date: "February 1, 2024",
      image: spotlight3
    },
    
  ];

  return (
    <>
      <div className="px-[7%] text-black dark:text-white duration-100">
        <div className="h-[110vh] w-full flex mb-3">
          <div className="bg-[#04031D] h-[94%] w-[55%]">
            <Image src={homeimage} className="h-[50%] object-cover" />
            <div className="text-white ps-[5%] relative">
              <span className="absolute top-[-18px] py-1 px-2 bg-[#C2FF74] text-black font-semibold text-[10px] tracking-[1px]">TECH MOVES</span>
              <div className="space-y-5 pt-3">
                <p className="p cursor-pointer text-[52px] font-bold leading-[65px] hover:text-black duration-200">
                  The Tech Trends Driving Major Transformations in Business
                </p>
                <h2 className="text-xl text-gray-300">
                  By recognizing and leveraging these advantages, businesses can
                  position themselves as trailblazers in their industries,
                  driving success
                </h2>
                <div className=" text-xs flex gap-2">
                  By <span className="font-bold">TechInsider</span> |
                  <h6 className="font-medium">January 31, 2024</h6>|
                  <h6 className="font-medium">6 min Read</h6>
                </div>
              </div>
            </div>
          </div>
          <SectionsCard
            Items={trendingItems}
            section = "Trending"
            icon = {<HiArrowLongRight/>}
            withImage = {false}
            imageFirst = {false}
          />
        </div>
        {/* our news letter section */}
        <div className="bg-[#DEFFB5] dark:bg-[#04031D] h-[480px] border-t-[6px] border-black dark:border-lime flex justify-center items-center">
          <div className="h-full py-9 px-[62px] flex flex-col justify-between">
            <h1 className="text-[75px] font-bold flex items-center">
              Our Newsletter <PiArrowBendRightDownBold className="h-14"/>
            </h1>
            <h3 className="text-[28px] font-[400]">
              Subscribe now for a front-row seat to the latest in technology,
              marketing strategies, and market trends - Your Gateway to
              Innovation
            </h3>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className=" placeholder:text-xl placeholder:text-gray-600 h-[78px] p-4 border border-black"
            />
            <button className="w-[255px] py-4 mt-2 text-xl font-bold text-white dark:text-black hover:text-black bg-black dark:bg-lime hover:bg-[#C2FF74] dark:hover:bg-white duration-200">
              Sign Up Now
            </button>
            <div className="space-x-2">
              <input type="checkbox" name="checkbox" />
              <label htmlFor="checkbox" className="text-[14px]">
                I have read and agree to the terms & conditions
              </label>
            </div>
          </div>
        </div>
        <Recommendation
          label="Recommended"
          icon = { <HiArrowLongRight/>}
          heading={"Our Recommended Posts are a curated exploration of the most significant trends, innovations, and insights that are making waves in Technology, from cutting-edge technologies to revolutionary market strategies."}
          cardsData={recommendeddata}
        />
        <div className="h-[110vh] w-full flex mb-3 mt-16">
          <SectionsCard
            Items={spotlightItems}
            section = "Spotlight"
            icon = {<IoStarSharp className="text-[38px]"/>}
            withImage = {true}
            imageFirst = {true}
            />
          <div className="bg-[#DEFFB5] dark:bg-[#04031D] h-[94%] w-[55%]">
            <Image src={sportlightimage} className="h-[50%] object-cover" />
            <div className="text-black dark:text-white ps-[5%] relative">
            <span className="absolute top-[-18px] py-1 px-2 bg-[#C2FF74] text-black font-semibold text-[10px] tracking-[1px]">TECH MOVES</span>
              <div className="space-y-5 pt-3">
                <p className="p cursor-pointer text-[52px] font-bold leading-[65px] hover:text-black duration-200">
                Unveiling Emerging Tech Trends: What to Expect in the Next Decade
                </p>
                <h2 className="text-xl text-gray-700 dark:text-white">
                Politics is the art of looking for trouble, finding it everywhere, diagnosing it incorrectly and applying the wrong remedies
                </h2>
                <div className=" text-xs flex gap-2">
                  By <span className="font-bold">TechInsider</span> |
                  <h6 className="font-medium">January 31, 2024</h6>|
                  <h6 className="font-medium">6 min Read</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[90vh] w-full flex mb-3 mt-16">
          <div className="bg-[#D9F3FF] dark:bg-[#477286] h-[94%] w-[50%] flex items-center justify-center">
            <div className="text-black ps-[5%]">
              <div className="space-y-6 pt-3 px-10 text-black dark:text-white">
                <p className="cursor-pointer text-[52px] font-bold leading-[65px] ">
                We're committed to Elevating Your Tech Experience
                </p>
                <h2 className="text-xl text-gray-700 dark:text-white italic">
                Our dedication extends to your technology needs. Stay informed and inspired as we provide timely updates on phones, green energy, industry developments, laptop tech, and the fascinating world of science.
                </h2>
                <div>
                  <h1 className="w-fit py-3 px-12 hover:bg-lime bg-black text-white hover:text-black duration-200 font-bold flex items-center gap-3"><span><FaHeart/></span>About US</h1>
                </div>
              </div>
            </div>
          </div>
          <SectionsCard
            Items={popularItems}
            section = "Popular"
            icon = {<AiFillThunderbolt className="text-[38px] text-orange-500"/>}
            withImage = {true}
            imageFirst = {false}
            />
        </div>
        <Recommendation
          label="Must Read"
          icon = { <GrFlag/>}
          heading={""}
          cardsData={mustReaddata}
        />
      </div>
    </>
  );
}
