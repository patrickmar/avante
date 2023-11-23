import banner from '../images/banner.png';
import home from '../images/home.png';
import smallwhite from '../images/smallwhite.png';
import { Link } from 'react-router-dom';

const Banner = () => (
  <div className="flex flex-col md:flex-row h-[721px]   ">
    <div className="md:w-1/2 lg:h-[721px] md:h-[500px] bg-primary flex flex-col justify-center items-center sm:items-start p-8 hidden md:block">
      <h2 className="font-inter font-semibold lg:text-[40px] md:text-[20px] text-white  mb-4 lg:ml-[100px] md:ml-[20px]  mt-[100px] w-[546px]">
        Driving Success Through <br />
        Innovative Solutions{' '}
      </h2>
      <p className=" font-inter text-justify text-[16px] leading-[25.8px] text-white mb-6 lg:ml-[100px] md:ml-[20px] lg:w-[520px] md:w-[300px]">
        At Avante Consulting Solutions, we are dedicated to driving success for
        your business. With our innovative solutions and industry expertise, we
        empower organizations to thrive in today's dynamic market. Partner with
        us and unlock your business's full potential.
      </p>
      <Link to="/contacts">
        <button className="bg-secondary font-inter text-white  py-2 px-4 rounded lg:ml-[100px] md:ml-[20px] w-[148px] h-[46.36px]">
          Get in Touch{' '}
        </button>
      </Link>{' '}
    </div>

    <div className="lg:w-1/2  h-[721px] bg-cover bg-center hidden md:block ">
      <img
        src={banner}
        alt="banner"
        className="w-full lg:h-[721px] md:h-[500px] "
      />
    </div>
    <div className=" block md:hidden flex-col flex justify-center item-center bg-background">
      <img src={home} alt="banner4" />
      <div className="flex-start bg-background mt-12">
        <h1 className="font-inter font-semibold text-[16px] underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px] ml-4 ">
          Avante-cs
        </h1>
        <p className="font-inter font-normal text-[12px] mt-12 max-w-[300px] ml-4">
          At Avante Consulting Solutions, we are dedicated to driving success
          for your business. With our innovative solutions and industry
          expertise, we empower organizations to thrive in today's dynamic
          market. Partner with us and unlock your business's full potential.
        </p>
        <Link to="/contacts">
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
        </Link>
      </div>
    </div>
  </div>
);

export default Banner;
