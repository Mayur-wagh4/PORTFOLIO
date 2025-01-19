import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { certifications } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";

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
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="flex justify-center"
    >
      <Tilt
        options={{
          max: 35,
          scale: 1,
          speed: 400,
        }}
        className="p-6 rounded-2xl w-full max-w-[300px] shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
      >
        {/* Image Section */}
        <div className="relative w-full h-[180px] cursor-pointer">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Certification Details */}
        <div className="mt-5 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-white truncate">{title}</h3>
          <p className="text-sm text-teal-300 font-medium mt-1 truncate">
            {organization}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            {issueDate} {expiryDate && `- ${expiryDate}`}
          </p>
        </div>

        {/* Skills Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={`${title}-${skill.name}`}
              className="px-2 py-1 text-xs rounded-full font-medium  text-rose-700"
            >
              #{skill.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-16">
      {/* Section Header */}
      <motion.div variants={textVariant()} className="text-center px-4">
        <p className="text-sm text-teal-400 uppercase tracking-widest">
          My Achievements
        </p>
        <h2 className="text-4xl font-extrabold text-white leading-tight">
          Certifications
        </h2>
      </motion.div>

      {/* Description */}
      <div className="w-full flex justify-center mt-6 px-4">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-gray-300 text-center text-lg max-w-3xl leading-relaxed"
        >
          These certifications reflect my dedication to learning and
          professional growth. Click on any certificate to view more details.
        </motion.p>
      </div>

      {/* Certification Cards */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 px-6">
        {certifications.map((certification, index) => (
          <CertificationCard key={index} index={index} {...certification} />
        ))}
      </div>
    </section>
  );
};

export default Certifications ;
