import {
  AZURE,
  BESANT,
  CICD,
  DEVOPS,
  EDULEEM,
  G4G,
  GETTOHIRE,
  GTH,
  PORTFOLIO,
  awsAbout,
  aws as awsIcon,
  docker,
  git,
  jenkins,
  jio,
  kubernetes,
  reactjs,
  terraform
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "experience", title: "Experience" },
  { id: "certifications", title: "Certifications" },
  { id: "contact", title: "Contact" },
];

export const certifications = [
  {
    title: "DevOps Training",
    organization: "Besant Technologies",
    issueDate: "Nov 2024",
    credentialId: "BDZ119640",
    credentialLink: "#",
    image: BESANT,
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
    image: EDULEEM,
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
    title: "Microsoft Certified Azure Fundamentals",
    organization: "Microsoft",
    issueDate: "Mar 2022",
    credentialId: "RP4X-4TVv",
    credentialLink: "#",
    image: AZURE,
    skills: [
      { name: "Azure", color: "text-blue-500" },
      { name: "Cloud Computing", color: "text-purple-500" },
      { name: "Azure Services", color: "text-cyan-500" },
    ],
  },
];

const services = [
  { title: "DevOps Engineer", icon: DEVOPS },
  { title: "Cloud Architect", icon: awsAbout },
  { title: "CI/CD Specialist", icon: CICD },
  { title: "Frontend Developer", icon: reactjs },
];

const technologies = [
  { name: "AWS", icon: awsIcon },
  { name: "Docker", icon: docker },
  { name: "Kubernetes", icon: kubernetes },
  { name: "React JS", icon: reactjs },
  { name: "Jenkins", icon: jenkins },
  { name: "Terraform", icon: terraform },
  { name: "ELK Stack", icon: git },
];

const experiences = [
  {
    title: "DevOps Engineer",
    company_name: "GetToHire.com",
    icon: GTH,
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
    icon: jio,
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
    description:
      "Dynamic job portal built on a client-server architecture using React for the frontend and Node.js for the backend. Hosted on AWS EC2 with MongoDB as the database, the platform features CI/CD pipelines using Jenkins and Docker for seamless deployment.",
    tags: [
      { name: "AWS", color: "blue-text-gradient" },
      { name: "Jenkins", color: "purple-text-gradient" },
      { name: "MongoDB", color: "orange-text-gradient" },
    ],
    image: GETTOHIRE,
    source_code_link: "https://github.com/Mayur-wagh4/",
    website_link: "http://www.gettohire.com/",
  },
  {
    name: "Get4Grow.com",
    description:
      "Static website designed to provide business growth services, hosted on AWS S3 with highly optimized performance. Built with React for a modern UI, the project includes automated CI/CD pipelines using GitHub Actions to streamline deployments.",
    tags: [
      { name: "AWS", color: "blue-text-gradient" },
      { name: "React", color: "purple-text-gradient" },
      { name: "CI/CD", color: "pink-text-gradient" },
    ],
    image: G4G,
    source_code_link: "https://github.com/Mayur-wagh4/",
    website_link: "http://www.get4grow.com/",
  },
  {
    name: "Mayurwagh.in",
    description:
      "A personal portfolio website showcasing skills, projects, and certifications. Built using React and hosted on AWS Amplify for robust and scalable deployment. The website includes an automated update pipeline triggered by Git pushes.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "AWSAmplify", color: "purple-text-gradient" },
      { name: "Jest", color: "pink-text-gradient" },
    ],
    image: PORTFOLIO,
    source_code_link: "https://github.com/Mayur-wagh4/",
    website_link: "https://mayurwagh.in/",
  },
];

export { Skills, experiences, projects, services, technologies };

