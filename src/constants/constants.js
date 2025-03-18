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
  ansible,
  aws,
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
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "skills", title: "Skills" },
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
  // { title: "CI/CD Specialist", icon: CICD },
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

// Enhanced Skills array with additional relevant skills
const Skills = [
  { name: "AWS", level: "expert", icon: aws },
  { name: "Docker", level: "expert", icon: docker },
  { name: "Kubernetes", level: "expert", icon: kubernetes },
  { name: "Terraform", level: "expert", icon: terraform },
  { name: "Jenkins", level: "intermediate", icon: jenkins },
  { name: "Ansible", level: "intermediate", icon: ansible },
  { name: "Git", level: "intermediate", icon: git },
  { name: "CI/CD", level: "expert", icon: CICD },
  { name: "GitHub Actions", level: "intermediate", icon: git },
  // { name: "Prometheus", level: "intermediate", icon: prometheus },
  // { name: "Grafana", level: "intermediate", icon: grafana },
  { name: "ELK Stack", level: "intermediate", icon: aws },
  // { name: "SonarQube", level: "intermediate", icon: sonarqube }
];

const projects = [
  {
    name: "GetToHire.com",
    description:
      "Dynamic job portal built on React and Node.js, hosted on AWS EC2 with MongoDB, featuring CI/CD with Jenkins and Docker.",
    tags: [
      { name: "AWS", color: "blue-text-gradient" },
      { name: "Jenkins", color: "purple-text-gradient" },
      { name: "MongoDB", color: "orange-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
    ],
    image: GETTOHIRE,
    source_code_link: "https://github.com/Mayur-wagh4/GetToHire",
    website_link: "http://www.gettohire.com/",
  },
  {
    name: "Mayurwagh.in",
    description:
      "A personal portfolio website showcasing skills, projects, and certifications. Built using React and hosted on AWS Amplify for robust, scalable deployment.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "AWS Amplify", color: "purple-text-gradient" },
      { name: "CI/CD", color: "pink-text-gradient" },
      { name: "Portfolio", color: "green-text-gradient" },
      { name: "JavaScript", color: "orange-text-gradient" },
    ],
    image: PORTFOLIO,
    source_code_link: "https://github.com/Mayur-wagh4/Porfolio",
    website_link: "https://mayurwagh.in/",
  },
  {
    name: "Get4Grow.com",
    description:
      "Static React website hosted on AWS S3 with CloudFront CDN, CI/CD automation via AWS CodePipeline, and CloudFormation-based infrastructure management.",
    tags: [
      { name: "AWS", color: "blue-text-gradient" },
      { name: "React", color: "purple-text-gradient" },
      { name: "CloudFormation", color: "pink-text-gradient" },
      { name: "CloudFront", color: "green-text-gradient" },
      { name: "AWS CodePipeline", color: "orange-text-gradient" },
    ],
    image: G4G,
    source_code_link: "https://github.com/Mayur-wagh4/Get4Grow",
    website_link: "http://www.get4grow.com/",
  },
  {
    name: "EKS-InfraManager",
    description:
      "Automates the deployment of an AWS EKS cluster using Terraform, ensuring a scalable and production-ready Kubernetes environment with IAM roles, ALB integration, and CloudWatch monitoring.",
    tags: [
      { name: "Terraform", color: "blue-text-gradient" },
      { name: "AWS EKS", color: "purple-text-gradient" },
      { name: "Kubernetes", color: "orange-text-gradient" },
      { name: "CloudWatch", color: "pink-text-gradient" },
      { name: "IAM", color: "green-text-gradient" },
    ],
    image: kubernetes,
    source_code_link: "https://github.com/Mayur-wagh4/EKS-InfraManager",
    website_link: "https://github.com/Mayur-wagh4/EKS-InfraManager",
  },
  {
    name: "CloudScaleApp-EKS",
    description:
      "Deploys a three-tier web application on AWS EKS using Kubernetes with a React frontend, Node.js backend, and MongoDB. Features CI/CD, autoscaling, and ALB integration.",
    tags: [
      { name: "Kubernetes", color: "blue-text-gradient" },
      { name: "AWS EKS", color: "purple-text-gradient" },
      { name: "CI/CD", color: "pink-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "MongoDB", color: "orange-text-gradient" },
    ],
    image: kubernetes,
    source_code_link: "https://github.com/Mayur-wagh4/CloudScaleApp-EKS",
    website_link: "https://github.com/Mayur-wagh4/CloudScaleApp-EKS",
  },
  {
    name: "InfraPro-Terraform",
    description:
      "Infrastructure as Code (IaC) project automating AWS resource provisioning, including EC2, RDS, S3, and VPC networking using Terraform.",
    tags: [
      { name: "Terraform", color: "blue-text-gradient" },
      { name: "AWS", color: "purple-text-gradient" },
      { name: "Cloud Infrastructure", color: "orange-text-gradient" },
      { name: "EC2", color: "green-text-gradient" },
      { name: "RDS", color: "pink-text-gradient" },
    ],
    image: terraform,
    source_code_link: "https://github.com/Mayur-wagh4/InfraPro-Terraform",
    website_link: "https://github.com/Mayur-wagh4/InfraPro-Terraform",
  },
  {
    name: "SecureNode-CI-CD",
    description:
      "A CI/CD pipeline for a Node.js application using Jenkins and GitHub Actions, incorporating Docker, security scanning with SonarQube, and automated Kubernetes deployments.",
    tags: [
      { name: "CI/CD", color: "blue-text-gradient" },
      { name: "Jenkins", color: "purple-text-gradient" },
      { name: "Docker", color: "orange-text-gradient" },
      { name: "SonarQube", color: "green-text-gradient" },
      { name: "GitHub Actions", color: "pink-text-gradient" },
    ],
    image: CICD,
    source_code_link: "https://github.com/Mayur-wagh4/SecureNode-CI-CD",
    website_link: "https://github.com/Mayur-wagh4/SecureNode-CI-CD",
  },
  {
    name: "K8s-MonitoringStack",
    description:
      "Comprehensive Kubernetes observability stack using Prometheus, Grafana, and cAdvisor for real-time monitoring, alerting, and performance visualization.",
    tags: [
      { name: "Kubernetes", color: "blue-text-gradient" },
      { name: "Prometheus", color: "purple-text-gradient" },
      { name: "Grafana", color: "orange-text-gradient" },
      { name: "cAdvisor", color: "green-text-gradient" },
      { name: "Monitoring", color: "pink-text-gradient" },
    ],
    image: kubernetes,
    source_code_link: "https://github.com/Mayur-wagh4/K8s-MonitoringStack",
    website_link: "https://github.com/Mayur-wagh4/K8s-MonitoringStack",
  }
];


export { Skills, experiences, projects, services, technologies };

