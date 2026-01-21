import React from "react";
import { services } from "../constants/constants";

const ServiceCard = ({ title, icon }) => (
  <div className="w-full max-w-[220px] transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]">
    <div
      className="p-[1px] rounded-xl shadow-lg"
      style={{
        background:
          "linear-gradient(135deg, var(--accent), var(--accent2))",
      }}
    >
      <div className="bg-white rounded-xl py-5 px-6 min-h-[180px] flex flex-col items-center justify-center border border-slate-200 hover:shadow-xl transition-all">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-50 to-sky-50 flex items-center justify-center mb-3">
          <img
            src={icon}
            alt={title}
            className="w-9 h-9 object-contain"
          />
        </div>
        <h3 className="text-slate-900 text-lg font-semibold text-center tracking-wide">
          {title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-20 px-4 bg-gradient-to-br from-white via-sky-50 to-purple-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-purple-600 to-sky-600 text-white shadow-md">
            DevOps Expertise
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 leading-tight">
            Cloud Infrastructure <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-purple-600 to-sky-600 bg-clip-text text-transparent">
              & Automation Engineer
            </span>
          </h2>

          <div className="h-1 w-28 mt-5 bg-gradient-to-r from-purple-600 to-sky-600 rounded-full"></div>
        </div>

        {/* Content Card */}
        <div className="relative bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl p-8 md:p-10 shadow-lg">
          {/* Accent strip */}
          <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-purple-600 to-sky-600" />

          <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-4xl">
            I’m <strong>Mayur Prakash Wagh</strong>, a DevOps Engineer with
            proven experience in designing, migrating, and operating
            <strong> large-scale production cloud platforms</strong>.
            My expertise spans AWS, Kubernetes, CI/CD automation,
            observability, and infrastructure security.
            <br /><br />
            At <strong>Experience Commerce</strong>, I led a
            <strong> zero-downtime migration of 30+ servers and 5+ databases</strong>
            from Alibaba Cloud to AWS for a multi-tenant e-commerce platform
            processing <strong>100K+ daily transactions</strong>. I designed a
            self-hosted <strong>GitLab CI/CD ecosystem</strong> supporting
            multiple teams, reducing deployment cycles from hours to minutes
            while maintaining <strong>99.9% uptime SLA</strong>.
            <br /><br />
            Previously at <strong>GetToHire.com</strong>, I managed
            production AWS infrastructure supporting
            <strong> 50K+ concurrent users</strong>. I implemented
            Infrastructure as Code using Terraform and Ansible, deployed
            microservices on EKS, reduced cloud costs by up to
            <strong> 30%</strong>, and enforced strong security practices
            using IAM, VPC segmentation, WAF, and SSL/TLS.
            <br /><br />
            I focus on building <strong>secure, scalable, and cost-efficient
            systems</strong> that enable rapid engineering velocity while
            ensuring reliability and compliance at scale.
          </p>
        </div>

        {/* Service Cards */}
       
      </div>
    </section>
  );
};

export default About;
