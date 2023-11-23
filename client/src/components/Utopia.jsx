import { layout } from '../style';
import utopia from '../images/utopia.png';
import { Link } from 'react-router-dom';

const Utopia = () => {
  return (
    <section className={`flex md:flex-row flex-col-reverse sm:py-16 py-6`}>
      <div className={`lg:mx-24 md:mx-12 px-8 ${layout.sectionInfo}`}>
        <h2
          className={`font-inter font-semibold xs:text-[20px] mt-[70px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-4 `}
        >
          UTOPIA MEDIA <br />
          {/* <span className="text-primary font-inter font-semibold sm:text-[28px] md:mt-[50px] text-[20px]  sm:leading-[8.8px] leading-[6.8px] w-full mb-2">
            Water transport infrastructure
          </span> */}
        </h2>
        <div
          className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] lg:max-w-[470px] md:min-w-[300px] mt-5 mb-6`}
        >
          A digitally wired media and communication agency that delivers digital
          solutions to clients. Through collaboration with Utopia Media, Avante
          Consulting have built an intelligent Network Infrastructure which will
          enable Utopia Media to achieve their goal of becoming the No. 1
          Digital Agency in Africa by 2018.
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
            className={`${layout.sectionImg} lg:mx-24 md:mx-4 lg:px-24 md:px-4 px-24 relative`}
          >
            <img
              src={utopia}
              alt="utopia"
              className=" block -mx-4 lg:w-[70%] md:[100%]  h-[70%] "
            />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8">
          <div id="cta20" className="block md:hidden">
            <img src={utopia} alt="utopia" />
          </div>
        </div>
      </div>{' '}
    </section>
  );
};

export default Utopia;
