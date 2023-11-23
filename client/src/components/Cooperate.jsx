import { layout } from '../style';
import solution from '../images/solution.jpeg';
const Cooperate = () => (
  <section
    id="coperate-profile"
    className={`flex md:flex-row flex-col sm:py-16 py-6 px-4 mb-14`}
  >
    <div className={` relative ${layout.sectionImgReverse}`}>
      <div className="relative flex">
        <img
          src={solution}
          alt="codeit"
          className="block md:w-[400px] w-[336.6px] md:h-[400px] h-[238px] "
        />
        <div className=" absolute top-0 bottom-0 left-1/2  w-4 bg-background"></div>
        <div className=" absolute top-0 right-0 sm:w-48 w-40  sm:h-20 h-12 bg-background"></div>
        <div className=" absolute bottom-0 left-0 sm:w-52 w-44 sm:h-20 h-12 bg-background"></div>
      </div>
    </div>
    <div className={layout.sectionInfo}>
      <h2
        className={`font-inter font-semibold xs:text-[16px] mt-[20px] text-[16px] text-black xs:leading-[30.8px] leading-[66.8px] w-full  `}
      >
        CORPORATE <span className="text-secondary ">PROFILE</span> <br />
      </h2>
      <h3 className="text-secondary font-inter font-semibold xs:text-[16px] mt-[10px] text-[20px] text-black xs:leading-[30.8px] leading-[30.8px] w-full">
        {' '}
        Consulting for transformation <br />
        by providing Business Tools
      </h3>
      <div
        className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] max-w-[470px] mt-4 mb-6`}
      >
        Avante Consulting Solutions provides business and technology services
        and solutions to participants in the Financial Services, Public Sector,
        Telecommunications, Energy, Retail, Education and Consumer Goods
        industry.<p className="mb-2"></p> We introduce leading edge practices
        and offer business advisory, business and functional transformation and
        IT consulting to some of Nigeria’s leading organisations, governments
        and institutions.<p className="mb-2"></p> We leverage our deep industry
        insight and integrated breadth of capabilities to enable transformation
        for our clients and the industry.
      </div>
    </div>
  </section>
);

export default Cooperate;
