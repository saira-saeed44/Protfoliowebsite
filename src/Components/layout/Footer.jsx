import React from "react";
import {
  FiTwitter,
  FiGithub,  
  FiFacebook,
  FiInstagram,
  FiChrome,
  FiYoutube,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="py-10 md:py-16 mb-20 md:mb-40 lg:mb-52 ">
      <div className="container mx-auto px-4 max-w-screen-xl text-center">
        <div className="text-center">
          <h2 className="text-gray-700 text-4xl md:text-5xl font-medium mb-5">
            Testimonial
          </h2>
          <p className="font-normal text-gray-400 text-md md:text-lg mb-20">
            I’m not currently taking on new client work but feel free to contact
            me for any
            <br></br> other inquiries.
          </p>
          <div className="flex justify-center items-center space-x-8">
            <div className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
              <FiTwitter className="text-gray-500 hover:text-gray-800 transition ease-in-out duration-500" />
            </div>
            <div className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
              <FiFacebook className="text-gray-500 hover:text-gray-800 transition ease-in-out duration-500" />
            </div>
            <div className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
              <FiInstagram className="text-gray-500 hover:text-gray-800 transition ease-in-out duration-500" />
            </div>
            <div className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
              <FiGithub className="text-gray-500 hover:text-gray-800 transition ease-in-out duration-500" />
            </div>
            <div className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
              <FiChrome className="text-gray-500 hover:text-gray-800 transition ease-in-out duration-500" />
            </div>
            <div className="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
              <FiYoutube className="text-gray-500 hover:text-gray-800 transition ease-in-out duration-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
