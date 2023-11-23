import { layout } from '../style';
import sme1 from '../images/sme1.png';
import sme2 from '../images/sme2.png';
import smallwhite from '../images/smallwhite.png';
import { Link } from 'react-router-dom';
const GoodsBanner = () => {
  return (
    <div>
      <div className="hidden md:block">
        <div id="financial" className={`mb-32  h-[721px] ${layout.section}`}>
          <div className={`ml-24 ${layout.sectionInfo}`}>
            <h2
              className={`font-inter font-semibold xs:text-[60px] mt-[20px] text-[40px] text-black xs:leading-[60.8px] leading-[66.8px] w-full mb-4 `}
            >
              Consumer Goods{' '}
            </h2>
            <div
              className={`font-inter text-justify font-normal text-black2 text-[16px] leading-[25.8px] max-w-[470px] mt-5 mb-6`}
            >
              Avante Consulting provides tailored consulting services for
              consumer goods companies seeking to thrive in the ever-changing
              market landscape. Our industry expertise and innovative strategies
              help optimize supply chain operations, enhance brand positioning,
              drive customer engagement, and capitalize on emerging trends.
              Partner with us to gain a competitive edge and achieve sustainable
              growth in the dynamic consumer goods industry.
            </div>
            <Link to="/contacts">
              {' '}
              <button className="flex  items-center text-white text-[12px] -ml-2 mt-8 h-[45px] w-[165px] rounded-lg  bg-secondary ">
                <span className="mx-8 text-[12px] font-inter font-normal">
                  Learn more
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
          <div className={`${layout.sectionImg}     relative`}>
            <img
              src={sme1}
              alt="consumer"
              className=" mt-[20px] w-[700.19px] h-[518.48px]   "
            />
          </div>
        </div>
      </div>
      <div className="block">
        <div className="block md:hidden">
          <div className="  flex-col flex justify-center item-center bg-background mb-12">
            <img src={sme2} alt="consumer" className="w-[] h-[246.65px]" />
            <div className="flex-start bg-background mt-12 ">
              <h1 className="font-inter font-semibold text-[16px] underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px] ml-4 ">
                Consumer Goods{' '}
              </h1>

              <p className="font-inter font-normal text-[12px] mt-12 ml-4 mr-4 leading-[25.8px]">
                Avante Consulting provides tailored consulting services for
                consumer goods companies seeking to thrive in the ever-changing
                market landscape. Our industry expertise and innovative
                strategies help optimize supply chain operations, enhance brand
                positioning, drive customer engagement, and capitalize on
                emerging trends. Partner with us to gain a competitive edge and
                achieve sustainable growth in the dynamic
                consumer goods industry.
              </p>
              <button className="flex  items-center text-white text-[12px] ml-4 mt-8 h-[45px] w-[165px] rounded-lg  bg-secondary ">
                <span className="mx-8 text-[12px] font-inter font-normal">
                  Learn more
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
      </div>{' '}
    </div>
  );
};

export default GoodsBanner;
