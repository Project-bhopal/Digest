"use client";

import { FaFacebook, FaGoogle, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "@/css/SocialBoxes.css";

function ContactUs() {
  return (
    <>
      <div className="lg:border-t-[3px] border-black dark:border-white lg:mx-0 mx-5  ">
        <div className="text-center mt-6">
          <h1 className="text-xl font-bold text-gray-500">Get In Touch</h1>
          <h1 className="text-4xl text-black dark:text-white font-bold">
            Contact US
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="lg:w-[68%]">
            <div className="space-y-6">
              <h3 className="text-2xl text-black dark:text-white font-bold">
                General Customer Care & Technical Support
              </h3>
              <h3 className="text-black dark:text-white text-[17px] leading-relaxed">
                As we address the needs of our customers, email wait times may
                be longer than usual. In an effort to give you the best customer
                experience possible, we encourage you to take advantage of our
                phones. In most cases this is the fastest and easiest option.
              </h3>
              <h3 className="text-black dark:text-white text-[17px] leading-relaxed">
                Your satisfaction is our priority, and our Contact page serves
                as a gateway to a hassle-free and reassuring experience. Whether
                you need general assistance or technical support, our customer
                care professionals are just a message or call away. Trust us to
                address your needs promptly, ensuring that your interaction with
                our brand is not only problem-free but also leaves you with a
                positive and lasting impression.
              </h3>
              <h3 className="text-black dark:text-white text-[17px] leading-relaxed">
                Our technical support team is well-equipped to assist you with
                any technical challenges you may encounter. From troubleshooting
                product issues to guiding you through software configurations,
                our experts are ready to provide comprehensive support. We
                understand the importance of resolving technical issues
                promptly, and we strive to ensure that you can make the most of
                our products and services without any hindrance.
              </h3>
            </div>
            <div className="w-full pt-10">
              <form className="space-y-7">
                <div>
                  <label
                    className="block text-xs text-gray-900 dark:text-white font-bold mb-3"
                    htmlFor="name"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border-[1px] text-black dark:text-white border-gray-300 focus:outline-none dark:border-gray-700 text-sm  p-3 focus:border-[1px] bg-transparent focus:border-gray-500 dark:focus:border-gray-500"
                    placeholder=""
                  />
                </div>

                <div>
                  <label
                    className="block text-xs text-gray-900 dark:text-white font-bold mb-3"
                    htmlFor="email"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border-[1px] text-black dark:text-white border-gray-300 focus:outline-none dark:border-gray-700 text-sm  p-3 focus:border-[1px] bg-transparent focus:border-gray-500 dark:focus:border-gray-500"
                    placeholder=""
                  />
                </div>

                <div>
                  <label
                    className="block text-xs text-gray-900 dark:text-white font-bold mb-3"
                    htmlFor="subject"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full border-[1px] text-black dark:text-white border-gray-300 focus:outline-none dark:border-gray-700 text-sm  p-3 focus:border-[1px] bg-transparent focus:border-gray-500 dark:focus:border-gray-500"
                  />
                  <p className="text-xs text-black dark:text-white font-semibold mt-1">
                    Summarize your issue or question
                  </p>
                </div>

                <div>
                  <label
                    className="block text-xs text-gray-900 dark:text-white font-bold mb-3"
                    htmlFor="issue"
                  >
                    What's your question or issue? *
                  </label>
                  <textarea
                    id="issue"
                    className="h-56 w-full text-black dark:text-white border-[1px] border-gray-300 focus:outline-none dark:border-gray-700 text-sm p-3 focus:border-[1px] bg-transparent focus:border-gray-500 dark:focus:border-gray-500"
                  ></textarea>
                  <p className="text-xs text-black dark:text-white font-semibold mt-1">
                    Please share a brief but informative description
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-52 bg-[#6DBA16] text-white font-semibold py-3"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="lg:w-auto w-full flex justify-center items-center">
          <div className="w-fit container flex flex-col space-y-1.5 pt-5 h-fit">
              <div className="social-box bg-blue-400 hover:bg-blue-600 text-white flex items-center justify-between px-3 py-2 space-x-2 w-[360px] hover:shadow-lg transition-transform duration-300">
                <div className="flex items-center">
                  <FaFacebook className="text-3xl" />
                  &nbsp;
                  <span className="text-sm font-thin text-gray-300"> | </span>
                  &nbsp;
                  <p className="text-base font-bold">Facebook</p>
                </div>
                <p className="text-sm font-medium">Like</p>
              </div>

              <div className="social-box bg-[#00151C] hover:bg-[#13B9EE] text-white flex items-center justify-between px-3 py-2 space-x-2 w-[360px] hover:shadow-lg transition-transform duration-300">
                <div className="flex items-center">
                  <FaXTwitter className="text-3xl" />
                  &nbsp;
                  <span className="text-sm font-thin text-gray-300"> | </span>
                  &nbsp;
                  <p className="text-base font-bold">Twitter</p>
                </div>
                <p className="text-sm font-medium">Follow</p>
              </div>

              <div className="social-box bg-red-500 hover:bg-[#FC161E] text-white flex items-center justify-between px-3 py-2 space-x-2 w-[360px] hover:shadow-lg transition-transform duration-300">
                <div className="flex items-center">
                  <FaYoutube className="text-3xl" />
                  &nbsp;
                  <span className="text-sm font-thin text-gray-300"> | </span>
                  &nbsp;
                  <p className="text-base font-bold">Youtube</p>
                </div>
                <p className="text-sm font-medium">Subscribe</p>
              </div>

              <div className="social-box bg-blue-700 hover:bg-[#1d30d8] text-white flex items-center justify-between px-3 py-2 space-x-2 w-[360px] hover:shadow-lg transition-transform duration-300">
                <div className="flex items-center">
                  <FaGoogle className="text-3xl" />
                  &nbsp;
                  <span className="text-sm font-thin text-gray-300"> | </span>
                  &nbsp;
                  <p className="text-base font-bold">Google News</p>
                </div>
                <p className="text-sm font-medium">Follow</p>
              </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
