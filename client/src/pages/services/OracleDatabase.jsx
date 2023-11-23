import React from "react";
import Caller from "../../components/Caller";
import Clients from "../../components/Clients";
import Oracle2 from "../../components/Oracle2";
import OracleBanner from "../../components/OracleBanner";
import Testimonial from "../../components/Testimonial";
import styles from "../../style";

const OracleDatabase = () => {
  return (
    <div>
      <OracleBanner />
      <Oracle2 />
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

export default OracleDatabase;
