import React from "react";
import GoodsBanner from "../../components/GoodsBanner";
import Caller from "../../components/Caller";
import Clients from "../../components/Clients";
import Testimonial from "../../components/Testimonial";
import FoodConcept from "../../components/FoodConcept";
import styles from "../../style";

const Goods = () => {
  return (
    <div>
      <GoodsBanner />
      <FoodConcept />
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

export default Goods;
