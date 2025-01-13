// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React from 'react';
import { Skills } from "../constants/constants";
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const SkillCard = ({ index, name, level }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <div className="bg-gray-200 w-full h-3 rounded-md relative">
      <div
        className={`h-full rounded-md ${
          level === "beginner"
            ? "bg-blue-500"
            : level === "intermediate"
            ? "bg-green-500"
            : "bg-yellow-500"
        }`}
        style={{ width: level === "beginner" ? "40%" : level === "intermediate" ? "70%" : "100%" }}
      >

      </div>
    </div>

    {/* Render level text below the bar */}
    <p className="mt-3 text-white font-medium text-center">
{name}
    </p>
  </motion.div>
);


const Skill = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Skills</p>
          <h2 className={styles.sectionHeadText}>Technical Skills</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
      {Skills.map((skill, index) => (
  <SkillCard key={skill.name} index={index} {...skill} />
))}

      </div>
    </div>
  );

}

export default SectionWrapper(Skill, "skill");
