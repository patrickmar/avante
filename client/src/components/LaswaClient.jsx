import React from 'react';
import laswalogo from '../images/laswalogo.png';
import { layout } from '../style';
import { Link } from 'react-router-dom';

const LaswaClient = () => {
  return (
    <section className={`flex md:flex-row flex-col-reverse sm:py-16 py-6`}>
      <div className={`lg:mx-24 px-8 ${layout.sectionInfo}`}>
        <h2
          className={`font-inter font-semibold xs:text-[20px] md:mt-[60px] mt-[70px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-4`}
        >
          Lagos State Waterways Authority (LASWA) <br />
        </h2>
        <div
          className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] lg:max-w-[470px] min-w-[300px] mt-5 mb-6`}
        >
          The Lagos State Government (LASG) in 2008 enacted the Lagos State
          Waterways Authority Act, which established the Lagos Waterways
          Authority (LASWA). LASWA is charged with the responsibility of
          coordinating and managing the reforms necessary for the long-term
          growth and development of water transportation in Lagos State,
          including the granting of ferry licenses and concessions for the
          operation of terminals to the private sector. Avante was chosen to
          build a website for LASWA that showcases their mission, vision,
          objectives, terminals and most importantly their world class
          standards.
        </div>
        <Link to="/contacts">
          <button className="underline decoration-2 underline-offset-4 decoration-secondary text-secondary">
            Learn more
          </button>
        </Link>
      </div>
      <div>
        <div className="hidden md:block mt-[200px]">
          <div
            className={`${layout.sectionImg} mr-32 -mt-[50px] lg:px-24 relative`}
          >
            <img
              src={laswalogo}
              alt="lastveb"
              className=" block -mx-4 w-[500.47px] h-[400.1px] "
            />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8">
          <div className="block md:hidden">
            <img src={laswalogo} alt="smalllastveb" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaswaClient;
