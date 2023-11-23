import React from 'react';
import { layout } from '../style';
import projectManagement2 from '../images/projectManagement2.jpg';

const ProjectManagementDetails = () => {
  return (
    <section className=" flex md:flex-row flex-col md:py-16 py-6 lg:ml-24 ml-12">
      <div className={`lg:mx-12 md:mx-4 ${layout.sectionInfo}`}>
        <h1
          className={`font-inter font-semibold xs:text-[28px] md:mt-[2px] text-[20px]   w-full mb-4 text-primary `}
        >
          Project Management:
        </h1>
        <div
          className={`font-inter text-justify font-normal  sm:text-[16px] text-[12px] sm:leading-[25.8px] leading-[25.8px] max-w-[400px] md:mt-0 mt-5 mb-6`}
        >
          Successful projects require effective Project Management, and that's
          precisely what we excel at. At Avante Consulting, our experienced
          project managers bring proven methodologies and insights to ensure
          your initiatives are delivered on time, within budget, and meet the
          defined objectives. We take a holistic approach, overseeing every
          aspect of the project from initiation to closure, while collaborating
          with your teams to align the project's goals with your organization's
          strategic vision.
          <p className="mb-4" />
          Our project management expertise extends across various industries and
          domains, allowing us to adapt and tailor our approach to suit your
          specific needs. We emphasize proactive risk management, identifying
          potential obstacles and devising contingency plans to mitigate any
          challenges that may arise. With a focus on clear communication and
          stakeholder engagement, we keep you involved throughout the process,
          empowering you with the knowledge to make informed decisions and
          achieve project success.
        </div>
      </div>
      <div
        className={`hidden md:block ${layout.sectionImg}  lg:mx-24 md:mx-8 lg:px-24 md:px-2 md relative`}
      >
        <img
          src={projectManagement2}
          alt="vision"
          className="  md:w-[561px] w-[371.34px]  md:h-[567px] h-[238px] "
        />
      </div>
    </section>
  );
};

export default ProjectManagementDetails;
