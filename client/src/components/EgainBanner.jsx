import styles, { layout } from '../style';
import egainbanner from '../images/egainbanner.png';
import smallebanner from '../images/smallebanner.png';
import { Link } from 'react-router-dom';
const EgainBanner = () => {
  return (
    <div>
      <div className="hidden md:block">
        <div id="egain" className={` ${layout.sectionReverse}`}>
          <div className={`${layout.sectionImgReverse}  relative`}>
            <img src={egainbanner} alt="egainbanner" className="ml-44" />
          </div>
          <div className={`${layout.sectionInfo} ml-32`}>
            <h2 className={`${styles.heading3} mb-4 `}>eGain Collaboration</h2>
            <div
              className={`font-inter font-normal text-dimWhite text-[16px] leading-[25.8px] max-w-[470px] md:max-w-[300px] sm:p-auto mt-5 mb-6`}
            >
              <p className="text-dark text-justify">
                Our partnership with eGain strengthens our commitment to the
                industry's most innovative omni-channel customer service and
                knowledge management solutions. Avante is the number one eGain
                partner in Nigeria based on successful implementations in the
                finance and telecoms sectors. Some of eGain's features include:
              </p>
            </div>
            <Link to="/contacts">
              <button className="bg-secondary text-white flex flex-start font-normal py-4 px-24 rounded">
                Contact us{' '}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" block md:hidden flex-col flex justify-center item-center bg-background mb-12">
        <img src={smallebanner} alt="smallebanner" />
        <div className="flex-start bg-background mt-12">
          <h1 className="font-inter font-semibold text-[16px] underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px] ml-4 ">
            EGAIN
          </h1>
          <h1 className=" font-inter font-semibold flex ml-[70px] text-primary mt-[-23px]">
            COLLABORATION
          </h1>
          <p className="font-inter font-normal text-justify text-[12px] mt-12 ml-4 mr-4 leading-[25.8px]">
            Our partnership with eGain strengthens our commitment to the
            industry's most innovative omni-channel customer service and
            knowledge management solutions. Avante is the number one eGain
            partner in Nigeria based on successful implementations in the
            finance and telecoms sectors. Some of eGain's features include:
          </p>
          <Link to="/contacts">
            <button className="flex  items-center text-white text-[14px] ml-4 mt-8 h-[46px] w-[247px] rounded-lg  bg-secondary ">
              <span className="mx-[60px] text-[14px] font-inter font-normal">
                Contact us{' '}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EgainBanner;
