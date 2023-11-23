import styles from '../style';
import Banner from '../components/Banner';
import Codeit from '../components/Codeit';
import Caller from '../components/Caller';
import Clients from '../components/Clients';
import Testimonial from '../components/Testimonial';
import Stats from '../components/Stats';
import ProductSample from '../components/ProductSample';
import Card from '../components/Card';

const Home = () => (
  <div>
    <Banner />
    <div className={`bg-background ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Codeit />
        <Card />
      </div>
    </div>
    <Stats />

    {/* <div className={`bg-background ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}> <Info /></div>
    </div> */}
    <div className={`bg-background ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}> </div>
    </div>
    <Testimonial />

    <div className={`bg-background ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <ProductSample />

        <Clients />
        <Caller />
      </div>
    </div>
  </div>
);

export default Home;
