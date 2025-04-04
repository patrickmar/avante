import { layout } from "../style";
import union1 from "../images/union1.png";
import union from "../images/union.png";
import { Link } from "react-router-dom";
const Union = () => {
  return (
    <section className={` mt-[-250px] flex md:flex-row flex-col sm:py-16 py-6`}>
      <div>
        <div className="hidden md:block md:mt-[50px]">
          <div
            id="union"
            className={`relative lg:mr-24  md:mr-12 ${layout.sectionImgReverse1} `}
          >
            <img
              src={union1}
              alt="union"
              className="block lg:w-[65%] md:w-[80%] h-[70%] lg:ml-44 md:ml-62"
            />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8 mt-[200px]">
          <div className="block md:hidden">
            <img src={union} alt="union" />
          </div>
        </div>
      </div>
      <div
        className={`${layout.sectionInfo} md:mt-[20px] mt-[200px] lg:ml-44 md:ml-12 px-8`}
      >
        <h2
          className={`font-inter font-semibold xs:text-[16px] md:mt-[150px] mt-[-40px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-2  `}
        >
          UNION <span className=" ">BANK</span> <br className=" " />
        </h2>
        <p
          className={`font-inter text-justify  font-normal text-black2 text-[14px] leading-[25.8px] lg:max-w-[470px] md:min-w-[300px] mt-5 mb-6`}
        >
          SAS and Union Bank have determined a roadmap to formulating a
          partnership to achieve Union Bank’s Digital Transformation vision.
          This project is the first phase of the roadmap and it is intended to
          help • Implementation of a world-class analytics & AI platform •
          Automation and Establishing foundation for Campaign Management
          solution by performing integrations with EDW and key channels. • Build
          a consistent and rich data platform, focusing on the quality and
          completeness of the data. • Enabling marketing team to design and
          execute marketing campaigns. • Enablement of the Union Bank staff on
          the usage and best practices of the platform. Avante was hired to
          provide project management services on this project to ensure all
          deliverables related to the scope and agreed upon timelines were met
          and delivered successfully.
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

export default Union;
