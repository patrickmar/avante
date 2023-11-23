import Caller from "../../components/Caller";
import EgainBanner from "../../components/EgainBanner";
import EgainCard from "../../components/EgainCard";
import styles from "../../style";

const EgainCollaboration = () => {
  return (
    <div>
      <EgainBanner />
      <EgainCard />

      <div className={`bg-background ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Caller />{" "}
        </div>
      </div>
    </div>
  );
};

export default EgainCollaboration;
