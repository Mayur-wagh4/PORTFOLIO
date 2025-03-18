// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
import { Skills } from "../constants/constants";
import { textVariant } from "../utils/motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-12">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <p className="text-teal-400 text-sm font-semibold uppercase tracking-wider">
          My Expertise
        </p>
        <h2 className="text-white text-4xl font-extrabold mb-8">
          Skills & Technologies
        </h2>
      </motion.div>

      {/* Skills Grid */}
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        {Skills.map((skill, index) => (
          <motion.div 
            key={index}
            variants={item}
            className="group bg-gray-800 bg-opacity-50 backdrop-blur-sm p-4 rounded-lg hover:bg-gray-700 transition-all flex flex-col gap-2"
          >
            {/* Skill Row: Icon + Name */}
            <div className="flex items-center gap-3">
              {/* Small Logo */}
              <div className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-700 p-1">
                <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain" />
              </div>

              {/* Skill Name */}
              <h3 className="text-white text-sm font-medium">{skill.name}</h3>
            </div>

            {/* Skill Level Bar */}
            <div className="w-full h-1.5 bg-gray-700 rounded-full mt-1">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ 
                  width: skill.level === "expert" ? "100%" : "70%",
                  transition: { duration: 0.8, ease: "easeOut" }
                }}
                viewport={{ once: true }}
                className={`h-full rounded-full ${
                  skill.level === "expert" ? "bg-yellow-500" : "bg-green-500"
                }`}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
