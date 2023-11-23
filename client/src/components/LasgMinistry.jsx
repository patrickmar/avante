import React from 'react';
import { layout } from '../style';
import lasgm from '../images/lasgm.png';
import { Link } from 'react-router-dom';

const LasgMinistry = () => {
  return (
    <section className={` mt-[-150px] flex md:flex-row flex-col sm:py-16 py-6`}>
      <div>
        <div className="hidden md:block md:mt-[360px]">
          <div className={` relative   ${layout.sectionImgReverse1} `}>
            <img
              src={lasgm}
              alt="codeit"
              className="block w-[488.47pz] h-[400.1px] -mt-[-50px]  lg:ml-44 md:ml-2"
            />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8 mt-[200px]">
          <div className="block md:hidden">
            <img src={lasgm} alt="smalllasgm" />
          </div>
        </div>
      </div>
      <div className={`${layout.sectionInfo} mt-[200px] px-8`}>
        <h2
          className={`font-Inter font-semibold xs:text-[16px] md:mt-[200px] mt-[-100px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-2   `}
        >
          LASG MINISTRY OF SCIENCE AND TECHNOLOGY <br className=" " />
          {/* <span className="text-primary text-primary font-Inter font-semibold sm:text-[28px] md:mt-[50px] text-[20px]  sm:leading-[8.8px] leading-[6.8px] w-full mb-2 ">
            Professional training assistance
          </span> */}
        </h2>
        <p
          className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] lg:max-w-[470px] md:min-w-[300px] mt-5 mb-6`}
        >
          The sole responsibility of this Ministry, since its inception is to
          provide professional and technical knowhow in the areas of IT, ICT and
          Science-related services to the citizenry through Ministries,
          Departments and Agencies (MDAs) of Government spread across the State.
          Avante Consulting were able to assist the Lagos State Ministry of
          Science and Technology with their objectives by providing Cisco
          training. The course was delivered using official Cisco Certified
          Network Administrator training material and a certified trainer.
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

export default LasgMinistry;
