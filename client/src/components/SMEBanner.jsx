import { layout } from '../style';
import consumer from '../images/consumer.png';
import consumer1 from '../images/consumer1.png';
import smallwhite from '../images/smallwhite.png';
import { Link } from 'react-router-dom';

const SMEBanner = () => {
  return (
    <div>
      <div className="hidden md:block">
        <div id="financial" className={`mb-32  h-[721px] ${layout.section}`}>
          <div className={`lg:ml-24 md:ml-4 ml-24 ${layout.sectionInfo}`}>
            <h2
              className={`font-Inter font-semibold xs:text-[40px] mt-[20px] text-[40px] text-black xs:leading-[60.8px] leading-[66.8px] w-full mb-4 `}
            >
              SME
            </h2>
            <div
              className={`font-inter text-justify font-normal text-black2 text-[16px] leading-[25.8px] lg:max-w-[470px] md:min-w-[400px] mt-5 mb-6`}
            >
              Avante Consulting understands the unique challenges and
              aspirations of small and medium-sized enterprises (SMEs). Our
              tailored consulting services offer practical solutions to help
              SMEs streamline operations, optimize resources, implement
              cost-effective technologies, and accelerate growth. Partner with
              us to unlock the full potential of your business and achieve
              sustainable success in today's competitive market.
            </div>
            <button className="flex  items-center text-white text-[12px] -ml-2 mt-8 h-[45px] w-[165px] rounded-lg  bg-secondary ">
              <span className="mx-8 text-[12px] font-inter font-normal">
                Learn more{' '}
              </span>
              <i className="fas fa-chevron-right">
                <img
                  src={smallwhite}
                  alt="smallwhite"
                  className="lg:w-[100%] md:w-[50%] lg:h-[100%] md:h-[50%] "
                />{' '}
              </i>
            </button>
          </div>
          <div
            className={`${layout.sectionImg} lg:mx-24 md:mx-4 lg:px-24 md:px-8 px-24   relative`}
          >
            <img
              src={consumer}
              alt="sme"
              className=" mt-[20px] w-[700.19px] h-[518.48px]    "
            />
          </div>
        </div>
      </div>
      <div className=" block md:hidden flex-col flex justify-center item-center bg-background mb-12">
        <img src={consumer1} alt="sme" className="h-[281.73px]" />
        <div className="flex-start bg-background mt-12">
          <h1 className="font-inter font-semibold text-[16px] underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px] ml-4 ">
            SME{' '}
          </h1>

          <p className="font-inter font-normal text-[12px] mt-12 ml-4 mr-4 leading-[25.8px]">
            Avante Consulting understands the unique challenges and aspirations
            of small and medium-sized enterprises (SMEs). Our tailored
            consulting services offer practical solutions to help SMEs
            streamline operations, optimize resources, implement cost-effective
            technologies, and accelerate growth. Partner with us to unlock the
            full potential of your business and achieve sustainable success in
            today's competitive market.
          </p>
          <Link to="/contacts">
            <button className="flex  items-center text-white text-[12px] ml-4 mt-8 h-[45px] w-[165px] rounded-lg  bg-secondary ">
              <span className="mx-8 text-[12px] font-inter font-normal">
                Learn more{' '}
              </span>
              <i className="fas fa-chevron-right">
                <img
                  src={smallwhite}
                  alt="smallwhite"
                  className="sm:w-[100%] w-[50%] sm:h-[100%] h-[50%]"
                />{' '}
              </i>
            </button>
          </Link>
        </div>
      </div>{' '}
    </div>
  );
};

export default SMEBanner;
