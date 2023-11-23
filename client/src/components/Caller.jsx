import React from 'react';
import caller from '../images/caller.png';
import { Link } from 'react-router-dom';

const Caller = () => {
  return (
    <div>
      <div className="relative py-[200px] mb-12 w-full lg:h-[500] hidden md:block">
        <img
          src={caller}
          alt="caller"
          className="absolute inset-0 w-full h-full  object-cover"
        />
        <div className="absolute inset-0 lg:h-full md:h-[400px] w-1/2 bg-gray-500  bg-opacity-90 backdrop-filter backdrop-blur-md"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-start text-white mx-auto px-20 ">
          <h1 className="text-4xl font-inter font-semibold  mb-2">
            Contact Us
          </h1>
          <p className="font-inter text-lg mb-4">
            Have any questions or enquiry about our services ?
          </p>
          <Link to="/contacts">
            {' '}
            <button className="bg-secondary font-inter text-white flex flex-start font-normal py-2 px-4 rounded">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
      <div className="block md:hidden flex item-center">
        <div className="mb-8  w-[392px] h-[105px] bg-secondary px-4 ">
          <Link to="/contacts">
            {' '}
            <button className="bg-background w-[168px] h-[45px] mt-4 ml-4 rounded-lg text-black font-inter font-normal text-[14px] ">
              Get in Touch
            </button>
          </Link>
          <p className="p-3 text-background text-[11px] font-inter font-normal ">
            Have any questions or enquiry about our services?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Caller;
