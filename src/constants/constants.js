import {
  AZURE,
  BESANT,
  CICD,
  EDULEEM,
  G4G,
  EC,
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
    organization: "Besant Technologies, Bengaluru",
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
    title: "AWS Certified Solutions Architect – Associate",
    organization: "Eduleem School of IT, Bengaluru",
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
    title: "Microsoft Certified: Azure Fundamentals",
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
    icon: EC,
    iconBg: "#383E56",
    date: "June 2025 – Present (9 mos)",
    points: [
      "Migrated 40+ servers & 5+ databases from Alibaba Cloud to AWS using a controlled cutover approach, leveraging cross-account IAM roles and dedicated AWS organisation accounts per environment to ensure isolation, security, and zero-downtime transition.",
      "Set up AWS EKS; deployed workloads via Helm (Deployments, Services, Ingress); enforced RBAC + Network Policies for namespace isolation and least-privilege access.",
      "Architected self-hosted GitLab CI/CD for 10+ teams with Trivy image scanning — cut deployment cycles from 2 hrs to 15 mins (87.5% faster).",
      "Built observability stack (Zabbix, Datadog, Prometheus + Grafana) across 40+ servers with 50+ alerts — 99.9% uptime SLA and proactive incident detection.",
      "Containerised 15+ legacy apps (.NET, PHP, Drupal) with Docker + Nginx; deployed ASG + ALB + WAF for autoscaling and traffic security.",
      "Cut cloud costs 40% via EC2 rightsizing, ASG policies & S3 lifecycle rules; all environments provisioned with Terraform + Ansible.",
      "🏆 Rising Star of the Quarter — Oct–Dec 2025 | Recognised for Alibaba→AWS migration delivery, GitLab DevSecOps rollout, and cross-team impact.",
    ],
  },
  {
    title: "Cloud DevOps Engineer",
    company_name: "GetToHire.com",
    icon: GTH,
    iconBg: "#383E56",
    date: "June 2023 – April 2025 (22 mos)",
    points: [
      "Maintained production AWS infra (EC2, S3, RDS, VPC, CloudFront) — 99.9% uptime serving 50K+ concurrent users.",
      "Migrated source code to self-hosted GitLab; built GitLab CI/CD pipelines — deployment time reduced 70%, enabling daily releases.",
      "Terraform IaC for dev & staging — provisioned EC2, S3, RDS, VPC, subnets; Certbot automated SSL/TLS across multiple subdomains.",
      "Set up Zabbix + Uptime Kuma monitoring & alerting; CloudFront + S3 CDN for static assets; EC2 Security Group hardening across all environments.",
      "Prometheus + Grafana + ELK observability — MTTR reduced 40%; managed Route 53 DNS & subdomain config for 10+ projects.",
    ],
  },
  {
    title: "DevOps Intern",
    company_name: "GetToHire.com",
    icon: GTH,
    iconBg: "#383E56",
    date: "Feb 2023 – May 2023 (4 mos)",
    points: [
      "Gained hands-on exposure to EC2, S3, RDS, VPC, IAM, Route 53 — deployed applications on EC2 with Security Groups, IAM roles, and basic networking; set up Zabbix monitoring with alerts.",
      "Learned Git + GitLab for version control and CI/CD workflows; practised Docker containerisation — built images, managed containers, and understood application deployment workflows.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering (Computer Engineering)",
    institution: "Sinhagad Institute of Technology, Pune",
    cgpa: "8.5/10",
    graduatedDate: "July 2023",
  },
];

const Skills = [
  // Cloud (AWS)
  { name: "EC2", level: "expert", category: "Cloud" },
  { name: "S3", level: "expert", category: "Cloud" },
  { name: "RDS", level: "expert", category: "Cloud" },
  { name: "VPC", level: "expert", category: "Cloud" },
  { name: "IAM", level: "expert", category: "Cloud" },
  { name: "CloudFront", level: "intermediate", category: "Cloud" },
  { name: "CloudWatch", level: "intermediate", category: "Cloud" },
  { name: "WAF", level: "intermediate", category: "Cloud" },
  { name: "SQS", level: "intermediate", category: "Cloud" },
  { name: "Lambda", level: "intermediate", category: "Cloud" },

  // Containers & Kubernetes
  { name: "Docker", level: "expert", category: "Container" },
  { name: "Kubernetes", level: "expert", category: "Container" },
  { name: "RBAC", level: "expert", category: "Container" },
  { name: "Network Policies", level: "intermediate", category: "Container" },
  { name: "HPA", level: "intermediate", category: "Container" },
  { name: "StatefulSets", level: "intermediate", category: "Container" },
  { name: "Ingress", level: "intermediate", category: "Container" },
  { name: "Helm", level: "intermediate", category: "Container" },
  { name: "EKS", level: "expert", category: "Container" },

  // CI/CD & DevSecOps
  { name: "Jenkins", level: "expert", category: "CI/CD" },
  { name: "GitLab CI", level: "expert", category: "CI/CD" },
  { name: "GitHub Actions", level: "intermediate", category: "CI/CD" },
  { name: "Trivy", level: "intermediate", category: "CI/CD" },
  { name: "OWASP ZAP", level: "intermediate", category: "CI/CD" },
  { name: "Security Scanning", level: "intermediate", category: "CI/CD" },
  { name: "Security Gates", level: "intermediate", category: "CI/CD" },

  // Monitoring
  { name: "Prometheus", level: "expert", category: "Monitoring" },
  { name: "Grafana", level: "expert", category: "Monitoring" },
  { name: "Datadog", level: "intermediate", category: "Monitoring" },
  { name: "ELK Stack", level: "intermediate", category: "Monitoring" },
  { name: "CloudWatch", level: "intermediate", category: "Monitoring" },
  { name: "Alertmanager", level: "intermediate", category: "Monitoring" },

  // IaC & Scripting
  { name: "Terraform", level: "expert", category: "IaC" },
  { name: "Ansible", level: "intermediate", category: "IaC" },
  { name: "Bash", level: "expert", category: "IaC" },
  { name: "Shell", level: "expert", category: "IaC" },
  { name: "Python", level: "intermediate", category: "IaC" },
  { name: "YAML", level: "expert", category: "IaC" },
  { name: "JSON", level: "expert", category: "IaC" },

  // Databases
  { name: "PostgreSQL", level: "intermediate", category: "Database" },
  { name: "MySQL", level: "intermediate", category: "Database" },
  { name: "MongoDB", level: "intermediate", category: "Database" },
  { name: "RDS", level: "intermediate", category: "Database" },

  // Security & Networking
  { name: "IAM", level: "expert", category: "Security" },
  { name: "RBAC", level: "expert", category: "Security" },
  { name: "Network Policies", level: "intermediate", category: "Security" },
  { name: "VPC", level: "expert", category: "Security" },
  { name: "SSL/TLS", level: "expert", category: "Security" },
  { name: "WAF", level: "intermediate", category: "Security" },
  { name: "VPN", level: "intermediate", category: "Security" },
  { name: "Firewalls", level: "intermediate", category: "Security" },
  { name: "Nginx", level: "expert", category: "Security" },
  { name: "Linux", level: "expert", category: "Security" },
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