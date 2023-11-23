import React from 'react';
import { layout } from '../style';
import lastveb from '../images/lastveb.png';
import { Link } from 'react-router-dom';

const LastVeb = () => {
  return (
    <section className={`flex md:flex-row flex-col-reverse sm:py-16 py-6`}>
      <div className={`lg:mx-24 px-8 ${layout.sectionInfo}`}>
        <h2
          className={`font-inter font-semibold xs:text-[20px] md:mt-[60px] mt-[70px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-4`}
        >
          LASTVEB <br />
          {/* <span className=" text-primary font-inter font-semibold sm:text-[28px] md:mt-[50px] text-[20px]  sm:leading-[8.8px] leading-[6.8px] w-full mb-2 ">
            LASTVEB up-skilling youth.
          </span> */}
        </h2>
        <div
          className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] lg:max-w-[470px] min-w-[300px] mt-5 mb-6`}
        >
          Lagos State Technical and Vocational Education Board (LASTVEB) aims to
          be National Leader for jobs and self-empowerment by up-skilling and
          integrating young people into the labour market by providing them with
          high quality technical skills. Avante Consulting were able to assist
          LASTVEB with their goals for up-skilling young people by providing
          Software Engineering and Oracle Database Management training.
        </div>
        <Link to="/contacts">
          <button className="underline decoration-2 underline-offset-4 decoration-secondary text-secondary">
            Learn more
          </button>
        </Link>
      </div>
      <div>
        <div className="hidden md:block mt-[200px]">
          <div
            className={`${layout.sectionImg} mr-32 -mt-[50px] lg:px-24 relative`}
          >
            <img
              src={lastveb}
              alt="lastveb"
              className=" block -mx-4 w-[500.47px] h-[400.1px] "
            />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8">
          <div className="block md:hidden">
            <img src={lastveb} alt="smalllastveb" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastVeb;
