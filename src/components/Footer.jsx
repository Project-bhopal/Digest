"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo2.jpg";
import { FaFacebook, FaGoogle, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../css/SocialBoxes.css";

function Footer() {
  return (
    <>
      <div className="fixec bottom-0 mt-20 min-h-[392px] bg-black border-t-[6px] border-[#C2FF74] lg:px-[7%] px-[3%] py-[1%] text-white ">
        <div className="space-y-2 w-full ">
          <div className="flex justify-between  md:flex-row flex-col">
            <div className="space-y-3 sm:w-[72%] w-full ">
              <div className="w-fit text-[17px] font-[700] grid xs:grid-cols-4 grid-cols-3 space-x-6">
                <Link
                  href={"/"}
                  className="hover:text-lime ease-in-out duration-300 text-nowrap lg:text-[15px] text-[13px]"
                >
                  Advertise with us
                </Link>
                <Link
                  href={"/"}
                  className="hover:text-lime ease-in-out duration-300 lg:text-[15px] text-[13px]"
                >
                  Newsletters
                </Link>
                <Link
                  href={"/"}
                  className="hover:text-lime ease-in-out duration-300 lg:text-[15px] text-[13px]"
                >
                  Complaint
                </Link>
                <Link
                  href={"/"}
                  className="hover:text-lime ease-in-out duration-300 lg:text-[15px] text-[13px]"
                >
                  Deal
                </Link>
              </div>
              <h1 className="italic font-medium lg:text-[15px] text-[13px]">
                Stay tuned for a blend of captivating content that not only
                informs but also inspires you to navigate the ever-evolving
                landscape of technology, marketing, and market trends!
              </h1>
            </div>
            <div className="md:w-auto w-full place-items-end">
              <Image src={logo} className="md:h-18 h-15 md:w-32 w-28 " />
            </div>
          </div>
          <div className="border-t border-b border-lime py-2 h-auto w-full lg:text-[18px] text-[11px] font-bold ">
            <div  className="w-fit sm:flex grid xs:grid-cols-4 grid-cols-2 xs:gap-0 gap-2 sm:space-x-10 xs:space-x-6">
              <Link
                href={"/"}
                className="hover:text-lime ease-in-out duration-300"
              >
                MARKETING
              </Link>
              <Link
                href={"/"}
                className="hover:text-lime ease-in-out duration-300"
              >
                STARTUPS
              </Link>
              <Link
                href={"/"}
                className="hover:text-lime ease-in-out duration-300"
              >
                ADVERTISING
              </Link>
              <Link
                href={"/"}
                className="hover:text-lime ease-in-out duration-300 text-nowrap"
              >
                MARKET TRENDS
              </Link>
              <Link
                href={"/category/techmoves"}
                className="hover:text-lime ease-in-out duration-300"
              >
                TECH MOVES
              </Link>
            </div>
          </div>
          <div className="lg:w-fit w-full container flex lg:flex-row flex-col lg:space-x-1 space-y-1 pt-5">
            <a href="https://www.facebook.com/" target="blank"  className="social-box bg-blue-400 hover:bg-blue-600 text-white flex items-center p-3 space-x-2 lg:w-60 w-full hover:shadow-lg transition-transform duration-300">
              <FaFacebook className="text-3xl" />
              <div>
                <p className="text-sm font-bold">393.9k Followers</p>
                <p className="text-xs">Like</p>
              </div>
            </a>

            <a href="https://x.com/" target="blank " className="social-box bg-[#00151C] hover:bg-[#13B9EE] text-white flex items-center p-3 space-x-2 lg:w-60 w-full hover:shadow-lg transition-transform duration-300">
              <FaXTwitter className="text-3xl" />
              <div>
                <p className="text-sm font-bold">34.3k Followers</p>
                <p className="text-xs">Follow</p>
              </div>
            </a>

            <a href="/" className="social-box bg-red-500 hover:bg-[#FC161E] text-white flex items-center p-3 space-x-2 lg:w-60 w-full hover:shadow-lg transition-transform duration-300">
              <FaYoutube className="text-3xl" />
              <div>
                <p className="text-sm font-bold">4.42M Subscribers</p>
                <p className="text-xs">Subscribe</p>
              </div>
            </a>

            <div className="social-box bg-blue-700 hover:bg-[#1d30d8] text-white flex items-center p-3 space-x-2 lg:w-60 w-full hover:shadow-lg transition-transform duration-300">
              <FaGoogle className="text-3xl" />
              <div>
                <p className="text-sm font-bold">30.4k Followers</p>
                <p className="text-xs">Follow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
