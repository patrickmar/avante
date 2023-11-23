import { layout } from '../style';
import diamond2 from '../images/diamond2.png';
import { Link } from 'react-router-dom';
const Diamond = () => {
  return (
    <section
      className={`  mt-[-150px] flex md:flex-row flex-col sm:py-16 py-6`}
    >
      <div>
        <div className="hidden md:block lg:w-[500px]">
          <div
            // id="cta9"
            className={` md:mr-12  lg:flex-2.5  flex  justify-center items-center  mr-0 md:mt-0  relative `}
          >
            <img
              src={diamond2}
              alt="diamond"
              className="mt-44 ml-32 h-[250px] w-[250px]"
            />
          </div>
        </div>
        <div className="px-8 block md:hidden mt-32 lg:mx-8 md:mx-16 mx-8">
          <div id="" className="block md:hidden">
            <img src={diamond2} alt="diamond" className="block mb-32" />
          </div>
        </div>
      </div>
      <div
        className={` ${layout.sectionInfo} lg:ml-72 md:ml-24 lg:px-8 md:px-12 px-8`}
      >
        <h2
          className={`font-inter font-semibold xs:text-[16px] md:mt-[150px] mt-[-100px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-2   `}
        >
          DIAMOND BANK <br />
          {/* <span className="text-primary font-inter font-semibold sm:text-[28px] md:mt-[50px] text-[20px]  sm:leading-[8.8px] leading-[6.8px] w-full mb-2   ">
            Water transport infrastructure
          </span> */}
        </h2>
        <p
          className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] lg:max-w-[470px] md:min-w-[300px] mt-5 mb-6`}
        >
          Diamond bank is one of the leading banks in Nigeria. They were looking
          to revamp the entire digital landscape from web to mobile. eGain gives
          them a 360degree view of customer interactions and provided a platform
          that enables the expansion of the digital strategy. This makes it
          easier for Diamond bank to innovate and deliver value without
          incurring the large costs usually associated with such projects. The
          Avante methodology ensured the project was delivered in only a couple
          of months on time and within budget.
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

export default Diamond;
