import Image from "next/image";
import homeimage from "../assets/homeimage.webp";
import TrendingSection from "@/components/PostHeading";
import '../css/swiperbg.css'


export default function Home() {
  return (
    <>
      <div className="px-[7%]">
        <div className="h-[110vh] w-full flex mb-3">
          <div className="bg-[#04031D] h-[94%] w-[55%]">
            <Image src={homeimage} className="h-[50%] object-cover" />
            <div className="text-white ps-[5%]">
              <div className="space-y-5 pt-3">
                <h1 className="text-[52px] font-bold leading-[65px] p">
                  The Tech Trends Driving Major Transformations in Business
                </h1>
                <h2 className="text-xl text-gray-300">
                  By recognizing and leveraging these advantages, businesses can
                  position themselves as trailblazers in their industries,
                  driving success
                </h2>
                <div   className=" text-xs flex gap-2">
                  By <span className="font-bold">TechInsider</span>{" "}
                  |<h6 className="font-medium">January 31, 2024</h6>
                  |<h6 className="font-medium">6 min Read</h6>

                </div>
              </div>
            </div>
          </div>
          <TrendingSection />
        </div>
        <div className="bg-[#DEFFB5] h-[480px] border-t-[6px] border-black flex justify-center items-center">
            <div className="h-full py-9 px-[62px] flex flex-col justify-between">
                <h1 className="text-[75px] font-bold">Our Newsletter <span className="font-medium">↷</span></h1>
                <h3 className="text-[28px] font-[400]">Subscribe now for a front-row seat to the latest in technology, marketing strategies, and market trends - Your Gateway to Innovation</h3>
                <input type="email" name="email" placeholder="Your email address" className=" placeholder:text-xl placeholder:text-gray-600 h-[78px] p-4 border border-black"/>
                <button className="w-[255px] py-4 mt-2 text-xl font-bold text-white hover:text-black bg-black hover:bg-[#C2FF74] duration-200">Sign Up Now</button>
                <div className="space-x-2">
                    <input type="checkbox" name="checkbox" />
                    <label htmlFor="checkbox" className="text-[14px]">I have read and agree to the terms & conditions</label>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
