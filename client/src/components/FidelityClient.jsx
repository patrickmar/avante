import React from 'react';
import imagefidelity from '../images/imagefidelity.png';
import { layout } from '../style';
import { Link } from 'react-router-dom';

const FidelityClient = () => {
  return (
    <section className={`flex md:flex-row flex-col-reverse sm:py-16 py-6 mb-4`}>
      <div className={`lg:mx-24 md:mx-4 px-8 ${layout.sectionInfo}`}>
        <h2
          className={`font-inter font-semibold xs:text-[20px] mt-[70px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-4  `}
        >
          FIDELITY BANK PLC
          <br className="" />
        </h2>
        <div
          className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] lg:max-w-[470px] md:min-w-[300px] mt-5 mb-6`}
        >
          Fidelity Bank PLC is a leading Nigerian financial institution that is
          committed to providing innovative and personalized services to its
          customers. Avante Consulting Solutions was selected to deploy an
          implementation of eGain knowledge management, email, and social
          channels for Fidelity Bank PLC With eGain, the bank can deliver
          high-quality customer experiences through a range of digital channels,
          including email, social media, and web. The Avante methodology ensured
          the project was delivered in only a couple of months on time and
          within budget.
        </div>
        <Link to="/contacts">
          <button className="underline decoration-2 underline-offset-4 decoration-secondary text-secondary">
            Learn more
          </button>
        </Link>
      </div>
      <div>
        <div className="hidden md:block">
          <div
            className={`${layout.sectionImg} lg:mx-24 md:mx-8 lg:px-24 md:px-8 relative`}
          >
            <img
              src={imagefidelity}
              alt="nsip"
              className=" block -mx-4 w-[450.47px] h-[430.1px]"
            />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8 mt-12">
          <div className="block md:hidden">
            <img src={imagefidelity} alt="smallnsip" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FidelityClient;
