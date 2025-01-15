/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { github } from '../assets';
import { projects } from '../constants/constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link,
}) => {
  return(
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-white p-5 rounded-2xl sm:w-[360px] w-full shadow-lg hover:shadow-2xl'


      >
        <div 
          className='relative w-full h-[230px] cursor-pointer'
          onClick={() => window.open(website_link, "_blank")}
        >
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-gray-600 font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-black text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div id='projects' variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-gray-400`}>
          Check out some of my projects.
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-white`}>Artifacts.</h2>
      </motion.div>

      <div className='w-full flex justify-center'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-gray-200 text-[17px] max-w-3xl leading-[30px] text-center'
        >
          These projects are more than just mere examples – they're vibrant representations of my expertise and innovation. With captivating descriptions and accessible links to code repositories and live demos, they invite you to delve into the heart of my work. Through these projects, I demonstrate not only my ability to solve complex problems but also my flair for creative solutions and effective project management.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap justify-center gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
