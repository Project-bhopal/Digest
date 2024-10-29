"use client";
import Link from "next/link";
import logo from "../assets/logo2.jpg";
import { usePathname } from "next/navigation";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
// import Tooltip from '@mui/material/Tooltip';
import Image from "next/image";
import { FormControlLabel, FormGroup, styled, Switch } from "@mui/material";

function Navbar() {
  const pathname = usePathname();

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 50,
    height: 28,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#EDEDED",
          ...theme.applyStyles("dark", {
            backgroundColor: "#8796A5",
          }),
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: "#001e3c",
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
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
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

  return (
    <>
      <nav className="h-32 border-t-8 border-lime px-[7%] flex gap-3">
        <Image src={logo} alt="logo" className="h-18 w-32" />
        <div className="w-full">
          <div className="h-[60%] w-full flex justify-between p-3 border-b-[3px] border-black">
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
                href={"/category/market-trends"}
                className={`font-bold text-[10px] hover:text-lime ease-in-out duration-300 hover:underline`}
              >
                Market Trends
              </Link>
              <span>|</span>
              <Link
                href={"/category/startups"}
                className={`font-bold text-[10px] hover:text-lime ease-in-out duration-300 hover:underline`}
              >
                Startups
              </Link>
            </div>
          </div>
          <div className="h-[40%] w-full p-3 flex justify-between">
            <div className="flex justify-center items-center gap-8">
              <Link
                href={"/"}
                className={`${
                  pathname === "/" ? "border-b-2 border-[#6DBA16]" : ""
                }  font-semibold text-[15px] hover:border-b-2 border-[#6DBA16] duration-200`}
              >
                Home
              </Link>
              <Link
                href={"/category/marketing"}
                className={`${
                  pathname === "/category/marketing"
                    ? "border-b-2 border-[#6DBA16]"
                    : ""
                }  font-semibold text-[15px] hover:border-b-2 border-[#6DBA16]`}
              >
                Marketing
              </Link>
              <Link
                href={"/category/startups"}
                className={`${
                  pathname === "/category/startups"
                    ? "border-b-2 border-[#6DBA16]"
                    : ""
                } font-semibold text-[15px] hover:border-b-2 border-[#6DBA16] `}
              >
                Startups
              </Link>
              <Link
                href={"/pagess"}
                className={`${
                  pathname === "/pagess" ? "border-b-2 border-[#6DBA16]" : ""
                } font-semibold text-[15px] hover:border-b-2 border-[#6DBA16] `}
              >
                Pages
              </Link>
              <Link
                href={"/blog"}
                className={`${
                  pathname === "/blog" ? "border-b-2 border-[#6DBA16]" : ""
                }  font-semibold text-[15px] hover:border-b-2 border-[#6DBA16]`}
              >
                Blog
              </Link>

              <FormGroup>
                <FormControlLabel
                  control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                  
                />
              </FormGroup>
            </div>
            <div className="w-[270px] flex items-center justify-between">
              <FaFacebookF className="text-black text-[16px] hover:text-[21px] duration-200" />
              <FaXTwitter className="text-black text-[16px] hover:text-[21px] duration-200" />
              <FaYoutube className="text-black text-[16px] hover:text-[21px] duration-200" />
              <FaTiktok className="text-black text-[16px] hover:text-[21px] duration-200" />
              <button className="bg-lime hover:bg-[black] hover:text-[white] duration-300 px-4 py-1 font-medium text-sm">
                Newsletter
              </button>
              <FaSearch className="text-black text-lg " />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
