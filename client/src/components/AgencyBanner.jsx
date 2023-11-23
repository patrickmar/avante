import React from 'react';
import govagency from '../images/govagency.png';
import smallagency from '../images/smallagency.png';
import smallwhite from '../images/smallwhite.png';
import { layout } from '../style';
import { Link } from 'react-router-dom';

const AgencyBanner = () => {
  return (
    <div className="">
      <div className="hidden md:block">
        <div id="ctas2" className={`  h-[721px] ${layout.section}`}>
          <div className={`lg:mx-32 md:mx-12 ${layout.sectionInfo}`}>
            <h2
              className={`font-inter font-semibold lg:text-[60px] md:text-[25px] mt-[20px] text-[40px] text-black xs:leading-[50.8px] leading-[66.8px] w-full mb-4 `}
            >
              Government <br className="sm:hidden" />
              Agencies{' '}
            </h2>
            <div
              className={`font-inter text-justify font-normal text-black2 text-[16px] leading-[25.8px] min-w-[300px] mt-5 mb-6`}
            >
              Avante Consulting understands the unique challenges faced by
              government agencies. We provide specialized consulting services
              tailored to meet the specific needs of public sector
              organizations. Our team of experts offers strategic guidance,
              process optimization, and technology solutions to enhance
              efficiency, transparency, and citizen services. Partner with us to
              navigate the complexities of government operations and drive
              sustainable growth.
            </div>
            <Link to="/contacts">
              {' '}
              <button className="flex  items-center text-white text-[12px] -ml-2 mt-8 h-[45px] w-[165px] rounded-lg  bg-secondary ">
                <span className="mx-8 text-[12px] font-inter font-normal">
                  Learn more
                </span>
                <i className="fas fa-chevron-right">
                  <img
                    src={smallwhite}
                    alt="smallwhite"
                    className="sm:w-[100%] w-[50%] sm:h-[100%] h-[50%]"
                  />{' '}
                </i>
              </button>
            </Link>
          </div>
          <div
            id="cta2"
            className={`${layout.sectionImg} md:mx-24 md:px-24   relative`}
          >
            <img
              src={govagency}
              alt="card"
              className=" mt-[20px] w-[471.19px] h-[518.48px]   "
            />
          </div>
        </div>
      </div>
      <div className=" md:hidden flex-col flex justify-center item-center bg-background mb-12">
        <img src={smallagency} alt="smallagency" />
        <div className="flex-start bg-background mt-12">
          <h1 className="font-inter font-semibold text-[16px] underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px] ml-8 ">
            GOVERNMENT
          </h1>
          <h1 className=" font-inter font-semibold flex ml-[150px] text-primary mt-[-23px]">
            AGENCIES
          </h1>
          <p className="font-inter font-normal text-[12px] mt-12 ml-8 mr-4 leading-[30.8px]">
            Avante Consulting understands the unique challenges faced by
            government agencies. We provide specialized consulting services
            tailored to meet the specific needs of public sector organizations.
            Our team of experts offers strategic guidance, process optimization,
            and technology solutions to enhance efficiency, transparency, and
            citizen services. Partner with us to navigate the complexities of
            government operations and drive sustainable growth.
          </p>
          <Link to="/contacts">
            <button className="flex  items-center text-white text-[12px] ml-8 mt-8 h-[45px] w-[165px] rounded-lg  bg-secondary ">
              <span className="mx-8 text-[12px] font-inter font-normal">
                Learn more
              </span>
              <i className="fas fa-chevron-right">
                <img
                  src={smallwhite}
                  alt="smallwhite"
                  className="sm:w-[100%] w-[50%] sm:h-[100%] h-[50%]"
                />{' '}
              </i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AgencyBanner;
