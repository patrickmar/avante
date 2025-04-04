import { Link } from "react-router-dom";
import { layout } from "../style";
import brokers from "../images/brokers.png";
const InsuraceBroker = () => {
  return (
    <section
      className={`  mt-[-150px] flex md:flex-row flex-col sm:py-16 py-6`}
    >
      <div>
        <div className="hidden md:block mt-56 ">
          <div
            className={`relative w-[447px] h-[200px]  ${layout.sectionImgReverse1} `}
          >
            <img
              src={brokers}
              alt="brokers"
              className="w-[100%] h-[100%] ml-32"
            />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8 mt-[200px]">
          <div className="block md:hidden">
            <img src={brokers} alt="brokers" />
          </div>
        </div>
      </div>
      <div
        className={`${layout.sectionInfo} mt-[200px] lg:ml-72 md:mr-12 lg:px-8 md:px-4 px-8`}
      >
        <h2
          className={`font-inter font-semibold xs:text-[16px]  mt-[-100px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-2  `}
        >
          STANBIC IBTC INSURANCE BROKER <br />
          {/* <span className="text-primary font-inter font-semibold sm:text-[28px] md:mt-[50px] text-[20px]  sm:leading-[8.8px] leading-[6.8px] w-full mb-2  ">
            Professional training assistance
          </span> */}
        </h2>
        <p
          className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] lg:max-w-[470px] md:min-w-[300px] mt-5 mb-6`}
        >
          Stanbic IBTC Insurance brokers is a duly registered and licensed
          Insurance Broking firm transacting business as Brokers, Risk
          Management Consultants, Life and Pensions, Health Insurance
          Consultants and Claims Service Experts. The Asset Management team
          sought a solution that would allow them to classify customer queries
          based on content, help manage multiple tasks for a single message, and
          create a single consistent response. Agents needed a complete picture
          of what had happened already with a customer. They required access to
          relevant customer data and guidance in resolving, what were often
          complex problems.
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

export default InsuraceBroker;
