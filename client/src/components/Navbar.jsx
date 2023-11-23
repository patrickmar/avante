import { useState, useRef, Fragment, useEffect } from 'react';
// import { navLinks } from "../constants";
import close from '../images/close.svg';
import menu from '../images/menu.svg';
import logo from '../images/logo.png';
import { Popover, Transition } from '@headlessui/react';

import { Link, NavLink, useLocation } from 'react-router-dom';

const timeoutDuration = 120;

const Navbar = () => {
  const location = useLocation();

  const [toggle, setToggle] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const [showConsulting, setShowConsulting] = useState();
  const [showMobileNav, setShowMobileNav] = useState(false);

  const [isList, setIsList] = useState(false);
  const [isListed, setIsListed] = useState(false);

  const [activePage, setActivePage] = useState(location.pathname);

  const triggerRef = useRef();
  const timeOutRef = useRef();

  const handleEnter = (isOpen) => {
    clearTimeout(timeOutRef.current);
    !isOpen && triggerRef.current?.click();
  };

  const handleLeave = (isOpen) => {
    timeOutRef.current = setTimeout(() => {
      isOpen && triggerRef.current?.click();
    }, timeoutDuration);
  };

  useEffect(() => {}, [location]);

  return (
    <nav className="w-full flex p-8  justify-between items-center navbar ">
      <NavLink to="/">
        {' '}
        <img
          src={logo}
          alt="logo"
          className="lg:w-[350px] lg:h-full md:w-[170px] w-[150px]  -ml-12"
        />
      </NavLink>
      <div className=" md:flex hidden justify-end items-center flex-1 ">
        <NavLink
          to="/"
          className={`font-inter font-normal cursor-pointer lg:text-[14px] md:text-[10px] lg:mr-9 md:mr-3 hover:text-secondary  ${
            activePage === '/' ? 'text-primary' : 'black2'
          }`}
          onClick={() => setActivePage('/')}
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          className={`font-inter font-normal cursor-pointer  hover:text-secondary lg:text-[14px] md:text-[10px] lg:mr-9 md:mr-3  ${
            activePage === '/about' ? 'text-primary' : 'black2'
          }`}
          onClick={() => {
            setActivePage('/about');
            setShowConsulting(false); // Close the subpanel
          }}
        >
          ABOUT US
        </NavLink>
        <Popover
          as="div"
          className="relative group inline-block text-left lg:text-[14px] md:text-[10px] lg:mr-9 md:mr-3"
        >
          {({ open }) => (
            <div
              onMouseEnter={() => handleEnter(open)}
              onMouseLeave={() => handleLeave(open)}
            >
              <Popover.Button
                ref={triggerRef}
                type="popover-button"
                className={` ${
                  activePage === '/services' ? 'text-primary' : 'text-black2'
                } inline-flex w-full justify-center   gap-x-2  focus:bg-backgound  bg-background px-3 py-0 lg:text-[14px] md:text-[10px] hover:bg-background focus:ring-0 ring-offset-0 hover:text-secondary  focus:outline-none focus-visible:outline-none`}
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                SERVICES
                <svg
                  className="-mr-1 lg:h-5 md:h-3 lg:w-5 md:w-3 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </Popover.Button>

              <Transition>
                <div>
                  <Popover.Panel
                    className="absolute right-0 z-10 mt-1 w-64 origin-top-right  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    {/* <div className="py-1 " role="none"> */}
                    <Popover.Panel>
                      <Link
                        to="/services/sas"
                        className="block px-4 py-2 text-sm hover:bg-primary mb-4 hover:text-white"
                        tabIndex="-1"
                        id="menu-item-2"
                        onClick={() => {
                          console.log('Link clicked - Debugging...');
                          setActivePage('/services');
                          triggerRef.current?.click(); // Close the popover
                        }}
                      >
                        SAS Analytics
                      </Link>
                    </Popover.Panel>

                    <Popover.Panel>
                      <Link
                        to="/services/egain"
                        className="text-gray-700 block px-4  py-2 mb-4 text-sm hover:bg-primary hover:text-white"
                        tabIndex="-1"
                        id="menu-item-3"
                        onClick={() => {
                          setActivePage('/services');
                          triggerRef.current?.click();
                        }}
                      >
                        eGain Collaboration
                      </Link>
                    </Popover.Panel>
                    <div>
                      <Popover.Panel>
                        <Link
                          to="/services/software"
                          className={` block px-4  mt-2 mb-4 text-sm   hover:text-white `}
                          tabIndex="-1"
                          id="menu-item-1"
                          onClick={() => setActivePage('/services')}
                        >
                          <div
                            onMouseEnter={() => setShowConsulting(true)}
                            onMouseLeave={() => setShowConsulting(false)}
                          >
                            {' '}
                            <Popover as="div" className="relative group">
                              <div
                                onMouseEnter={() => setShowConsulting(true)}
                                onMouseLeave={() => setShowConsulting(false)}
                              >
                                <Popover.Button
                                  type="popover-button"
                                  className={`inline-flex w-full  text-black hover:bg-primary py-3 hover:w-full  gap-x-16  text-sm   ${
                                    activePage === '/services'
                                      ? 'text-primary'
                                      : 'black2'
                                  }    focus:ring-none hover:text-background `}
                                  id="menu-button"
                                  aria-expanded="true"
                                  aria-haspopup="true"
                                  onMouseEnter={() => setShowConsulting(true)}
                                  onMouseLeave={() => setShowConsulting(false)}
                                >
                                  Business Consulting{' '}
                                  <svg
                                    className="-mr-1 h-5 w-5 text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </Popover.Button>
                              </div>

                              <Transition
                                show={showConsulting}
                                onMouseEnter={() => setShowConsulting(true)}
                                onMouseLeave={() => setShowConsulting(false)}
                                as={Fragment}
                              >
                                <div>
                                  <Popover.Panel
                                    className="absolute left-[240px] z-10 -mt-9 w-56 origin-top-right  rounded-md bg-white   ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="menu-button"
                                    tabIndex="-1"
                                  >
                                    <div className="py-1" role="none">
                                      <Popover.Panel>
                                        <Link
                                          to="/services/implementations"
                                          className="text-gray-700 block  px-4 py-3 mb-2 text-sm hover:bg-primary  hover:text-white"
                                          role="menuitem"
                                          tabIndex="-1"
                                          id="menu-item-0"
                                          onClick={() => {
                                            setActivePage('/services');
                                            setShowConsulting(false); // Close the subpanel
                                            triggerRef.current?.click();
                                          }}
                                        >
                                          Implementation Services
                                        </Link>
                                      </Popover.Panel>

                                      <Popover.Panel>
                                        <Link
                                          to="/services/project"
                                          className="text-gray-700 block px-4 py-2   mb-2 text-sm hover:bg-primary hover:text-white"
                                          role="menuitem"
                                          tabIndex="-1"
                                          id="menu-item-1"
                                          onClick={() => {
                                            setActivePage('/services');
                                            setShowConsulting(false);
                                            triggerRef.current?.click();
                                          }}
                                        >
                                          Project Management{' '}
                                        </Link>
                                      </Popover.Panel>
                                      <Popover.Panel>
                                        <Link
                                          to="/services/research"
                                          className="text-gray-700 block px-4 py-2  mb-2 text-sm hover:bg-primary hover:text-white"
                                          role="menuitem"
                                          tabIndex="-1"
                                          id="menu-item-2"
                                          onClick={() => {
                                            setActivePage('/services');
                                            setShowConsulting(false); // Close the subpanel
                                            triggerRef.current?.click();
                                          }}
                                        >
                                          User Experience Research{' '}
                                        </Link>
                                      </Popover.Panel>

                                      <Popover.Panel>
                                        <Link
                                          to="/services/market"
                                          className="text-gray-700 block px-4  py-2 mb-2 text-sm hover:bg-primary hover:text-white"
                                          role="menuitem"
                                          tabIndex="-1"
                                          id="menu-item-3"
                                          onClick={() => {
                                            setActivePage('/services');
                                            setShowConsulting(false); // Close the subpanel
                                            triggerRef.current?.click();
                                          }}
                                        >
                                          Market Survey{' '}
                                        </Link>
                                      </Popover.Panel>
                                      <Popover.Panel>
                                        <Link
                                          to="/services/feasibility"
                                          className="text-gray-700 block px-4  py-2 mb-2 text-sm  hover:bg-primary hover:text-white"
                                          role="menuitem"
                                          tabIndex="-1"
                                          id="menu-item-4"
                                          onClick={() => {
                                            setActivePage('/services');
                                            setShowConsulting(false); // Close the subpanel
                                            triggerRef.current?.click();
                                          }}
                                        >
                                          Feasibility Studies{' '}
                                        </Link>
                                      </Popover.Panel>
                                    </div>
                                  </Popover.Panel>
                                </div>
                              </Transition>
                            </Popover>
                          </div>
                        </Link>
                      </Popover.Panel>
                    </div>
                    {/* </div> */}
                    {/* <div className="py-1" role="none"> */}
                    <Popover.Panel>
                      <Link
                        to="/services/knowledge"
                        className="text-gray-700 block px-4  py-2 mb-4 text-sm hover:bg-primary hover:text-white"
                        tabIndex="-1"
                        id="menu-item-4"
                        onClick={() => {
                          setActivePage('/services');
                          triggerRef.current?.click();
                        }}
                      >
                        eGain Knowledge
                      </Link>
                    </Popover.Panel>
                    <Popover.Panel>
                      <Link
                        to="/services/software"
                        className="text-gray-700 block px-4  py-2 mb-4 text-sm hover:bg-primary hover:text-white"
                        tabIndex="-1"
                        id="menu-item-4"
                        onClick={() => {
                          setActivePage('/services');
                          triggerRef.current?.click();
                        }}
                      >
                        Software Development
                      </Link>
                    </Popover.Panel>

                    <Popover.Panel>
                      <Link
                        to="/services/media"
                        className="text-gray-700 block  px-4 py-2 mb-4 text-sm hover:bg-primary hover:text-white"
                        tabIndex="-1"
                        id="menu-item-5"
                        onClick={() => {
                          setActivePage('/services');
                          triggerRef.current?.click();
                        }}
                      >
                        Social Media Management{' '}
                      </Link>
                    </Popover.Panel>

                    <Popover.Panel>
                      <Link
                        to="services/web"
                        className="text-gray-700 block px-4 py-2 mb-4 text-sm  hover:bg-primary hover:text-white"
                        tabIndex="-1"
                        id="menu-item-6"
                        onClick={() => {
                          setActivePage('/services');
                          triggerRef.current?.click();
                        }}
                      >
                        Web Development
                      </Link>
                    </Popover.Panel>
                    {/* </div> */}
                  </Popover.Panel>
                </div>
              </Transition>
            </div>
          )}
        </Popover>

        <NavLink
          to="/products"
          className={`font-inter font-normal cursor-pointer  ${
            activePage === '/products' ? 'text-primary' : 'black2'
          }   hover:text-secondary lg:text-[14px] md:text-[10px] lg:mr-9 md:mr-3`}
          onClick={() => setActivePage('/products')}
        >
          PRODUCTS
        </NavLink>

        <Popover
          as="div"
          className="relative group inline-block text-left lg:text-[14px] md:text-[10px] lg:mr-9 md:mr-3"
        >
          <div
            onMouseEnter={() => setIsShowing(true)}
            onMouseLeave={() => setIsShowing(false)}
          >
            <Popover.Button
              type="popover-button"
              className={`inline-flex w-full justify-center   gap-x-2  focus:bg-backgound  bg-background px-3 py-0 lg:text-[14px] md:text-[10px]  ${
                activePage === '/clients' ? 'text-primary' : 'black2'
              }   hover:bg-background focus:ring-none hover:text-secondary `}
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              CLIENTS
              <svg
                className="-mr-1 lg:h-5 md:h-3 lg:w-5 md:w-3 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </Popover.Button>
          </div>

          <Transition
            show={isShowing}
            onMouseEnter={() => setIsShowing(true)}
            onMouseLeave={() => setIsShowing(false)}
            as={Fragment}
          >
            <div>
              <Popover.Panel
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right  rounded-md bg-white   ring-opacity-5 focus:outline-none "
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <Popover.Panel>
                    <Link
                      to="/clients/agencies"
                      className="text-gray-700 block  px-4 py-2 mb-2 text-sm hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                      onClick={() => setActivePage('/clients')}
                    >
                      Government Agencies
                    </Link>
                  </Popover.Panel>

                  <Popover.Panel>
                    <Link
                      to="/clients/financial"
                      className="text-gray-700 block px-4 py-2   mb-2 text-sm hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-1"
                      onClick={() => setActivePage('/clients')}
                    >
                      Financial Sector
                    </Link>
                  </Popover.Panel>
                  <Popover.Panel>
                    <Link
                      to="/clients/telecoms"
                      className="text-gray-700 block px-4 py-2  mb-2 text-sm hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-2"
                      onClick={() => setActivePage('/clients')}
                    >
                      Telecoms Sector{' '}
                    </Link>
                  </Popover.Panel>

                  <Popover.Panel>
                    <Link
                      to="/clients/sme"
                      className="text-gray-700 block px-4  py-2 mb-2 text-sm hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-3"
                      onClick={() => setActivePage('/clients')}
                    >
                      SME{' '}
                    </Link>
                  </Popover.Panel>
                  <Popover.Panel>
                    <Link
                      to="/clients/goods"
                      className="text-gray-700 block px-4  py-2 mb-2 text-sm  hover:bg-primary hover:text-white"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-4"
                      onClick={() => setActivePage('/clients')}
                    >
                      Consumer Goods{' '}
                    </Link>
                  </Popover.Panel>
                </div>
              </Popover.Panel>
            </div>
          </Transition>
        </Popover>
        <NavLink
          to="/news"
          className={`font-inter font-normal cursor-pointer text-[14px] hover:text-secondary lg:text-[14px] md:text-[10px] lg:mr-9 md:mr-3  ${
            activePage === '/news' ? 'text-primary' : 'black2'
          }`}
          onClick={() => setActivePage('/news')}
        >
          NEWS
        </NavLink>
        <NavLink
          to="/contacts"
          className={`font-inter font-normal cursor-pointer lg:text-[14px] md:text-[10px] text-secondary lg:-mr-20 md:-mr-20  ${
            activePage === '/contacts' ? 'text-primary' : 'black2'
          }
`}
          onClick={() => setActivePage('/contacts')}
        >
          CONTACT US
        </NavLink>
      </div>

      <div className="md:hidden   flex flex-1 justify-end w-full h-full      items-center bg-background ">
        <img
          src={`${toggle && !showMobileNav ? close : menu} `}
          className={` w-[28px] h-[28px] object-contain`}
          onClick={() => {
            setToggle((prev) => !prev);
            setShowMobileNav(false);
          }}
          alt="menu"
        />
        <div
          className={`p-6  absolute bg-background w-full h-[1200px]   top-20 pl-2 duration-500 py-24    ${
            toggle ? ' flex right-0 ' : 'right-[-100%]  hidden  '
          }  ${showMobileNav ? 'hidden' : ''} `}
        >
          <div
            className={`list-none px-3 text-left    flex-col justify-start items-start flex flex-1 -mt-12`}
          >
            <NavLink
              to="/"
              className=" cursor-pointer font-inter font-normal text-[12px] hover:text-primary mr-10 mb-6 "
              onClick={() => setShowMobileNav(true)}
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              className="cursor-pointer font-inter font-normal text-[12px] hover:text-primary mr-10 mb-4"
              onClick={() => setShowMobileNav(true)}
            >
              ABOUT US
            </NavLink>
            <div>
              <div
                onClick={() => setIsList(!isList)}
                className="w-64 p-4 -ml-4   mb-4  font-inter font-normal text-[12px] text-gray-800 flex items-center justify-between cursor-pointer"
              >
                SERVICES
                <div>
                  {isList ? (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 320 512"
                      >
                        <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
                      </svg>
                    </div>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 256 512"
                      >
                        <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                      </svg>{' '}
                    </>
                  )}
                </div>
              </div>
              {isList && (
                <div className="w-64 -mt-5 p-4 ">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <svg
                        className="hidden"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 3L7.5 6L4.5 9"
                          stroke="#4B5563"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="pl-4 -mt-4 -ml-10 flex items-center">
                        <div className="text-sm leading-normal ml-2 text-gray-800">
                          {' '}
                          <div>
                            <div
                              onClick={() => setIsListed(!isListed)}
                              className="w-64 p-4 -mt-4 -ml-4 cursor-pointer font-inter font-normal text-[12px] text-gray-800 flex items-center  justify-between "
                            >
                              Business Consulting{' '}
                              <div>
                                {isListed ? (
                                  <div>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      height="1em"
                                      viewBox="0 0 320 512"
                                    >
                                      <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
                                    </svg>{' '}
                                  </div>
                                ) : (
                                  <div>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      height="1em"
                                      viewBox="0 0 256 512"
                                    >
                                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                                    </svg>{' '}
                                  </div>
                                )}
                              </div>
                            </div>
                            {isListed && (
                              <div className="w-64 -mt-4 p-4  -pt-8 -ml-5 bg-background ">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                    <div className=" flex items-center">
                                      <div className="text-[12px] leading-normal ml-2 text-gray-800">
                                        <NavLink
                                          onClick={() => setShowMobileNav(true)}
                                          to="/services/implementations"
                                        >
                                          {' '}
                                          Implementation Services{' '}
                                        </NavLink>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="pl-4 -ml-8 pt-3">
                                  <div className="flex items-center justify-between">
                                    <div className="pl-4 flex items-center">
                                      <div className="text-[12px] leading-normal ml-2 text-gray-800">
                                        <NavLink
                                          onClick={() => setShowMobileNav(true)}
                                          to="/services/project"
                                        >
                                          {' '}
                                          Project Management{' '}
                                        </NavLink>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="pl-4 -ml-8 pt-3">
                                  <div className="flex items-center justify-between">
                                    <div className="pl-4 flex items-center">
                                      <div className="text-[12px] leading-normal ml-2 text-gray-800">
                                        <NavLink
                                          to="/services/research"
                                          onClick={() => setShowMobileNav(true)}
                                        >
                                          {' '}
                                          User Experience Research{' '}
                                        </NavLink>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="pl-4 -ml-8 pt-3">
                                  <div className="flex items-center justify-between">
                                    <div className="pl-4 flex items-center">
                                      <div className="text-[12px] leading-normal ml-2 text-gray-800">
                                        <NavLink
                                          to="/services/market"
                                          onClick={() => setShowMobileNav(true)}
                                        >
                                          {' '}
                                          Market Surveys{' '}
                                        </NavLink>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="pl-4 -ml-8 pt-3">
                                  <div className="flex items-center justify-between">
                                    <div className="pl-4 flex items-center">
                                      <div className="text-[12px] leading-normal ml-2 text-gray-800">
                                        <NavLink
                                          to="/services/feasibility"
                                          onClick={() => setShowMobileNav(true)}
                                        >
                                          {' '}
                                          Feasibility Studies{' '}
                                        </NavLink>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-4  -ml-14">
                    <div className="flex items-center justify-between ">
                      <div className="pl-4 flex items-center">
                        <div className="text-[12px] leading-normal ml-2 text-gray-800">
                          <NavLink
                            onClick={() => setShowMobileNav(true)}
                            to="/services/software"
                          >
                            {' '}
                            Software Development{' '}
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-4 pt-3 -ml-14">
                    <div className="flex items-center justify-between">
                      <div className="pl-4 flex items-center">
                        <div className="text-[12px] leading-normal ml-2 text-gray-800">
                          <NavLink
                            to="/services/sas"
                            onClick={() => setShowMobileNav(true)}
                          >
                            {' '}
                            SAS Analytics
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-4 pt-3 -ml-14">
                    <div className="flex items-center justify-between">
                      <div className="pl-4 flex items-center">
                        <div className="text-[12px] leading-normal ml-2 text-gray-800">
                          <NavLink
                            to="/services/egain"
                            onClick={() => setShowMobileNav(true)}
                          >
                            {' '}
                            eGain Collaboration{' '}
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-4 pt-3 -ml-14">
                    <div className="flex items-center justify-between">
                      <div className="pl-4 flex items-center">
                        <div className="text-[12px] leading-normal ml-2 text-gray-800">
                          <NavLink
                            to="/services/knowledge"
                            onClick={() => setShowMobileNav(true)}
                          >
                            {' '}
                            eGain Knowledge
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-4 pt-3 -ml-14">
                    <div className="flex items-center justify-between">
                      <div className="pl-4 flex items-center">
                        <div className="text-[12px] leading-normal ml-2 text-gray-800">
                          <NavLink
                            to="/services/media"
                            onClick={() => setShowMobileNav(true)}
                          >
                            {' '}
                            Social Media Management{' '}
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pl-4 pt-3 -ml-14">
                    <div className="flex items-center justify-between">
                      <div className="pl-4 flex items-center">
                        <div className="text-[12px] leading-normal ml-2 text-gray-800">
                          <NavLink
                            to="/services/web"
                            onClick={() => setShowMobileNav(true)}
                          >
                            {' '}
                            Web Development{' '}
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/products"
              className="cursor-pointer font-inter font-normal text-[12px] hover:text-primary mr-10 mb-4"
              onClick={() => setShowMobileNav(true)}
            >
              PRODUCTS
            </NavLink>
            <div>
              <div
                onClick={() => setIsListed(!isListed)}
                className="w-64 p-4 -ml-4 cursor-pointer font-inter font-normal text-[12px] text-gray-800 flex items-center  mb-4 justify-between cursor-pointer"
              >
                CLIENTS
                <div>
                  {isListed ? (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 320 512"
                      >
                        <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
                      </svg>{' '}
                    </div>
                  ) : (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 256 512"
                      >
                        <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                      </svg>{' '}
                    </div>
                  )}
                </div>
              </div>
              {isListed && (
                <div className="w-64 -mt-8 p-4  -pt-8 -ml-5 bg-background ">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className=" flex items-center">
                        <p className="text-sm leading-normal ml-2 text-gray-800">
                          <NavLink
                            onClick={() => setShowMobileNav(true)}
                            to="/clients/agencies"
                          >
                            {' '}
                            Government Agencies{' '}
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pl-4 -ml-8 pt-3">
                    <div className="flex items-center justify-between">
                      <div className="pl-4 flex items-center">
                        <p className="text-sm leading-normal ml-2 text-gray-800">
                          <NavLink
                            onClick={() => setShowMobileNav(true)}
                            to="/clients/financial"
                          >
                            {' '}
                            Financial Sector
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pl-4 -ml-8 pt-3">
                    <div className="flex items-center justify-between">
                      <div className="pl-4 flex items-center">
                        <p className="text-sm leading-normal ml-2 text-gray-800">
                          <NavLink
                            to="/clients/telecoms"
                            onClick={() => setShowMobileNav(true)}
                          >
                            Telecomms Sector{' '}
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pl-4 -ml-8 pt-3">
                    <div className="flex items-center justify-between">
                      <div className="pl-4 flex items-center">
                        <p className="text-sm leading-normal ml-2 text-gray-800">
                          <NavLink
                            onClick={() => setShowMobileNav(true)}
                            to="/clients/sme"
                          >
                            {' '}
                            SME{' '}
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pl-4 -ml-8 pt-3">
                    <div className="flex items-center justify-between">
                      <div className="pl-4 flex items-center">
                        <p className="text-sm leading-normal ml-2 text-gray-800">
                          <NavLink
                            onClick={() => setShowMobileNav(true)}
                            to="/clients/goods"
                          >
                            {' '}
                            Consumer Goods{' '}
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <NavLink
              to="/news"
              className=" cursor-pointer font-inter font-normal text-[12px] hover:text-primary mb-6"
              onClick={() => setShowMobileNav(true)}
            >
              NEWS
            </NavLink>
            <NavLink
              to="/contacts"
              className="cursor-pointer font-inter font-normal text-[12px] hover:text-primary mb-0 text-secondary"
              onClick={() => setShowMobileNav(true)}
            >
              CONTACT US
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
