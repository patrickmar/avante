import { layout } from '../style';
import { Link } from 'react-router-dom';
import united from '../images/united.png';
const United = () => {
  return (
    <section className={`flex md:flex-row flex-col-reverse sm:py-16 py-6`}>
      <div
        className={`lg:mx-24 md:mx-12 lg:px-8 md:px-2 ${layout.sectionInfo}`}
      >
        <h2
          className={`font-inter font-semibold xs:text-[20px] mt-[70px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-4`}
        >
          UNITED CAPITAL PLC <br />
          {/* <span className=" text-primary font-inter font-semibold sm:text-[28px] md:mt-[50px] text-[20px]  sm:leading-[8.8px] leading-[6.8px] w-full mb-2 ">
            LASTVEB up-skilling youth.
          </span> */}
        </h2>
        <div
          className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] lg:max-w-[470px] md:min-w-[300px] mt-5 mb-6`}
        >
          United Capital Plc. is a leading African financial and investment
          services Group providing bespoke value-added services to its clients.
          United Capital play a strategic role in helping African governments
          and citizens (both individual and corporate) achieve their strategic
          objectives through their robust suite of financial and investment
          service offerings. Avante Consulting were engaged to carry out
          Vulnerability Assessment and Penetration testing on UBA Capital Plc’s
          Infoware and InvestNow.ng applications including its organization
          infrastructure so as to strengthen their organizations network and
          protect the sensitive information for their business ventures and
          their employees. The purpose of this engagement was to identify and
          prioritize the security vulnerabilities on the identified systems.
          Once weaknesses in their system were identified, the proposed fixes to
          address critical security risks and recommended timelines were
          documented. Implementation of the recommendations resulted in very
          secure online trading platforms.
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
            id="cta10"
            className={`${layout.sectionImg} lg:mx-24 md:mx-12 lg:px-24 md:px-8 px-12 relative`}
          >
            <img
              src={united}
              alt="united"
              className=" block -mx-4 w-[100%]  h-[70%] "
            />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8">
          <div id="cta20" className="block md:hidden">
            <img src={united} alt="united" />
          </div>
        </div>
      </div>{' '}
    </section>
  );
};

export default United;
