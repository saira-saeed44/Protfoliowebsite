import React from "react";
import img from "../../../public/assets/images/download3.png";
const Intro = ({ imageUrl, name, heading, paragraph }) => {
  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <nav className="flex items-center justify-between mb-40">
          <div className="">
            <img src={img} alt="logo" />
          </div>
          <div>
            <a
              href="../../../public/assets/files/cv.pdf"
              className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500"
              download="file"
            >
              Load My CV
            </a>
          </div>
        </nav>
        <div className="text-center">
          <div className="flex justify-center mb-16">
            <img   style={{ width: "20%", height:"20%" }}
              src={imageUrl}
              alt="CV Image"
              className="rounded-full  h-32 w-32 object-cover"
            />
          </div>

          <h6 className="text-lg md:text-2xl  uppercase text-gray-600 font-medium mb-8">
            {name}
          </h6>

          <h2 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
            {heading}
          </h2>

          <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
            {paragraph}
          </p>

          <button className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear ">
            Hire me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
