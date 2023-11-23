import styles from '../style';
import fone from '../images/fone.png';
import email1 from '../images/email1.png';
import smallcontact from '../images/smallcontact.png';
import redphone from '../images/redphone.png';
import redmail from '../images/redmail.png';
import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from 'react-router-dom';

const Contacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [details, setDetails] = useState('');
  const [employment, setEmployment] = useState('');
  const [country, setCountry] = useState();
  const [countryState, setCountryState] = useState({
    loading: false,
    countries: [],
    errorMessage: '',
  });

  const [formValid, setFormValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [verified, setVerified] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setCountryState({
          ...countryState,
          loading: true,
        });
        const dataUrl = `https://restcountries.com/v3.1/all`;
        const response = await axios.get(dataUrl);
        setCountryState({
          ...countryState,
          countries: response.data,
          loading: false,
        });
      } catch (error) {
        setCountryState({
          ...countryState,
          loading: false,
          errorMessage: 'Something went wrong',
        });
      }
    };
    fetchData();
  }, [countryState]);

  const { countries } = countryState;

  useEffect(() => {
    // Validate other fields (name, reason, employment, country, details)
    const isOtherFieldsValid =
      name !== '' &&
      reason !== '' &&
      employment !== '' &&
      country !== '' &&
      details !== '';

    // Update the form validity based on all validations
    setFormValid(isOtherFieldsValid && emailValid);
  }, [name, reason, employment, country, details, emailValid]);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  useEffect(() => {
    // Update email validation state based on email validity
    setEmailValid(validateEmail(email));
  }, [email]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSubmitting(true); // Start loading

    const commentData = {
      name,
      email,
      reason,
      employment,
      country,
      details,
    };
    fetch('    https://avante-css.onrender.com/api/v1/comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Comment submitted successfully:', data);
        toast.success('Message Submitted Successfully...');
        sendEmail();
        resetFormFields();
        setIsSubmitting(false); // Stop loading
      })
      .catch((error) => {
        console.error('Error submitting comment:', error);
        // Handle any error or show error message to the user
        setIsSubmitting(false); // Stop loading in case of error
      });
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_p6mfgac',
        'template_cbxm7h3',
        form.current,
        'ECfFboSu0y_L9md9N'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message was sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const resetFormFields = () => {
    setName('');
    setEmail('');
    setReason('');
    setEmployment('');
    setCountry();
    setDetails('');
  };

  function onChange(value) {
    console.log('Captcha value', value);
    setVerified(true);
  }

  return (
    <div className={`bg-background ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <div className="lg:mx-32 md:-mx-12  mb-24 mt-12 place-items-center hidden md:block relative">
          <div className="bg-white rounded-md   flex flex-row">
            <div
              className="bg-black p-8  md-hover:scale-y-110 rounded-md transition md:block "
              id="contact_info"
            >
              <div className="flex justify-between">
                <h1
                  className={`font-inter font-semibold lg:text-[50px] md:text-[45px] lg:mt-[20px] md:-mt-8 text-[20px] text-white lg:leading-[60.8px] md:leading-[50px] leading-[66.8px] w-full`}
                >
                  Start a new project!
                </h1>
              </div>
              <div className="mt-6 flex flex-row">
                <div className=""></div>
                <div className="">
                  <h3 className="text-white">
                    Avante Consulting{' '}
                    <span className="text-secondary">Solutions</span>{' '}
                  </h3>
                  <p className="font-inter text-justify font-normal text-dimWhite text-[12px] leading-[20.8px] mb-8">
                    How can we be of help? Talk to us today on any of our four
                    growth pillars namely; Business Consulting, Software
                    Development, SAS Analytics, & eGain Collaboration.{' '}
                  </p>
                  <p className="font-inter font-normal -mt-8 text-dimWhite text-[10px] leading-[20.8px] mb-8">
                    Talk to us on any of these and we will be here to help.
                  </p>
                  <h3 className="text-secondary -mt-8">CONTACT INFO</h3>
                  <p className="font-Inter font-normal text-dimWhite text-[10px] leading-[20.8px] mb-8">
                    66 Bode Thomas, Surulere, Lagos.{' '}
                  </p>{' '}
                  <div className="flex flex-row -mt-3">
                    <div>
                      <img src={fone} alt="fone" className="h-3 w-3 mr-2 " />
                    </div>

                    <div>
                      <p className="text-white text-[10px] ">+234 -1-2953541</p>
                    </div>
                  </div>
                  <div className="flex flex-row py-4 ">
                    <div>
                      <img
                        src={email1}
                        alt="email"
                        className="h-3 w-3 mr-2  "
                      />
                    </div>

                    <Link
                      to="mailto:support@avante-cs.com"
                      className="text-white text-[10px] -mt-0.5 "
                    >
                      info@avante-cs.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <form ref={form} onSubmit={handleSubmit}>
              <div className=" mx-12">
                <div>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    value={name}
                    name="from_name"
                    type="text"
                    placeholder="Full Name"
                    className="lg:w-full md:w-[500px]  px-3 h-4 my-2 outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2"
                    required
                  />
                </div>{' '}
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  value={email}
                  type="text"
                  name="from_email"
                  placeholder="Email Address"
                  className="lg:w-full md:w-[500px] mt-12 px-3 h-4 my-2 outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2"
                  required
                />
                <select
                  onChange={(e) => setReason(e.target.value)}
                  id="subject"
                  value={reason}
                  type="text"
                  name="subject"
                  placeholder="services"
                  data-te-select-init
                  className="lg:w-full md:w-[500px] mt-12 px-3 h-12  outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2 mb-16"
                  required
                >
                  <option
                    hidden
                    selected
                    className="font-inter font-normal text-[14px] text-gray5"
                  >
                    -- Select Services --
                  </option>
                  <option>Business Consulting</option>
                  <option>Software Development</option>
                  <option>SAS Analytics</option>
                  <option>eGain Collaboration</option>
                  <option>eGain Knowledge</option>
                  <option>Social Media Management</option>
                  <option>Web Development</option>
                </select>
                <select
                  name="from_country"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  data-te-select-init
                  className="lg:w-full md:w-[500px]  px-3 h-12  outline-none border  border-r-white border-l-white border-t-white   focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2 mb-16"
                  required
                >
                  <option>Nigeria</option>
                  <option
                    hidden
                    selected
                    className="font-inter font-normal text-[14px] text-gray5"
                  >
                    Nigeria{' '}
                  </option>
                  {countries.map((item) => {
                    return <option key={uuidv4()}>{item.name.common}</option>;
                  })}
                </select>
                <select
                  onChange={(e) => setEmployment(e.target.value)}
                  id="employment"
                  value={employment}
                  type="Number"
                  name="from_employment"
                  placeholder="Select Employment"
                  data-te-select-init
                  className="lg:w-full md:w-[500px]  px-3   outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2 mb-16"
                  required
                >
                  <option
                    hidden
                    selected
                    className="font-inter font-normal text-[14px] text-gray5"
                  >
                    -- Employee size --
                  </option>
                  <option>1 - 10</option>
                  <option>11 - 25</option>
                  <option>26 - 100</option>
                  <option>Over 100</option>
                </select>
                <textarea
                  onChange={(e) => setDetails(e.target.value)}
                  id="details"
                  value={details}
                  type="text"
                  name="message"
                  placeholder="Type a message here..."
                  className="lg:w-full md:w-[500px] -mt-4  outline-none border  border-r-white border-l-white border-t-white  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2"
                  required
                />
                <ReCAPTCHA
                  sitekey="6Ldxg6cnAAAAAA1grqOAt46XDRYxFPTDz_Mm2OYC"
                  onChange={onChange}
                />
                <button
                  disabled={!formValid || isSubmitting || verified}
                  type="submit"
                  className={`${
                    formValid ? 'bg-secondary' : 'bg-faded'
                  } text-white flex flex-start font-bold py-2 px-12 rounded lg:ml-[450px] mt-6`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span class="sr-only">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="block md:hidden flex-col  justify-center item-center bg-background mb-12">
          <div>
            {' '}
            <img src={smallcontact} alt="smallcontact" />
          </div>
          <div className="flex-center bg-background mt-12  ">
            <h1 className="font-inter font-semibold text-[48px] text-secondary  mb-8">
              Start a new{' '}
              <span className="underline decoration-4 underline-offset-4 decoration-primary decoration:w-4 underline-offset-[20px]">
                project!
              </span>
            </h1>
            <h3 className="font-inter font-semibold ">
              Avante Consulting{' '}
              <span className="text-secondary">Solutions</span>{' '}
            </h3>

            <p className="font-inter text-justify font-normal text-[12px] mt-8 w-[353px] max-w-[300px]  leading-[25.8px]">
              How can we be of help? Talk to us today on any of our four growth
              pillars namely; Business Consulting, Software Development, SAS
              Analytics, & eGain Collaboration.{' '}
            </p>
            <form ref={form} onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  value={name}
                  name="from_name"
                  type="text"
                  placeholder="Your full name"
                  className="w-[350px] mt-12 px-3 h-8 my-2 outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2 text-[10px] block"
                />
              </div>{' '}
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                value={email}
                type="text"
                name="from_email"
                placeholder="Your e-mail address"
                className="w-[350px] mt-12 px-3 h-8 my-2 outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2 block text-[10px]"
              />
              <select
                onChange={(e) => setReason(e.target.value)}
                id="subject"
                value={reason}
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-[350px] mt-12 px-3  outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2 block text-[10px]"
              >
                <option
                  hidden
                  selected
                  className="font-inter font-normal text-[14px] text-gray5 mb-4"
                >
                  -- Select Services --
                </option>
                <option>Business Consulting</option>
                <option>Software Development</option>
                <option>SAS Analytics</option>
                <option>eGain Collaboration</option>
                <option>eGain Knowledge</option>
                <option>Social Media Management</option>
                <option>Web Development</option>
              </select>
              <select
                onChange={(e) => setCountry(e.target.value)}
                id="country"
                value={country}
                type="text"
                name="from_country"
                placeholder="Subject"
                className="w-[350px] mt-12 px-3  outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2 block text-[10px]"
              >
                <option>Nigeria</option>

                <option
                  hidden
                  selected
                  className="font-inter font-normal text-[14px] text-gray5 mb-4"
                >
                  Nigeria
                </option>
                {countries.map((item) => {
                  return <option key={uuidv4()}>{item.name.common}</option>;
                })}
              </select>
              <select
                onChange={(e) => setEmployment(e.target.value)}
                id="employment"
                value={employment}
                type="Number"
                name="from_employment"
                className="w-[350px] mt-12 px-3  outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2 block text-[10px]"
              >
                <option
                  hidden
                  selected
                  className="font-inter font-normal text-[14px] text-gray5 mb-4"
                >
                  -- Employee size --
                </option>
                <option>1 - 10</option>
                <option>11 - 25</option>
                <option>26 - 100</option>
                <option>Over 100</option>
              </select>
              <input
                onChange={(e) => setDetails(e.target.value)}
                id="details"
                value={details}
                type="text"
                name="message"
                placeholder="drop a message here..."
                className="w-[350px] mt-12 px-3 h-8 my-2 outline-none border  border-r-white border-l-white border-t-white border-b  focus:border-r-white focus:border-l-white focus:border-t-white focus:border-b-primary focus:ring-white border-b-2 block text-[10px]"
              />
              <ReCAPTCHA
                sitekey="6Ldxg6cnAAAAAA1grqOAt46XDRYxFPTDz_Mm2OYC"
                onChange={onChange}
              />
              <button
                disabled={!formValid || isSubmitting || verified}
                className={` ${
                  formValid ? 'bg-secondary' : 'bg-faded'
                } text-white flex flex-start font-bold py-2 px-12 rounded ml-24 mb-12 mt-6`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : (
                  'Submit'
                )}{' '}
              </button>
            </form>
            <div className="w-[349px] h-[42px] mb-8  ">
              {' '}
              <p className=" font-inter font-normal text-[16px] max-w-[300px] text-secondary ">
                Talk to us on any of these and we will be here to help.
              </p>
            </div>
            <div className="w-[279px] h-[59px] leading-[20.8px]  ">
              <h1 className="font-inter font-semibold text-[16px] text-primary">
                CONTACT INFO
              </h1>
              <p className="font-inter font-normal text-[12px] text-black1 ">
                66 Bode Thomas, Surulere, Lagos.{' '}
              </p>
            </div>
            <div className="overflow-auto ml-4  flex items-center mt-4 mb-2">
              <img
                src={redmail}
                alt="mail"
                className="w-[14px] h-[14px] mr-4 object-contain"
              />
              <Link
                to="mailto:support@avante-cs.com"
                className="text-[16px] text-black1 font-inter"
              >
                info@avante-cs.com
              </Link>
            </div>
            <div className="overflow-auto ml-4  flex items-center ">
              <img
                src={redphone}
                alt="phone"
                className="w-[14px] h-[14px] mr-4  object-contain"
              />
              <a
                href="tel:+23412953541"
                className=" text-black1 font-inter text-[12px] underline decoration-1 underline-offset-4 decoration-black1 decoration:w-4 underline-offset-[20px"
              >
                +234 -1-2953541
              </a>
            </div>
          </div>
        </div>{' '}
      </div>
    </div>
  );
};

export default Contacts;
