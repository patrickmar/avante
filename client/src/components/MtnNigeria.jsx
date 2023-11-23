import { layout } from '../style';
import mtn2 from '../images/mtn2.png';
import { Link } from 'react-router-dom';
const MtnNigeria = () => {
  return (
    <section className={`flex md:flex-row flex-col-reverse sm:py-16 py-6 `}>
      <div className={`lg:mx-24 md:mx-2 px-8 ${layout.sectionInfo}`}>
        <h2
          className={`font-inter font-semibold xs:text-[20px] mt-[70px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-4`}
        >
          MTN NIGERIA <br />
          {/* <span className="text-primary font-inter font-semibold sm:text-[28px] md:mt-[50px] text-[20px]  sm:leading-[8.8px] leading-[6.8px] w-full mb-2">
            Water transport infrastructure
          </span> */}
        </h2>
        <div
          className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] lg:max-w-[470px] md:min-w-[300px] mt-5 mb-6`}
        >
          MTN Nigeria is the biggest telecoms company in Nigeria supporting over
          58 million subscribers. Consequently the eGain multichannel project is
          the biggest Avante has undertaken providing end to end customer
          interaction capabilities covering all touch points and spanning 2
          departments. This Knowledge Management and omni-channel project was
          the first of its kind at MTN. Joining up separate channels like social
          & email then launching mobile and web chat for the first time in the
          MTN environment. Another first was a fully functional Knowledge base
          with federated search and diagnostics to support both agents
          internally and web self-service for customer. The customer
          satisfaction stats from post chat surveys carried out have been very
          high. There has also been a natural adoption of channels by chat by
          customers. This shows that customers want to interact with customers
          in multiple ways with the lowest effort possible.
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
            className={`${layout.sectionImg} lg:mx-24 -md:mx-12 lg:px-24 md:px-2 relative`}
          >
            <img
              src={mtn2}
              alt="mtn2"
              className=" block -mx-4 w-[488.47px] h-[545.1px] "
            />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8">
          <div id="" className="block md:hidden">
            <img src={mtn2} alt="mtn2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MtnNigeria;
