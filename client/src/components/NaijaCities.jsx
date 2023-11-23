import React from 'react';
import { layout } from '../style';
import naijacities1 from '../images/naijacities1.png';
import { Link } from 'react-router-dom';
const NaijaCities = () => {
  return (
    <section className={` mt-[-150px] flex md:flex-row flex-col sm:py-16 py-6`}>
      <div>
        <div className="hidden md:block md:mt-[400px] ">
          <div className={`relative   ${layout.sectionImgReverse1} `}>
            <img
              src={naijacities1}
              alt="naijacities"
              className="block w-[488.47px] h-[535.1px] ml-32"
            />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8 mt-[200px]">
          <div className="block md:hidden">
            <img src={naijacities1} alt="smallnaijacities" />
          </div>
        </div>
      </div>
      <div className={`${layout.sectionInfo} mt-[200px] lg:mr-44 md:mr-8 px-8`}>
        <h2
          className={`font-inter font-semibold xs:text-[16px] md:mt-[200px] mt-[-100px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-2   `}
        >
          FUTURE CITIES <span className="text-secondary ">NIGERIA</span> <br />
          {/* <span className="text-primary font-inter font-semibold sm:text-[28px] md:mt-[50px] text-[20px]  sm:leading-[8.8px] leading-[6.8px] w-full mb-2  ">
            Collaborative infrastructure <br />
            program.
          </span> */}
        </h2>
        <p
          className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] min-w-[380px] mt-5 mb-6`}
        >
          The Future Cities Nigeria (FCN) program is a series of infrastructure
          and capacity building projects delivered for Nigerian State
          governments in collaboration with the British government. The projects
          are implemented globally by Adam Smith International (ASI) who partner
          with Infrastructure Delivery International (IDI) in Nigeria for
          projects in Lagos, Ogun and other states. Under leadership from IDI,
          Avante worked closely with LASWA to provide Customer and Market
          intelligence services in conducting a market survey of the Lagos
          Inland Water ways in relation to usage by passenger, freight, operator
          and other interest groups. Our work included Survey Design, Content
          Development, Planning, Data Gathering, Survey Software Implementation,
          Data Management, Analysis and Reporting. Avante also provided Content
          Management and Data Sharing Services for the FCN project.
        </p>
        <Link to="/contacts">
          <button className="font-inter font-normal text-[12px] underline decoration-2 underline-offset-4 decoration-secondary text-secondary">
            Learn more
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NaijaCities;
