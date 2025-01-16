// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
import { Skills } from "../constants/constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const SkillCard = ({ index, name, level }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-white p-8 rounded-3xl xs:w-[320px] w-full shadow-lg hover:shadow-2xl"
  >
    <div className="bg-gray-600 w-full h-3 rounded-md relative">
      <div
        className={`h-full rounded-md transition-all duration-300 ease-out ${
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
      />
    </div>

    {/* Render level text below the bar */}
    <p className="mt-3 text-gray-600 font-semibold text-center">{name}</p>
    <p className="text-center text-gray-400 text-sm">{level}</p>
  </motion.div>
);

const Skill = () => {
  return (
    <div id="skills">
      <div className="mt-12  rounded-[20px]">
        <div className={`${styles.padding}  rounded-2xl min-h-[300px]`}>
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} text-center text-gray-400`}>
              Skills
            </p>
            <h2 className={`${styles.sectionHeadText} text-center text-white`}>
              Technical Skills
            </h2>
          </motion.div>
        </div>

        <div
          className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 justify-center`}
        >
          {Skills.map((skill, index) => (
            <SkillCard key={skill.name} index={index} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Skill, "skill");
