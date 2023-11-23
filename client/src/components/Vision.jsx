import { layout } from '../style';
import vision from '../images/vision.png';

const Vision = () => (
  <section className="flex md:flex-row flex-col md:py-16 py-6 lg:mt-[100px] md:mt-[80px]">
    <div className={` relative ${layout.sectionImgReverse}`}>
      <img
        src={vision}
        alt="codeit"
        className="block  lg:w-[559px] md:[559px] w-[371.34px] lg:h-[478px] md:h-[380px] h-[238px] lg:mt-0 -md:mt-4"
      />
    </div>
    <div className={layout.sectionInfo}>
      <h2
        className={`text-black font-inter font-semibold xs:text-[16px] md:mt-[-200px] mt-[10px]  text-[16px]  xs:leading-[30.8px] leading-[66.8px] w-full md:mb-0 mb-0 md:p-0 p-4`}
      >
        OUR <span className="text-primary">VISION</span> <br className="" />
        <span className="text-primary xs:text-[28px] mt-[10px]">
          Envisioning Tomorrow's Possibilities.{' '}
        </span>
      </h2>
      <div
        className={`font-inter font-normal text-background md:text-[14px] text-[12px] leading-[25.8px]  mt-5 mb-6 `}
      >
        <ul className="text-justify">
          <li className="text-dark list-disc ml-5 text-justify">
            Our vision is to be the most respected and trusted IT{' '}
            <p className="mb-2"></p> professional services firm recognized by
            our clients for<p className="mb-2"></p> delivering excellence.
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Vision;
