import { layout } from '../style';
import jwt from '../images/jwt.png';
import { Link } from 'react-router-dom';
const Jwt = () => {
  return (
    <section className={` mt-[-150px] flex md:flex-row flex-col sm:py-16 py-6`}>
      <div>
        <div className="hidden md:block">
          <div
            id="cta9"
            className={`relative lg:mr-24 md:mr-12  ${layout.sectionImgReverse1} `}
          >
            <img src={jwt} alt="jwt" className="block h-[428.8px]" />
          </div>
        </div>
        <div className="px-8 block md:hidden mx-8">
          <div id="cta19" className="block md:hidden">
            <img src={jwt} alt="jwt" />
          </div>
        </div>
      </div>
      <div className={`${layout.sectionInfo} md:ml-56 px-8`}>
        <h2
          className={`font-inter font-semibold xs:text-[16px] md:mt-[150px] mt-[-100px] text-[16px] text-black sm:leading-[60.8px] leading-[30.8px] w-full mb-2 `}
        >
          JWT <br />
          {/* <span className="text-primary font-Inter font-semibold sm:text-[28px] md:mt-[50px] text-[20px]  sm:leading-[8.8px] leading-[6.8px] w-full mb-2 ">
            LASTVEB up-skilling youth.
          </span> */}
        </h2>
        <p
          className={`font-inter text-justify font-normal text-black2 text-[14px] leading-[25.8px] lg:max-w-[470px] md:min-w-[300px] mt-5 mb-6`}
        >
          JWT is the world\'s best known marketing and Communications brand. In
          Nigeria the company operates as LTC-JWT. As a result of an initiative
          to make client services more efficient, JWT engaged Avante to provide
          Project Management training to 40 members of staff. The course was
          based on University of Surrey\'s School of Management curriculum on
          professional development and current JWT projects. This resulted in
          reduced delivery timelines and costs savings for the company.{' '}
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

export default Jwt;
