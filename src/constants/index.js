import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  cariKture,
  merchit,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },

];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "MERN-Stack Developer",
    icon: creator,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Business Operations",
    company_name: "Merchit Technologies Pvt. Ltd.",
    icon: merchit,
    iconBg: "gray",
    date: "March 2024 - June 2024",
    points: [
      "Implemented website updates, integrating new product images and information to ensure accurate and compelling representation of offerings, thereby enhancing user experience and engagement.",
      "Initiated outbound calls to acquire new leads, effectively driving business growth.",
      "Build strong working relationships with influencers across social media platforms through consistent communication.",
      "Researched audience preferences and needs to improve website content and design, ensuring it matches the company's brand and goals."
    ],
  },
  {
    title: "Web Developer",
    company_name: "CariKture India Pvt. Ltd.",
    icon: cariKture,
    iconBg: "gray",
    date: "September 2022 - November 2022",
    points: [
      "Contributed to the development and maintenance of visually appealing and responsive blog sites using HTML, CSS and JavaScript.",
      "Implemented effective SEO strategies resulting in improved search engine rankings.",
      "Managed multiple blog sites, collaborating cross-functionally to address issues and implement updates for seamless website functionality.",
    ],
  },

];


const projects = [
  {
    name: "Go Blogs",
    description:
      "A web application that enables users to write blogs about the books they've read and share daily journals.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Vib-D/GoBlogs",
  },
  {
    name: "X-Social Media",
    description:
      "Reminiscent of Twitter using Next.js and TypeScript with responsive design and real-time functionalities.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Vib-D/X-SocialMedia",
  },
  {
    name: "Gourmetia",
    description:
      "Created a fully responsive restaurant landing page with a modern UI/UX using ReactJS and Figma.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "CSS-BEM-Model",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Vib-D/react_restaurant",
  },
];

export { services, technologies, experiences, projects };