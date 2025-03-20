/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { github } from "../assets";
import { projects } from "../constants/constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link,
}) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-black p-5 rounded-2xl sm:w-[360px] w-full shadow-lg flex flex-col h-[500px] border border-gray-800 hover:border-gray-500 transition"
    >
      <div
        className="relative w-full h-[180px] cursor-pointer"
        onClick={() => window.open(website_link, "_blank")}
      >
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3">
          <div
            onClick={(e) => {
              e.stopPropagation();
              window.open(source_code_link, "_blank");
            }}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 flex-grow">
        <h3 className="text-white font-bold text-[20px] line-clamp-1">
          {name}
        </h3>
        <p className="mt-2 text-gray-300 text-[14px] line-clamp-4">
          {description}
        </p>
      </div>

      <div className="mt-auto pt-3">
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 10).map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[12px] ${tag.color} px-2 py-1 rounded-full bg-opacity-20 bg-white text-blue-400 inline-block`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const Works = () => {
  return (
    <section id="projects" className="py-10">
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText} text-gray-400`}>
          🚀 Scalable, Secure & Automated Solutions
        </p>
        <h2 className={`${styles.sectionHeadText} text-white`}>DevOps & React Projects</h2>
      </motion.div>

      <div className="w-full flex justify-center mt-5">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-gray-200 text-[17px] max-w-3xl leading-[30px] text-center"
        >
          These projects showcase my expertise in **DevOps best practices, cloud-native solutions, and modern React development.**  
          From **automated CI/CD pipelines, containerized applications, and Kubernetes deployments** to **optimized frontend performance and dynamic UI/UX**, each project is built for **scalability, security, and reliability** in production environments.
        </motion.p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;
