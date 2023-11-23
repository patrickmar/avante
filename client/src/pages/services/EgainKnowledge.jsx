import React from "react";
import Caller from "../../components/Caller";
import EgainKnowledgeBanner from "../../components/EgainKnowledgeBanner";
import KnowledgeAndServices from "../../components/KnowledgeAndServices";
import Testimonial from "../../components/Testimonial";
import styles from "../../style";

const EgainKnowledge = () => {
  return (
    <div>
      <EgainKnowledgeBanner />
      <KnowledgeAndServices />
      <Testimonial />
      <div className={`bg-background ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {" "}
          <Caller />
        </div>{" "}
      </div>
    </div>
  );
};

export default EgainKnowledge;
