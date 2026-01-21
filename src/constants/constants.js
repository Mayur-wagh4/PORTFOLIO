import {
  AZURE,
  BESANT,
  CICD,
  EDULEEM,
  G4G,
  GETTOHIRE,
  GTH,
  PORTFOLIO,
  ansible,
  aws,
  aws as awsIcon,
  docker,
  git,
  jenkins,
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
  {
    title: "Enterprise Cloud Architecture & Migration",
    icon: terraform,
  },
  {
    title: "Production-Grade CI/CD & GitOps",
    icon: jenkins,
  },
  {
    title: "Kubernetes Orchestration & Observability",
    icon: kubernetes,
  },
];

const technologies = [
  { name: "AWS", icon: awsIcon },
  { name: "Docker", icon: docker },
  { name: "Kubernetes", icon: kubernetes },
  { name: "GitLab CI/CD", icon: git },
  { name: "Jenkins", icon: jenkins },
  { name: "Terraform", icon: terraform },
  { name: "Prometheus", icon: kubernetes },
];

const experiences = [
  {
    title: "DevOps Engineer",
    company_name: "Experience Commerce",
    icon: GTH,
    iconBg: "#383E56",
    date: "June 2025 - Present",
    points: [
      "Orchestrated zero-downtime production migration of 30+ servers and 5+ databases from Alibaba Cloud to AWS, serving a multi-tenant e-commerce platform with 100K+ daily transactions.",
      "Architected and deployed self-hosted GitLab infrastructure supporting 10+ development teams with 20+ automated CI/CD pipelines, reducing deployment cycles from 2 hours to 15 minutes (87.5% improvement).",
      "Engineered comprehensive observability stack using Prometheus and Grafana across 40+ production servers with 50+ intelligent alerts, achieving proactive incident detection and 99.9% uptime SLA.",
      "Optimized cloud infrastructure costs by 30% through strategic EC2 rightsizing, autoscaling policies, and intelligent S3 lifecycle management of 500GB+ datasets.",
      "Implemented enterprise-grade security architecture including IAM role-based access, VPC network segmentation, WAF rules, and managed 25+ SSL/TLS certificates across multiple domains.",
      "Containerized 15+ legacy applications using Docker and Nginx, standardizing deployment patterns and enabling horizontal scaling capabilities.",
    ],
  },
  {
    title: "Cloud DevOps Engineer",
    company_name: "GetToHire.com",
    icon: GTH,
    iconBg: "#383E56",
    date: "June 2023 - April 2025",
    points: [
      "Managed production AWS infrastructure supporting high-traffic microservices architecture, maintaining 99.9% uptime and handling 50K+ concurrent users.",
      "Built and maintained 15+ production CI/CD pipelines using Jenkins, Docker, and GitHub Actions, reducing deployment time by 70% and enabling daily releases.",
      "Implemented Infrastructure as Code using Terraform and Ansible, automating provisioning of 50+ EC2 instances and reducing manual configuration effort by 50%.",
      "Deployed and scaled containerized workloads on AWS EKS, managing 20+ microservices with auto-scaling, load balancing, and service mesh integration.",
      "Established comprehensive monitoring and logging infrastructure using Prometheus, Grafana, and ELK Stack, reducing MTTR by 40%.",
      "Hardened cloud security posture through IAM policies, Security Groups, AWS WAF, SSL/TLS implementation, and regular compliance audits.",
    ],
  },
  {
    title: "DevOps Intern",
    company_name: "GetToHire.com",
    icon: GTH,
    iconBg: "#383E56",
    date: "Feb 2023 - May 2023",
    points: [
      "Developed automated CI/CD pipelines for microservices deployment, integrating code quality checks and security scanning.",
      "Containerized applications using Docker and deployed to AWS ECS and EKS environments with automated rollback capabilities.",
      "Implemented cloud monitoring solutions using CloudWatch, Prometheus, and ELK Stack for real-time performance tracking.",
      "Created Terraform modules for provisioning AWS resources including EC2, S3, RDS, and VPC networking components.",
      "Enhanced infrastructure security through IAM policy design, Security Group configuration, and AWS WAF rule implementation.",
    ],
  },
];
const Skills = [
  // Cloud Platforms & Architecture
  { name: "AWS", level: "expert", category: "Cloud" },
  { name: "Alibaba Cloud", level: "expert", category: "Cloud" },
  { name: "Multi-Cloud Strategy", level: "expert", category: "Cloud" },
  { name: "Cloud Migration", level: "expert", category: "Cloud" },
  { name: "Cost Optimization", level: "expert", category: "Cloud" },

  // Container & Orchestration
  { name: "Docker", level: "expert", category: "Container" },
  { name: "Kubernetes", level: "expert", category: "Container" },
  { name: "AWS EKS", level: "expert", category: "Container" },
  { name: "Helm", level: "intermediate", category: "Container" },
  { name: "Service Mesh", level: "intermediate", category: "Container" },

  // Infrastructure as Code
  { name: "Terraform", level: "expert", category: "IaC" },
  { name: "Ansible", level: "intermediate", category: "IaC" },
  { name: "CloudFormation", level: "intermediate", category: "IaC" },

  // CI/CD & GitOps
  { name: "GitLab CI/CD", level: "expert", category: "CI/CD" },
  { name: "Jenkins", level: "expert", category: "CI/CD" },
  { name: "GitHub Actions", level: "intermediate", category: "CI/CD" },
  { name: "ArgoCD", level: "intermediate", category: "CI/CD" },

  // Monitoring & Observability
  { name: "Prometheus", level: "expert", category: "Monitoring" },
  { name: "Grafana", level: "expert", category: "Monitoring" },
  { name: "ELK Stack", level: "intermediate", category: "Monitoring" },
  { name: "CloudWatch", level: "intermediate", category: "Monitoring" },

  // Security & Compliance
  { name: "IAM & RBAC", level: "expert", category: "Security" },
  { name: "SSL/TLS", level: "expert", category: "Security" },
  { name: "AWS WAF", level: "intermediate", category: "Security" },
  { name: "Security Hardening", level: "expert", category: "Security" },

  // Automation
  { name: "Python", level: "intermediate", category: "Automation" },
  { name: "Bash/Shell", level: "expert", category: "Automation" },
  { name: "Git", level: "expert", category: "Automation" },
];
const projects = [
  {
    name: "Enterprise Multi-Cloud Migration Platform",
    description:
      "Production-grade cloud migration framework that successfully migrated 30+ servers, 5+ databases, and 500GB+ data from Alibaba Cloud to AWS with zero downtime, including automated DNS cutover and rollback capabilities.",
    tags: [
      { name: "AWS", color: "blue-text-gradient" },
      { name: "Alibaba Cloud", color: "purple-text-gradient" },
      { name: "Migration Strategy", color: "orange-text-gradient" },
      { name: "Zero Downtime", color: "green-text-gradient" },
      { name: "Disaster Recovery", color: "pink-text-gradient" },
    ],
    image: aws,
    source_code_link: "#",
    website_link: "#",
  },
  {
    name: "GitLab CI/CD Enterprise Deployment",
    description:
      "Self-hosted GitLab infrastructure serving 10+ development teams with 20+ production pipelines, featuring automated testing, security scanning, containerization, and deployment orchestration reducing release cycles by 87.5%.",
    tags: [
      { name: "GitLab", color: "blue-text-gradient" },
      { name: "CI/CD", color: "purple-text-gradient" },
      { name: "Docker", color: "orange-text-gradient" },
      { name: "Automation", color: "green-text-gradient" },
      { name: "DevSecOps", color: "pink-text-gradient" },
    ],
    image: CICD,
    source_code_link: "#",
    website_link: "#",
  },
  {
    name: "Production Observability & Monitoring Stack",
    description:
      "Enterprise-grade monitoring infrastructure using Prometheus and Grafana across 40+ production servers with 50+ intelligent alerts, custom dashboards, and automated incident response reducing MTTR by 60%.",
    tags: [
      { name: "Prometheus", color: "blue-text-gradient" },
      { name: "Grafana", color: "purple-text-gradient" },
      { name: "Alerting", color: "orange-text-gradient" },
      { name: "Observability", color: "green-text-gradient" },
      { name: "SRE", color: "pink-text-gradient" },
    ],
    image: kubernetes,
    source_code_link: "#",
    website_link: "#",
  },
  {
    name: "AI-Driven Self-Healing Kubernetes Platform",
    description:
      "Production-grade AIOps platform that uses machine learning to detect anomalies in Kubernetes metrics and automatically triggers self-healing actions like pod restarts and autoscaling based on predictive analysis.",
    tags: [
      { name: "AIOps", color: "blue-text-gradient" },
      { name: "Kubernetes", color: "purple-text-gradient" },
      { name: "Machine Learning", color: "orange-text-gradient" },
      { name: "Auto-Healing", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],
    image: kubernetes,
    source_code_link: "https://github.com/Mayur-wagh4/aiops-self-healing-k8s",
    website_link: "https://github.com/Mayur-wagh4/aiops-self-healing-k8s",
  },
  {
    name: "Cost Optimization & FinOps Platform",
    description:
      "Automated cloud cost optimization system that reduced infrastructure spend by 30% through intelligent EC2 rightsizing, autoscaling optimization, S3 lifecycle policies, and real-time cost anomaly detection.",
    tags: [
      { name: "FinOps", color: "blue-text-gradient" },
      { name: "AWS", color: "purple-text-gradient" },
      { name: "Cost Optimization", color: "orange-text-gradient" },
      { name: "Automation", color: "green-text-gradient" },
      { name: "Analytics", color: "pink-text-gradient" },
    ],
    image: aws,
    source_code_link: "#",
    website_link: "#",
  },
  {
    name: "Predictive Auto-Scaling using AIOps",
    description:
      "AI-powered predictive scaling system that analyzes historical traffic patterns and system metrics to proactively scale Kubernetes workloads before performance degradation, reducing resource waste by 25%.",
    tags: [
      { name: "Predictive Analytics", color: "blue-text-gradient" },
      { name: "AWS EKS", color: "purple-text-gradient" },
      { name: "Prometheus", color: "orange-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "HPA", color: "pink-text-gradient" },
    ],
    image: kubernetes,
    source_code_link: "https://github.com/Mayur-wagh4/predictive-autoscaling-aiops",
    website_link: "https://github.com/Mayur-wagh4/predictive-autoscaling-aiops",
  },
  {
    name: "Enterprise Security & Compliance Automation",
    description:
      "Comprehensive security automation framework managing 25+ SSL certificates, 100+ DNS records, IAM policies across 50+ resources, VPC security groups, and WAF rules with automated compliance reporting.",
    tags: [
      { name: "Security", color: "blue-text-gradient" },
      { name: "IAM", color: "purple-text-gradient" },
      { name: "SSL/TLS", color: "orange-text-gradient" },
      { name: "Compliance", color: "green-text-gradient" },
      { name: "Automation", color: "pink-text-gradient" },
    ],
    image: aws,
    source_code_link: "#",
    website_link: "#",
  },
  {
    name: "Intelligent Log Analysis & Root Cause Detection",
    description:
      "AIOps-based log intelligence system using ELK Stack and machine learning to cluster logs, detect recurring failure patterns, and provide automated root cause analysis reducing investigation time by 50%.",
    tags: [
      { name: "ELK Stack", color: "blue-text-gradient" },
      { name: "AIOps", color: "purple-text-gradient" },
      { name: "Log Analytics", color: "orange-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "RCA", color: "pink-text-gradient" },
    ],
    image: aws,
    source_code_link: "https://github.com/Mayur-wagh4/aiops-log-analysis",
    website_link: "https://github.com/Mayur-wagh4/aiops-log-analysis",
  },
  {
    name: "EKS Production Infrastructure Platform",
    description:
      "Enterprise Kubernetes platform on AWS EKS with Terraform automation, featuring multi-AZ deployment, ALB integration, IAM RBAC, CloudWatch monitoring, and automated backup/recovery serving 20+ microservices.",
    tags: [
      { name: "Terraform", color: "blue-text-gradient" },
      { name: "AWS EKS", color: "purple-text-gradient" },
      { name: "Kubernetes", color: "orange-text-gradient" },
      { name: "High Availability", color: "pink-text-gradient" },
      { name: "Production-Ready", color: "green-text-gradient" },
    ],
    image: kubernetes,
    source_code_link: "https://github.com/Mayur-wagh4/EKS-InfraManager",
    website_link: "https://github.com/Mayur-wagh4/EKS-InfraManager",
  },
  {
    name: "Microservices Platform with Full Observability",
    description:
      "Production three-tier application on AWS EKS with React frontend, Node.js backend, MongoDB, featuring complete CI/CD automation, horizontal autoscaling, ALB, and integrated monitoring stack.",
    tags: [
      { name: "Microservices", color: "blue-text-gradient" },
      { name: "AWS EKS", color: "purple-text-gradient" },
      { name: "CI/CD", color: "pink-text-gradient" },
      { name: "Full-Stack", color: "green-text-gradient" },
      { name: "Observability", color: "orange-text-gradient" },
    ],
    image: kubernetes,
    source_code_link: "https://github.com/Mayur-wagh4/CloudScaleApp-EKS",
    website_link: "https://github.com/Mayur-wagh4/CloudScaleApp-EKS",
  },
];

export { Skills, experiences, projects, services, technologies };