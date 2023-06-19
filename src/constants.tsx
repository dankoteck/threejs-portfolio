// Company Logos
import eCom365Logo from "./assets/company/ecom365.webp";
import antsomiLogo from "./assets/company/antsomi.png";
import metasolutionsLogo from "./assets/company/metasolutions.jpeg";

// Tech Icons
import HTMLIcon from "./assets/tech/html.png";
import CSSIcon from "./assets/tech/css.png";
import JSIcon from "./assets/tech/javascript.png";
import TSIcon from "./assets/tech/typescript.png";
import ReactIcon from "./assets/tech/reactjs.png";
import ReduxIcon from "./assets/tech/redux.png";
import GitIcon from "./assets/tech/git.png";
import TailwindIcon from "./assets/tech/tailwind.png";
import FigmaIcon from "./assets/tech/figma.png";
import NextIcon from "./assets/tech/nextjs.png";
import ThreejsIcon from "./assets/tech/threejs.svg";
import MongoIcon from "./assets/tech/mongodb.png";
import VSCodeIcon from "./assets/tech/vscode.png";
import PostmanIcon from "./assets/tech/postman.png";
import GithubIcon from "./assets/tech/github.png";

// Projects Thumbnail
import ecommerceThumbnail from "./assets/projects-thumbnail/ecommerce.png";
import airbnbCloneThumbnail from "./assets/projects-thumbnail/airbnb-clone.png";
import threejsPortfolioThumbnail from "./assets/projects-thumbnail/threejs-portfolio.png";

// Services Images
import webDevelopmentImage from "./assets/services/web-development.png";
import webUIUXImage from "./assets/services/web-uiux.png";

export const navLinks = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Works",
    href: "#works",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const services = [
  {
    name: "Web Development",
    image: (
      <img
        className="block w-auto h-auto"
        src={webDevelopmentImage}
        alt="Service: Web Development"
      />
    ),
    description:
      "Creating tailor-made websites and applications to help clients achieve their online goals.",
  },
  {
    name: "Web UI/UX Design",
    image: (
      <img
        className="block w-auto h-auto"
        src={webUIUXImage}
        alt="Service: Web UI/UX Design"
      />
    ),
    description:
      "Crafting intuitive and visually appealing user experiences that captivate and engage.",
  },
];

export const works = [
  {
    title: "Mid Front-end Developer",
    subtitle: "Metadata Solutions",
    date: "06/2023 - Present",
    responsibility: ["I'm currently working here"],
    image: (
      <img
        className="rounded-full"
        src={metasolutionsLogo}
        alt="Metadata Solutions"
      />
    ),
  },
  {
    title: "Jr. Front-end Developer",
    subtitle: "eCom365",
    date: "06/2022 - 06/2023 (1 year)",
    responsibility: [
      "Using Ant Design to build scalable and reusable  React components.",
      "Conducting code reviews and providing feedback to team members to ensure code quality and consistency.",
      "Participating in project planning and estimation to deliver work on time and within budget.",
      "Contributing to all modules of the HRM application, including Employee Management, Time Off, Reports, Dashboard, Timekeeping and Salary.",
      // "Collaborating with cross-functional teams, including UI/UX designers and back-end developers to develop high-quality, scalable, and maintainable web app.",
    ],
    image: (
      <img className="rounded-full mt-[25%]" src={eCom365Logo} alt="eCom365" />
    ),
  },
  {
    title: "Intern Front-end Developer",
    subtitle: "ANTSOMI",
    date: "06/2019 - 02/2020 (9 months)",
    responsibility: [
      "Learning about Customer Data Platforms (CDPs), Omni-Channel, and Cross-Channel actions.",
      "Supporting team members to improve the CSS codebase structure.",
      "Collaborating with the UX team to implement a new design system, resulting in a consistent and cohesive UI/UX.",
      "Developing a cross-browser compatible website that supports all modern browsers.",
    ],
    image: (
      <img className="mt-[35%] rounded-full" src={antsomiLogo} alt="ANTSOMI" />
    ),
  },
];

export const skills = [
  HTMLIcon,
  CSSIcon,
  JSIcon,
  TSIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  MongoIcon,
  NextIcon,
];

export const tools = [GitIcon, FigmaIcon, VSCodeIcon, PostmanIcon, GithubIcon];

export const projects = [
  {
    title: "Ecommerce App",
    subtitle: "Next.js Project",
    description:
      "An Ecommerce App built with Next.js and Tailwind CSS. Deployed on Vercel.",
    thumbnail: <img src={ecommerceThumbnail} alt="Ecommerce App" />,
    visitLink: "https://extremely-advanced-ecommerce-maybe.vercel.app/",
    sourceLink: "https://github.com/lekhoa011159CloneShowcase/ecommerce-app",
    tags: ["Next.js", "Tailwind", "React", "Vercel"],
    image: <img className="rounded-full invert" src={NextIcon} alt="Next.js" />,
  },
  {
    title: "Airbnb Clone",
    subtitle: "Next.js Project",
    description:
      "An Airbnb Clone built with Next.js and Tailwind CSS. Deployed on Vercel.",
    thumbnail: <img src={airbnbCloneThumbnail} alt="Airbnb Clone" />,
    visitLink: "https://airbnb-clone-full-options.vercel.app/",
    sourceLink:
      "https://github.com/lekhoa011159CloneShowcase/airbnb-clone-full-options",
    tags: ["Next.js", "Tailwind", "React", "Vercel"],
    image: <img className="rounded-full invert" src={NextIcon} alt="Next.js" />,
  },
  {
    title: "Three.js Portfolio",
    subtitle: "Three.js Project",
    description:
      "An Threejs portfolio built with React and animations using Three.js. Deployed on Vercel.",
    thumbnail: <img src={threejsPortfolioThumbnail} alt="Three.js Portfolio" />,
    visitLink: "https://threejs-portfolio-dusky.vercel.app/",
    sourceLink:
      "https://github.com/lekhoa011159CloneShowcase/threejs-portfolio",
    tags: ["React", "Animation", "Tailwind", "Three.js"],
    image: (
      <img className="rounded-full invert" src={ThreejsIcon} alt="Three.js" />
    ),
  },
];
