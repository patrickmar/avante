import React from 'react';
import { layout } from '../style';
import research from '../images/research.jpg';

const UserResearchDetails = () => {
  return (
    <section className="flex md:flex-row flex-col md:py-16 py-6 lg:ml-24 ml-12">
      <div className={`lg:mx-12 md:mx-4 ${layout.sectionInfo}`}>
        <h1
          className={`font-inter font-semibold xs:text-[28px] md:mt-[2px] text-[20px] text-black  w-full mb-4 text-primary `}
        >
          User Experience Research:{' '}
        </h1>
        <div
          className={`font-inter text-justify font-normal  sm:text-[16px] text-[12px] sm:leading-[25.8px] leading-[25.8px] max-w-[400px] md:mt-0 mt-5 mb-6`}
        >
          To build products and services that truly resonate with your
          customers, understanding their needs and preferences is paramount. Our
          User Experience Research services are designed to provide you with
          valuable insights into your target audience's behaviours,
          expectations, and pain points. By combining qualitative and
          quantitative research methods, we uncover deep user insights that fuel
          innovation and drive customer satisfaction.
          <p className="mb-4" />
          Our team of skilled researchers utilizes a range of tools and
          techniques to gather data, such as user interviews, surveys, usability
          testing, and customer journey mapping. We go beyond simple
          observations to gain a holistic understanding of user interactions
          with your products and services. Armed with these user-centric
          insights, you can make informed design decisions and deliver
          exceptional user experiences that foster loyalty and drive business
          growth.
        </div>
      </div>
      <div
        className={` hidden md:block ${layout.sectionImg}  lg:mx-24 md:mx-8 lg:px-24 md:px-2 md relative`}
      >
        <img
          src={research}
          alt="vision"
          className="  md:w-[561px] w-[371.34px]  md:h-[567px] h-[238px] "
        />
      </div>
    </section>
  );
};

export default UserResearchDetails;
