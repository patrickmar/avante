import { layout } from '../style';
import tanjarin from '../images/tanjarin.png';
import { Link } from 'react-router-dom';
const Tanjarin = () => {
  return (
    <section className={`mt-[-150px] flex md:flex-row flex-col sm:py-16 py-6`}>
      <div>
        <div className="hidden md:block">
          <div
            id="cta9"
            className={`relative md:mr-24  ${layout.sectionImgReverse1} `}
          >
            <img src={tanjarin} alt="tanjarin" className="block h-[428.8px]" />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8">
          <div id="cta19" className="block md:hidden">
            <img src={tanjarin} alt="tanjarin" />
          </div>
        </div>
      </div>
      <div className={`${layout.sectionInfo} lg:ml-56 md:ml-12 px-8`}>
        <h2
          className={`font-inter font-semibold xs:text-[16px] md:mt-[150px] mt-[-100px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-2  `}
        >
          TANGERINE
          <br />
          {/* <span className="text-primary font-Inter font-semibold sm:text-[28px] md:mt-[50px] text-[20px]  sm:leading-[8.8px] leading-[6.8px] w-full mb-2  ">
            LASTVEB up-skilling youth.
          </span> */}
        </h2>
        <p
          className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] lg:max-w-[470px] md:min-w-[310px] mt-5 mb-6`}
        >
          Tanjarin.com is a news aggregation platform that pride itself on
          finding the most pertinent and important stories, videos, and every
          other kind of media. Concert tickets are also sold on the platform
          under the umbrella of their parent company Flytime entertainment.
          Avante was selected to build the state of the art entertainment
          platform and to be their technical support partner as they continue to
          grow into one of the biggest entertainment platforms in Nigeria.
        </p>
        <Link to="/contacts">
          <button className="underline decoration-2 underline-offset-4 decoration-secondary text-secondary">
            Learn more
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Tanjarin;
