import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { certifications } from '../constants/constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const CertificationCard = ({
  index,
  title,
  organization,
  issueDate,
  expiryDate,
  credentialLink,
  image,
  skills,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-gradient-to-r from-[#6b7c93] to-[#2d3c51] p-5 rounded-2xl w-[360px] h-[480px] shadow-lg hover:shadow-2xl flex flex-col"
      >
        <div 
          className="relative w-full h-[230px] cursor-pointer"
          onClick={() => window.open(credentialLink, "_blank")}
        >
          <img
            src={image}
            alt="certification_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(credentialLink, "_blank");
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-1/2 h-1/2 object-contain"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-5 flex-grow">
          <h3 className="text-white font-semibold text-[20px] line-clamp-2">{title}</h3>
          <div className="mt-2 flex justify-between items-center">
            <p className="text-secondary text-[16px] font-semibold line-clamp-1">{organization}</p>
            <p className="text-secondary text-[14px]">
              {issueDate} {expiryDate && `- ${expiryDate}`}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <p
              key={`${title}-${skill.name}`}
              className={`text-[14px] ${skill.color}`}
            >
              #{skill.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-gray-400`}>My Achievements</p>
        <h2 className={`${styles.sectionHeadText} text-center text-white`}>Certifications.</h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-gray-200 text-[17px] max-w-3xl leading-[30px] text-center"
        >
          The following certifications demonstrate my commitment to continuous learning and expertise in various technologies. Each certification represents a milestone in my professional journey, validating my skills and knowledge in specific domains. Click on any certification to verify its authenticity.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {certifications.map((certification, index) => (
          <CertificationCard 
            key={`certification-${index}`} 
            index={index} 
            {...certification} 
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");