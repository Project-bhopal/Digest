"use client";
import sportlightimage from "@/assets/spotlightimage.jpg";
import SectionsCard from "@/components/SectionsCard";
import spotlight1 from "@/assets/spotlight1.webp";
import spotlight2 from "@/assets/spotlight2.webp";
import spotlight3 from "@/assets/spotlight3.webp";
import spotlight4 from "@/assets/spotlight4.webp";
import card1 from '@/assets/card1.webp'
import card2 from "@/assets/card2.jpg";
import card3 from "@/assets/card3.jpg";
import card4 from "@/assets/card4.webp";
import { GrFlag } from "react-icons/gr";
import Image from "next/image";
import Advertisement from "@/components/Advertisement";
import Recommendation from "@/components/Recommendation";
import { HiArrowLongRight } from "react-icons/hi2";

function Blog() {
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
    {
        image: card2,
        category: "Startups",
        title:
        "12 Summer Outfit Formulas for Lazy Girls Everywhere",
        date: "January 31, 2024",
    },
    
    ];

  return (
    <>
      <div>
        <div className="lg:h-[110vh] w-full flex lg:flex-row flex-col-reverse">
          <SectionsCard
            Items={spotlightItems}
            section="Must Read"
            icon={<GrFlag className="text-5xl"/>}
            withImage={true}
            imageFirst={true}
          />
          <div className="bg-[#04031D] lg:h-[95.5%] h-fit lg:w-[55%] w-full lg:pb-0 pb-7">
            <Image src={sportlightimage} className="lg:h-[50%] object-cover" />
            <div className="text-white lg:ps-[5%] ps-[2%] relative">
              <span className="absolute top-[-18px] py-1 px-2 bg-[#C2FF74] text-black font-semibold text-[10px] tracking-[1px]">
                TECH MOVES
              </span>
              <div className="lg:space-y-5 space-y-3 pt-3">
                <p className="p cursor-pointer lg:text-[52px] md:text-[40px] text-[30px] font-bold lg:leading-[65px]  md:leading-[50px] leading-[40px] hover:text-black duration-200">
                  Unveiling Emerging Tech Trends: What to Expect in the Next
                  Decade
                </p>
                <h2 className="lg:text-xl md:text-base text-[14px] text-white">
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
          </div>
        </div>
        <Advertisement />
        <Recommendation
          label={`Latest News`}
          icon = { <HiArrowLongRight/>}
          heading={""}
          cardsData={mustReaddata}
        />
        <div className="w-full flex items-center justify-center">
          <button className="text-black hover:text-white text-xs font-bold bg-lime hover:bg-[#6DBA16] duration-200 py-2 lg:px-9 md:px-7 px-6">Show More</button>
        </div>
      </div>
    </>
  );
}

export default Blog;
