import {
  backend,
  carrent,
  creator,
  javascript,
  jobit,
  mongodb,
  nodejs,
  reactjs,
  tailwind,
  threejs,
  tripguide
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Bio",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "skill",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Let's Connect",
  },
];

const services = [
  {
    title: "DevOps Engineer",
    icon: backend,
  },
  {
    title: "Cloud Architect",
    icon: creator,
  },
  {
    title: "CI/CD Specialist",
    icon: reactjs,
  },
  {
    title: "Frontend Developer",
    icon: tailwind,
  },
];

const technologies = [
  {
    name: "AWS",
    icon: backend,
  },
  {
    name: "Docker",
    icon: creator,
  },
  {
    name: "Kubernetes",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Jenkins",
    icon: javascript,
  },
  {
    name: "Terraform",
    icon: mongodb,
  },
  {
    name: "ELK Stack",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "DevOps Engineer",
    company_name: "GetToHire.com",
    icon: "none",
    iconBg: "#383E56",
    date: "July 2023 - Nov 2024",
    points: [
      "Designed and deployed a dynamic React-based platform hosted on AWS EC2.",
      "Developed CI/CD pipelines using Jenkins, Docker, and Terraform to streamline deployments.",
      "Integrated ELK Stack for enhanced monitoring and system reliability.",
      "Achieved 99.9% uptime and reduced deployment time by 70%.",
      "Implemented configuration management using Ansible for seamless updates.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Jio Platforms Limited (JPL)",
    icon: "none",
    iconBg: "#383E56",
    date: "Nov 2023 - April 2024",
    points: [
      "Developed a responsive and user-friendly inventory management system frontend using React.",
      "Implemented bulk data import functionality with Dropzone for seamless Excel file integration.",
      "Enhanced user experience with an intuitive design and real-time data updates.",
      "Collaborated with backend teams to integrate APIs efficiently.",
    ],
  },
];

const Skills = [
  { name: "AWS", level: "expert" },
  { name: "React", level: "intermediate" },
  { name: "Docker", level: "expert" },
  { name: "Kubernetes", level: "expert" },
  { name: "Jenkins", level: "intermediate" },
  { name: "Terraform", level: "intermediate" },
  { name: "Python", level: "intermediate" },
  { name: "Ansible", level: "intermediate" }, 
  { name: "Git", level: "intermediate" }, 
];

const projects = [
  {
    name: "GetToHire.com",
    description: "Dynamic React website hosted on AWS EC2 with CI/CD pipelines.",
    tags: [
      { name: "AWS", color: "blue-text-gradient" },
      { name: "Jenkins", color: "green-text-gradient" },
      { name: "ELK Stack", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/Mayur-wagh4/",
    website_link: "http://www.gettohire.com/",
  },
  {
    name: "Get4Grow.com",
    description: "Static React website hosted on AWS S3 with automated pipelines.",
    tags: [
      { name: "AWS", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "CI/CD", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Mayur-wagh4/",
    website_link: "http://www.get4grow.com/",
  },
  {
    name: "Mayurwagh.in",
    description: "Personal portfolio hosted on AWS Amplify with automated updates.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "AWS Amplify", color: "green-text-gradient" },
      { name: "Jest", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/Mayur-wagh4/",
    website_link: "https://mayurwagh.in/",
  },
];

export { experiences, projects, services, Skills, technologies };
