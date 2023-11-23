import { layout } from '../style';
import hero from '../images/hero.png';
import smallhero from '../images/smallhero.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="hidden sm:block">
        <div id="ctas2" className={`mb-32  h-[721px] ${layout.section} `}>
          <div className={`lg:mx-24 md:mx-12  ${layout.sectionInfo}`}>
            <h2
              className={`font-inter font-normal lg:text-[60px] md:text-[40px] mt-[20px] text-[40px] text-black xs:leading-[60.8px] leading-[66.8px] w-full mb-4 `}
            >
              SAS Analytics
            </h2>
            <div
              className={`font-inter text-justify font-normal text-black2 text-[16px] leading-[25.8px] max-w-[470px] mt-5 mb-6`}
            >
              Avante is a silver partner of SAS and a solution partner within
              the Customer Intelligence practice. They have experience in
              delivering end-to-end SAS customer or citizen intelligence
              solutions, including customer relationship management and
              knowledge management business processes.
            </div>
            <button
              className="bg-secondary text-white flex flex-start font-bold py-2 px-12 rounded"
              onClick={() => navigate('/contacts')}
            >
              Request a quote
            </button>
          </div>
          <div
            id="cta2"
            className={`${layout.sectionImg} lg:mx-24 lg:px-24 md:px-2   relative`}
          >
            <img
              src={hero}
              alt="card"
              className=" mt-[20px] lg:w-[471.19px] md:w-[310px] h-[518.48px]   "
            />
          </div>
        </div>
      </div>
      <div className="block">
        <div className="block md:hidden">
          <div className="  flex-col flex justify-center item-center bg-background mb-12">
            <img src={smallhero} alt="smallhero" />
            <div className="flex-start bg-background mt-12 ">
              <h1 className="font-inter font-semibold text-[16px] underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px] ml-4 ">
                SAS
              </h1>
              <h1 className="flex ml-[60px] mt-[-22px] font-semibold text-primary">
                ANALYTICS
              </h1>
              <p className="font-inter text-justify font-normal text-[12px] mt-12 ml-4 mr-4 leading-[25.8px]">
                Avante is a software development company that specializes in
                e-commerce, mobile solutions, customer relationship management,
                and enterprise resource management. They have experience
                building custom solutions for various industries and use
                technologies such as Service-oriented architecture (SOA) to
                improve productivity.
              </p>
              <button
                onClick={() => navigate('/contacts')}
                className="flex  items-center text-white text-[14px] ml-4 mt-8 h-[46px] w-[247px] rounded-lg  bg-secondary "
              >
                <span className="mx-[60px] text-[14px] font-inter font-normal">
                  Request a quote
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>{' '}
    </div>
  );
};

export default Hero;
