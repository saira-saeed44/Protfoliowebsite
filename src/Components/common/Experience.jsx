import React from "react";

const Education = ({ year, company ,position,}) => {
  return (
          <div className="bg-gray-50 px-8 py-10 rounded-md">
            <p className="font-normal text-gray-500 text-md mb-4">
              {company}
            </p>
            <p className="font-normal text-gray-500 text-md mb-4">
              {position}
            </p>
            <h4 className="text-gray-500 text-lg mb-4 font-medium">{year}</h4>

            </div>
        
          );
};

export default Education;
