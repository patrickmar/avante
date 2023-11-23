import Banner3 from "../../components/Banner3";
import Testimonial from "../../components/Testimonial";
import Caller from "../../components/Caller";
import Clients from "../../components/Clients";
import BusinessConsulting from "../../components/BusinessConsulting";
import styles from "../../style";

const Consulting = () => {
  return (
    <div>
      <Banner3 />
      <BusinessConsulting />
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

export default Consulting;
