import vector1 from '../images/vector1.png';
import whitearrow from '../images/whitearrow.png';
import carbon from '../images/carbon.png';
import vector from '../images/vector.png';
import icon from '../images/icon.png';
import { Link } from 'react-router-dom';

export const Card = () => {
  return (
    <div className="flex flex-col lg:mb-0  mb-2">
      <div className=" flex  md:justify-center justify-center lg:items-end md:items-center items-end lg:ml-[900px] md:ml-[500px] ml-[200px] mb-2 ">
        <h1 className="md:mb-4 font-inter font-semibold md:text-[16px] text-[14px]  ">
          OUR <span className="text-primary ">SERVICES</span>{' '}
        </h1>{' '}
      </div>
      <div className=" flex  md:justify-center  md:items-center items-end lg:ml-[700px] md:ml-[300px] ml-[165px] mb-4">
        <h1 className="md:mb-8 font-inter font-normal md:text-[28px] text-[12px]">
          Your Success, Our Priority{' '}
        </h1>{' '}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="lg:ml-32 md:ml-12">
          <div className=" bg-black flex flex-col items-center md:items-start   justify-center lg:px-8  p-2 py-6  lg:w-[482px] md:w-[600px] w-[320px] lg:h-[293px] md:h-[400px] h-[215px] ">
            <div className="text-white text-4xl md:text-6xl bg-primary lg:ml-[-65px] md:ml-[-40px] ml-[-330px] md:mt-[-110px] rounded-full p-4  absolute">
              <i>
                <img
                  src={vector1}
                  alt="vector"
                  className="md:h-8 h-4 md:w-8 w-4"
                />
              </i>
            </div>
            <div className="text-white md:ml-8 -ml-20 md:text-[32px] text-[16px] font-inter font-normal mb-4">
              Business Consulting{' '}
            </div>
            <div className="text-white font-inter font-normal ml-8 leading-[25.8px font-inter md:text-[14px] text-[10px] md:text-base mb-4">
              Avante Consulting provides implementation solutions for our
              customers from pre-sales assistance ...
            </div>
            <Link to="/services/consulting">
              <button className="flex md:ml-8 ml-[-53px] items-center text-white text-[12px] ">
                <span className="md:mr-8 mr-20 font-inter font-normal">
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

        <div className="lg:mt-24 md:mt-4 lg:ml-8 md:ml-12 ">
          <div className="bg-black flex flex-col items-end lg:items-start md:items-end justify-center px-8 py-6 lg:w-[482px] md:w-[600px] w-[320px] md:h-[400px] lg:h-[293px] h-[215px]">
            <div className="text-white text-4xl md:text-6xl lg:ml-[415px]  ml-[30px] bg-primary md:mt-[-110px] rounded-full p-4 absolute lg:mr-0 -mr-12">
              <i>
                <img
                  src={vector}
                  alt="vector"
                  className="md:h-8 h-4 md:w-8 w-4 "
                />
              </i>
            </div>
            <div className="text-white lg:mr-2 md:mr-[210px] mr-20 font-inter font-normal md:text-[32px] text-[16px] font-inter  mb-4 ">
              Software Development
            </div>
            <div className=" font-inter font-normal text-white leading-[25.8px] md:text-[14px] text-[10px]  md:text-base mb-4">
              Avante is a software development company that specializes in
              e-commerce, mobile solutions, ...
            </div>
            <Link to="/services/software">
              <button className="flex lg:mr-0 md:mr-[350px] mr-[100px] items-center text-white text-[12px] ">
                <span className="mr-12 font-inter font-normal">Read more</span>
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
        <div className="lg:ml-32 md:ml-12">
          <div className=" bg-black flex flex-col items-center md:items-start   justify-center lg:px-8  p-2 py-6  lg:w-[482px] md:w-[600px] w-[320px] lg:h-[293px] md:h-[400px] h-[215px]  ">
            <div className="text-white text-4xl md:text-6xl bg-primary lg:ml-[-65px] md:ml-[-40px] ml-[-330px] md:mt-[-110px] rounded-full p-4  absolute">
              <i>
                <img
                  src={carbon}
                  alt="carbon"
                  className="md:h-8 h-4 md:w-8 w-4"
                />
              </i>
            </div>
            <div className="text-white font-inter font-normal md:ml-8 -ml-20 md:text-[32px] text-[16px] font-inter  mb-4">
              SAS Analytics{' '}
            </div>
            <div className="text-white font-inter font-normal ml-8 font-inter leading-[25.8px] md:text-[14px] text-[10px] md:text-base mb-4">
              Avante is a silver partner of SAS and a solution partner within
              the Customer ...
            </div>
            <Link to="/services/sas">
              <button className="flex md:ml-8 ml-[-40px] items-center text-white text-[12px] ">
                <span className="mr-12">Read more</span>
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
        <div className="lg:mt-24 md:mt-4 lg:ml-8 md:ml-12 ">
          <div className="bg-black flex flex-col items-end lg:items-start md:items-end justify-center px-8 py-6 lg:w-[482px] md:w-[600px] w-[320px] md:h-[400px] lg:h-[293px] h-[215px]">
            <div className="text-white text-4xl md:text-6xl lg:ml-[415px]  ml-[30px] bg-primary md:mt-[-110px] rounded-full p-4 absolute lg:mr-0 -mr-12">
              <i>
                <img
                  src={icon}
                  alt="icon"
                  className=" md:h-8 h-4 md:w-8 w-4 "
                />
              </i>
            </div>
            <div className="text-white lg:mr-2 md:mr-[250px] mr-20 font-inter font-normal md:text-[32px] text-[16px] font-inter  mb-4 ">
              eGain Collaboration{' '}
            </div>
            <div className=" font-inter font-normal text-white leading-[25.8px] md:text-[14px] text-[10px]  md:text-base mb-4">
              We deliver innovative omni-channel customer service and knowledge
              management solutions....{' '}
            </div>
            <Link to="/services/egain/collaboration">
              <button className="flex lg:mr-0 md:mr-[350px] mr-[100px] items-center text-white text-[12px] ">
                <span className="mr-12">Read more</span>
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
      </div>
    </div>
  );
};
export default Card;
