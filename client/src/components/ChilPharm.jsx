import { layout } from '../style';
import pharm from '../images/pharm.png';
import { Link } from 'react-router-dom';

const ChilPharm = () => {
  return (
    <section className={`flex md:flex-row flex-col-reverse sm:py-16 py-6`}>
      <div className={`lg:mx-24 md:mx-12 px-8 ${layout.sectionInfo}`}>
        <h2
          className={`font-inter font-semibold xs:text-[20px] mt-[70px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-4`}
        >
          CHILPHARM PHARMACY
          <br />
          {/* <span className=" text-primary font-inter font-semibold sm:text-[28px] md:mt-[50px] text-[20px]  sm:leading-[8.8px] leading-[6.8px] w-full mb-2">
            Professional training assistance
          </span> */}
        </h2>
        <div
          className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] lg:max-w-[470px] md:min-w-[300px] mt-5 mb-6`}
        >
          Chilpharm Pharmacy is a modern pharmacy store catering for the entire
          needs of the community by providing professional pharmaceutical
          services to customers and ensuring that all products are sourced from
          reliable wholesalers. Avante was selected to create an e-commerce
          website where customers are able to order and pay online and receive
          delivery for their products.
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
            className={`${layout.sectionImg} lg:mx-24 md:mx-32 lg:px-24 md:px-12 px-24 relative`}
          >
            <img
              src={pharm}
              alt="pharm"
              className=" block -mx-4 w-[480.47px] h-[400.1px] "
            />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8">
          <div id="cta20" className="block md:hidden">
            <img src={pharm} alt="pharm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChilPharm;
