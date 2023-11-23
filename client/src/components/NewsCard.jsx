import React from "react";
import ten from "../images/ten.png";
import arrow4 from "../images/arrow4.png";
import styles, { layout } from "../style";
import { Link } from "react-router-dom";

const NewsCard = () => {
  return (
    <section className={`flex md:flex-row flex-col sm:py-16 py-6`}>
      <div className={`sm:mx-24  ${layout.sectionImgReverse}`}>
        <div className="  sm:mt-12 ">
          <h2
            className={` underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px] mb-8
          ${styles.heading5}`}
          >
            OUR <span className="text-primary">NEWS</span>
          </h2>
          <h3 className=" font-inter font-normal md:text-[28px] text-[16px] mb-12 ">
            Insights, Updates, and Industry Highlights.
          </h3>{" "}
          <img
            src={ten}
            alt="ten"
            className="sm:w-[634px] w-full sm:h-[445px] h-[238px]"
          />
        </div>
      </div>
      <div className={`${layout.sectionInfo} sm:ml-12  sm:mt-72 mt-2 `}>
        <p
          className={`font-inter font-normal sm:text-[12px] mt-[20px] text-[12px] text-black xs:leading-[30.8px] leading-[20.8px] md:p-0 p-4 w-full mb-4 `}
        >
          AVANTE @10! | Thursday, 15 DECEMBER 2022{" "}
        </p>
        <p className="text-primary text-secondary font-Inter font-semibold sm:text-[32px] sm:mt-[12px] mt-[-12px] text-[20px] text-black sm:leading-[30.8px] leading-[10.8px] md:p-0 p-4 w-full">
          10 Years Avante History{" "}
        </p>
        <p className="text-primary  font-inter font-normal sm:text-[14px] sm:mt-[12px] mt-[-12px] text-[20px] text-black sm:leading-[30.8px] leading-[10.8px] md:p-0 p-4 w-full">
          posted by admin
        </p>
        <div
          className={`font-inter font-normal text-black1 md:text-[14px] text-[12px] leading-[30.8px] max-w-[470px] sm:p-auto mt-5 mb-6`}
        >
          <p className=" font-inter font-normal text-dark list-disc leading-[25.8px] md:p-0 p-4 ">
            2012 – The year we were founded, Signed a Partner Reseller agreement
            with eGain 2013 – Successfully launched digital multichannel
            customer service solutions for a tier one bank and the largest
            Pensions provider in our territory. 2014 – D...
          </p>
          <Link to="/explicit">
            <button className="text-secondary sm:ml-0 ml-[8px] w-[84.96px] h-[22px] sm:mt-2 mt-4 ">
              Read more
            </button>
            <img
              src={arrow4}
              alt="arrow"
              className="sm:-mt-6 -mt-7  md:h-[20px]   md:w-[43.2px] w-[44.74px] top-[10px] mb-4 md:ml-[80px] ml-[120px]"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
