import { layout } from '../style';
import stanbicibtc from '../images/stanbicibtc.png';
import { Link } from 'react-router-dom';
const Stanbic = () => {
  return (
    <section className={`flex md:flex-row flex-col-reverse sm:py-16 py-6`}>
      <div className={`lg:mx-24 md:mx-4 px-8 ${layout.sectionInfo}`}>
        <h2
          className={`font-inter font-semibold xs:text-[20px] mt-[70px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-4  `}
        >
          STANBIC IBTC MANAGEMENT LIMITED (SIAML) <br className="" />
          {/* <span className="text-primary font-inter font-semibold sm:text-[28px] md:mt-[50px] text-[20px]  sm:leading-[8.8px] leading-[6.8px] w-full mb-2  ">
            Customer service application
          </span> */}
        </h2>
        <div
          className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] lg:max-w-[470px] md:min-w-[300px] mt-5 mb-6`}
        >
          Stanbic IBTC Asset Management Limited (SIAML) is the leading
          non-pension asset manager in Nigeria and is committed to being the
          best wealth solutions provider in Nigeria. As part of an internal
          expansion process and in a bid to provide quality customer service
          across their organization, Avante was selected to implement eGain Mail
          management to provide automation and increase efficiency
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
            className={`${layout.sectionImg} lg:mx-24 md:mx-8 lg:px-24 md:px-8 relative`}
          >
            <img
              src={stanbicibtc}
              alt="nsip"
              className=" block -mx-4 w-[450.47px] h-[430.1px]"
            />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8 mt-12">
          <div className="block md:hidden">
            <img src={stanbicibtc} alt="smallnsip" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stanbic;
