import { layout } from "../style";
import database1 from "../images/database1.png";
import smalloracle from "../images/smalloracle.png";
import smallwhite from "../images/smallwhite.png";
import { Link } from "react-router-dom";
const OracleBanner = () => {
  return (
    <div>
      <div className="hidden md:block">
        <div id="oracle" className={`mb-12  h-[721px] ${layout.section}`}>
          <div className={`mx-32 ${layout.sectionInfo}`}>
            <h2
              className={`font-Inter font-semibold xs:text-[40px] mt-[20px] text-[40px] text-black xs:leading-[60.8px] leading-[66.8px] w-full mb-4 `}
            >
              Oracle Database
            </h2>
            <div
              className={`font-Inter font-normal text-black2 text-[16px] leading-[25.8px] max-w-[470px] mt-5 mb-6`}
            >
              Welcome to our Oracle Database services, where we offer
              comprehensive solutions for managing and optimizing your data
              infrastructure. Our expert team ensures high-performance,
              scalability, and security, enabling you to unlock the full
              potential of your data assets. Trust us for reliable Oracle
              Database solutions.
            </div>
            <Link to="/contacts">
              {" "}
              <button className="flex  items-center text-white text-[12px] -ml-2 mt-8 h-[45px] w-[165px] rounded-lg  bg-secondary ">
                <span className="mx-8 text-[12px] font-inter font-normal">
                  Get started{" "}
                </span>
                <i className="fas fa-chevron-right">
                  <img
                    src={smallwhite}
                    alt="smallwhite"
                    className="sm:w-[100%] w-[50%] sm:h-[100%] h-[50%]"
                  />{" "}
                </i>
              </button>
            </Link>
          </div>
          <div className={`${layout.sectionImg} sm:ml-24 sm:px-24   relative`}>
            <img
              src={database1}
              alt="database"
              className=" mt-[20px] w-[650px] h-[518.48px] mr-56  "
            />
          </div>
        </div>
      </div>
      <div className=" block md:hidden flex-col flex justify-center item-center bg-background mb-12">
        <img src={smalloracle} alt="smalloracle" />
        <div className="flex-start bg-background mt-12">
          <h1 className="font-inter font-semibold text-[16px] underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px] ml-4 ">
            ORACLE{" "}
          </h1>
          <h1 className=" font-inter font-semibold flex ml-[90px] text-primary mt-[-23px]">
            DATABASE{" "}
          </h1>
          <p className="font-inter font-normal text-[12px] mt-12 ml-4 mr-4 leading-[30.8px]">
            Welcome to our Oracle Database services, where we offer
            comprehensive solutions for managing and optimizing your data
            infrastructure. Our expert team ensures high-performance,
            scalability, and security, enabling you to unlock the full potential
            of your data assets. Trust us for reliable Oracle Database
            solutions.
          </p>
          <Link to="/contacts">
            <button className="flex  items-center text-white text-[12px] ml-4 mt-8 h-[45px] w-[165px] rounded-lg  bg-secondary ">
              <span className="mx-8 text-[12px] font-inter font-normal">
                Read more
              </span>
              <i className="fas fa-chevron-right">
                <img
                  src={smallwhite}
                  alt="smallwhite"
                  className="sm:w-[100%] w-[50%] sm:h-[100%] h-[50%]"
                />{" "}
              </i>
            </button>
          </Link>
        </div>
      </div>{" "}
    </div>
  );
};

export default OracleBanner;
