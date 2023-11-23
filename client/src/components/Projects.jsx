import mtn1 from '../images/mtn1.png';
import arrow from '../images/arrow.svg';
import moloyal from '../images/moloyal.png';
import tado from '../images/tado.png';
import laswa1 from '../images/laswa1.png';
import idi from '../images/idi.png';
import driving from '../images/driving.png';
import starkey from '../images/starkey.png';
import compass from '../images/compass.png';
import legal from '../images/legal.png';
import offshore from '../images/offshore.png';
import energy from '../images/energy.png';
import sector from '../images/sector.png';
import agent from '../images/agent.png';
import customer from '../images/customer.png';
import { Link } from 'react-router-dom';
const Projects = () => {
  return (
    <div className="mb-24 block md:mt-[-200px]">
      <div className="  font-inter font-normal lg:text-[31.15px] md:text-[25px] text-[20px] lg:w-[800px] w-[340] md:h-[47px] h-[60px] p-6 md:mb-24 mb-8 md:ml-32 ">
        <span className="text-primary">We are Creative.</span> We are
        Innovative. <span className="text-secondary">We are Avante!</span>
      </div>
      <div className="grid grid-col lg:grid-cols-2 gap-8 sm:-mb-12  sm:mx-24  ">
        <div className="relative sm:mb-56 mb-0 ml-4 md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px]">
          <img
            src={mtn1}
            alt="mtn1"
            className="md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px]"
          />
          <div className="absolute bg-background  md:w-[510px] w-[336.25px] md:h-[206px] h-[126.73px]  inset-x-0 bottom-0 top-[280px] md:mt-[-80px] mt-[-150px] ring-gray-200 shadow-lg   md:ml-6 -ml-[12]  ">
            <h2 className=" block font-inter font-semibold md:text-[12px] text-[9.84px]   md:sm:mt-4 sm:ml-56 ml-32 md:mb-2 mb-4">
              MTN NIGERIA
            </h2>
            <p className=" font-inter text-justify font-normal text-black2 md:text-[12px] text-[7.38px] md:leading-[20.8px] leading-[10.8px] sm:px-8 px-2  sm:mb-2 ">
              MTN Nigeria is a Nigeria’s largest telecommunications provider
              serving over 60 million customers. 1as part of MTN’s focus on
              customer care, Avante was contracted to implement a customer
              self-service knowledge base web portal that enables customers on
              www.mtnonline.com answer questions and find information on their
              own. The portal includes features such as guided help, topics,
              articles, videos, interactive how to guides, powerful intent based
              search and browse capabilities.
            </p>
            <Link to="https://mtnonline.com">
              <button
                className="block text-secondary sm:ml-[350px] ml-[200px] sm:-mt-4 md:text-[12px] text-[7.38px] "
                target="_blank"
              >
                Read more{' '}
              </button>
            </Link>
            <Link to="https://mtnonline.com">
              <img
                src={arrow}
                alt="arrow"
                className="sm:-mt-4 -mt-3  sm:ml-[390px] ml-[220px] h-[15px]   w-[100px] top-[10px] "
              />{' '}
            </Link>
          </div>
        </div>
        <div className="relative sm:mb-56 mb-24 sm:mt-0 mt-24 ml-4 md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px]">
          <img
            src={moloyal}
            alt="mtn1"
            className="md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px]"
          />
          <div className="absolute bg-background  md:w-[510px] w-[336.25px] md:h-[206px] h-[126.73px]  inset-x-0 bottom-0 top-[280px] md:mt-[-80px] mt-[-150px] ring-gray-200 shadow-lg   md:ml-6 -ml-[12] ">
            <h2 className=" block font-inter font-semibold md:text-[12px] text-[9.84px]   md:sm:mt-4 sm:ml-56 ml-32 md:mb-2 mb-4">
              MoLoyal{' '}
            </h2>
            <p className="font-inter text-justify font-normal text-black2 md:text-[12px] text-[7.38px] md:leading-[20.8px] leading-[10.8px] sm:px-8 px-2  sm:mb-4 ">
              MoLoyal, the unique customer rewards programme, which helps
              businesses improve customer retention by rewarding customers with
              free airtime for every transaction made. Active members of MoLoyal
              can earn free airtime rewards while making transactions.
            </p>
            <Link to="https://moloyal.com">
              <button
                className="block text-secondary sm:ml-[350px] ml-[200px] sm:-mt-4 mt-4 md:text-[12px] text-[7.38px]"
                target="_blank"
              >
                Read more{' '}
              </button>
            </Link>
            <Link to="https://moloyal.com">
              <img
                src={arrow}
                alt="arrow"
                className="sm:-mt-4 -mt-3  sm:ml-[390px] ml-[220px] h-[15px]   w-[100px] top-[10px] "
              />{' '}
            </Link>
          </div>
        </div>
        <div className="relative sm:mb-56 sm:mt-0 mt-18 ml-4 md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px]">
          <img
            src={tado}
            alt="mtn1"
            className="md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px]"
          />
          <div className="absolute bg-background  md:w-[510px] w-[336.25px] md:h-[206px] h-[126.73px]  inset-x-0 bottom-0 top-[280px] md:mt-[-80px] mt-[-150px] ring-gray-200 shadow-lg   md:ml-6 -ml-[12] ">
            <h2 className="block font-inter font-semibold md:text-[12px] text-[9.84px]   md:sm:mt-4 sm:ml-56 ml-32 md:mb-2 mb-4">
              Tado Emme{' '}
            </h2>
            <p className=" font-inter text-justify font-normal text-black2 md:text-[12px] text-[7.38px] md:leading-[20.8px] leading-[10.8px] sm:px-8 px-2  sm:mb-8">
              Tado Emme is a fashion company that produces suits made for men
              who like African fashion, distinctive quality, and style. Their
              suits are made of the finest fabrics and sewn to perfection so
              that even in a crowd, their customers are distinguished.
            </p>
            <Link to="https://tadoemme.com">
              <button
                className="block text-secondary sm:ml-[350px] ml-[200px] sm:-mt-4 mt-4 md:text-[12px] text-[7.38px] "
                target="_blank"
              >
                Read more{' '}
              </button>
            </Link>
            <Link to="https://tadoemme.com">
              <img
                src={arrow}
                alt="arrow"
                className="sm:-mt-4 -mt-3  sm:ml-[390px] ml-[220px] h-[15px]   w-[100px] top-[10px] "
              />{' '}
            </Link>
          </div>
        </div>
        <div className="relative sm:mb-56 mb-24 sm:mt-0 mt-24 ml-4 md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px]">
          <img
            src={laswa1}
            alt="mtn1"
            className="md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px]"
          />
          <div className="absolute bg-background  md:w-[510px] w-[336.25px] md:h-[206px] h-[126.73px]  inset-x-0 bottom-0 top-[280px] md:mt-[-80px] mt-[-150px] ring-gray-200 shadow-lg   md:ml-6 -ml-[12] ">
            <h2 className=" block font-inter font-semibold md:text-[12px] text-[9.84px]   md:sm:mt-4 sm:ml-56 ml-24 md:mb-2 mb-4">
              Lagos Waterways Authority (LASWA){' '}
            </h2>
            <p className="font-inter text-justify font-normal text-black2 md:text-[12px] text-[7.38px] md:leading-[20.8px] leading-[10.8px] sm:px-8 px-2  sm:mb-8 ">
              Lagos Waterways Authority (LASWA) is charged with the
              responsibility of coordinating and managing the reforms necessary
              for the long-term growth and development of water transportation
              in Lagos State, including the granting of ferry licenses and
              concessions for the operation of terminals to the private sector.
            </p>
            <Link to="https://lagoswaterways.com">
              <button
                className="block text-secondary sm:ml-[350px] ml-[200px] sm:-mt-4 mt-4 md:text-[12px] text-[7.38px]"
                target="_blank"
              >
                Read more{' '}
              </button>
            </Link>
            <Link to="https://lagoswaterways.com">
              <img
                src={arrow}
                alt="arrow"
                className="sm:-mt-4 -mt-3  sm:ml-[390px] ml-[220px] h-[15px]   w-[100px] top-[10px] "
              />{' '}
            </Link>
          </div>
        </div>
        <div className="relative sm:mb-56 mb-24 sm:mt-0 mt-18 ml-4 md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px]">
          <img
            src={idi}
            alt="mtn1"
            className="md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px] "
          />
          <div className="absolute bg-background  md:w-[510px] w-[336.25px] md:h-[206px] h-[126.73px]  inset-x-0 bottom-0 top-[280px] md:mt-[-80px] mt-[-150px] ring-gray-200 shadow-lg   md:ml-6 -ml-[12]  ">
            <h2 className="block font-inter font-semibold md:text-[12px] text-[9.84px]   md:sm:mt-4 sm:ml-56 ml-24 md:mb-2 mb-4">
              Infrastructure Delivery International{' '}
            </h2>
            <p className="text-justify  font-inter font-normal text-black2 md:text-[12px] text-[7.38px] md:leading-[20.8px] leading-[10.8px] sm:px-8 px-2  sm:mb-8">
              We understand that addressing Africa’s infrastructural gaps will
              require not only the best in international expertise, but also a
              deep understanding of how Africa works.
            </p>
            <Link to="https://idi-ng.com">
              <button
                className="block text-secondary sm:ml-[350px] ml-[200px] sm:-mt-4 mt-4 md:text-[12px] text-[7.38px] "
                target="_blank"
              >
                Read more{' '}
              </button>
            </Link>
            <Link to="https://idi-ng.com">
              <img
                src={arrow}
                alt="arrow"
                className="sm:-mt-4 -mt-3  sm:ml-[390px] ml-[220px] h-[15px]   w-[100px] top-[10px] "
              />{' '}
            </Link>
          </div>
        </div>
        <div className="relative sm:mb-56 mb-24 sm:mt-0 mt-18 ml-4 md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px]">
          <img
            src={driving}
            alt="mtn1"
            className="md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px]"
          />
          <div className="absolute bg-background  md:w-[510px] w-[336.25px] md:h-[206px] h-[126.73px]  inset-x-0 bottom-0 top-[280px] md:mt-[-80px] mt-[-150px] ring-gray-200 shadow-lg   md:ml-6 -ml-[12] ">
            <h2 className=" block font-inter font-semibold md:text-[12px] text-[9.84px]   md:sm:mt-4 sm:ml-56 ml-32 md:mb-2 mb-4">
              Decima and Co
            </h2>
            <p className="font-inter text-justify font-normal text-black2 md:text-[12px] text-[7.38px] md:leading-[20.8px] leading-[10.8px] sm:px-8 px-2  sm:mb-8 ">
              Decima and company is a management consulting firm established in
              2018. We provide services including financial advisory, strategy
              formulation and implementation as well as business process
              re-engineering.
            </p>
            <Link to="https://idi-ng.com">
              <button
                className="block text-secondary sm:ml-[350px] ml-[200px] sm:-mt-4 mt-4 md:text-[12px] text-[7.38px] "
                target="_blank"
              >
                Read more{' '}
              </button>
            </Link>
            <Link to="https://idi-ng.com">
              <img
                src={arrow}
                alt="arrow"
                className="sm:-mt-4 -mt-3  sm:ml-[390px] ml-[220px] h-[15px]   w-[100px] top-[10px] "
              />{' '}
            </Link>
          </div>
        </div>
        <div className="relative sm:mb-56 mb-24 sm:mt-0 mt-18 ml-4 md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px]">
          <img
            src={starkey}
            alt="mtn1"
            className="md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px]"
          />
          <div className="absolute bg-background  md:w-[510px] w-[336.25px] md:h-[206px] h-[126.73px]  inset-x-0 bottom-0 top-[280px] md:mt-[-80px] mt-[-150px] ring-gray-200 shadow-lg   md:ml-6 -ml-[12]  ">
            <h2 className="block font-inter font-semibold md:text-[12px] text-[9.84px]   md:sm:mt-4 sm:ml-56 ml-32 md:mb-2 mb-4">
              Data Starkey Network Limited{' '}
            </h2>
            <p className=" font-inter text-justify font-normal text-black2 md:text-[12px] text-[7.38px] md:leading-[20.8px] leading-[10.8px] sm:px-8 px-2  sm:mb-8">
              Data Starkey Network System is an information Based system
              specially designed to offer varieties of services tailored to
              solving some social and industrial problem that has been
              disturbing many African Countries, including Nigeria.
            </p>
            <Link to="https://datastarkey.com/.com/">
              <button
                className="block text-secondary sm:ml-[350px] ml-[200px] sm:-mt-4 mt-4 md:text-[12px] text-[7.38px] "
                target="_blank"
              >
                Read more{' '}
              </button>
            </Link>
            <Link to="https://datastarkey.com/.com/">
              <img
                src={arrow}
                alt="arrow"
                className="sm:-mt-4 -mt-3  sm:ml-[390px] ml-[220px] h-[15px]   w-[100px] top-[10px]  "
              />{' '}
            </Link>
          </div>
        </div>
        <div className="relative sm:mb-56 mb-24 sm:mt-0 mt-18 ml-4 md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px]">
          <img
            src={compass}
            alt="mtn1"
            className="md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px]"
          />
          <div className="absolute bg-background  md:w-[510px] w-[336.25px] md:h-[206px] h-[126.73px]  inset-x-0 bottom-0 top-[280px] md:mt-[-80px] mt-[-150px] ring-gray-200 shadow-lg   md:ml-6 -ml-[12] ">
            <h2 className=" block font-inter font-semibold md:text-[12px] text-[9.84px]   md:sm:mt-4 sm:ml-56 ml-32 md:mb-2 mb-4">
              Compass Global Service
            </h2>
            <p className=" font-inter text-justify font-normal text-black2 md:text-[12px] text-[7.38px] md:leading-[20.8px] leading-[10.8px] sm:px-8 px-2  sm:mb-8">
              Compass Global Services is a consultancy firm specializing in;
              International Trade/investment Promotion, Strategic Business
              Planning, Enterprise Development/Solutions, Access to New
              Markets/Market intelligence/Networks, Access to Finance and
              fundraising.
            </p>
            <Link to="https://compassglobalservices.com/">
              <button
                className="block text-secondary sm:ml-[350px] ml-[200px] sm:-mt-4 mt-4 md:text-[12px] text-[7.38px] "
                target="_blank"
              >
                Read more{' '}
              </button>
            </Link>
            <Link to="https://compassglobalservices.com/">
              <img
                src={arrow}
                alt="arrow"
                className="sm:-mt-4 -mt-3  sm:ml-[390px] ml-[220px] h-[15px]   w-[100px] top-[10px] "
              />{' '}
            </Link>
          </div>
        </div>
        <div className="relative sm:mb-56 mb-24 sm:mt-0 mt-18 ml-4 md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px]">
          <img
            src={offshore}
            alt="mtn1"
            className="md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px] "
          />
          <div className="absolute bg-background  md:w-[510px] w-[336.25px] md:h-[206px] h-[126.73px]  inset-x-0 bottom-0 top-[280px] md:mt-[-80px] mt-[-150px] ring-gray-200 shadow-lg   md:ml-6 -ml-[12] ">
            <h2 className="block font-inter font-semibold md:text-[12px] text-[9.84px]   md:sm:mt-4 sm:ml-56 ml-32 md:mb-2 mb-4">
              4H Offshore
            </h2>
            <p className=" font-inter text-justify font-normal text-black2 md:text-[12px] text-[7.38px] md:leading-[20.8px] leading-[10.8px] sm:px-8 px-2  sm:mb-8">
              4H Offshore provides optimal, timely, and quality goods and
              services in a safe and environmentally friendly manner to the Oil
              and Gas, power, and petrochemical industries.
            </p>
            <Link to="http://www.4hoffshore.com/">
              <button
                className="block text-secondary sm:ml-[350px] ml-[200px] sm:-mt-4 mt-4 md:text-[12px] text-[7.38px] "
                target="_blank"
              >
                Read more{' '}
              </button>
            </Link>
            <Link to="http://www.4hoffshore.com/">
              <img
                src={arrow}
                alt="arrow"
                className="sm:-mt-4 -mt-3  sm:ml-[390px] ml-[220px] h-[15px]   w-[100px] top-[10px] "
              />{' '}
            </Link>
          </div>
        </div>
        <div className="relative sm:mb-56 mb-24 sm:mt-0 mt-18 ml-4 md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px]">
          <img
            src={sector}
            alt="mtn1"
            className="md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px]"
          />
          <div className="absolute bg-background  md:w-[510px] w-[336.25px] md:h-[206px] h-[126.73px]  inset-x-0 bottom-0 top-[280px] md:mt-[-80px] mt-[-150px] ring-gray-200 shadow-lg   md:ml-6 -ml-[12] ">
            <h2 className="block font-inter font-semibold md:text-[12px] text-[9.84px]   md:sm:mt-4 sm:ml-56 ml-32 md:mb-2 mb-4">
              3RD Sector Development Solutions
            </h2>
            <p className=" font-inter font-normal text-black2 md:text-[12px] text-[7.38px] md:leading-[20.8px] leading-[10.8px] sm:px-8 px-2  sm:mb-8">
              Third Sector Development Solutions (TSDS) is a Nigerian
              consultancy platform set-up to provide support & information to
              organizations in the third Sector
            </p>
            <Link to="https://3rdsectordev.com/">
              <button
                className="block text-secondary sm:ml-[350px] ml-[200px] sm:-mt-4 mt-4 md:text-[12px] text-[7.38px] "
                target="_blank"
              >
                Read more{' '}
              </button>
            </Link>
            <Link to="https://3rdsectordev.com/">
              <img
                src={arrow}
                alt="arrow"
                className="sm:-mt-4 -mt-3  sm:ml-[390px] ml-[220px] h-[15px]   w-[100px] top-[10px] "
              />{' '}
            </Link>
          </div>
        </div>
        <div className="relative sm:mb-56 mb-24 sm:mt-0 mt-18 ml-4 md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px]">
          <img
            src={legal}
            alt="mtn1"
            className="md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px]"
          />
          <div className="absolute bg-background  md:w-[510px] w-[336.25px] md:h-[206px] h-[126.73px]  inset-x-0 bottom-0 top-[280px] md:mt-[-80px] mt-[-150px] ring-gray-200 shadow-lg   md:ml-6 -ml-[12] ">
            <h2 className="block font-inter font-semibold md:text-[12px] text-[9.84px]   md:sm:mt-4 sm:ml-56 ml-32 md:mb-2 mb-4">
              Watermans Legal Practitioners
            </h2>
            <p className=" font-inter font-normal text-black2 md:text-[12px] text-[7.38px] md:leading-[20.8px] leading-[10.8px] sm:px-8 px-2  sm:mb-8">
              {' '}
              Waterman’s, Legal Practitioners was registered to do business by
              the Corporate Affairs Commission; Nigeria in April 2003. The
              firm’s offices are centrally located and easily accessible in
              Victoria Island, Lagos Nigeria.
            </p>
            <Link to="https://watermanslp.com/">
              <button
                className="block text-secondary sm:ml-[350px] ml-[200px] sm:-mt-4 mt-4 md:text-[12px] text-[7.38px]"
                target="_blank"
              >
                Read more{' '}
              </button>
            </Link>
            <Link to="https://watermanslp.com/">
              <img
                src={arrow}
                alt="arrow"
                className="sm:-mt-4 -mt-3  sm:ml-[390px] ml-[220px] h-[15px]   w-[100px] top-[10px] "
              />{' '}
            </Link>
          </div>
        </div>
        <div className="relative sm:mb-56 mb-24 sm:mt-0 mt-18 ml-4 md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px]">
          <img
            src={energy}
            alt="mtn1"
            className="md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px]"
          />
          <div className="absolute bg-background  md:w-[510px] w-[336.25px] md:h-[206px] h-[126.73px]  inset-x-0 bottom-0 top-[280px] md:mt-[-80px] mt-[-150px] ring-gray-200 shadow-lg   md:ml-6 -ml-[12] ">
            <h2 className="block font-inter font-semibold md:text-[12px] text-[9.84px]   md:sm:mt-4 sm:ml-56 ml-32 md:mb-2 mb-4">
              Silverstream Energy{' '}
            </h2>
            <p className=" font-inter font-normal text-black2 md:text-[12px] text-[7.38px] md:leading-[20.8px] leading-[10.8px] sm:px-8 px-2  sm:mb-8">
              {' '}
              We are an energy sector focused company principally involved in
              providing environmental protection solution, targeted at the oil &
              gas, marine and automotive sectors. We also have interest in the
              provision of renewable energy equipment as well as the supply &
              distribution of all forms of petroleum products.
            </p>
            <Link to="https://silverstreamenergy.com/">
              <button
                className="block text-secondary sm:ml-[350px] ml-[200px] sm:-mt-4 mt-4 md:text-[12px] text-[7.38px] "
                target="_blank"
              >
                Read more{' '}
              </button>
            </Link>
            <Link to="https://silverstreamenergy.com/">
              <img
                src={arrow}
                alt="arrow"
                className="sm:-mt-4 -mt-3  sm:ml-[390px] ml-[220px] h-[15px]   w-[100px] top-[10px] "
              />{' '}
            </Link>
          </div>
        </div>
        <div className="relative sm:mb-56 mb-24 sm:mt-0 mt-18 ml-4 md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px]">
          <img
            src={customer}
            alt="mtn1"
            className="md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px]"
          />
          <div className="absolute bg-background  md:w-[510px] w-[336.25px] md:h-[206px] h-[126.73px]  inset-x-0 bottom-0 top-[280px] md:mt-[-80px] mt-[-150px] ring-gray-200 shadow-lg   md:ml-6 -ml-[12] ">
            <h2 className="block font-inter font-semibold md:text-[12px] text-[9.84px]   md:sm:mt-4 sm:ml-56 ml-32 md:mb-2 mb-4">
              MoLoyal Customer App
            </h2>
            <p className=" font-inter font-normal text-black2 md:text-[12px] text-[7.38px] md:leading-[20.8px] leading-[10.8px] sm:px-8 px-2  sm:mb-8">
              MoLoyal™, the unique customer rewards programme, which helps
              businesses improve customer retention by rewarding customers with
              free airtime for every transaction made.
            </p>
            <Link to="https://play.google.com/store/apps/details?id=com.moloyal.moloyal.app&pli=1">
              <button
                className="block text-secondary sm:ml-[350px] ml-[200px] sm:-mt-4 mt-4 md:text-[12px] text-[7.38px] "
                target="_blank"
              >
                Read more{' '}
              </button>
            </Link>
            <Link to="https://play.google.com/store/apps/details?id=com.moloyal.moloyal.app&pli=1">
              <img
                src={arrow}
                alt="arrow"
                className="sm:-mt-4 -mt-3  sm:ml-[390px] ml-[220px] h-[15px]   w-[100px] top-[10px] "
              />{' '}
            </Link>
          </div>
        </div>
        <div className="relative sm:mb-56 mb-24 sm:mt-0 mt-18 ml-4 md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px]">
          <img
            src={agent}
            alt="mtn1"
            className="md:w-[555.13px] w-[336px] md:h-[280px] h-[172.25px]"
          />
          <div className="absolute bg-background  md:w-[510px] w-[336.25px] md:h-[206px] h-[126.73px]  inset-x-0 bottom-0 top-[280px] md:mt-[-80px] mt-[-150px] ring-gray-200 shadow-lg   md:ml-6 -ml-[12] ">
            <h2 className="block font-inter font-semibold md:text-[12px] text-[9.84px]   md:sm:mt-4 sm:ml-56 ml-32 md:mb-2 mb-4">
              MoLoyal Agent App{' '}
            </h2>
            <p className=" font-inter font-normal text-black2 md:text-[12px] text-[7.38px] md:leading-[20.8px] leading-[10.8px] sm:px-8 px-2  sm:mb-8">
              Moloyal agent app provides a platform for merchants to enable
              agents that will dispense airtime, process loyalty rewards for
              customers and scan tickets.
            </p>
            <Link to="https://moloyal.com/app/">
              <button
                className="block text-secondary sm:ml-[350px] ml-[200px] sm:-mt-4 mt-4 md:text-[12px] text-[7.38px] "
                target="_blank"
              >
                Read more{' '}
              </button>
            </Link>
            <Link to="https://moloyal.com/app/">
              <img
                src={arrow}
                alt="arrow"
                className="sm:-mt-4 -mt-3  sm:ml-[390px] ml-[220px] h-[15px]   w-[100px] top-[10px] "
              />{' '}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
