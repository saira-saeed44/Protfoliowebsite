import React from 'react';
import Education from './Education'; 

const EducationList = () => {
  const educationData = [
    { year: '2015 – 2016', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { year: '2015 – 2016', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { year: '2015 – 2016', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { year: '2015 – 2016', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { year: '2015 – 2016', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { year: '2015 – 2016', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
  ];

  return (
    <section className='py-10 md:py-16'>
        <div className='container max-w-screen-xl mx-auto px-4'>
      <h1 className="font-medium  text-gray-700 text-3xl md:text-4xl mb-5">Education</h1>
      <p className=' font-normal text-gray-500 text-xs md:text-base mb-20'>Below is a summary of the places I studied

</p>
    <div className='grid grid-cols-1 md:grod-cols-2 lg:grid-cols-3 gap-6'>
    {educationData.map((education, index) => (
        <Education
          key={index}
          year={education.year}
          description={education.description}
        />
      ))}
    </div>
      </div>
    </section>
  );
};

export default EducationList;
