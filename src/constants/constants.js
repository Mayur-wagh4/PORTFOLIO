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
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  }
];


export const certifications = [
  {
    title: "DevOps Training",
    organization: "Besant Technologies",
    issueDate: "Nov 2024",
    credentialId: "BDZ119640",
    credentialLink: "#",
    image: "/path-to-devops-cert-image.png",
    skills: [
      { name: "DevOps", color: "text-blue-500" },
      { name: "Docker", color: "text-cyan-500" },
      { name: "Terraform", color: "text-purple-500" },
      { name: "Ansible", color: "text-red-500" },
      { name: "CI/CD", color: "text-green-500" },
      { name: "Python", color: "text-yellow-500" },
      { name: "Bash", color: "text-gray-500" },
    ],
  },
  {
    title: "AWS Solution Architect Associate",
    organization: "Eduleem School Of Design & IT",
    issueDate: "Aug 2024",
    credentialLink: "#",
    image: "/path-to-aws-cert-image.png",
    skills: [
      { name: "AWS", color: "text-orange-500" },
      { name: "Lambda", color: "text-purple-500" },
      { name: "IAM", color: "text-blue-500" },
      { name: "EC2", color: "text-green-500" },
      { name: "S3", color: "text-yellow-500" },
      { name: "CloudFormation", color: "text-cyan-500" },
      { name: "CLI", color: "text-gray-500" },
    ],
  },
  {
    title: "Data Structure And Algorithms",
    organization: "Coding Ninjas",
    issueDate: "Jan 2023",
    credentialLink: "#",
    image: "/path-to-dsa-cert-image.png",
    skills: [
      { name: "Data Structures", color: "text-green-500" },
      { name: "Algorithms", color: "text-blue-500" },
      { name: "Java", color: "text-orange-500" },
    ],
  },
  {
    title: "Microsoft Certified Azure Fundamentals",
    organization: "Microsoft",
    issueDate: "Mar 2022",
    credentialId: "RP4X-4TVv",
    credentialLink: "#",
    image: "/path-to-azure-cert-image.png",
    skills: [
      { name: "Azure", color: "text-blue-500" },
      { name: "Cloud Computing", color: "text-purple-500" },
      { name: "Azure Services", color: "text-cyan-500" },
    ],
  },
  {
    title: "Java Software Programming & MVC",
    organization: "TechnoKraft Training & Solution PVT. LTD.",
    issueDate: "Nov 2021",
    credentialLink: "#",
    image: "/path-to-java-cert-image.png",
    skills: [
      { name: "Java", color: "text-orange-500" },
      { name: "MVC", color: "text-green-500" },
      { name: "Programming", color: "text-blue-500" },
    ],
  },
  {
    title: "Brainwave Robotics",
    organization: "Innovians Technologies",
    issueDate: "Sep 2019",
    credentialLink: "#",
    image: "/path-to-robotics-cert-image.png",
    skills: [
      { name: "IoT", color: "text-purple-500" },
      { name: "Robotics", color: "text-blue-500" },
    ],
  }
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
      { name: "Jenkins", color: "purple-text-gradient" },
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
      { name: "React", color: "purple-text-gradient" },
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
      { name: "AWSAmplify", color: "purple-text-gradient" },
      { name: "Jest", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/Mayur-wagh4/",
    website_link: "https://mayurwagh.in/",
  },
];

export { experiences, projects, services, Skills, technologies };
