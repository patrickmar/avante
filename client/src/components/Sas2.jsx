import { layout } from '../style';
import rec from '../images/rec.png';
import rec1 from '../images/rec1.png';

const Sas2 = () => {
  return (
    <section
      className={`flex lg:flex-row flex-col lg:py-24 py-6 lg:-mt-32 md:-mt-[500px] `}
    >
      <div
        id="cta3"
        className={` mr-[350px] mt-[400px] flex-1 flex justify-center items-start flex-col `}
      >
        <ul className="relative ml-[50px] mt-[-900px] hidden lg:block">
          <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 mb-8">
            <input
              id="list-radio-license51"
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
              id="list-radio-license52"
              type="radio"
              value=""
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2 dark:bg-grey"
              disabled
            />{' '}
          </li>
          <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 mb-8">
            <input
              id="list-radio-license53"
              type="radio"
              value=""
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
              disabled
            />{' '}
          </li>
          <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 mb-8">
            <input
              id="list-radio-license54"
              type="radio"
              value=""
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey "
              disabled
            />{' '}
          </li>
          <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 mb-8">
            <input
              id="list-radio-license55"
              type="radio"
              value=""
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
              disabled
            />{' '}
          </li>
          <li className="w-full  border-gray-200 rounded-t-lg dark:border-gray-600 mb-8">
            <input
              id="list-radio-license56"
              type="radio"
              value=""
              name="list-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-1 dark:bg-grey"
              disabled
            />{' '}
          </li>
        </ul>
        <img
          src={rec1}
          alt="rec"
          className="mt-[300px] lg:mr-[120px] -md:mr-20 lg:block hidden lg:w-full md:w-[200px]  "
        />
        <img
          src={rec}
          alt="rec"
          className=" mt-[730px] lg:mr-[120px]  lg:block hidden lg:w-full md:w-[200px]"
        />
      </div>
      <div>
        <div
          // id="cta4"
          className={`${layout.sectionInfo} px-6 md:mt-24 mt-[-430px] md:mr-[100px]`}
        >
          <h2
            className={`font-inter font-semibold lg:text-[28px] md:text-[18px] mt-[20px] text-[16px] text-black sm:leading-[45.8px] leading-[30.8px] w-full mb-8 px-2`}
          >
            SAS <span className="text-primary ">ANALYTICS</span> <br />
            <span className="text-primary lg:text-[28px] md:text-[24px] text-[20px]">
              SAS Partner, Solutions, Expertise.
            </span>
          </h2>
          <div
            className={`font-inter text-justify font-normal text-black2 md:text-[16px] text-[12px] leading-[25.8px] lg:max-w-[470px] md:max-w-[570px] md:-mt-6 mt-[-10px] mb-6 px-2`}
          >
            Avante is a silver partner of SAS and a solution partner within the
            Customer Intelligence practice. Avante has extensive experience in
            the design, development, implementation and support of various SAS
            solutions and products as well as working in customer life cycle
            environments. Our expertise in Customer Relationship Management and
            Knowledge Management business processes as well as implementation
            experience gives us a unique advantage in delivering end to end SAS
            Customer or Citizen Intelligence solutions. SAS Services we offer
            include the following;
            <ul className="text-dark list-disc ml-8">
              <li>Advanced Analytics</li>
              <li>Business Intelligence & Analytics</li>
              <li>Customer Intelligence</li>
              <li>Data Management</li>
              <li>Decision Management</li>
              <li>Fraud, AML & Security Intelligence</li>
              <li>Solutions for Hadoop</li>
              <li>Performance Management</li>
              <li>Personal Data Protection</li>
              <li>Risk Management</li>
              <li>Supply Chain Intelligence</li>
            </ul>
            Our consultants are positioned to add value throughout the Analytics
            lifecycle from Data Management to Analytics Discovery and Deployment
            using the appropriate tools for each client’s requirements, size and
            maturity level in the usage of data driven analytics. Avante has the
            ability to tailor specific data solutions allowing our experts to
            customize analytics according to your organisation's needs,
            irrespective of the industry. We use data management and advanced
            analysis to drive value from your business data. Our analysts
            possess world class quantitative analysis and interpretation skills
            that enable organisations gain a competitive advantage by making the
            right decisions based on data driven insight.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sas2;
