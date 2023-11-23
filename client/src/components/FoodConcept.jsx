import { layout } from '../style';
import foodconcept from '../images/foodconcept.png';
import { Link } from 'react-router-dom';
const FoodConcept = () => {
  return (
    <section className={`mt-[-150px] flex md:flex-row flex-col sm:py-16 py-6`}>
      <div>
        <div className="hidden md:block">
          <div
            id="cta9"
            className={`relative md:mr-24  ${layout.sectionImgReverse1} `}
          >
            <img
              src={foodconcept}
              alt="foodconcept"
              className="block h-[428.8px]"
            />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8">
          <div id="food" className="block md:hidden">
            <img src={foodconcept} alt="foodconcept" />
          </div>
        </div>
      </div>

      <div className={`${layout.sectionInfo} lg:ml-56 md:ml-32 px-8`}>
        <h2
          className={`font-inter font-semibold xs:text-[16px] md:mt-[150px] mt-[-100px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-2  `}
        >
          FOOD <span className="text-primary">CONCEPT</span> <br />
          <Link
            to="https://avante-cs.com/consumer-goods"
            className="text-primary font-Inter font-semibold sm:text-[28px] md:mt-[50px] text-[20px]  sm:leading-[8.8px] leading-[6.8px] w-full mb-2  "
          >
            https://avante-cs.com/consumer-goods{' '}
          </Link>
        </h2>
        <p
          className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] lg:max-w-[470px] md:min-w-[300px] mt-5 mb-6`}
        >
          Food Concepts opened Chicken Republic in 2004 and their other brands
          of focus include Butterfield Bakery, Reeds and Pizza Republic. Apart
          from a poultry farm and bakery plants their multifaceted business also
          comprises an Operational Services Division, Central Processing Plant,
          Supply Chain Division, Trading, a Logistics Division and a lucrative
          Property Division. Avante Consulting were commissioned to build a
          Database Management System using Oracle Database Manager for Food
          Concepts. The plan was that this implementation by Avante would allow
          the organization to keep track of their various brands and all other
          aspects of running a fast growing organization on a daily basis. The
          Database Management System will keep Food Concepts on course as they
          work towards achieving their goal of becoming Africa’s No. 1 Chicken
          Quick Service Restaurant and Nigeria’s No. 1 poultry supplier.
        </p>
        <Link to="/contacts">
          <button className="underline decoration-2 underline-offset-4 decoration-secondary text-secondary">
            Learn more
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FoodConcept;
