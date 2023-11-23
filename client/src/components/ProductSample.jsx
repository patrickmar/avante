import React from 'react';
import styles, { layout } from '../style';
import productimage1 from '../images/productimage1.png';
// import productimage2 from "../images/productimage2.png";
// import productimage3 from "../images/productimage3.png";
import { Link } from 'react-router-dom';

const ProductSample = () => {
  return (
    <section id="cta" className="flex flex-row  md:py-16 py-6">
      <div className="lg:ml-24 md:mr-8 flex-[1.5] flex justify-center items-start flex-col">
        <h2
          className={` underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px] mb-8
          ${styles.heading5} `}
        >
          OUR <span className="text-primary">PRODUCT</span> - MOLOYAL
        </h2>
        <div className="  items-center justify-center    mb-4  hidden md:block">
          <h3 className="  font-inter font-normal md:text-[32px] text-[16px]   ">
            Cutting-edge Solutions <br />
            Transforming Businesses Today{' '}
          </h3>{' '}
        </div>
        <div className=" items-center justify-center  mb-12   visible md:invisible ">
          <h3 className=" font-inter font-semibold md:text-[28px] text-[12px] w-auto ">
            Cutting-edge Solutions Transforming Businesses Today
          </h3>{' '}
        </div>
        <p
          className={`font-inter text-justify font-normal text-black2 md:text-[14px] text-[12px] md:leading-[25.8px] leading-[25.8px] max-w-[470px] lg:mt-[-120px] md:mt-[-120px] mt-0 mb-5 `}
        >
          MoLoyal provides an easy to use fintech solution serving customers
          with loyalty points for transaction they normally carry out on day to
          day basis. With MoLoyal, you can start a micro-savings plan, buy
          tickets to upcoming events, and discover discounted items listed on
          the platform.
        </p>
        <p className="mb-4"></p>
        <p
          className={`font-inter text-justify font-normal text-black2 md:text-[14px] text-[12px] md:leading-[25.8px] leading-[25.8px] max-w-[470px] -mt-5 mb-5 `}
        >
          The MoLoyal products are namely: MoSave, MoTickets, and the Loyalty
          Ecosystem; dedicated to promoting financial inclusion, user
          engagement, and economic growth in the regions it serves. MoLoyal app
          is available on playstore.
        </p>
        <Link to="/products">
          <button className="bg-secondary font-inter text-white mb-8 py-2 px-4 rounded ml-0 w-[148px] h-[46.36px]">
            Learn more{' '}
          </button>
        </Link>{' '}
        <div className="flex ">
          {/* <ul className=" mr-8 :mt-0 mt-24">
            <li className=" w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-12 mb-2">
              <input
                id="list-radio-license11"
                type="radio"
                value=""
                name="list-radio"
                className="absolute md:w-4 md:h-4 w-2 h-2 checked:bg-primary text-blue-500 focus:ring-blue-500 disabled:bg-primary"
                checked
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-0">
              <input
                id="list-radio-license12"
                type="radio"
                value=""
                name="list-radio"
                className="md:w-4 md:h-4 w-2 h-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2 dark:bg-grey"
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-0">
              <input
                id="list-radio-license13"
                type="radio"
                value=""
                name="list-radio"
                className="md:w-4 md:h-4 w-2 h-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-0">
              <input
                id="list-radio-license14"
                type="radio"
                value=""
                name="list-radio"
                className="md:w-4 md:h-4 w-2 h-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey "
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-0">
              <input
                id="list-radio-license15"
                type="radio"
                value=""
                name="list-radio"
                className="md:w-4 md:h-4 w-2 h-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                disabled
              />{" "}
            </li>
            <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 md:mb-8 mb-0">
              <input
                id="list-radio-license16"
                type="radio"
                value=""
                name="list-radio"
                className="md:w-4 md:h-4 w-2 h-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
                disabled
              />{" "}
            </li>
          </ul> */}
          {/* <img
            src={productimage1}
            alt="productimage1"
            className="md:w-[543px] md:h-[500px] w-[214px] sm:ml-24 h-[157px] mt-8  mb-4"
          /> */}
        </div>
      </div>
      <div
        className={`${layout.sectionInfo} lg:mt-[210px] md:mt-[350px]  hidden md:block`}
      >
        <img
          src={productimage1}
          alt="productimage2"
          className="md:w-full lg:h-[500px] md:h-[350px] w-[140.41px] h-[156.71px]  md:mt-[-200px] mt-[-340px] "
        />
        {/* <img
          src={productimage3}
          alt="productimage3"
          className="md:mt-[10px] mt-[80px] md:[w-448px] md:h-[306px] "
        /> */}
      </div>
    </section>
  );
};

export default ProductSample;
