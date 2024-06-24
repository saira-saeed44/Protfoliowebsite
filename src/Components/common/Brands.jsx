import React from "react";
 
const Brands = ({imageurl,title}) => {
  return (
    <div className="">
        <img  src={imageurl} alt={title} />
        </div>
  );  
};
export default Brands;


