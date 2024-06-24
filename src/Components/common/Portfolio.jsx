import React from 'react';

const Portfolio = ({ index, title, description }) => {
  return (
    <section>
    <div className='py-10 md:py-20'>
      <div className='container max-w-screen-xl mx-auto px-4'>
        <div className='flex flexs-cols lg:flex-rows justify-between'>
              
  <div className='space-uy-24'>
  <div className="flex space-x-6">
      <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">{`${index + 1}`}</h1>
      <span className='w-28 h-0.5 bg-gray-300 mt-5'></span>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
      </div>
  </div>
    </div>
    </div>
    </div>
    </section>
  );
}; 

export default Portfolio;
