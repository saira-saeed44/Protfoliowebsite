import React from "react";
import Experience from "./Experience";
import { experienceData } from "../../utils/data";

const ExperienceList = () => {
  

  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium  text-gray-700 text-3xl md:text-4xl mb-5">
          Experience
        </h1>
        <p className=" font-normal text-gray-500 text-xs md:text-base mb-20">
          Below is a summary of the places I studied
        </p>
<table>
        <div className="flex flex-cols lg:flex-row justify-between">
        <h1 className="font-medium text-gray-400 text-base uppercase">Company</h1>
        <h1 className="font-medium text-gray-400 text-base uppercase">Position</h1>
        <h1 className="font-medium text-gray-400 text-base uppercase">Year</h1>
          {experienceData.map((experience, index) => (
            <Experience
              key={index}
              year={experience.year}
              company={experience.Company}
              position={experience.Position}
            />
          ))}  
        </div>
        </table>
      </div>
    </section>
  );
};

export default ExperienceList;
