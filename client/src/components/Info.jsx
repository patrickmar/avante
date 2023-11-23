import info1 from "../images/info1.jpg";
import arrow4 from "../images/arrow4.png";
import { features } from "../constants";
import { Link, useNavigate } from "react-router-dom";

import styles, { layout } from "../style";

const InfoCard = ({ icon, index, title, content }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`  flex flex-row  rounded-[20px] ${
        index !== features.length - 1 ? "mb-2" : "mb-0"
      } feature-card ${index === features.length - 4 ? "mt-[310px]" : "mt-0"}`}
    >
      <div
        className={`rounded-full ${styles.flexCenter}  cursor-pointer md:mt-8 `}
      >
        <img
          src={icon}
          alt="icon"
          onClick={() => navigate("/explicit")}
          className="w-[163px] h-[163px] "
        />
      </div>
      <div className="flex-1 flex flex-col ml-3 ]">
        <h4 className="font-inter font-normal md:text-[12px] leading-[20px]  text-secondary md:mt-8   ">
          {title}
        </h4>
        <p
          className="font-inter font-normal sm:text-[24px] leading-[30.8px]  text-dark2 cursor-pointer md:mt-4"
          onClick={() => navigate("/explicit")}
        >
          {content}{" "}
        </p>
      </div>
    </div>
  );
};

const Info = () => {
  const navigate = useNavigate();
  return (
    <section id="features" className={`md:mx-32 ${layout.section}  `}>
      <div className={` ${layout.sectionInfo}`}>
        <h2
          className={`font-inter font-semibold underline-offset-[28px] underline decoration-4 underline-offset-4 decoration-primary decoration:w-4  xs:text-[16px] md:mt-[20px] text-[20px] text-black2 xs:leading-[30.8px] leading-[66.8px] md:mb-12 w-full`}
        >
          OUR <span className="text-primary">NEWS</span>
        </h2>
        <h3
          className={`font-Inter font-normal xs:text-[28px] mt-[10px] text-[20px] text-black2 xs:leading-[40.8px] leading-[40.8px] w-full md:mb-12`}
        >
          <span className="md:text-[28px]  font-inter font-normal">
            Stay Informed{" "}
          </span>{" "}
          <br />
          Latest Updates and Insights{" "}
        </h3>

        <img
          src={info1}
          alt="info1"
          className="mt-8 md:w-[638px] md:h-[422px] "
        />
        <p className="font-inter md:mt-4  md:mb-4 mt-2 text-[12px] ">
          AVANTE @10! | Thursday, 10 DECEMBER 2022
        </p>

        <h3 className="font-Inter font-semibold xs:text-[32px] text-[24px] mt-[20px] md:mb-8 text-secondary text-black2 xs:leading-[60.8px] leading-[60.8px] w-full">
          10 Years Avante History
        </h3>
        <p
          className={`font-inter font-normal text-black2 text-[14px] leading-[25.8px]  max-w-[470px] md:mt-[10px]w-full `}
        >
          2012 – The year we were founded, Signed a Partner Reseller agreement
          with eGain 2013 – Successfully launched digital multichannel customer
          service solutions for a tier one bank and the largest Pensions
          provider in our territory. 2014 – D...
        </p>
        <button
          className="font-inter font-normal text-secondary md:ml-[290px] ml-[150px]w-[84.96px] h-[22px] md:mt-4 mt-4 "
          onClick={() => navigate("/explicit")}
        >
          READ MORE
        </button>
        <img
          src={arrow4}
          alt="arrow"
          className="-mt-5  md:h-[20px]   md:w-[43.2px] w-[44.74px] top-[5px] mb-4 md:ml-[400px] ml-[120px]"
          onClick={() => navigate("/explicit")}
        />
        <Link to="/news">
          <button className="md:hidden font-inter font-normal bg-background text-primary ml-14 mt-8 mb-8 ring-primary ring-2 w-[220px] h-[60px]  ">
            View more
          </button>
        </Link>
      </div>

      <div className={`${layout.sectionImg} hidden md:block flex-col   `}>
        {features.map((feature, index) => (
          <InfoCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Info;
