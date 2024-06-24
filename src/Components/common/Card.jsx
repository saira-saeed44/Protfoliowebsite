
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ title, description,icon }) => {
  return (
    <section className="py-10 px-8 md:py-16 bg-gray-50">
      <div className="container max-w-screen-xl mx-auto  px-4  rounded-md ">
        <div className='w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4'>
        <FontAwesomeIcon icon={icon} className="text-gra-600 hover:text-gray-8  00 transition ease-in-out duration-500 pt-1" />

        </div>
        <div className="font-medium text-gray-700 text-lg mb-4">{title}</div>
        <p className="text-gray-500 font-normal text-md">{description}</p>
      </div>
    </section>
  );
};

export default Card;
  