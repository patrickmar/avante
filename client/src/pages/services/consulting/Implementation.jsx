import React from "react";
import ImplementDetails from "../../../components/ImplementDetails";
import Banner4 from "../../../components/BannerIm";
import styles from "../../../style";
import Clients from "../../../components/Clients";
import Testimonial from "../../../components/Testimonial";
import Caller from "../../../components/Caller";

const Implementation = () => {
  return (
    <div>
      <Banner4 />
      <ImplementDetails />
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

export default Implementation;
