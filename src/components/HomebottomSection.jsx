"use client";
import homeimage from "@/assets/homeimage.webp";
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
import { PiArrowBendRightDownBold } from "react-icons/pi";
import spotlight1 from "@/assets/spotlight1.webp";
import spotlight2 from "@/assets/spotlight2.webp";
import spotlight3 from "@/assets/spotlight3.webp";

import card1 from "@/assets/card1.webp";
import card2 from "@/assets/card2.jpg";
import card3 from "@/assets/card3.jpg";
import card4 from "@/assets/card4.webp";
import Link from "next/link";

function TodayandTrendingSection({ category, title, date, image, label }) {
  return (
    <>
      <div className={` lg:py-4 py-1 dark:border-white mx-5`}>
        <section className="space-y-5">
          {image ? (
            <Image src={image} className="md:h-auto h-[440px] w-full" />
          ) : (
            <Link
              href={`/category/${category.toLowerCase()}`}
              className="md:ms-0 ms-5 py-[3px] px-2 bg-[#C2FF74] hover:text-white hover:bg-[#04031D] duration-150 text-black font-semibold text-[10px]"
            >
              {category}
            </Link>
          )}
          <ul className="lg:space-y-2 space-y-0.5 flex">
            <li className={`border-b border-gray-300 lg:pb-4 pb-2 flex gap-3`}>
              <div>
                <div className="flex items-center">
                  <p className="p hover:text-white dark:hover:text-black duration-200 lg:text-[26px] md:text-[28px] text-[24px] font-[700] cursor-pointer leading-8">
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

function StartupSection({ label, title, date, image }) {
  return (
    <>
      <div
        className={`  h-[350px]  lg:py-4 py-1 dark:border-white mx-5 relative `}
      >
        <section className="space-y-5 h-full">
          {image ? (
            <Image
              src={image}
              className="absolute h-full w-full object-cover -z-10"
            />
          ) : (
            <Link
              href={""}
              className="md:ms-0 ms-5 py-[3px] px-2 bg-[#C2FF74] hover:text-white duration-150 text-black font-semibold text-[10px]"
            >
              {label}
            </Link>
          )}

          <div class="h-full w-full absolute bottom-0 inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-4">
            <div className="h-full flex flex-col justify-end">
              <div className="flex items-center">
                <p className="p text-white hover:text-black dark:hover:text-black duration-200 lg:text-[26px] md:text-[28px] text-[24px] font-[700] cursor-pointer leading-8 ">
                  <span>{title}</span>
                </p>
              </div>
              <div className={`text-white text-xs flex gap-2 mt-3 ms-2`}>
                <h6 className="font-medium">{date}</h6>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function SponsoredSection({ category, text, image, by }) {
  return (
    <>
      <div className="bg-[#04031D] lg:min-h-[580px]">
        <Image
          src={image}
          className="lg:h-[360px] h-[500px] w-full object-cover"
        />
        <div className="text-white lg:ps-[5%] ps-[2%] relative">
          <Link
            href={`/category/${category.toLowerCase()}`}
            className="absolute top-[-18px] py-1 px-2 bg-[#C2FF74]  hover:text-white duration-150 text-black font-semibold text-[10px] tracking-[1px]"
          >
            {category}
          </Link>
          <div className="space-y-6 pt-6 px-4">
            <p className="p cursor-pointer sm:text-[38px] text-[25px] font-bold sm:leading-[50px] leading-[30px] hover:text-black duration-200">
              {text}
            </p>
            <div className=" text-xs flex ps-2 pb-5">
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
  ];

  const stratups = [
    {
      title: "White House Reminds Lawmakers not to Travel to Afghanistan",
      author: "TechInsider",
      date: "February 1, 2024",
      image: card1,
    },
    {
      title: "New Cybersecurity Threats Emerge in the Digital Landscape",
      author: "TechInsider",
      date: "February 1, 2024",
      image: card2,
    },
    {
      title: "Dive into Vibrant Festivals and Events for a Rich Experience",
      author: "TechInsider",
      date: "February 1, 2024",
      image: card3,
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
      text: "Innovators Redefining Modern Industries Through Revolutionary Ideas",
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
      <div className="flex lg:flex-row flex-col lg:gap-3 gap-5 w-full">
        <div className="lg:w-[50%] w-full space-x-3">
          <h2 className="text-3xl font-bold flex items-center lg:ms-0 ms-6 lg:mb-0 mb-5">
            <HiArrowLongRight className="text-5xl" /> &nbsp;
            <span className="lg:text-3xl sm:text-5xl text-4xl"> Today</span>
          </h2>
          {todayItems.map((item, index) => (
            <div className="">
              <Link href={`/blog/${index}`} className="w-full">
                <TodayandTrendingSection
                  category={item.label}
                  title={item.title}
                  date={item.date}
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="lg:mx-0 mx-5 lg:mt-0 mt-10">
          <h2 className="text-3xl font-bold flex items-center mb-4">
            <span className="lg:text-3xl sm:text-5xl text-4xl ">🔔 Sponsored</span>
          </h2>
          {Sponsored.map((item, index) => (
            <Link href={`blog/${index}`}>
              <SponsoredSection
                label={item.label}
                text={item.text}
                image={item.image}
                by={item.by}
                category={item.category}
              />
            </Link>
          ))}
        </div>
        <div className="lg:w-[50%] w-full lg:mt-0 mt-10">
          <div>
            <h2 className="text-3xl font-bold flex items-center ms-6 lg:mb-0 mb-5">
              <span className="lg:text-3xl sm:text-5xl text-4xl"> Tech Moves</span>
              &nbsp;
              <PiArrowBendRightDownBold className="lg:text-xl text-3xl mt-3" />
            </h2>
            <div className="grid lg:grid-cols-1 md:grid-cols-3 grid-cols-1 ">
              {techMoves.map((item, index) => (
                <div className="">
                  <Link href={`blog/${index}`}>
                    <TodayandTrendingSection
                      category={item.label}
                      title={item.title}
                      date={item.date}
                      image={item.image}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-auto h-auto w-full">
            <h2 className="text-3xl font-bold ms-6 flex items-center lg:mb-0 mb-5 lg:mt-8 mt-10">
              <span className="lg:text-3xl text-5xl">Startups</span>
              &nbsp;
              <PiArrowBendRightDownBold className="lg:text-xl text-3xl mt-3" />
            </h2>
            <div className="grid lg:grid-cols-1 md:grid-cols-3 grid-cols-1 md:gap-2 gap-5">
              {stratups.map((item, index) => (
                <div className="">
                  <Link href={`blog/${index}`}>
                    <StartupSection
                      label={item.label}
                      title={item.title}
                      date={item.date}
                      image={item.image}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomebottomSection;
