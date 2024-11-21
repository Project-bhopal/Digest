"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import logo2 from "../assets/logo2.jpg";
import logo1 from "../assets/Startup-1.png";
import { usePathname, useRouter } from "next/navigation";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
// import { FaSearch } from "react-icons/fa";
// import Tooltip from '@mui/material/Tooltip';
import Image from "next/image";
import { FormControlLabel, FormGroup, styled, Switch } from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import useTheme from "../context/theme.js";
import SearchComponent from "./SearchComponent";
import card1 from "@/assets/card1.webp";
import HoverPanel from "./HoverPanel";
import MenuDrawer from "./Drawer.jsx";

function Navbar() {
  const [openMarketing, setOpenMarketing] = useState(false);
  const [openStartups, setOpenStartups] = useState(false);
  const [openPages, setOpenPages] = useState(false);

  const pathname = usePathname();
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const router = useRouter();

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      darkTheme();
    } else {
      console.log("called");
      lightTheme();
    }
  };

  useEffect(() => {
    if (router.pathname === "/" && router.asPath.includes("#newsLetter")) {
      const section = document.getElementById("newsLetter");
      if (section) {
        const topPosition = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: topPosition,
          behavior: "smooth",
        });
      }
    }
  }, [router]);

  const handleNewsletterSectionClick = () => {
    if (router.pathname !== "/") {
      router.push("/#newsLetter");
    } else {
      const section = document.getElementById("newsLetter");
      if (section) {
        const topPosition = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: topPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 50,
    height: 28,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(5px)",
      duration: 2,
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(21px)",
        duration: 2,
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="18" width="16" viewBox="0 0 20 20"><rect width="20" height="20" fill="${encodeURIComponent(
            "transparent"
          )}" rx="10" ry="10" /><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
          borderRadius: "50%",
          backgroundColor: "#6DBA16",
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#222222",
          ...theme.applyStyles("dark", {
            backgroundColor: "#8796A5",
          }),
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: "",
      width: 23,
      height: 23,
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 20 20"><rect width="20" height="20" fill="${encodeURIComponent(
          "white"
        )}" rx="10" ry="10" /><path fill="${encodeURIComponent(
          "black"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
      ...theme.applyStyles("dark", {
        backgroundColor: "#003892",
      }),
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: "#EDEDED",
      borderRadius: 20 / 2,
      ...theme.applyStyles("dark", {
        backgroundColor: "#8796A5",
      }),
    },
  }));

  const openMarketingData = {
    category: "Marketing",
    route: "/category/marketing",
    cards: [
      {
        image: card1,
        text: "Strategies to Elevate Brand Stories and Capture Audience Attention",
        date: "February 1, 2024",
      },
      {
        image: card1,
        text: "Building Meaningful Connections and Loyalty in Modern Marketing",
        date: "February 1, 2024",
      },
      {
        image: card1,
        text: "Tracking the Rapid Advances in Technology and Their Impact",
        date: "February 1, 2024",
      },
      {
        image: card1,
        text: "Innovators Redefining Modern Industries Through Revolutionary Ideas",
        date: "February 1, 2024",
      },
      {
        image: card1,
        text: "A Chronicle of Innovative Minds Shaping the Future with Creative Ingenuity",
        date: "February 1, 2024",
      },
    ],
  };
  const openStartupData = {
    category: "Startups",
    route: "/category/startups",
    cards: [
      {
        image: card1,
        text: "Strategies to Elevate Brand Stories and Capture Audience Attention",
        date: "February 1, 2024",
      },
      {
        image: card1,
        text: "Building Meaningful Connections and Loyalty in Modern Marketing",
        date: "February 1, 2024",
      },
      {
        image: card1,
        text: "Tracking the Rapid Advances in Technology and Their Impact",
        date: "February 1, 2024",
      },
      {
        image: card1,
        text: "Innovators Redefining Modern Industries Through Revolutionary Ideas",
        date: "February 1, 2024",
      },
      {
        image: card1,
        text: "A Chronicle of Innovative Minds Shaping the Future with Creative Ingenuity",
        date: "February 1, 2024",
      },
    ],
  };

  return (
    <>
      <nav className="lg:h-32 h-[86px] lg:border-t-8 border-lime xl:px-[7%] lg:px-[5%] flex lg:flex-row flex-col gap-3 lg:bg-white bg-black dark:bg-black text-black dark:text-white duration-100 ">
        <div className="flex justify-between">
          <MenuDrawer />
          <Link href={"/"}>
            <Image
              src={logo2}
              alt="logo"
              className="h-[120px] w-36 lg:block hidden"
            />
            <Image
              src={logo1}
              alt="logo"
              className="sm:h-10 h-6 sm:w-[150px] w-[80px] lg:hidden block sm:ms-10"
            />
          </Link>
          <div className="lg:hidden flex items-center gap-3">
            <SearchComponent />
            <FormGroup>
              <FormControlLabel
                control={
                  <MaterialUISwitch
                    sx={{ m: 1 }}
                    onChange={handleChange}
                    checked={themeMode === "dark"}
                  />
                }
              />
            </FormGroup>
          </div>
        </div>
        <div className="w-full">
          <div className="h-[60%] w-full lg:flex hidden justify-between p-3 border-b-[3px] border-black dark:border-white">
            <div className="flex justify-center items-center">
              <h6 className="text-xs">Wednesday, Oct 9, 2024</h6>
            </div>
            <div className="w-auto flex items-center gap-3">
              <h5 className="text-xs">What's Hot :</h5>
              <Link
                href={"/category/marketing"}
                className={`font-bold text-[10px] hover:text-lime ease-in-out duration-300 hover:underline`}
              >
                Marketing
              </Link>
              <span>|</span>
              <Link
                href={"/tag/digital"}
                className={`font-bold text-[10px] hover:text-lime ease-in-out duration-300 hover:underline`}
              >
                Digital
              </Link>
              <span>|</span>
              <Link
                href={"/tag/analysis"}
                className={`font-bold text-[10px] hover:text-lime ease-in-out duration-300 hover:underline`}
              >
                Analysis
              </Link>
              <span>|</span>
              <Link
                href={"/category/advertising"}
                className={`font-bold text-[10px] hover:text-lime ease-in-out duration-300 hover:underline`}
              >
                Advertising
              </Link>
              <span>|</span>
              <Link
                href={"/category/startups"}
                className={`font-bold text-[10px] hover:text-lime ease-in-out duration-300 hover:underline`}
              >
                Startups
              </Link>
              <span>|</span>
              <Link
                href={"/category/market-trends"}
                className={`font-bold text-[10px] hover:text-lime ease-in-out duration-300 hover:underline`}
              >
                Market Trends
              </Link>
            </div>
          </div>
          <div
            className="h-[40%] w-full p-3 flex justify-between relative lg:overflow-visible overflow-x-scroll scrollbar-hide "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="flex justify-center items-center lg:gap-6 gap-10">
              <Link
                href={"/"}
                className={`${
                  pathname === "/" ? "border-b-2 border-[#6DBA16]" : ""
                }  font-semibold text-[15px] hover:border-b-2 border-[#6DBA16] duration-200 lg:text-black lg:dark:text-white text-white`}
                prefetch={true}
              >
                Home
              </Link>

              <Link
                href={"/category/marketing"}
                className={`${
                  pathname === "/category/marketing"
                    ? "border-b-2 border-[#6DBA16]"
                    : ""
                }  font-semibold text-[15px] hover:border-b-2 border-[#6DBA16] lg:flex hidden items-center lg:text-black lg:dark:text-white text-white `}
                onMouseEnter={() => {
                  setOpenMarketing(true);
                  setOpenStartups(false);
                  setOpenPages(false);
                }}
                onMouseLeave={() => setOpenMarketing(false)}
                prefetch={true}
              >
                Marketing{" "}
                {
                  <MdExpandMore
                    className={`${
                      openMarketing ? "-rotate-180 " : ""
                    } duration-200 text-lg font-bold lg:block hidden`}
                  />
                }
              </Link>
              <Link
                href={"/category/marketing"}
                className={`${
                  pathname === "/category/marketing"
                    ? "border-b-2 border-[#6DBA16]"
                    : ""
                }  font-semibold text-[15px] hover:border-b-2 border-[#6DBA16] lg:hidden flex items-center lg:text-black lg:dark:text-white text-white `}
                prefetch={true}
              >
                Marketing{" "}
              </Link>

              <Link
                href={"/category/startups"}
                className={`${
                  pathname === "/category/startups"
                    ? "border-b-2 border-[#6DBA16]"
                    : ""
                } font-semibold text-[15px] hover:border-b-2 border-[#6DBA16] lg:flex hidden items-center lg:text-black lg:dark:text-white text-white`}
                onMouseEnter={() => {
                  setOpenStartups(true);
                  setOpenMarketing(false);
                  setOpenPages(false);
                }}
                onMouseLeave={() => setOpenStartups(false)}
                prefetch={true}
              >
                Startups{" "}
                {
                  <MdExpandMore
                    className={`${
                      openStartups ? "-rotate-180 " : ""
                    } duration-200 text-lg font-bold lg:block hidden`}
                  />
                }
              </Link>
              <Link
                href={"/category/startups"}
                className={`${
                  pathname === "/category/startups"
                    ? "border-b-2 border-[#6DBA16]"
                    : ""
                } font-semibold text-[15px] hover:border-b-2 border-[#6DBA16] lg:hidden flex items-center lg:text-black lg:dark:text-white text-white`}
                
                prefetch={true}
              >
                Startups{" "}
              </Link>

              <div
                className={`${
                  pathname === "/pagess" ? "border-b-2 border-[#6DBA16]" : ""
                } font-semibold text-[15px] hover:border-b-2 border-[#6DBA16] lg:flex hidden items-center text-black dark:text-white`}
                onMouseEnter={() => {
                  setOpenPages(true);
                  setOpenMarketing(false);
                  setOpenStartups(false);
                }}
                onMouseLeave={() => setOpenPages(false)}
                prefetch={true}
              >
                Pages{" "}
                {
                  <MdExpandMore
                    className={`${
                      openPages ? "-rotate-180 " : ""
                    } duration-200 text-lg font-bold`}
                  />
                }
              </div>
              <Link
                href={"/blog"}
                className={`${
                  pathname === "/blog" ? "border-b-2 border-[#6DBA16]" : ""
                }  font-semibold text-[15px] hover:border-b-2 border-[#6DBA16] lg:text-black lg:dark:text-white text-white lg:block hidden`}
                prefetch={true}
              >
                Blog
              </Link>
              <div className="lg:block hidden">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <MaterialUISwitch
                        sx={{ m: 1 }}
                        onChange={handleChange}
                        checked={themeMode === "dark"}
                      />
                    }
                  />
                </FormGroup>
              </div>

              {/* FOR SMALL SCREENS */}
              <Link
                href={"/category/advertising"}
                className={`${
                  pathname === "/category/advertising"
                    ? "border-b-2 border-[#6DBA16]"
                    : ""
                } font-semibold text-[15px]  ease-in-out duration-300 lg:hidden block lg:text-black lg:dark:text-white text-white bg-black text-nowrap`}
              >
                Advertising
              </Link>
              <Link
                href={"/category/market-trends"}
                className={`${
                  pathname === "/category/market-trends"
                    ? "border-b-2 border-[#6DBA16]"
                    : ""
                } font-semibold text-[15px]  ease-in-out duration-300 lg:hidden block lg:text-black lg:dark:text-white text-white text-nowrap`}
              >
                Market Trends
              </Link>
              <Link
                href={"/blog"}
                className={`${
                  pathname === "/blog" ? "border-b-2 border-[#6DBA16]" : ""
                } font-semibold text-[15px] ease-in-out duration-300 lg:hidden block lg:text-black lg:dark:text-white text-white text-nowrap`}
                prefetch={true}
              >
                Blog Index
              </Link>
              <Link
                href={"/contactUs"}
                className={`${
                  pathname === "/contactUs" ? "border-b-2 border-[#6DBA16]" : ""
                } font-semibold text-[15px] ease-in-out duration-300 lg:hidden block lg:text-black lg:dark:text-white text-white text-nowrap`}
                prefetch={true}
              >
                Contact Us
              </Link>
            </div>
            <div className="w-[270px] lg:flex hidden items-center justify-between">
              <FaFacebookF className="text-black dark:text-white text-[16px] hover:text-[21px] duration-200" />
              <FaXTwitter className="text-black dark:text-white text-[16px] hover:text-[21px] duration-200" />
              <FaYoutube className="text-black dark:text-white text-[16px] hover:text-[21px] duration-200" />
              <FaTiktok className="text-black dark:text-white text-[16px] hover:text-[21px] duration-200" />
              <button
                className="bg-lime hover:bg-[black] hover:text-[white]  text-black duration-300 px-4 py-1 font-medium text-sm"
                onClick={handleNewsletterSectionClick}
              >
                Newsletter
              </button>
              {/* <FaSearch className="text-black dark:text-white text-lg " /> */}
              <SearchComponent />
            </div>
            {openMarketing && (
              <HoverPanel openData={openMarketingData} set={setOpenMarketing} />
            )}
            {openStartups && (
              <HoverPanel openData={openStartupData} set={setOpenStartups} />
            )}
            {openPages && (
            
              <div
                className="p-5 absolute top-[28.2px] left-[260px] z-10"
                onMouseEnter={() => setOpenPages(true)}
                onMouseLeave={() => setOpenPages(false)}
              >
                <div className="bg-white border dark:border-none  dark:bg-[#191C20] h-[150px] w-[200px] flex flex-col p-5 text-[13.2px] space-y-3">
                  <Link
                    href={"/blog"}
                    className="hover:text-[#89c742] duration-200"
                    prefetch={true}
                  >
                    Blog Index
                  </Link>
                  <Link
                    href={"/contactUs"}
                    className="hover:text-[#89c742] duration-200"
                    prefetch={true}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href={"/search"}
                    className="hover:text-[#89c742] duration-200"
                    prefetch={true}
                  >
                    Search Page
                  </Link>
                  <Link
                    href={"/404"}
                    className="hover:text-[#89c742] duration-200"
                    prefetch={true}
                  >
                    404 Page
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
