import React from "react";
import Caller from "../../components/Caller";
import Clients from "../../components/Clients";
import Hero from "../../components/Hero";
import Sas2 from "../../components/Sas2";
import Testimonial from "../../components/Testimonial";
import styles from "../../style";

const Sas = () => {
  return (
    <div>
      <Hero />
      <Sas2 />

      <Testimonial />
      <Clients />
      <div className={`bg-background ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Caller />{" "}
        </div>
      </div>
    </div>
  );
};

export default Sas;
