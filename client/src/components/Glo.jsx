import React from 'react';
import { layout } from '../style';
import globalcom from '../images/globalcom.png';
import { Link } from 'react-router-dom';
const Glo = () => {
  return (
    <section className={`mt-[-150px] flex md:flex-row flex-col sm:py-16 py-6`}>
      <div>
        <div className="hidden md:block">
          <div
            id="cta9"
            className={`relative lg:mr-24  ${layout.sectionImgReverse1} `}
          >
            <img
              src={globalcom}
              alt="globalcom"
              className="block h-[428.8px]"
            />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8">
          <div id="cta19" className="block md:hidden">
            <img src={globalcom} alt="globalcom" />
          </div>
        </div>
      </div>
      <div className={`${layout.sectionInfo} lg:ml-56 md:ml-8 px-8`}>
        <h2
          className={`font-inter font-semibold xs:text-[16px] md:mt-[150px] mt-[-100px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-2   `}
        >
          GLOBACOM <br />
          {/* <span className="text-primary font-Inter font-semibold sm:text-[28px] md:mt-[50px] text-[20px]  sm:leading-[8.8px] leading-[6.8px] w-full mb-2  ">
            LASTVEB up-skilling youth.
          </span> */}
        </h2>
        <p
          className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] lg:max-w-[470px] md:min-w-[300px] mt-5 mb-6`}
        >
          Globacom Limited is a Nigerian multinational telecommunications
          company headquartered in Lagos, Nigeria. GLO started operations on 29
          August 2003. GLO owns four business units; Glo Mobile, GLO Access, GLO
          1 Submarine Cable and Broad Access. GLO Mobile has an estimate of over
          25 million subscribers. Avante Consulting implemented the integration
          of Siebel Customer Relationship Management with Omni docs document
          management solution. Easing the availability of scanned documents such
          as Know your customer forms, utility bills, legal documents etc. in
          the CRM tool enabled customer service agents to be more effective in
          resolving queries.
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

export default Glo;
