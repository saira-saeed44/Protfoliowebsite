import React from "react";
import Testimonials from "./Testimonials";
const TestimonialsList = () => {
  const TestimonialsData = [
    {
      title: "Stephan Clark",
      description:"lorem   Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
      detail: "- CEO at EarlyBird",
    },
    {
      title: "Stephan Clark",
      description:
        "lorem   Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
      detail: "- CEO at EarlyBird",
    },
    {
      title: "Stephan Clark",
      description:
        "lorem   Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
      detail: "- CEO at EarlyBird",
    },
    {
      title: "Stephan Clark",
      description:
        "lorem   Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
      detail: "- CEO at EarlyBird",
    },
    {
      title: "Stephan Clark",
      description:
        "lorem   Lorem ipsum dolor sit amet,  consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
      detail: "- CEO at EarlyBird",
    },
    {
      title: "Stephan Clark",
      description:
        "lorem   Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
      detail: "- CEO at EarlyBird",
    },
  ];

  return (
    <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
          Testimonial
        </h1>
        <p className="font-normal text-gray-500 text-xs md:text-base mb-10 md:mb-20">
          Below is a summary of the places I studied.
        </p>
        <div className="grid grid-cols-1 md:grod-cols-2 lg:grid-cols-3 gap-6">
          {TestimonialsData.map((card, index) => (
            <Testimonials
              key={index}
              title={card.title}
              description={card.description}
              detail={card.detail}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsList;
