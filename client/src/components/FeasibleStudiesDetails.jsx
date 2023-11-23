import React from 'react';
import { layout } from '../style';
import feasibility from '../images/feasibility.jpg';

const FeasibleStudiesDetails = () => {
  return (
    <section className="flex md:flex-row flex-col md:py-16 py-6 lg:ml-24 ml-12">
      <div className={`lg:mx-12 md:mx-4 ${layout.sectionInfo}`}>
        <h1
          className={`font-inter font-semibold xs:text-[28px] md:mt-[2px] text-[20px]   w-full mb-4 text-primary  `}
        >
          Feasibility Studies:{' '}
        </h1>
        <div
          className={`font-inter font-normal text-justify  sm:text-[16px] text-[12px] sm:leading-[25.8px] leading-[25.8px] max-w-[400px] md:mt-0 mt-5 mb-6`}
        >
          Before embarking on a new venture, it is crucial to assess its
          viability and potential risks. Our Feasibility Studies are designed to
          provide you with a comprehensive analysis of the project's
          feasibility, considering technical, financial, operational, and market
          factors. We assess the project's potential benefits and drawbacks to
          enable informed decision-making.
          <p className="mb-4" />
          Our team of experts conducts thorough research, gathers data, and
          conducts risk assessments to ensure that the proposed project aligns
          with your organization's goals and resources. With a clear
          understanding of the project's feasibility, you can make confident
          decisions and prioritize initiatives that offer the highest return on
          investment while minimizing potential risks.{' '}
        </div>
      </div>
      <div
        className={`hidden md:block ${layout.sectionImg}  lg:mx-24 md:mx-8 lg:px-24 md:px-2 md relative`}
      >
        <img
          src={feasibility}
          alt="vision"
          className="  md:w-[561px] w-[371.34px]  md:h-[567px] h-[238px] "
        />
      </div>
    </section>
  );
};

export default FeasibleStudiesDetails;
