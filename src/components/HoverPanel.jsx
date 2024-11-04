"use client";
import Image from "next/image";
import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "@/css/swiperbg.css";

function HoverPanel({ openData, set }) {
  return (
    <>
      <div
        className="p-5 absolute top-[28.2px] left-[-152px] z-10 "
        onMouseEnter={() => set(true)}
        onMouseLeave={() => set(false)}
      >
        <div className="bg-white dark:bg-[#191C20] h-[365px] w-[105%]  shadow-lg px-4 py-4 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-black dark:text-white text-xl font-bold">
              {openData.category}
            </h1>
            <Link
              href={openData.route}
              className="flex items-center text-xs font-semibold text-black dark:text-white hover:text-lime duration-200 gap-1"
            >
              Show More <FaRegArrowAltCircleRight className="text-xs" />
            </Link>
          </div>
          <div className="grid grid-cols-5 gap-[3px]">
            {openData.cards.map((card, index) => (
              <div className="h-full w-[240px] space-y-3" key={index}>
                <Image src={card.image} className="h-[135px]" />
                <h1 className="p text-xl text-black dark:text-white dark:hover:text-black font-bold leading-7">{card.text}</h1>
                <p className="text-xs">{card.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HoverPanel;
