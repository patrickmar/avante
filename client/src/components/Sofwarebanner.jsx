import styles, { layout } from '../style';
import softpix1 from '../images/softpix1.png';
import mobilesoft from '../images/mobilesoft.png';
import { useNavigate } from 'react-router-dom';
const Softwarebanner = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="hidden md:block ">
        <div id="ctas" className={` mb-8 ${layout.sectionReverse}`}>
          <div className={` lg:ml-44 md:ml-8 ${layout.sectionImgReverse}  `}>
            <img
              src={softpix1}
              alt="sofware"
              className=" w-[471.19px] h-[518.48px] "
            />
          </div>
          <div className={`   ${layout.sectionInfo}`}>
            <h2 className={`${styles.heading3} mb-4 `}>
              SOFTWARE <br className="sm:block hidden" /> DEVELOPMENT
            </h2>
            <div
              className={`font-inter text-justify font-normal text-dimWhite text-[16px] leading-[25.8px] lg:max-w-[470px] md:max-w-[310px] md:p-auto mt-5 mb-6`}
            >
              <p className="text-dark">
                Avante is a software development company that specializes in
                e-commerce, mobile solutions, customer relationship management,
                and enterprise resource management. They have experience
                building custom solutions for various industries and use
                technologies such as Service-oriented architecture (SOA) to
                improve productivity.
              </p>
            </div>
            <button
              className="bg-secondary text-white flex flex-start font-normal py-4 px-24 rounded"
              onClick={() => navigate('/contacts')}
            >
              Request a quote
            </button>
          </div>
        </div>
      </div>
      <div className=" block md:hidden flex-col flex justify-center item-center bg-background mb-12">
        <img src={mobilesoft} alt="banner4" />
        <div className="flex-start bg-background mt-12">
          <h1 className="font-inter font-semibold text-[16px] underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px] ml-4 ">
            SOFTWARE
          </h1>
          <h1 className="flex ml-32 mt-[-20px]">DEVELOPMENT</h1>
          <p className="font-inter text-justify font-normal text-[12px] mt-12 ml-4 mr-4 leading-[30.8px]">
            Avante is a software development company that specializes in
            e-commerce, mobile solutions, customer relationship management, and
            enterprise resource management. They have experience building custom
            solutions for various industries and use technologies such as
            Service-oriented architecture (SOA) to improve productivity.
          </p>
          <button
            onClick={() => navigate('/contacts')}
            className="flex  items-center text-white text-[14px] ml-4 mt-8 h-[46px] w-[247px] rounded-lg  bg-secondary "
          >
            <span className="mx-[60px] text-[14px] font-inter font-normal">
              Request a quote
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Softwarebanner;
