import { layout } from '../style';
import contraco from '../images/contraco.png';
import { Link } from 'react-router-dom';

const Contraco = () => {
  return (
    <section className={`flex md:flex-row flex-col-reverse sm:py-16 py-6`}>
      <div className={`lg:mx-24 md:mx-4 px-8 ${layout.sectionInfo}`}>
        <h2
          className={`font-inter font-semibold xs:text-[20px] mt-[70px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-4`}
        >
          CONTRACO LIMITED <br />
          {/* <span className="text-primary font-inter font-semibold sm:text-[28px] md:mt-[50px] text-[20px]  sm:leading-[8.8px] leading-[6.8px] w-full mb-2">
            Water transport infrastructure
          </span> */}
        </h2>
        <div
          className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] lg:max-w-[470px] md:min-w-[310px] mt-5 mb-6`}
        >
          Contraco Limited is a reputable and multifaceted Oil and Gas,
          shipping, and Logistics Company incorporated in 1986 with
          certification of incorporation number RC 53587. Contraco Limited
          provides a complete range of engineering design services to the Oil
          and Gas sector. Avante developed a website to help Contraco connect
          with clients and showcase their projects
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
            className={`${layout.sectionImg} lg:mx-24 md:mx-12 lg:px-24 md:px-4 relative`}
          >
            <img
              src={contraco}
              alt="contraco"
              className=" block -mx-4 w-[488.47px] h-[400.1px] "
            />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8">
          <div id="cta20" className="block md:hidden">
            <img src={contraco} alt="contraco" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contraco;
