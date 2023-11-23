// import { access, fidlogo, stanbic, lagferry, laswa, mtn } from "../images";
import access from "../images/access.png";
import mtn from "../images/mtn.png";
import fidlogo from "../images/fidlogo.png";
import lagferry from "../images/lagferry.png";
import laswa from "../images/laswa.png";
import stanbic from "../images/stanbic.png";
import general from "../images/general.png";
// import info1 from "../images/info1.png";
// import info3 from "../images/info3.png";
// import info4 from "../images/info4.png";
import ellipse1 from "../images/Ellipse1.png";
import ellipse2 from "../images/Ellipse2.png";
// import info6 from "../images/info6.jpg";
import ellipse3 from "../images/Ellipse3.png";
const flash = "/images/flash.png";

export { default as stables } from "./stables";
export const images = {
  flash,
};

export const navLinks = [
  {
    id: "/",
    title: "HOME",
  },
  {
    id: "/about",
    title: "ABOUT US",
  },
  {
    id: "/services",
    title: "SERVICES",
  },
  {
    id: "/products",
    title: "PRODUCTS",
  },
  {
    id: "/clients",
    title: "CLIENTS",
  },
  {
    id: "/news",
    title: "NEWS",
  },
  {
    id: "/contacts",
    title: "CONTACT US",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",

    title: "Founder & Leader",
    img: ellipse1,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",

    title: "Founder & Leader",
    img: ellipse2,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",

    title: "Founder & Leader",
    img: ellipse3,
  },
];

export const footerLinks = [
  {
    title: "Services",
    links: [
      {
        name: "Business Consulting",
        link: "/services/consulting",
      },
      {
        name: "Software Development",
        link: "/services/software",
      },
      {
        name: "SAS Analytics",
        link: "/services/sas",
      },
      {
        name: "eGain Collaboration",
        link: "/services/egain",
      },
      {
        name: "eGain Knowledge",
        link: "/services/knowledge",
      },
      {
        name: "Social Media management",
        link: "/services/social",
      },
      {
        name: "Oracle Database",
        link: "/service/oracle",
      },
      {
        name: "Website Development",
        link: "/service/development",
      },
    ],
  },
  {
    title: "About Us",
    links: [
      {
        name: "About Us",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Corporate Philosophy",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Corporate Profile",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Our Partners",
        link: "https://www.hoobank.com/blog/",
      },
    ],
  },
  {
    title: "Clients",
    links: [
      {
        name: "Government agencies",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Financial sector",
        link: "https://www.hoobank.com/become-a-partner/",
      },
      {
        name: "Telecoms sector",
        link: "https://www.hoobank.com/become-a-partner/",
      },
      {
        name: "SME",
        link: "https://www.hoobank.com/become-a-partner/",
      },
      {
        name: "Consumer goods",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
  {
    title: "Address",
    links: [
      {
        name: "Penthouse 11B Kayode",

        link: "https://www.hoobank.com/become-a-partner/",
      },
      {
        name: "Otitogu Street,\n Off Admilty",

        link: "https://www.hoobank.com/become-a-partner/",
      },
      {
        name: "Road, Lekki Phase 1, Lagos",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const clients = [
  {
    id: "client-1",
    logo: mtn,
  },
  {
    id: "client-2",
    logo: stanbic,
  },
  {
    id: "client-3",
    logo: access,
  },
  {
    id: "client-4",
    logo: fidlogo,
  },
  {
    id: "client-5",
    logo: lagferry,
  },
  {
    id: "client-6",
    logo: laswa,
  },
];

export const features = [
  {
    id: "feature-1",
    icon: general,
    title: "Post by admin",
    content: "Avante partners SAS for Customer Intelligence Event",
  },
  {
    id: "feature-2",
    icon: general,
    title: "Post by admin",
    content:
      "Golive news about Fidelity Bank on eGain with a focus on social channels",
  },
  {
    id: "feature-3",
    icon: general,
    title: "Post by admin",
    content:
      "Avante Consulting Solutions has become SAS CI 360 certified and a silver partner",
  },
  {
    id: "feature-4",
    icon: general,
    title: "Post by admin",
    content: "Deployment of online accounting application for Decima and Co",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Years of experience",
    value: "10+",
  },
  {
    id: "stats-2",
    title: "Satisfied Clients",
    value: "35+",
  },
  {
    id: "stats-3",
    title: "Complete Projects",
    value: "10+",
  },
  {
    id: "stats-4",
    title: "Live products",
    value: "5+",
  },
];

export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "./",
    cName: "nav-item",
  },
  {
    id: 2,
    title: "About Us",
    path: "./about",
    cName: "nav-item",
  },
  {
    id: 3,
    title: "Services",
    path: "./services",
    cName: "nav-item",
  },
  {
    id: 4,
    title: "Products",
    path: "./products",
    cName: "nav-item",
  },
  {
    id: 5,
    title: "Clients",
    path: "./clients",
    cName: "nav-item",
  },
  {
    id: 6,
    title: "News",
    path: "./news",
    cName: "nav-item",
  },
  {
    id: 7,
    title: "Contact Us",
    path: "./contacts",
    cName: "nav-item",
  },
];

export const serviceDropdown = [
  {
    id: 1,
    title: "Business Consulting",
    path: "./services/consulting",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "Software Development",
    path: "./services/software",
    cName: "submenu-item",
  },
  {
    id: 3,
    title: "SAS Analytics",
    path: "./services/sas",
    cName: "submenu-item",
  },
  {
    id: 4,
    title: "eGain Collaboration",
    path: "./services/egain/collaboration",
    cName: "submenu-item",
  },
  {
    id: 5,
    title: "eGain Knowledge",
    path: "./services/egain/knowledge",
    cName: "submenu-item",
  },
  {
    id: 6,
    title: "social Media Management",
    path: "./services/media/management",
    cName: "submenu-item",
  },
  {
    id: 7,
    title: "Oracle Databsae",
    path: "./services/oracle",
    cName: "submenu-item",
  },
  {
    id: 8,
    title: "Website Development",
    path: "./services/web/development",
    cName: "submenu-item",
  },
];
export const clientsDropdown = [
  {
    id: 1,
    title: "Government Agencies",
    path: "./clients/agencies",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "Financial Sector",
    path: "./clients/financial",
    cName: "submenu-item",
  },
  {
    id: 3,
    title: "Telecoms Sector",
    path: "./clients/telecoms",
    cName: "submenu-item",
  },
  {
    id: 4,
    title: "SME",
    path: "./clients/sme",
    cName: "submenu-item",
  },
  {
    id: 5,
    title: "Consumer Goods",
    path: "./clients/goods",
    cName: "submenu-item",
  },
];
