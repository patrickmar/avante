import { layout } from '../style';
import nsip from '../images/nsip.png';
import { Link } from 'react-router-dom';
const NationalInvestiment = () => {
  return (
    <section className={`flex md:flex-row flex-col-reverse lg:py-16 py-6`}>
      <div
        className={`lg:mx-24 md:mx-4 lg:px-8 md:px-4 px-8 ${layout.sectionInfo}`}
      >
        <h2
          className={`font-inter font-semibold xs:text-[20px] md:mt-[60px] mt-[70px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-4 `}
        >
          THE NATIONAL SOCIAL INVESTMENT PROGRAMMS{' '}
          <br className="sm:block hidden" />
          {/* <span className=" text-primary font-inter font-semibold sm:text-[28px] md:mt-[50px] text-[20px]  sm:leading-[8.8px] leading-[6.8px] w-full mb-2  ">
            Customer service application
          </span> */}
        </h2>
        <div
          className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] lg:max-w-[470px] md:min-w-[300px] mt-5 mb-6`}
        >
          The National Social Investment Programmes were created to overcome the
          failings of the past and to enshrine the values and vision of the
          current Administration for graduating its citizens from poverty
          through capacity building, investment and direct support. The NSIP
          sought an application that would help them provide excellent customer
          care for their beneficiaries. Avante was chosen to deploy eGain Mail,
          eGain Chat, eGain CallTrack and eGain Knowledge for the NSIP
          programmes like Government Enterprise & Empowerment Programme (GEEP),
          N-POWER, Homegrown School Feeding Programme (HGSF) and Conditional
          Cash transfer Programme.
        </div>
        <Link to="/contacts">
          <button className="underline decoration-2 underline-offset-4 decoration-secondary text-secondary">
            Learn more
          </button>
        </Link>
      </div>
      <div>
        <div className="hidden md:block mt-[200px]">
          <div
            id="nsip"
            className={`${layout.sectionImg} mt-[-200px] mr-20px  mg:px-24 md:px-12 relative`}
          >
            <img
              src={nsip}
              alt="nsip"
              className=" block mx-8  w-[400.47px]  h-[420px] -mt-[80px]  "
            />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8">
          <div className="block md:hidden">
            <img src={nsip} alt="smallnsip" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NationalInvestiment;
