import React from "react";
import Banner7 from "../../../components/Banner7";
import MarketSuveyDetails from "../../../components/MarketSuveyDetails";
import styles from "../../../style";
import Testimonial from "../../../components/Testimonial";
import Clients from "../../../components/Clients";
import Caller from "../../../components/Caller";

const MarketSurvey = () => {
  return (
    <div>
      <Banner7 />
      <MarketSuveyDetails />
      <Testimonial />
      <Clients />
      <div className={`bg-background ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {" "}
          <Caller />
        </div>{" "}
      </div>
    </div>
  );
};

export default MarketSurvey;
