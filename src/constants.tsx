import eCom365Logo from "./assets/company/ecom365.webp";
import antsomiLogo from "./assets/company/antsomi.png";
import metasolutionsLogo from "./assets/company/metasolutions.jpeg";

export const navLinks = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Work",
    href: "#work",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const services = [
  {
    name: "Web Development",
    icon: "💻",
    description:
      "I build websites using modern technologies like React, Next.js, and Gatsby.",
  },
  {
    name: "Freelancer",
    icon: "👨‍💻",
    description:
      "I am available for freelance work. Connect with me via email or LinkedIn.",
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
      "Collaborating with cross-functional teams, including UI/UX designers and back-end developers to develop high-quality, scalable, and maintainable web app.",
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

const projects = [];
