"use client";
import { AiFillThunderbolt } from "react-icons/ai";
import "../css/swiperbg.css";
import Image from "next/image";
import Link from "next/link";

const SectionsCard = ({
  Items,
  section,
  icon,
  withImage,
  imageFirst,
  drawer,
}) => {
  return (
    <div
      className={`px-6 md:py-8 py-4 ${
        imageFirst ? "lg:w-[45%] w-full" : "lg:w-[50%] w-full"
      } border-t-[3px] border-black dark:border-white`}
    >
      <section>
        <h2 className=" font-bold md:mb-6 mb-4 flex items-center">
          {icon}
          <span
            className={`px-2 ${
              drawer
                ? "text-3xl bg-[#375D0B] w-[82px]"
                : `md:text-5xl text-3xl ${
                    section === "Trending" ? "w-[130px]" : "w-full"
                  }    ${!withImage && "bg-yellow-100 dark:bg-[#80592C]"}`
            } `}
          >
            {section}
          </span>
        </h2>
        <ul className="md:space-y-4 space-y-2">
          {Items.map((item, index) => (
            <Link href={`/blog/${item._id}`}>
              <li
                key={index}
                className={`border-b-[1px] py-3 ${
                  drawer ? "border-gray-700" : "border-gray-400"
                } pb-4 sm:flex gap-3 ${
                  imageFirst ? "flex-row" : "flex-row-reverse"
                } `}
              >
                {withImage && (
                  <div className="relative md:h-[135px] h-[90px] md:w-[180px] w-[120px]">
                    <Image
                      src={`/${item?.imagePost}`} // Ensure a default image is used if `imagePost` is undefined
                      alt={item?.postHeading}
                      layout="fill" // Makes the image fill the container dimensions
                      objectFit="cover" // Ensures the image covers the area without distortion
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="w-full">
                  <div className="lg:w-auto w-full text-left flex items-center">
                    {!withImage && (
                      <span className="lg:text-2xl md:text-xl text-base mr-2 -rotate-[13deg]">
                        <AiFillThunderbolt />
                      </span>
                    )}
                    <p
                      className={`p w-full  dark:hover:text-black text-black dark:text-white duration-200 text-start ${
                        drawer ? "text-xl" : "md:text-3xl text-xl"
                      } font-[600] lg:tracking-normal tracking-tighter cursor-pointer`}
                    >
                      <span>{item?.postHeading}</span>
                    </p>
                  </div>
                  <div
                    className={`${
                      drawer ? "text-white" : "text-gray-500 dark:text-white"
                    } text-xs flex gap-2 mt-3 ${
                      withImage ? "lg:ms-2" : "lg:ms-5"
                    }`}
                  >
                    By{" "}
                    <span
                      className={`${
                        drawer ? "text-white" : "text-black dark:text-white"
                      } font-bold`}
                    >
                      {item?.createdBy}
                    </span>{" "}
                    |<h6 className="font-medium">{item.date}</h6>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SectionsCard;
