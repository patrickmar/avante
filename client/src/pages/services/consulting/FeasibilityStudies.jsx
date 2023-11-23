import React from "react";
import FeasibleStudiesDetails from "../../../components/FeasibleStudiesDetails";
import Banner8 from "../../../components/Banner8";
import Testimonial from "../../../components/Testimonial";
import Clients from "../../../components/Clients";
import Caller from "../../../components/Caller";
import styles from "../../../style";

const FeasibilityStudies = () => {
  return (
    <div>
      <Banner8 />
      <FeasibleStudiesDetails />
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

export default FeasibilityStudies;
