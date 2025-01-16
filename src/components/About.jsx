/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { services } from "../constants/constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full ">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 p-[1px] rounded-[20px] shadow-lg shadow-indigo-500/20"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-white rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-gray-800 text-[20px] font-semibold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray-200 text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m Mayur Prakash Wagh, a DevOps Engineer with hands-on experience
        in deploying scalable platforms and optimizing operations. At
        GetToHire.com, I designed and hosted a React-based platform on AWS EC2,
        developed CI/CD pipelines using Jenkins, Docker, and Terraform, and
        reduced deployment time by 70%. I also ensured 99.9% system uptime by
        integrating the ELK Stack for monitoring and reliability while
        implementing Ansible for seamless configuration management.
        
        <br /><br />
        
        Previously, as a Frontend Developer Intern at Jio Platforms Limited, I
        built a responsive inventory management system using React. I
        implemented bulk data import functionality with Dropzone for Excel file
        handling and collaborated with backend teams to integrate APIs
        efficiently, ensuring real-time data updates and an improved user
        experience.
        
        <br /><br />
        
        I focus on creating reliable systems and delivering impactful solutions
        by combining technical expertise with a commitment to continuous
        improvement.
      </motion.p>
      <div className="mt-20 overflow-hidden flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
2