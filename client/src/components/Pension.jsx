import { layout } from "../style";
import pension from "../images/pension.png";
import { Link } from "react-router-dom";
const Pension = () => {
  return (
    <section className={`flex md:flex-row flex-col-reverse sm:py-16 py-6`}>
      <div
        className={`lg:mx-24 md:mx-8 lg:px-8 md:px-4 px-8 ${layout.sectionInfo}`}
      >
        <h2
          className={`font-inter font-semibold xs:text-[20px] mt-[70px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-4`}
        >
          STANBICIBTC PENSION <br className="" />
          {/* <span className=" text-primary font-inter font-semibold sm:text-[28px] md:mt-[50px] text-[20px]  sm:leading-[8.8px] leading-[6.8px] w-full mb-2 ">
            LASTVEB up-skilling youth.
          </span> */}
        </h2>
        <div
          className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] lg:max-w-[470px] md:min-w-[300px] mt-5 mb-6`}
        >
          StanbicIBTC Pension is the leading and largest private pension company
          in Nigeria. In order to service their large customer base efficiently
          and provide a better customer experience they engaged with Avante
          Consulting. Avante partnered with eGain to deliver a strong
          multichannel and knowledge management solution. This included the use
          of online chat to help increase web customer engagement and reduce
          customer effort. Coupled with email management to provide automation
          and increase efficiency. These channels are supported by a Knowledge
          Base which ensures the consistency and quality of information provided
          to customers.The results have shown much lower agent effort and
          customer effort required in carrying out a transaction.
        </div>
        <Link to="/contacts">
          <button className="underline decoration-2 underline-offset-4 decoration-secondary text-secondary">
            Learn more
          </button>
        </Link>
      </div>
      <div>
        <div className="hidden md:block w-[700px] h-[250px] -mt-12">
          <div
            id="cta10"
            className={`${layout.sectionImg}  lg:mx-24 md:mx-8 lg:px-24 px-12 relative`}
          >
            <img
              src={pension}
              alt="pension"
              className=" block -mx-4 w-[100%] h-[100%] "
            />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8">
          <div id="cta20" className="block md:hidden">
            <img src={pension} alt="pension" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pension;
