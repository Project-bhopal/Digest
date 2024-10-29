import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo2.jpg";
import { FaFacebook, FaGoogle, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../css/SocialBoxes.css";

function Footer() {
  return (
    <>
      <div className="mt-20 h-[392px] bg-black border-t-[6px] border-[#C2FF74] px-[7%] py-[1%] text-white">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="space-y-3 w-[72%]">
              <div className="text-[17px] font-[700] space-x-6">
                <Link
                  href={"/"}
                  className="hover:text-lime ease-in-out duration-300"
                >
                  Advertise with us
                </Link>
                <Link
                  href={"/"}
                  className="hover:text-lime ease-in-out duration-300"
                >
                  Newsletters
                </Link>
                <Link
                  href={"/"}
                  className="hover:text-lime ease-in-out duration-300"
                >
                  Complaint
                </Link>
                <Link
                  href={"/"}
                  className="hover:text-lime ease-in-out duration-300"
                >
                  Deal
                </Link>
              </div>
              <h1 className="italic font-medium text-[15px]">
                Stay tuned for a blend of captivating content that not only
                informs but also inspires you to navigate the ever-evolving
                landscape of technology, marketing, and market trends!
              </h1>
            </div>
            <Image src={logo} className="h-18 w-32" />
          </div>
          <div className="border-t border-b border-lime py-2 w-full text-[18px] font-bold space-x-14">
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
              className="hover:text-lime ease-in-out duration-300"
            >
              MARKET TRENDS
            </Link>
            <Link
              href={"/"}
              className="hover:text-lime ease-in-out duration-300"
            >
              TECH MOVES
            </Link>
          </div>
          <div className="container flex space-x-1 pt-5">
            <div className="social-box bg-blue-400 hover:bg-blue-600 text-white flex items-center p-3 space-x-2 w-64 hover:shadow-lg transition-transform duration-300">
              <FaFacebook className="text-3xl" />
              <div>
                <p className="text-sm font-bold">393.9k Followers</p>
                <p className="text-xs">Like</p>
              </div>
            </div>

            <div className="social-box bg-[#00151C] hover:bg-[#13B9EE] text-white flex items-center p-3 space-x-2 w-64 hover:shadow-lg transition-transform duration-300">
              <FaXTwitter className="text-3xl" />
              <div>
                <p className="text-sm font-bold">34.3k Followers</p>
                <p className="text-xs">Follow</p>
              </div>
            </div>

            <div className="social-box bg-red-500 hover:bg-[#FC161E] text-white flex items-center p-3 space-x-2 w-64 hover:shadow-lg transition-transform duration-300">
              <FaYoutube className="text-3xl" />
              <div>
                <p className="text-sm font-bold">4.42M Subscribers</p>
                <p className="text-xs">Subscribe</p>
              </div>
            </div>

            <div className="social-box bg-blue-700 hover:bg-[#1d30d8] text-white flex items-center p-3 space-x-2 w-64 hover:shadow-lg transition-transform duration-300">
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
