import ten from "../images/ten.png";
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
      } feature-card ${index === features.length - 4 ? "mt-[30px]" : "mt-0"}`}
    >
      <div
        className={`rounded-full ${styles.flexCenter}  cursor-pointer md:mt-8 `}
      >
        <img
          src={icon}
          alt="icon"
          onClick={() => navigate("/news")}
          className="w-[163px] h-[163px] "
        />
      </div>
      <div className="flex-1 flex flex-col ml-3 ]">
        <h4 className="font-inter font-normal md:text-[12px] leading-[25.8px]  text-secondary md:mt-8   ">
          {title}
        </h4>
        <p
          className="font-inter font-normal md:text-[24px] leading-[25.8px]  text-dark2 cursor-pointer md:mt-4"
          onClick={() => navigate("/news")}
        >
          {content}{" "}
        </p>
      </div>
    </div>
  );
};

const Info2 = () => {
  const navigate = useNavigate();
  return (
    <section id="features" className={`sm:mx-32 ${layout.section}  `}>
      <div className={`sm:mx-0 mx-4 ${layout.sectionInfo}`}>
        <img
          src={ten}
          alt="ten"
          className="sm:w-[634px] w-full sm:h-[445px] h-[238px]"
        />
        <p className="font-inter sm:mt-4  md:mb-4 mt-2 text-[12px] ">
          AVANTE @10! | Thursday, 10 DECEMBER 2022
        </p>

        <h3 className="font-Inter font-semibold xs:text-[32px] text-[24px] mt-[20px] md:mb-8 text-secondary text-black2 xs:leading-[60.8px] leading-[60.8px] w-full">
          10 Years Avante History
        </h3>
        <p
          className={`font-Inter font-normal text-black2 text-[14px] leading-[25.8px]  max-w-[470px] md:mt-[10px]w-full `}
        >
          2012 – The year we were founded, Signed a Partner Reseller agreement
          with eGain 2013 – Successfully launched digital multichannel customer
          service solutions for a tier one bank and the largest Pensions
          provider in our territory. 2014 – D...
        </p>
        <button
          className="text-secondary md:ml-[250px] ml-[150px]w-[84.96px] h-[22px] md:mt-12 mt-4 "
          onClick={() => navigate("/news")}
        >
          Read more
        </button>
        <img
          src={arrow4}
          alt="arrow"
          className="-mt-5  md:h-[20px]   md:w-[43.2px] w-[44.74px] top-[10px] mb-4 md:ml-[350px] ml-[120px]"
          onClick={() => navigate("/news")}
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

export default Info2;
