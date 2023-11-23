import React from "react";
import ProductBanner from "../components/ProductBanner";
import MoloyalDetails from "../components/MoloyalDetails";
import Testimonial from "../components/Testimonial";
import Clients from "../components/Clients";
import Caller from "../components/Caller";
import styles from "../style";

const Products = () => {
  return (
    <div>
      <ProductBanner />
      <MoloyalDetails />
      <Testimonial />
      <Clients />
      <div className={`bg-background ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Caller />
        </div>
      </div>
    </div>
  );
};

export default Products;
