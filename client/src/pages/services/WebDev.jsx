import React from "react";
import Caller from "../../components/Caller";
import DevBanner from "../../components/DevBanner";
import Projects from "../../components/Projects";
import styles from "../../style";

const WebDev = () => {
  return (
    <div>
      <DevBanner />
      <Projects />
      <div className={`bg-background ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {" "}
          <Caller />
        </div>{" "}
      </div>
    </div>
  );
};

export default WebDev;
