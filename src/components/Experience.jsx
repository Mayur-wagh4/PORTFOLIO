/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants/constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: 'linear-gradient(135deg, #6b7c93, #2d3c51)', // Gradient background for the card
      color: '#fff',
      borderRadius: '10px', // Rounded corners for the content
      boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)', // Glowing effect around the card
      border: '2px solid transparent', // Making the border transparent
      backgroundClip: 'padding-box', // To ensure the border glow is outside the card content
      overflow:'hidden',
    }}
    contentArrowStyle={{
      borderRight: '7px solid #4b5967', // Subtle arrow color that complements the background
    }}
    date={experience.date}
    iconStyle={{
      background: experience.iconBg, // Using the dynamic background for the icon
      borderRadius: '50%', // Ensuring the icon is circular
      padding: '10px',
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-gray-400 text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div id="experience" variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-gray-400`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} text-center text-white`}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col p-10 overflow-hidden rounded-lg shadow-lg ">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
