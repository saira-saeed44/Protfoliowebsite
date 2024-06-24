import React from "react";

const Education = ({ year, description }) => {
  return (
          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <h4 className="text-gray-500 text-lg mb-4 font-medium">{year}</h4>
            <p className="font-normal text-gray-500 text-md mb-4">
              {description}
            </p>
            <div className="relative">
              <a href="#" className="text-blue-500 underline hover:text-blue-650">
                See the place here
              </a>
            </div>
          </div>
          );
};

export default Education;
