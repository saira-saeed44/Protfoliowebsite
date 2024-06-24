import React from "react";
import Brands from "./Brands";
import img1 from "../../../public/images/download3.png";
import img2 from "../../../public/images/download2.png";
import img3 from "../../../public/images/download4.png";
import img4 from "../../../public/assets/images/home.png";
const BrandsList = () => {
  const BrandsData = [
    {
      imageurl: img1,
      title: "image title",
    },
    {
      imageurl: img2,
      title: "image title",
    },
    {
      imageurl: img3,
      title: "image title",
    },
    {
      imageurl: img4,
      title: "image title",
    },
    {
      imageurl: img3,
      title: "image title",
    },
    {
      imageurl: img4,
      title: "image title",
    },
  ];

  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
          Brands
        </h1>
        <p className="font-normal text-gray-500 text-xs md:text-base mb-10 md:mb-20">
          Below is a summary of the places I studied.
        </p>
        <div className="grid grid-cols-1 md:grod-cols-2 lg:grid-cols-3 gap-6">
          {BrandsData.map((brand) => (
            <Brands imageurl={brand.imageurl} title={brand.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsList;
