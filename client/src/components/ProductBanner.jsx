import styles, { layout } from '../style';
import moloyalproduct from '../images/moloyalproduct.png';
import smallloyal from '../images/smallloyal.png';
import smallwhite from '../images/smallwhite.png';
import moloyallogo from '../images/moloyallogo.png';
import { Link } from 'react-router-dom';
const ProductBanner = () => {
  return (
    <div>
      <div className="hidden md:block">
        <div id="product" className={`  ${layout.sectionReverse}`}>
          <div className={`  ${layout.sectionImgReverse1} h-[721px] mt-0   `}>
            <img
              src={moloyalproduct}
              alt="moloyalproduct"
              className="lg:ml-72 md:ml-24"
            />
          </div>
          <div className={` lg:ml-24 md:ml-2 ${layout.sectionInfo}`}>
            <h2
              className={`font-inter font-semibold xs:text-[40px] mt-[-200px] text-[40px] text-black xs:leading-[60.8px] leading-[66.8px] w-full mb-4 `}
            >
              <img src={moloyallogo} alt="moloyal" className="md:w-[200px]" />{' '}
            </h2>
            <div
              className={`${styles.paragraph} lg:max-w-[470px] md:max-w-[300px]  md:p-auto mt-5 mb-6`}
            >
              <p className="text-dark text-justify font-inter font-normal text-[16px] mb-4">
                MoLoyal Company is a part of the Avante Consulting group of
                companies that manufacture software and provide technology
                services to leading organizations and institutions.
              </p>
              <p className="text-dark font-inter font-normal text-[16px] mb-4">
                We introduce cutting-edge technology solutions across industries
                including Entertainment, Hospitality, Financial Services, Public
                Sector, Telecommunications, Energy, Retail, Education, and
                Consumer Goods.
              </p>
              <p className="text-dark font-inter font-normal text-[16px] mb-4">
                The product API is available on demand as may be required for
                your project
              </p>
            </div>
            <Link
              to="https://calendly.com/avantesales/moloyal-product-demo-session"
              target="_blank"
            >
              <button className="bg-secondary text-white flex flex-start font-normal font-inter py-4 px-8 rounded">
                Request a demo
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" block md:hidden flex-col flex justify-center item-center bg-background mb-12">
        <img
          src={smallloyal}
          alt="smallloyal"
          className="w-[1200px] h-[100%]"
        />
        <div className="flex-start bg-background mt-12">
          <h1 className="font-inter font-semibold text-[16px] underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px] ml-6 ">
            Mo{' '}
          </h1>
          <h1 className=" font-inter font-semibold flex ml-[50px] text-primary mt-[-23px]">
            LOYAL{' '}
          </h1>
          <p className="font-inter font-normal text-[12px] mt-12 ml-4 mr-4 leading-[25.8px]">
            MoLoyal is a customer rewards program that incentivizes customers to
            make transactions in various industries by offering free airtime
            rewards. It also serves as a digital airtime retail and distribution
            platform with multiple payment options.
          </p>
          <button className="flex  items-center text-white text-[12px] ml-4 mt-8 h-[46px] w-[192px] rounded-lg  bg-secondary ">
            <span className="mx-8 text-[12px] font-inter font-normal">
              Request a demo
            </span>
            <i className="fas fa-chevron-right">
              <img
                src={smallwhite}
                alt="smallwhite"
                className="sm:w-[100%] w-[50%] sm:h-[100%] h-[50%]"
              />{' '}
            </i>
          </button>
        </div>
      </div>{' '}
    </div>
  );
};

export default ProductBanner;
