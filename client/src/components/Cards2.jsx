import microsoft from '../images/microsoft.jpg';
import egain from '../images/egain.png';
import oracle from '../images/oracle.png';
import sas from '../images/sas.png';
import whitearrow from '../images/whitearrow.png';
import { Link } from 'react-router-dom';

const Cards2 = () => {
  return (
    <div className="flex flex-col  md:mb-12 mb-8">
      <div className=" flex  lg:justify-center justify-center lg:items-end items-center lg:mr-[1000px] mr-[-20px]   ">
        <h1 className="md:mb-4 font-inter font-semibold text-[16px]  ">
          OUR <span className="text-secondary ">PARTNERS</span>{' '}
        </h1>{' '}
      </div>
      <div className=" flex items-center justify-center lg:items-end md:items-start  lg:mr-[890px] ml-[100px] mb-4">
        <h1 className="md:mb-8 font-inter font-normal md:text-[28px] text-[14px]  ">
          Strategic Collaborative Alliances{' '}
        </h1>{' '}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-8">
        <div className="lg:ml-[280px] md:ml-24  ml-4">
          <div className=" bg-black flex flex-col items-center md:items-start justify-center px-8 py-6  lg:w-[482px] md:w-[600px] w-[300px] lg:h-[293px] md:h-[320px] h-[215px] ">
            <div className="text-white text-4xl md:text-6xl  md:ml-[-65px] ml-[-290px] md:mt-[-110px] mt-[-40px] rounded-full p-4 absolute">
              <i>
                <img
                  src={microsoft}
                  alt="vector"
                  className="md:h-16  h-12 md:w-16 w-12 rounded-full"
                />
              </i>
            </div>
            <div className="text-white md:ml-8 -ml-32 md:text-[32px] text-[16px] font-inter font-semibold mb-4 ">
              eGain{' '}
            </div>
            <div className=" font-inter font-normal text-white ml-8 font-inter md:text-[14px] leading-[25.8px] text-[10px] md:text-base mb-4">
              Our partnership with eGain strengthens our commitment to the
              industry's most innovative ...
            </div>
            <Link to="/services/egain/collaboration">
              <button className="flex md:ml-8 ml-[-32px] items-center text-white text-[12px] ">
                <span className="md:mr-8 mr-16 font-inter font-normal">
                  Read more
                </span>
                <i className="fas fa-chevron-right">
                  <img
                    src={whitearrow}
                    alt="whitearrow"
                    className="md:w-[100%] w-[50%] md:h-[100%] h-[50%]"
                  />
                </i>
              </button>
            </Link>
          </div>
        </div>

        <div className="lg:mt-24 md:mt-2 md:ml-[100px] ml-4">
          <div className="bg-black flex flex-col items-end lg:items-start justify-center px-8 py-6 lg:w-[482px] md:w-[600px] w-[300px] lg:h-[293px] md:h-[320px] h-[215px] ">
            <div className="text-white text-4xl md:text-6xl lg:ml-[390px]   md:mt-[-110px] rounded-full p-4 absolute lg:mr-0 -md:mr-[25px] -mr-16">
              <i>
                <img
                  src={sas}
                  alt="vector"
                  className="md:h-16 h-12 md:w-16 w-12 ml-2 rounded-full"
                />
              </i>
            </div>
            <div className="text-white md:ml-2 lg:mr-44 md:mr-[400px] mr-44  md:text-[32px] text-[16px] font-inter font-semibold mb-4 ">
              SAS{' '}
            </div>
            <div className=" font-inter font-normal leading-[25.8px] text-white md:text-[14px] text-[12px]  md:text-base mb-4">
              Avante is a silver partner of SAS and a solution partner within
              the <br />
              Customer Intelligence practice.
            </div>
            <Link to="/services/sas">
              <button className="flex  md:mr-0  items-center text-white text-[12px] ">
                <span className="mr-32">Read more</span>
                <i className="fas fa-chevron-right">
                  <img
                    src={whitearrow}
                    alt="whitearrow"
                    className="md:w-[100%] w-[50%] md:h-[100%] h-[50%]"
                  />{' '}
                </i>
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:ml-[280px] md:ml-24  ml-4">
          <div className="  bg-black flex flex-col items-center md:items-start justify-center px-8 py-6  lg:w-[482px] md:w-[600px] w-[300px] lg:h-[293px] md:h-[320px] h-[215px] ">
            <div className="text-white text-4xl sm:text-6xl  sm:ml-[-65px] ml-[-330px] sm:mt-[-110px] mt-[-40px] rounded-full p-4 absolute">
              <i>
                <img
                  src={oracle}
                  alt="oracle"
                  className="sm:h-16 h-12 sm:w-16 w-12"
                />
              </i>
            </div>
            <div className="text-white sm:ml-8 -ml-32 md:text-[32px] text-[16px] font-inter font-semibold mb-4">
              ORACLE{' '}
            </div>
            <div className=" font-inter font-normal leading-[25.8px] text-white ml-8 font-inter sm:text-[14px] text-[10px] md:text-base mb-4">
              Our Oracle Consultancy Practice is focused on helping
              organisations optimize and ...
            </div>
            <Link to="/services/oracle">
              <button className="flex sm:ml-8 ml-[-40px] items-center text-white text-[12px] ">
                <span className="mr-12 font-inter font-normal">Read more</span>
                <i className="fas fa-chevron-right">
                  <img
                    src={whitearrow}
                    alt="whitearrow"
                    className="sm:w-[100%] w-[50%] sm:h-[100%] h-[50%]"
                  />
                </i>
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:mt-24 md:mt-2 md:ml-[100px] ml-4">
          <div className="bg-black flex flex-col items-end lg:items-start justify-center px-8 py-6 lg:w-[482px] md:w-[600px] w-[300px] lg:h-[293px] md:h-[320px] h-[215px] ">
            <div className="text-white text-4xl md:text-6xl lg:ml-[390px]   md:mt-[-110px] rounded-full p-4 absolute lg:mr-0 -md:mr-[25px] -mr-16">
              <i>
                <img
                  src={egain}
                  alt="icon"
                  className="sm:h-16  h-12 sm:w-16 w-12"
                />
              </i>
            </div>
            <div className="text-white md:ml-2 lg:mr-44 md:mr-[400px] mr-44  md:text-[32px] text-[16px] font-inter font-semibold mb-4 ">
              Microsoft{' '}
            </div>
            <div className="font-inter font-normal leading-[25.8px] text-white sm:text-[14px] text-[12px]  md:text-base mb-4">
              Avante is a software development company that specializes in
              e-commerce, mobile solutions,
            </div>
            <Link to="/services/software">
              <button className="flex sm:mr-0 mr-[100px] items-center text-white text-[12px] ">
                <span className="mr-12">Read more</span>
                <i className="fas fa-chevron-right">
                  <img
                    src={whitearrow}
                    alt="whitearrow"
                    className="sm:w-[100%] w-[50%] sm:h-[100%] h-[50%]"
                  />{' '}
                </i>
              </button>{' '}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards2;
