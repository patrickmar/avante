import Caller from "../../components/Caller";
import Softcard from "../../components/Softcard";
import Softwarebanner from "../../components/Sofwarebanner";
import Testimonial from "../../components/Testimonial";
import Clients from "../../components/Clients";
import styles from "../../style";
const Software = () => {
  return (
    <div>
      <Softwarebanner />
      <Softcard />
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

export default Software;
