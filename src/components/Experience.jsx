import React from 'react';
import { experiences } from '../constants/constants';

// Simple card component without animations
const ExperienceCard = ({ experience }) => (
  <div className="mb-10 p-6 bg-gradient-to-br from-indigo-900 to-blue-900 rounded-lg text-white border border-white/10 shadow-lg">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 flex justify-center items-center mr-4 bg-indigo-800 rounded-full">
        <img 
          src={experience.icon} 
          alt={experience.company_name} 
          className="w-3/5 h-3/5 object-contain"
          loading="lazy"
        />
      </div>
      <div>
        <h3 className="text-2xl font-bold tracking-wide">
          {experience.title}
        </h3>
        <p className="text-teal-300 text-base font-medium">
          {experience.company_name}
        </p>
        <p className="text-gray-400 text-sm font-medium">{experience.date}</p>
      </div>
    </div>

    <ul className="space-y-3 ml-5">
      {experience.points.map((point, index) => (
        <li 
          key={`experience-point-${index}`} 
          className="text-gray-200 text-sm tracking-wide list-disc"
          style={{ lineHeight: '1.6' }}
        >
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full py-16 bg-black"
    >
      <div className="text-center mb-12">
        <p className="text-teal-300 text-lg font-medium">My Professional Journey</p>
        <h2 className="text-white font-bold text-3xl md:text-5xl mt-2">
          Work Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mt-4"></div>
      </div>

      <div className="container mx-auto px-4">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;