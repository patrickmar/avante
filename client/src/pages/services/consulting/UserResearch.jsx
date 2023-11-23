import React from "react";
import Banner6 from "../../../components/Banner6";
import UserResearchDetails from "../../../components/UserResearchDetails";
import Testimonial from "../../../components/Testimonial";
import Clients from "../../../components/Clients";
import styles from "../../../style";
import Caller from "../../../components/Caller";

const UserResearch = () => {
  return (
    <div>
      <Banner6 />
      <UserResearchDetails />
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

export default UserResearch;
