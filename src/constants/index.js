import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: backend,
  },
  {
    title: "Data Science",
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
    name: "TypeScript",
    icon: typescript,
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
    title: "Data Scientist Virtual Internship",
    company_name: "J.P. Morgan",
    icon: "https://1000logos.net/wp-content/uploads/2020/04/J.P.-Morgan-Chase-Logo-500x281.png",
    iconBg: "#383E56",
    date: "September 2023 - On going",
    points: [
      "Established a robust stock price data feed interface and orchestrated the seamless integration of a cutting edge system for real time analysis of financial data, resulting in a 30% reduction in data latency.",
      "Achieved a remarkable 60% enhancement in model accuracy within the demanding JP Morgan environment, elevating accuracy levels from a previous range of 10‑15% to a consistent 70‑78%.",
      "This transformation empowered data driven decision making and significantly bolstered predictive capabilities, ultimately contributing to a 25% increase in investment profitability.",
      " This enhancement facilitated quicker decision making and provided traders and investors with critical insights, contributing to a 20% improvement in trading performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Hardik proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Hardik does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Hardik optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Calm Mind",
    description:
      "CalmMind is a web app that analyses the psychological and mental health conditions of an individual and provide solutions to the problems. CalmMind is a mental health solution that aims to provide users with easy access to resources related to mental wellbeing.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "https://user-images.githubusercontent.com/78292851/188284903-1e3ee4db-0612-4ab0-b463-b7be8c920c63.png",
    source_code_link: "https://github.com/AlMIGHTY-HARDIK/CalmMind",
  },
  {
    name: "Bank Management System",
    description:
      "The Command Line Bank Management System in C is a comprehensive and user-friendly software solution designed to streamline and automate various banking operations, making it an indispensable tool for both bank employees and customers. This project is built entirely in the C programming language and provides a robust, efficient, and secure platform for managing banking tasks through a command-line interface (CLI).",
    tags: [
      {
        name: "C/C++",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "command line app",
        color: "pink-text-gradient",
      },
    ],
    image: "https://www.gitkraken.com/wp-content/uploads/2022/02/CLI-stands-forHero-1024x512.png.webp",
    source_code_link: "https://github.com/AlMIGHTY-HARDIK/Bank-Management-System-in-C",
  },
  {
    name: "DragGAN",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "PyTorch",
        color: "blue-text-gradient",
      },
      {
        name: "Hugging Face",
        color: "green-text-gradient",
      },
      {
        name: "cuda",
        color: "pink-text-gradient",
      },
    ],
    image: "https://dragganaitool.com/wp-content/uploads/2023/06/DragGAN-AI-add-points-1024x536.png",
    source_code_link: "https://github.com/AlMIGHTY-HARDIK/DragGAN",
  },
];

export { services, technologies, experiences, testimonials, projects };
