import { layout } from '../style';
import values from '../images/values.png';

const Values = () => (
  <section className="flex md:flex-row flex-col sm:py-16 py-6">
    <div className={`p-4 relative ${layout.sectionImgReverse}`}>
      <img
        src={values}
        alt="values"
        className="block  md:w-[559px] w-[371.34px] md:h-[478px] h-[238px] "
      />
    </div>
    <div className={layout.sectionInfo}>
      <h2
        className={`text-black font-inter font-semibold xs:text-[16px] md:mt-[-200px] mt-[10px]  text-[16px]  xs:leading-[30.8px] leading-[66.8px] w-full md:mb-0 mb-0 md:p-0 p-4`}
      >
        OUR <span className="text-primary">VALUES</span>{' '}
      </h2>
      <h2 className="text-primary font-Inter font-semibold xs:text-[28px] md:mt-[0px] mt-[-60px] text-[20px]  xs:leading-[60.8px] leading-[66.8px] w-full md:p-0 p-4">
        Core Guiding Principles{' '}
      </h2>

      <div
        className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] max-w-[470px] md:mt-0 mt-0 md:mb-2 mb-0 md:p-0 p-4`}
      >
        Our values of honesty, integrity, commitment and delivery are important
        to us. As our business continues to grow we work hard to keep these
        values at the core of our operation.<p className="mb-2"></p> We are a
        company that values individuals and teamwork. We continually strive as a
        firm to make a positive and lasting impact.
      </div>
    </div>
  </section>
);

export default Values;
