import { layout } from '../style';
import offshore1 from '../images/offshore1.png';
import { Link } from 'react-router-dom';

const Offshore = () => {
  return (
    <section className={`mt-[-150px] flex md:flex-row flex-col sm:py-16 py-6`}>
      <div>
        <div className="hidden md:block">
          <div
            id="cta9"
            className={`relative lg:mr-24 md:mr-8  ${layout.sectionImgReverse1} `}
          >
            <img
              src={offshore1}
              alt="offshore1"
              className="block h-[428.8px]"
            />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8 mt-4">
          <div id="cta19" className="block md:hidden">
            <img
              src={offshore1}
              alt="offshore1"
              className="w-[488.47px] h-[400.1px]"
            />
          </div>
        </div>
      </div>
      <div className={`${layout.sectionInfo} md:ml-56 px-8`}>
        <h2
          className={`font-inter font-semibold xs:text-[16px] md:mt-[150px] mt-[-100px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-2 `}
        >
          4H OFFSHORE <br />
          {/* <span className="text-primary font-inter font-semibold sm:text-[28px] md:mt-[50px] text-[20px]  sm:leading-[8.8px] leading-[6.8px] w-full mb-2">
            Campaign Management Automation
          </span> */}
        </h2>
        <p
          className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] lg:max-w-[470px] md:min-w-[310px] mt-5 mb-6`}
        >
          4H Offshore provides optimal, timely, and quality goods and services
          in a safe and environmentally friendly manner to the Oil and Gas,
          power, and petrochemical industries. The mission at 4H Offshore is to
          contribute to the development of the Nigerian Oil and Gas Industry
          with a view to enhancing the development of local skill and expertise
          within the industry in Nigeria while ensuring customer satisfaction
          and continual improvement on our processes and services. Avante was
          selected to build a website that helps 4H deliver it’s message to
          clients.
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

export default Offshore;
