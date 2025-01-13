/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants/constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
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
  variants={fadeIn("","",0.1,1)}
  className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
  >
I&apos;m Mayur Prakash Wagh, a dedicated MERN Stack Developer driven by a passion for building cutting-edge web solutions. Armed with a recent degree in Computer Science, my expertise lies in React.js, Node.js, MongoDB, and Express.js, enabling me to create dynamic and responsive web applications. 🌐 MERN Stack & AWS Expertise: Specializing in the MERN (MongoDB, Express.js, React.js, Node.js) stack, I bring a wealth of experience to web development. Additionally, I possess hands-on proficiency in AWS EC2 deployment, showcasing my ability to harness cloud infrastructure for secure and scalable solutions.
  </motion.p>
  <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");