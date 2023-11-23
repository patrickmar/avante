import React from "react";
import Banner5 from "../../../components/Banner5";
import ProjectManagementDetails from "../../../components/ProjectManagementDetails";
import Testimonial from "../../../components/Testimonial";
import Clients from "../../../components/Clients";
import styles from "../../../style";
import Caller from "../../../components/Caller";

const ProjectManagement = () => {
  return (
    <div>
      <Banner5 />
      <ProjectManagementDetails />
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

export default ProjectManagement;
