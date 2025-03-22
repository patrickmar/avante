import React from "react";
import { layout } from "../style";
import sterling from "../images/sterling.png";
import { Link } from "react-router-dom";

const SterlingBank = () => {
  return (
    <section className={` mt-[-250px] flex md:flex-row flex-col sm:py-16 py-6`}>
      <div>
        <div className="hidden md:block md:mt-[50px]">
          <div
            id="union"
            className={`relative lg:mr-24  md:mr-12 ${layout.sectionImgReverse1} `}
          >
            <img
              src={sterling}
              alt="union"
              className="block lg:w-[60%] md:w-[80%] h-[70%] lg:ml-32 md:ml-62"
            />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8 mt-[200px]">
          <div className="block md:hidden">
            <img src={sterling} alt="union" />
          </div>
        </div>
      </div>
      <div
        className={`${layout.sectionInfo} md:mt-[20px] mt-[200px] lg:ml-44 md:ml-12 px-8`}
      >
        <h2
          className={`font-inter font-semibold xs:text-[16px] md:mt-[150px] mt-[-40px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-2  `}
        >
          Sterling <span className="text-secondary ">BANK</span>{" "}
          <br className=" " />
          {/* <span className="text-primary font-Inter font-semibold sm:text-[28px] md:mt-[50px] text-[20px]  sm:leading-[8.8px] leading-[6.8px] w-full mb-2 ">
                Campaign Management <br className="" />
                Automation
              </span> */}
        </h2>
        <p
          className={`font-inter text-justify  font-normal text-black2 text-[14px] leading-[25.8px] lg:max-w-[470px] md:min-w-[300px] mt-5 mb-6`}
        >
          Sterling Bank “Your one-customer bank” is a full service national
          commercial bank in Nigeria which has evolved from the nation’s
          pre-eminent investment banking institution to a fully-fledged
          commercial bank. Avante Consulting Solutions was selected to deploy an
          implementation of eGain email to enhance customer communication,
          improve agent productivity, and provide a seamless and efficient email
          management solution for Sterling Bank. With the deployment of eGain
          Mail on the cloud, Sterling Bank Plc is leveraging the scalability,
          flexibility, and cost-effectiveness offered by cloud technology.
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

export default SterlingBank;
