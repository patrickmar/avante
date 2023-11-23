import styles, { layout } from '../style';
import webimage1 from '../images/webimage1.png';
import smallweb from '../images/smallweb.png';
import smallwhite from '../images/smallwhite.png';
import { Link } from 'react-router-dom';
const DevBanner = () => {
  return (
    <div className="md:mb-56">
      <div className="hidden md:block">
        <div
          className={`bg-gradient-to-r from-blue-100 to-ffffff ${layout.sectionReverse}`}
        >
          <div className={`${layout.sectionImgReverse} relative `}>
            <img
              src={webimage1}
              alt="webimage"
              className="block w-[561px] h-[567px] lg:ml-44 md:ml-24 ml-44"
            />
          </div>
          <div className={`ml-12 ${layout.sectionInfo}`}>
            <h2 className={`${styles.heading3} mb-4 `}>Web Development </h2>
            <div
              className={`${styles.paragraph} lg:max-w-[470px] md:max-w-[300px] md:p-auto mt-5 mb-6 leading-[25.8px]`}
            >
              <p className="text-dark text-justify font-inter font-normal text-[14px] leading-[25.8px]">
                Welcome to our Web Development services, where we bring your
                digital vision to life. Our skilled team of developers utilizes
                a range of programming languages and frameworks to create
                stunning, user-friendly, and responsive websites that enhance
                your online presence and drive business growth. Trust us for
                exceptional web development solutions tailored to your unique
                needs.
              </p>
            </div>
            <Link to="/contacts">
              <button className="flex  items-center text-white text-[12px] -ml-2 mt-8 h-[45px] w-[207px] rounded-lg  bg-secondary ">
                <span className="mx-8 text-[12px] font-inter font-normal">
                  Request a demo
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
        </div>
      </div>
      <div className=" block md:hidden flex-col flex justify-center item-center bg-background mb-12">
        <img src={smallweb} alt="smallweb" />
        <div className="flex-start bg-background mt-12">
          <h1 className="font-inter font-semibold text-[16px] underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px] ml-4 ">
            WEB
          </h1>
          <h1 className=" font-inter font-semibold flex ml-[70px] text-primary mt-[-23px]">
            DEVELOPMENT
          </h1>
          <p className="font-inter text-justify font-normal text-[12px] mt-12 ml-4 mr-4 leading-[30.8px]">
            View our projects below to see a lists of our clients and how we
            have helped them to take their business to the next level.
          </p>
          <Link to="/contacts">
            <button className="flex  items-center text-white text-[12px] ml-4 mt-8 h-[46px] w-[247px] rounded-lg  bg-secondary ">
              <span className="mx-14 text-[12px] font-inter font-normal">
                Request a demo
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
      </div>
    </div>
  );
};

export default DevBanner;
