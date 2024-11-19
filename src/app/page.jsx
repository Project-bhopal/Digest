"use client";
import Image from "next/image";
import homeimage from "../assets/homeimage.webp";
import spotlightimage from "../assets/spotlightimage.jpg";
import SectionsCard from "@/components/SectionsCard";
import { HiArrowLongRight } from "react-icons/hi2";
import { PiArrowBendRightDownBold } from "react-icons/pi";
import { IoStarSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import spotlight1 from "@/assets/spotlight1.webp";
import spotlight2 from "@/assets/spotlight2.webp";
import spotlight3 from "@/assets/spotlight3.webp";
import spotlight4 from "@/assets/spotlight4.webp";

import card1 from "@/assets/card1.webp";
import card2 from "@/assets/card2.jpg";
import card3 from "@/assets/card3.jpg";
import card4 from "@/assets/card4.webp";

import "../css/swiperbg.css";

import Recommendation from "@/components/Recommendation";
import { AiFillThunderbolt } from "react-icons/ai";
import { GrFlag } from "react-icons/gr";
import Advertisement from "@/components/Advertisement";
import HomebottomSection from "@/components/HomebottomSection";
import Link from "next/link";

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
      title: "12 Summer Outfit Formulas for Lazy Girls Everywhere",
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
      title:
        "Strategies to Elevate Brand Stories and Capture Audience Attention",
      author: "TechInsider",
      date: "February 1, 2024",
    },
    {
      title: "Building Meaningful Connections and Loyalty in Modern Marketing",
      author: "TechInsider",
      date: "February 1, 2024",
    },
    {
      title:
        "Navigating Optimizing Platforms for Effective Audience Engagement",
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
  ];
  const popularItems = [
    {
      title: "Forging Authentic Connections that Resonate with Consumers",
      author: "TechInsider",
      date: "February 1, 2024",
      image: spotlight1,
    },
    {
      title: "Fashionable Summer Accessories to Dress Up Your Travel Look",
      author: "TechInsider",
      date: "February 1, 2024",
      image: spotlight2,
    },
    {
      title: "David is Tommy Wiseau in the First Teaser for The Amazon Warrior",
      author: "TechInsider",
      date: "February 1, 2024",
      image: spotlight3,
    },
  ];

  return (
    <>
      <div className=" text-black dark:text-white duration-100">
        <div className="lg:min-h-[110vh] w-full flex lg:flex-row flex-col mb-3">
          <div className="bg-[#04031D] min-h-[94%] lg:w-[55%] w-full lg:pb-0 pb-7">
          <Link href={`/blog/${1}`} className="w-full">
            <Image src={homeimage} className="lg:h-[50%] h-[100vh] lg:w-full w-full object-cover" />
            <div className="text-white lg:ps-[5%] ps-[2%] relative">
              <span className="absolute top-[-18px] py-1 px-2 bg-[#C2FF74] text-black font-semibold text-[10px] tracking-[1px]">
                TECH MOVES
              </span>
              <div className="lg:space-y-5 space-y-3 pt-3">
                <p className="p w-full cursor-pointer lg:text-[52px] md:text-[40px] text-[30px] font-bold lg:leading-[65px] md:leading-[50px] leading-[40px] hover:text-black duration-200">
                  The Tech Trends Driving Major Transformations in Business
                </p>
                <h2 className="lg:text-xl md:text-base text-[14px] text-gray-300">
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
          </Link>
          </div>
          <SectionsCard
            Items={trendingItems}
            section="Trending"
            icon={<HiArrowLongRight className="text-5xl"/>}
            withImage={false}
            imageFirst={false}
            drawer={false}
          />
        </div>
        {/* our news letter section */}
        <section id="newsLetter" className="lg:mx-0 mx-5">
          <div className="bg-[#DEFFB5] dark:bg-[#04031D] md:h-[470px] h-[340px] border-t-[6px] border-black dark:border-lime flex justify-center items-center ">
            <div className="h-full lg:py-9 md:py-7 py-4 lg:px-[62px] md:px-[45px] px-[28px] flex flex-col justify-between">
              <h1 className="lg:text-[75px] md:text-[60px] text-[30px] font-bold flex items-center">
                Our Newsletter <PiArrowBendRightDownBold className="h-14" />
              </h1>
              <h3 className="lg:text-[28px] md:text-[22px] text-[15px] font-[400]">
                Subscribe now for a front-row seat to the latest in technology, 
                marketing strategies, and market trends - Your Gateway to
                Innovation
              </h3>
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className=" md:placeholder:text-xl placeholder:text-lg placeholder:text-gray-600 md:h-[78px] h-[72px] p-4 border border-black"
              />
              <button className="md:w-[255px] w-[190px] md:py-4 py-3 mt-2 md:text-xl text-lg font-bold text-white dark:text-black hover:text-black bg-black dark:bg-lime hover:bg-[#C2FF74] dark:hover:bg-white duration-200">
                Sign Up Now
              </button>
              <div className="space-x-2">
                <input type="checkbox" name="checkbox" />
                <label htmlFor="checkbox" className="md:text-[14px] text-[12px]">
                  I have read and agree to the terms & conditions
                </label>
              </div>
            </div>
          </div>
        </section>
        <Recommendation
          label="Recommended"
          icon={<HiArrowLongRight />}
          heading={
            "Our Recommended Posts are a curated exploration of the most significant trends, innovations, and insights that are making waves in Technology, from cutting-edge technologies to revolutionary market strategies."
          }
          cardsData={recommendeddata}
        />
        <div className="lg:min-h-[110vh]  flex lg:flex-row flex-col-reverse mt-16 lg:mx-0 mx-5">
          <SectionsCard
            Items={spotlightItems}
            section="Spotlight"
            icon={<IoStarSharp className="text-[38px]" />}
            withImage={true}
            imageFirst={true}
          />
          <div className="bg-[#DEFFB5] dark:bg-[#04031D] lg:h-[95.5%] h-[70%x] lg:w-[55%] w-full">
            <Link href={`/blog/${"section2"}`}>
            <Image src={spotlightimage} className="lg:h-[50%] w-full object-contain" />
            <div className="text-black dark:text-white lg:ps-[5%] ps-[2%] relative">
              <span className="absolute top-[-18px] py-1 px-2 bg-[#C2FF74] text-black font-semibold text-[10px] tracking-[1px]">
                TECH MOVES
              </span>
              <div className="lg:space-y-5 space-y-3 py-4">
                <p className="p cursor-pointer lg:text-[52px] md:text-[45px] text-[30px] font-bold lg:leading-[65px] md:leading-[50px] leading-[40px] hover:text-black duration-200">Unveiling Emerging Tech Trends: What to Expect in the Next Decade
                </p>
                <h2 className="lg:text-xl md:text-base text-[13px] text-gray-700 dark:text-white">
                  Politics is the art of looking for trouble, finding it
                  everywhere, diagnosing it incorrectly and applying the wrong
                  remedies
                </h2>
                <div className=" text-xs flex gap-2">
                  By <span className="font-bold">TechInsider</span> |
                  <h6 className="font-medium">January 31, 2024</h6>|
                  <h6 className="font-medium">6 min Read</h6>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
        <Advertisement />
        <div className="lg:h-[90vh] w-full flex lg:flex-row flex-col mb-3 mt-16">
          <div className="bg-[#D9F3FF] dark:bg-[#477286] h-[94%] lg:w-[50%] flex items-center justify-center">
            <div className="text-black lg:ps-[5%] ps-[2%]">
              <div className="space-y-6 lg:pt-3 md:pt-10  md:px-10 lg:py-0 md:py-16 py-5 text-black dark:text-white">
                <p className="cursor-pointer lg:text-[52px] md:text-[45px] text-[35px] font-bold lg:leading-[65px] md:leading-[50px] leading-[40px]">
                  We're committed to Elevating Your Tech Experience
                </p>
                <h2 className="lg:text-xl md:text-base text-sm text-gray-700 dark:text-white italic">
                  Our dedication extends to your technology needs. Stay informed
                  and inspired as we provide timely updates on phones, green
                  energy, industry developments, laptop tech, and the
                  fascinating world of science.
                </h2>
                <div>
                  <h1 className="w-fit md:py-3 py-2 md:px-12 px-7 hover:bg-lime bg-black text-white hover:text-black duration-200 font-bold flex items-center gap-3">
                    <span>
                      <FaHeart />
                    </span>
                    About US
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <SectionsCard
            Items={popularItems}
            section="Popular"
            icon={<AiFillThunderbolt className="text-[38px] text-orange-500" />}
            withImage={true}
            imageFirst={false}
          />
        </div>
        <Recommendation
          label="Must Read"
          icon={<GrFlag />}
          heading={""}
          cardsData={mustReaddata}
        />
        <Advertisement />
        <HomebottomSection/>
      </div>
    </>
  );
}
