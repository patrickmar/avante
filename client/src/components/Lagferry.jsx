import React from 'react';
import { layout } from '../style';
import lagferry2 from '../images/lagferry2.png';
import { Link } from 'react-router-dom';
const Lagferry = () => {
  return (
    <section className={`mt-[-150px] flex md:flex-row flex-col sm:py-16 py-6`}>
      <div>
        <div className="hidden md:block md:mt-[400px]">
          <div className={`relative  ${layout.sectionImgReverse1} `}>
            <img
              src={lagferry2}
              alt="codeit"
              className="block w-[488.47pz] h-[535.1px] lg:ml-32"
            />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8 mt-[200px]">
          <div className="block md:hidden">
            <img src={lagferry2} alt="lagferry2" />
          </div>
        </div>
      </div>
      <div className={`${layout.sectionInfo} mt-[200px] lg:mr-44  px-8`}>
        <h2
          className={`font-inter font-semibold xs:text-[16px] md:mt-[200px] mt-[-100px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-2   `}
        >
          LAGFERRY <br />
          {/* <span className="text-primary font-inter font-semibold sm:text-[28px] md:mt-[50px] text-[20px]  sm:leading-[8.8px] leading-[6.8px] w-full mb-2   ">
            Water transport infrastructure
          </span> */}
        </h2>
        <p
          className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] lg:max-w-[470px] md:min-w-[300px] mt-5 mb-6`}
        >
          Lagos Ferry Services Company (LFSC) known as Lagferry is a limited
          liability company which was established as a Special Purpose Vehicle
          (SPV) to compliment the efforts of the Lagos State Government (LASG)
          in developing the water transportation sector and subsequently
          reducing the strain on Lagos roads. They are a private company in
          which the sole initial investor is the Lagos State Government (LASG).
          Avante Consulting were asked to implement a network infrastructure and
          ticketing solution for Lagferry. Our ticketing solution as well as an
          intelligent infrastructure will assist Lagferry in achieving their
          goal as the safest and most reliable transport service for customers
          on the Lagos waterways.
        </p>
        <Link to="/contacts">
          <button className="underline decoration-2 underline-offset-4 decoration-secondary text-secondary">
            Learn more
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Lagferry;
