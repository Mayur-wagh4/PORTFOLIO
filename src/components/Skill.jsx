// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
import { Skills } from "../constants/constants";
import { textVariant } from "../utils/motion";

const SkillCard = ({ name, icon, level }) => (
  <div className="group  p-6 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center gap-4">
    {/* Skill Icon */}
    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 rounded-full shadow-md">
      <img
        src={icon}
        alt={name}
        className="w-10 h-10 object-contain"
      />
    </div>

    {/* Skill Name */}
    <h3 className="text-lg font-semibold text-white">{name}</h3>

    {/* Skill Level Bar */}
    <div className="w-full mt-2">
      <div className="bg-gray-700 h-2 rounded-full relative overflow-hidden">
        <div
          className={`absolute h-full rounded-full ${
            level === "beginner"
              ? "bg-blue-500"
              : level === "intermediate"
              ? "bg-green-500"
              : "bg-yellow-500"
          }`}
          style={{
            width:
              level === "beginner"
                ? "40%"
                : level === "intermediate"
                ? "70%"
                : "100%",
          }}
        ></div>
      </div>
      <p className="text-xs text-gray-400 mt-1 text-right capitalize">
        {level}
      </p>
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 ">
      {/* Section Heading */}
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-teal-400 text-sm font-semibold uppercase tracking-wider">
          My Expertise
        </p>
        <h2 className="text-white text-4xl font-extrabold">
          Skills & Technologies
        </h2>
      </motion.div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {Skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection ;
