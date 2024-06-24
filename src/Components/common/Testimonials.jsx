import React from "react";

const Testimonials = ({ title, description, detail }) => {
  return (
    <div className=" bg-gray-50 px-8 py-10 rounded-md">
      <p className="text-gray-500 text-md font-normal mb-4">{description}</p>
      <h6 className="font-semibold text-gray-500 text-md">{title} 
      <span className="font-medium text-gray-400 text-sm">{detail}</span></h6>
    </div>
  );
};
export default Testimonials;
  