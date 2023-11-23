import { layout } from '../style';
import akinsqured from '../images/akinsqured.png';
import { Link } from 'react-router-dom';

const AkinSquared = () => {
  return (
    <section className={`flex md:flex-row flex-col-reverse sm:py-16 py-6`}>
      <div className={`lg:mx-24 md:mx-4 px-8 ${layout.sectionInfo}`}>
        <h2
          className={`font-inter font-semibold xs:text-[20px] mt-[70px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-4`}
        >
          AKIN SQUARED <br />
          {/* <span className="text-primary font-inter font-semibold sm:text-[28px] md:mt-[50px] text-[20px]  sm:leading-[8.8px] leading-[6.8px] w-full mb-2 ">
            Water transport infrastructure
          </span> */}
        </h2>
        <div
          className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] lg:max-w-[470px] md:min-w-[300px] mt-5 mb-6`}
        >
          A production outfit that does both Photography and film. They have
          worked with some of the big cooperate bodies and individuals around
          Nigeria and abroad. To create the awareness for Akin Squared
          Productions, Avante developed a website which would be visually
          appealing to art critics, art lovers, players in the entertainment
          industry and the general public alike.{' '}
        </div>
        <Link to="/contacts">
          <button className="underline decoration-2 underline-offset-4 decoration-secondary text-secondary">
            Learn more
          </button>
        </Link>
      </div>
      <div>
        <div className="hidden md:block">
          <div
            id="cta10"
            className={`${layout.sectionImg} lg:mx-24 md:mx-12 mx-24 lg:px-24 md:px-12 px-24 relative`}
          >
            <img
              src={akinsqured}
              alt="akinsqured"
              className=" block -mx-4 w-[488.47px] w-[557.58] h-[400.1px] "
            />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8">
          <div id="cta20" className="block md:hidden">
            <img src={akinsqured} alt="akinsqured" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AkinSquared;
