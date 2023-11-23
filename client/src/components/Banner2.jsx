import banner2 from '../images/banner2.png';
import b5 from '../images/b5.png';
import smallwhite from '../images/smallwhite.png';
import { Link } from 'react-router-dom';

const Banner2 = () => (
  <div
    id="ctas4"
    className="md:h-[781px] bg-primary  flex flex-row items-center justify-between "
  >
    <div className="flex flex-col  justify-center p-6 hidden md:block mt-[-200px] ">
      <h2 className="font-inter font-semibold lg:text-[50px] md:text-[30px] text-white  mb-4 lg:ml-[100px] md:ml-[20px] mt-[100px]">
        Experience. Expertise. <br />
        Exceptional Results. Avante{' '}
      </h2>
      <p className=" font-inter text-justify text-[16px] text-white mb-6 lg:ml-[100px] md:ml-[20px] lg:w-[520px] md:w-[350px]">
        At Avante Consulting, we bring a wealth of experience and expertise to
        every project. With our dedicated team, we deliver exceptional results
        that exceed client expectations. Partner with us for transformative
        solutions and achieve lasting success.
      </p>{' '}
      <Link to="/contacts">
        <button className="bg-secondary font-inter text-white  py-2 px-4 rounded lg:ml-[100px] md:ml-[20px] w-[148px] h-[46.36px]">
          Get in Touch{' '}
        </button>
      </Link>
    </div>
    <div className="hidden md:block lg:mr-24 md:mr-4">
      {' '}
      <img
        src={banner2}
        alt="banner"
        className="lg:h-[564.46px] md:h-[400px] h-[411.7px] lg:w-[557.88px] md:w-[450px]  "
      />
    </div>
    <div className=" block md:hidden flex-col flex justify-center item-center bg-background">
      <img src={b5} alt="b5" />
      <div className="flex-start bg-background mt-12">
        <h1 className="font-inter font-semibold text-[16px] underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px] ml-4 ">
          Avante-cs
        </h1>
        <p className="font-inter font-normal text-[12px] mt-12 ml-4 mr-4 leading-[25.8px] ">
          At Avante Consulting, we bring a wealth of experience and expertise to
          every project. With our dedicated team, we deliver exceptional results
          that exceed client expectations. Partner with us for transformative
          solutions and achieve lasting success.
        </p>
        <button className="flex  items-center text-white text-[12px] ml-4 mt-8 h-[45px] w-[165px] rounded-lg  bg-secondary ">
          <span className="mx-8 text-[12px] font-inter font-normal">
            Get in Touch
          </span>
          <i className="fas fa-chevron-right">
            <img
              src={smallwhite}
              alt="smallwhite"
              className="sm:w-[100%] w-[50%] sm:h-[100%] h-[50%]"
            />{' '}
          </i>
        </button>
      </div>
    </div>
  </div>
);

export default Banner2;
