import access2 from '../images/access2.png';
import { layout } from '../style';
import { Link } from 'react-router-dom';
const Access = () => {
  return (
    <section className={` mt-[-150px] flex md:flex-row flex-col sm:py-16 py-6`}>
      <div>
        <div className="hidden md:block">
          <div
            id="cta9"
            className={`relative lg:mr-24 md:mr-12  ${layout.sectionImgReverse1} `}
          >
            <img src={access2} alt="access2" className="block h-[428.8px]" />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8">
          <div id="cta19" className="block md:hidden">
            <img src={access2} alt="access2" />
          </div>
        </div>
      </div>
      <div className={`${layout.sectionInfo} lg:ml-56 md:ml-32 px-8`}>
        <h2
          className={`font-inter font-semibold xs:text-[16px] md:mt-[150px] mt-[-100px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-2   `}
        >
          ACCESS BANK PLC <br />
          {/* <span className="text-primary font-inter font-semibold sm:text-[28px] md:mt-[50px] text-[20px]  sm:leading-[8.8px] leading-[6.8px] w-full mb-2   ">
            Water transport infrastructure
          </span> */}
        </h2>
        <p
          className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] lg:max-w-[470px] md:min-w-[310px] mt-5 mb-6`}
        >
          Access Bank is one of Nigeria’s leading banks with a very strong
          customer focus on customer service. They were looking for a true
          multichannel solution to support in executing their Digital strategy.
          2 years after implementation, analysis has shown that Chat and Mail
          interactions have increased by 400% and they have not increased
          staffing. This has led to huge cost savings through increased
          efficiency. They now use eGain to support both web and mobile
          including SMS. There has been a huge focus on building a knowledge
          management culture to support agents and customers this has been the
          main efficiency and quality drivers. Avante Consulting Solutions in
          partnership with eGain has driven and managed the digital strategy and
          transformation. We have seen a rise in first contact resolution, huge
          increase in customer adoption of digital communication as the
          preferred means of contact and better customer satisfaction numbers.
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

export default Access;
