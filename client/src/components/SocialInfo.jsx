import { layout } from '../style';
import socialservice from '../images/socialservice.jpg';
import socialservice2 from '../images/socialservice2.jpg';
const SocialInfo = () => {
  return (
    <section
      className={`flex lg:flex-row flex-col lg:py-24 py-6 lg:-mt-32 md:-mt-[500px] `}
    >
      <div
        id="cta3"
        className={`mr-[350px] mt-[400px] flex-1 flex justify-center items-start flex-col `}
      >
        <ul className="relative ml-[50px] mt-[-900px] hidden lg:block">
          <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 mb-8">
            <input
              id="list-radio-license1"
              type="radio"
              value=""
              name="list-radio"
              className="w-4 h-4 checked:bg-secondary text-red-500 focus:ring-red-500 disabled:bg-secondary"
              checked
              disabled
            />{' '}
          </li>
          <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 mb-8">
            <input
              id="list-radio-license2"
              type="radio"
              value=""
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2 dark:bg-grey"
              disabled
            />{' '}
          </li>
          <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 mb-8">
            <input
              id="list-radio-license3"
              type="radio"
              value=""
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
              disabled
            />{' '}
          </li>
          <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 mb-8">
            <input
              id="list-radio-license4"
              type="radio"
              value=""
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey "
              disabled
            />{' '}
          </li>
          <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 mb-8">
            <input
              id="list-radio-license5"
              type="radio"
              value=""
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
              disabled
            />{' '}
          </li>
          <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 mb-8">
            <input
              id="list-radio-license6"
              type="radio"
              value=""
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
              disabled
            />{' '}
          </li>
        </ul>
        <img
          src={socialservice2}
          alt="bup"
          className="mt-[300px] lg:mr-[120px] -md:mr-20 lg:block hidden lg:w-full md:w-[200px]  "
        />
        <img
          src={socialservice}
          alt="bdown"
          className=" mt-[730px] lg:mr-[120px]  lg:block hidden lg:w-full md:w-[200px]"
        />
      </div>
      <div
        id="cta4"
        className={`${layout.sectionInfo} px-6 md:mt-24 mt-[2px] md:mr-[100px]`}
      >
        <h2
          className={`font-inter font-semibold sm:text-[20px] mt-[20px] text-[16px] text-black sm:leading-[40.8px] leading-[30.8px] w-full mb-8 `}
        >
          Social Media <span className="text-primary ">Management</span> <br />
          <span className="text-primary sm:text-[28px] text-[20px]">
            Our Social Media Management Services Include:
          </span>
        </h2>
        <div
          className={`font-inter text-justify font-normal text-black2 sm:text-[14px] text-[12px] leading-[30.8px] max-w-[470px] sm:mt-5 mt-2 mb-6 `}
        >
          {' '}
          <span className="font-inter font-semibold">
            Strategy Development:
          </span>{' '}
          We work closely with you to understand your business objectives and
          target audience, and develop a customized social media strategy that
          aligns with your goals.
          <p className="mb-4"></p>
          <span className="font-inter font-semibold">
            {' '}
            Content Creation:
          </span>{' '}
          Our team of content experts creates compelling and shareable social
          media posts that resonate with your target audience and reflect your
          brand's voice and values.
          <p className="mb-4"></p>{' '}
          <span className="font-inter font-semibold">Platform Management:</span>{' '}
          We handle the management of your social media platforms, ensuring
          consistent branding and messaging across channels such as Facebook,
          Twitter, Instagram, LinkedIn, and more.<p className="mb-4"></p>{' '}
          <span className="font-inter font-semibold">
            Community Engagement:
          </span>{' '}
          We actively engage with your social media community, responding to
          comments, messages, and reviews in a timely and professional manner,
          fostering meaningful interactions.
          <p className="mb-4"></p>
          <span className="font-inter font-semibold">
            Performance Tracking:
          </span>{' '}
          Our team closely monitors the performance of your social media
          campaigns, tracking key metrics and providing regular reports to
          measure success and identify areas for improvement.
          <p className="mb-4"></p>
          <h4 className="font-semibold text-justify">
            Why Choose Avante Consulting?{' '}
          </h4>
          Expertise in social media trends, algorithms, and best practices. Time
          and resource savings with our comprehensive management. Enhanced brand
          presence and increased awareness. Targeted audience engagement for
          meaningful interactions. Partner with Avante Consulting and unlock the
          full potential of social media for your business success.
        </div>
      </div>
    </section>
  );
};

export default SocialInfo;
