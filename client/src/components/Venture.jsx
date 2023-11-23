import { Link } from 'react-router-dom';
import { layout } from '../style';
import venture from '../images/venture.png';

const Venture = () => {
  return (
    <section className={`mt-[-150px] flex md:flex-row flex-col sm:py-16 py-6`}>
      <div>
        <div className="hidden md:block">
          <div
            id="cta9"
            className={`relative md:mr-24  ${layout.sectionImgReverse1} `}
          >
            <img src={venture} alt="venture" className="block h-[428.8px]" />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8">
          <div id="cta19" className="block md:hidden">
            <img src={venture} alt="venture" />
          </div>
        </div>
      </div>

      <div className={`${layout.sectionInfo} lg:ml-56 md:ml-32 px-8`}>
        <h2
          className={`font-inter font-semibold xs:text-[16px] md:mt-[150px] mt-[-100px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-2  `}
        >
          VENTURE GARDEN GROUP (VGG) <br />
          {/* <span className="text-primary font-Inter font-semibold sm:text-[28px] md:mt-[50px] text-[20px]  sm:leading-[8.8px] leading-[6.8px] w-full mb-2  ">
            Campaign Management <br /> Automation{' '}
          </span> */}
        </h2>
        <p
          className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] lg:max-w-[470px] md:min-w-[350px] mt-5 mb-6`}
        >
          Venture Garden Group (VGG) is a leading provider of innovative,
          data-driven, end-to-end technology platforms addressing reconciliation
          and payment processing inefficiencies across multiple sectors of the
          African economy. VGG required a solution to be deployed to manage
          multiple communication (submission, tracking and resolution) of
          beneficiary and service provider cases, including a centralised call
          center for individuals to obtain information about the programs and to
          report problems or make complaints. Avante was chosen to deploy eGain
          17 comprising of deploy eGain Mail, eGain Chat, eGain CallTrack and
          eGain Knowledge+AI as the solution to serve their purpose.
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

export default Venture;
