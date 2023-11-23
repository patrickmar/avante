import { layout } from '../style';
import deutsche from '../images/deutsche.png';
import { Link } from 'react-router-dom';

const Deutsche = () => {
  return (
    <section className={`flex md:flex-row flex-col-reverse sm:py-16 py-6`}>
      <div className={`lg:mx-24 md:mx-12 px-8 ${layout.sectionInfo}`}>
        <h2
          className={`font-inter font-semibold xs:text-[20px] mt-[70px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-4 `}
        >
          Deutsche Telekom AG
          <br />
          {/* <span className="text-primary font-inter font-semibold sm:text-[28px] md:mt-[50px] text-[20px]  sm:leading-[8.8px] leading-[6.8px] w-full mb-2">
            Professional training assistance
          </span> */}
        </h2>
        <div
          className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] lg:max-w-[470px] md:min-w-[300px] mt-5 mb-6`}
        >
          Deutsche Telekom AG is a German telecommunications company
          headquartered in Bonn. Deutsche Telekom AG offers services such as
          Fixed Telephony, Mobile Telephony, Broadband Internet, IT Services,
          Networking Solutions and Digital television. T-Online merged with
          parent Deutsche Telekom in 2006. It provides around 40 million
          narrowband lines, over 9 million broadband lines and has 14 million
          registered Internet customers. Avante Consulting carried out Siebel
          CRM data migration for Deutsche Telekom. The project involved the
          migration of 60 million customer records and 3 billion transactional
          records.
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
            id=""
            className={`${layout.sectionImg} lg:mx-24 md:mx-8 lg:px-24 md:px-4 px-24 relative`}
          >
            <img
              src={deutsche}
              alt="deutsche"
              className=" block -mx-4 w-[500px]  h-[450px] "
            />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8">
          <div id="" className="block md:hidden">
            <img src={deutsche} alt="deutsche" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deutsche;
