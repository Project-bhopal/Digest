"use client";
import Image from "next/image";
import img from "@/assets/card3.jpg";
import card1 from "@/assets/card1.webp";
import card2 from "@/assets/card2.jpg";
import card3 from "@/assets/card3.jpg";
import card4 from "@/assets/card4.webp";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiArrowLongRight, HiMiniLink } from "react-icons/hi2";
import { FaPrint } from "react-icons/fa";
import { TfiMoreAlt, TfiThought } from "react-icons/tfi";
import { IoBookOutline } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { BsDashLg, BsTwitter } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineSettingsRemote } from "react-icons/md";
import { GoInbox } from "react-icons/go";
import { FaShareFromSquare } from "react-icons/fa6";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { MdExpandMore } from "react-icons/md";

import contentImage from "@/assets/contentImage.webp";

import "@/css/postSocialBoxes.css";
import { AiFillThunderbolt } from "react-icons/ai";
import { useRef } from "react";
import Link from "next/link";
import Recommendation from "@/components/Recommendation";

function Post({ params }) {
  const sectionRefs = useRef([]);

  let description =
    "Advancements are reshaping traditional business models and paving the way for innovation across various industries. From artificial intelligence and machine learning to blockchain and the Internet of Things. but also revolutionizing the way businesses engage with their customers. In this article, we delve into the world of music by providing 23 concise reviews that touch on various aspects of musical compositions. Our journey begins with a track that is a true masterpiece, blending beautiful melodies that tug at the heartstrings. The seamless flow of harmonious notes creates an enchanting atmosphere.";

  function splitTextByPattern(text) {
    // Regex pattern to find the split point

    let regex;
    if (text.length < 650) {
      regex = /(.{120,}?\.\s)(?=[A-Z])/;
    } else {
      regex = /(.{500,}?\.\s)(?=[A-Z])/;
    }

    // Find the match
    const match = text.match(regex);

    if (match && match.index !== undefined) {
      // Split the string into two parts
      const part1 = text.slice(0, match.index + match[0].length).trim();
      const part2 = text.slice(match.index + match[0].length).trim();
      return [part1, part2];
    }

    // If no match is found, return the original text as a single part
    return [text.trim()];
  }

  const result = splitTextByPattern(description);

  const postDescription1 = result[0];
  const postDescription2 = result[1];

  // const articles = [
  //   "Must-Have Gadgets for the Ultimate Work-from-Home Setup",
  //   "Cutting-Edge Wearables Redefining Health and Fitness",
  //   "Pioneering the Future with Game-Changing Technological",
  //   "Unraveling the Artistry of Cinematic Deception",
  //   "Beyond Accelerating Business Connectivity and Innovation",
  //   "Next Wave of Innovations Redefining Our Digital World",
  // ];

  const contents = [
    {
      title: "Must-Have Gadgets for the Ultimate Work-from-Home Setup",
      description: splitTextByPattern(
        "Not all websites are made equal. Some websites are simple, logical, and easy to use. Others are a messy hodgepodge of pages and links.Without website navigation, your visitors can't figure out how to find your blog, your email signup page, your product listings, pricing, contact information, or help docs. Quick and easy access to the content they're after is more important for your website users than a… visually-stunning design. Website navigation allows visitors to flow from one page to another without frustration. If you've done your job well, visitors leave your site with the intention to return and might even buy something from you or sign up for your email list. Bad navigation is an especially common problem. We've all struggled to find things on disorganized websites without any logical structure. It feels hopeless. Using “complex large pictures”. Because a carousel generally carries a lot of picture messages, complex large pictures result in performance and “slow loading rate” of the sites, especially those whose first homepages are occupied by high-resolution carousels."
      ),
      image: contentImage,
    },
    {
      title: "Cutting-Edge Wearables Redefining Health and Fitness",
      description: splitTextByPattern(
        "In design, rhythm is created by simply repeating elements in predictable patterns. This repetition is a natural thing that occurs everywhere in our world. As people, we are driven everyday by predictable, timed events.One of the best ways to use repetition and rhythm in web design is in the site’s navigation menu. A consistent, easy-to-follow pattern—in color, layout, etc. Gives users an intuitive roadmap to everything you want to share on your site. Rhythm also factors into the layout of content. For example, you “might have” blog articles, press releases, and events each follow their own certain layout pattern."
      ),
      image: contentImage,
    },
    {
      title: "Pioneering the Future with Game-Changing Technological",
      description: splitTextByPattern(
        "Nobody enjoys looking at an ugly web page. Garish colors, cluttered images and distracting can all turn customers “off” and send them shopping “somewhere else”. Basic composition rules to create more effective. The size and position of elements in a composition will determine its balance. An unbalanced design generates tension, which may be the goal in many design projects, but for web apps that demand repeated comfortable use, tension is not a desirable trait."
      ),
      points: [
        "Adopting pioneering technologies gives businesses a competitive advantage.",
        "Being an early adopter positions a company as an industry innovator.",
        "Game-changing technologies often streamline operations.",
        "Advanced technologies can empower employees, automating routine tasks.",
        "Cutting-edge technologies enhance the customer experience.",
        "Embracing transformative technologies fosters a culture of adaptability",
      ],
    },
    {
      title: "Unraveling the Artistry of Cinematic Deception",
      description: splitTextByPattern(
        "UX and UI: Two terms that are often used interchangeably, but actually mean very different things. So what exactly is the difference? \n Throughout history, music has been a faithful companion to humanity. It has witnessed the rise and fall of empires, the triumphs and tribulations of individuals, and the evolution of societies. From ancient tribal chants to modern electronic compositions, music has evolved with us, reflecting the changing times and serving as a mirror to our collective experiences."
      ),
      quote: {
        quote:
          "The cinema is not an art which films life: the cinema is something between art and life.",
        by: "Jean-Luc Godard",
      },
    },
    {
      title: "Beyond Accelerating Business Connectivity and Innovation",
      description: splitTextByPattern(
        "Good design guides the user by communicating purpose and priority. For that reason, every part of the design should be based on an “informed decision” rather than an arbitrary result of personal taste or the current trend. Provide distinct styles for interactive elements, such as links and buttons, to make them easy to identify. For example, “change the appearance of links” on mouse hover, “keyboard focus”, and “touch-screen activation”."
      ),
      image: contentImage,
    },
    {
      title: "Next Wave of Innovations Redefining Our Digital World",
      description: splitTextByPattern(
        "Design is not the end-all solution to all of the worlds problems — but with the right thinking and application, it can definitely be a good beginning to start tackling them."
      ),
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

  const scrollToSection = (index) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="w-full flex flex-col items-center">
        <Image src={img} className="w-full max-h-[80vh] object-cover mt-5" />
        <div className="lg:w-[57%] md:w-[70%] w-[90%] space-y-7 text-black dark:text-white">
          <Link
            href={`/category/techmoves`}
            className="py-1 px-2 bg-[#C2FF74] text-black hover:bg-[#04031D] hover:text-white duration-200 font-semibold text-[10px] tracking-[1px]"
          >
            TECH MOVES
          </Link>
          <h1 className="text-6xl font-bold">
            Strategies to Elevate Brand Stories and Capture Audience Attention
          </h1>
          <p className="text-lg">
            We are just an advanced breed of monkeys on a minor planet of a very
            average star. But we can understand the Universe. That makes us
            something very special.
          </p>
          <div className="h-40 border-t-4 flex flex-col justify-around border-b-4 pb-4">
            <div className="flex md:flex-row flex-col items-center md:gap-5 ">
              <div className="Container w-fit flex items-center gap-5">
                {/* Facebook Icon */}
                <div className="relative group">
                  <FaFacebookF className="social text-black dark:text-white text-[20px] duration-200 cursor-pointer" />
                  <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black dark:bg-white dark:text-black text-white text-xs px-2 py-1 shadow-lg">
                    Facebook
                  </div>
                </div>

                {/* Twitter Icon */}
                <div className="relative group">
                  <FaXTwitter className="social text-black dark:text-white text-[20px] duration-200 cursor-pointer" />
                  <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black dark:bg-white dark:text-black text-white text-xs px-2 py-1  shadow-lg">
                    Twitter
                  </div>
                </div>

                {/* Email Icon */}
                <div className="relative group">
                  <MdMail className="social text-black dark:text-white text-[22px] duration-200 cursor-pointer" />
                  <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black dark:bg-white dark:text-black text-white text-xs px-2 py-1  shadow-lg">
                    Email
                  </div>
                </div>

                {/* Copy Link Icon */}
                <div className="relative group">
                  <HiMiniLink className="social text-black dark:text-white text-[22px] duration-200 cursor-pointer" />
                  <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black dark:bg-white dark:text-black text-white text-xs px-2 py-1  shadow-lg">
                    Copy Link
                  </div>
                </div>

                {/* Print Icon */}
                <div className="relative group" onClick={()=>{window.print()}}>
                  <FaPrint className="social text-black dark:text-white text-[20px] duration-200 cursor-pointer" />
                  <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black dark:bg-white dark:text-black text-white text-xs px-2 py-1  shadow-lg" >
                    Print
                  </div>
                </div>

                {/* More Options Icon */}
                <div className="relative group">
                  <TfiMoreAlt className="social text-black dark:text-white text-[20px] duration-200 cursor-pointer" />
                  <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black  text-white text-xs px-2 py-1 shadow-lg">
                    More Options
                  </div>
                </div>
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
              {}
            </span>
            <h1 className="text-[17px] leading-7">{postDescription1}</h1>
          </div>
          <Accordion defaultExpanded className="bg-white dark:bg-[#04031D]">
            <AccordionSummary
              expandIcon={
                <MdExpandMore className="text-3xl hover:text-lime duration-200" />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h1 className="flex items-center gap-2">
                <IoBookOutline className="text-[#59cf59]" />
                <span className="text-2xl font-bold text-black dark:text-white">
                  Contents
                </span>
              </h1>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {contents.map((content, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 border-b cursor-pointer group"
                      onClick={() => scrollToSection(index)}
                    >
                      {/* Number Badge */}
                      <div className="flex items-center justify-center w-7 h-7 group-hover:bg-[#6DBA16] duration-200 bg-gray-800 text-white text-sm font-bold ">
                        {index + 1}
                      </div>
                      {/* Article Text */}
                      <p className="text-gray-800 dark:text-gray-200 font-bold group-hover:text-[#6DBA16] duration-200">
                        {content.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <div>
            <p className="text-[17px] leading-7">{postDescription2}</p>
          </div>
          <div className="w-full flex flex-col items-center text-center space-y-3 font-bold py-10">
            <div className="w-[88%]">
              <FaQuoteLeft className=" justify-self-center text-3xl text-[#6DBA16]" />
              <p className="text-[23px]">
                You know what your problem is, it’s that you haven’t seen enough
                movies – all of life’s riddles are answered in the movies.
              </p>
              <p className="text-sm font-medium italic flex items-center justify-center gap-2 my-5">
                <BsDashLg className="text-[#6DBA16]" /> Steve Martin
              </p>
            </div>
          </div>
          {contents.map((content, index) => (
            <div
              className="w-full space-y-6"
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
            >
              <h1 className="text-3xl font-bold">{content.title}</h1>
              <p className="text-[17px] leading-7">{content.description[0]}</p>
              {content.image && (
                <Image
                  src={content.image}
                  className="min-w-[85vw] justify-self-center"
                />
              )}
              {content.points && (
                <div className="space-y-3">
                  {content.points.map((point, index) => (
                    <p className="flex items-center" key={index}>
                      {" "}
                      <span className=" text-[#00D084] text-base mr-2 -rotate-[13deg]">
                        <AiFillThunderbolt />
                      </span>
                      {point}
                    </p>
                  ))}
                </div>
              )}
              {content.quote && (
                <div className="w-full flex flex-col items-center text-center space-y-3 font-bold py-10">
                  <div className="w-[88%]">
                    <FaQuoteLeft className=" justify-self-center text-3xl text-[#6DBA16]" />
                    <p className="text-[23px]">{content.quote.quote}</p>
                    <p className="text-sm font-medium italic flex  items-center justify-center gap-2 my-5">
                      <BsDashLg className="text-[#6DBA16]" /> {content.quote.by}
                    </p>
                  </div>
                </div>
              )}
              <p className="text-[17px] leading-7">{content.description[1]}</p>
            </div>
          ))}
          <div className="border-t border-gray-300 py-6">
            {/* Tags, Sources, Via Section */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="flex items-center gap-1">
                  {" "}
                  <IoPricetagsOutline /> TAGGED:
                </span>
                <Link
                  href={""}
                  className="text-black dark:text-white font-bold hover:text-lime dark:hover:text-lime duration-200"
                >
                  Digital
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <span className="flex items-center gap-1">
                  <MdOutlineSettingsRemote /> SOURCES:
                </span>
                <Link
                  href={""}
                  className="text-black dark:text-white font-bold  hover:text-lime dark:hover:text-lime duration-200"
                >
                  rubynews.com, timenews.com
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <span className="flex items-center gap-1">
                  <GoInbox /> VIA:
                </span>
                <Link
                  href={""}
                  className="text-black dark:text-white font-bold  hover:text-lime dark:hover:text-lime duration-200"
                >
                  ThemeRuby, MarsNews
                </Link>
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span>
                  <FaShareFromSquare />
                </span>
                <h3 className="font-semibold  text-2xl sm:block hidden">
                  Share This Article
                </h3>
              </div>
              <div className="Container flex items-center md:space-x-4 space-x-2 mt-4">
                {/* Facebook Button */}
                <div className="relative group">
                  <button className="social flex items-center space-x-2 md:px-4 px-2 py-2 bg-gray-100  hover:bg-gray-200">
                    <span className="md:text-xl text-lg">
                      <FaFacebookF className="text-black" />
                    </span>
                    <span className="text-black text-xs font-bold">
                      Facebook
                    </span>
                  </button>
                  <div className="w-fit absolute bottom-full mb-2 hidden group-hover:block bg-black dark:bg-white dark:text-black text-white text-xs px-2 py-1  shadow-lg">
                    Facebook
                  </div>
                </div>

                {/* Twitter Button */}
                <div className="relative group">
                  <button className="social flex items-center space-x-2 md:px-4 px-2 py-2 bg-gray-100  hover:bg-gray-200">
                    <span className="md:text-xl text-lg">
                      <FaXTwitter className="text-black" />
                    </span>
                    <span className="text-black text-xs font-bold">
                      Twitter
                    </span>
                  </button>
                  <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black dark:bg-white dark:text-black text-white text-xs px-2 py-1 rounded shadow-lg">
                    Twitter
                  </div>
                </div>

                {/* Copy Link Button */}
                <div className="relative group">
                  <button className="social flex items-center space-x-2 md:px-4 px-1 py-2 bg-gray-100 rounded hover:bg-gray-200">
                    <span className="md:text-xl text-lg">
                      <HiMiniLink className="text-black" />
                    </span>
                  </button>
                  <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black dark:bg-white dark:text-black text-white text-xs px-2 py-1 shadow-lg">
                    Copy Link
                  </div>
                </div>

                {/* More Options */}
                <div className="relative group">
                  <span className="text-black dark:text-white hover:text-lime duration-200">
                    <TfiMoreAlt />
                  </span>
                  <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black dark:bg-white dark:text-black text-white text-xs px-2 py-1  shadow-lg">
                    More Options
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mx-auto p-4">
            {/* Header */}
            <h2 className="text-2xl font-bold flex items-center">
              <span className="mr-2">
                <TfiThought />
              </span>{" "}
              Leave a Comment
            </h2>
            <p className="text-sm text-gray-600 dark:text-white mt-2">
              Your email address will not be published. Required fields are
              marked <span className="text-red-500">*</span>
            </p>

            {/* Form */}
            <form className="mt-4 space-y-4">
              {/* Comment Textarea */}
              <div>
                <textarea
                  className="w-full border border-black text-black p-3 h-52 outline-none"
                  placeholder="Leave a Comment"
                  required
                ></textarea>
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  className="w-full border border-black texg-black  p-3 outline-none"
                  placeholder="Your name"
                  required
                />
                <input
                  type="email"
                  className="w-full border border-black text-black  p-3 outline-none"
                  placeholder="Your email"
                  required
                />
                <input
                  type="url"
                  className="w-full border border-black text-black p-3 outline-none"
                  placeholder="Your website"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="-blackext-g outline-none size-5"
                />
                <label className="text-gray-600 dark:text-white text-sm">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-[#6DBA16] text-white font-bold px-6 py-3 transition"
                >
                  Post Comment
                </button>
              </div>
            </form>
          </div>
        </div>
        <Recommendation
          label="You Might Also like"
          icon={<HiArrowLongRight />}
          heading={""}
          cardsData={mustReaddata}
        />
      </div>
    </>
  );
}

export default Post;
