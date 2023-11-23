import React from 'react';
import { layout } from '../style';
import financial1 from '../images/financial1.png';
import smallwhite from '../images/smallwhite.png';
import { Link } from 'react-router-dom';

const FinancialSector = () => {
  return (
    <div>
      <div className="hidden md:block">
        <div id="financial" className={`mb-32  h-[721px] ${layout.section}`}>
          <div className={`lg:ml-24 md:ml-8 ${layout.sectionInfo}`}>
            <h2
              className={`font-inter font-semibold xs:text-[60px] mt-[20px] text-[40px] text-black xs:leading-[60.8px] leading-[66.8px] w-full mb-4 `}
            >
              Financial Sector
            </h2>
            <div
              className={`font-inter text-justify font-normal text-black2 text-[16px] leading-[25.8px] lg:max-w-[470px] md:min-w-[300px] mt-5 mb-6`}
            >
              Avante Consulting has extensive experience working with clients in
              the financial sector. Our tailored consulting services help
              financial institutions navigate the evolving landscape, address
              regulatory requirements, optimize operations, and drive digital
              transformation. Partner with us to enhance risk management,
              improve customer experiences, and achieve sustainable growth in
              the competitive financial industry.{' '}
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
            className={`${layout.sectionImg} lg:mx-24 md:mx-12 lg:px-24 md:px-8   relative`}
          >
            <img
              src={financial1}
              alt="card"
              className=" mt-[20px] w-[700.19px] h-[518.48px]    "
            />
          </div>
        </div>
      </div>
      <div className="block">
        <div className="block md:hidden">
          <div className="  flex-col flex justify-center item-center bg-background mb-12">
            <img src={financial1} alt="financial" className="h-[281.73px]" />
            <div className="flex-start bg-background mt-12 ">
              <h1 className="font-inter font-semibold text-[16px] underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px] ml-4 ">
                FINANCIAL
              </h1>
              <h1 className="flex ml-[107px] mt-[-23px] font-semibold text-primary">
                SECTORS
              </h1>
              <p className="font-inter font-normal text-[12px] mt-12 ml-4 mr-4 leading-[25.8px]">
                Avante Consulting has extensive experience working with clients
                in the financial sector. Our tailored consulting services help
                financial institutions navigate the evolving landscape, address
                regulatory requirements, optimize operations, and drive digital
                transformation. Partner with us to enhance risk management,
                improve customer experiences, and achieve sustainable growth in
                the competitive financial industry.
              </p>
              <Link to="/contacts">
                <button className="flex  items-center text-white text-[12px] ml-4 mt-8 h-[45px] w-[165px] rounded-lg  bg-secondary ">
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
      </div>
    </div>
  );
};

export default FinancialSector;
