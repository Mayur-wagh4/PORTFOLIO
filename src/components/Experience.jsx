import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants/constants';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: 'linear-gradient(to right, rgb(88, 28, 135), rgb(49, 46, 129), rgb(30, 58, 138))',
      color: '#fff',
      borderRadius: '20px',
      boxShadow: '0 35px 120px -15px rgba(33, 30, 53, 0.5)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '24px',
      minHeight: '250px',
    }}
    contentArrowStyle={{
      borderRight: '7px solid rgb(49, 46, 129)',
    }}
    date={experience.date}
    iconStyle={{
      background: 'linear-gradient(to right, rgb(20, 184, 166), rgb(56, 189, 248))',
      color: '#fff',
      boxShadow: '0 0 0 4px rgba(20, 184, 166, 0.2)',
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img 
          src={experience.icon} 
          alt={experience.company_name} 
          className="w-3/5 h-3/5 object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-2xl font-bold mb-1 hover:overflow-visible hover:whitespace-normal">
        {experience.title}
      </h3>
      <p className="text-teal-300 text-base font-medium mb-4">
        {experience.company_name}
      </p>
    </div>

    <ul className="space-y-2 ml-5 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
      {experience.points.map((point, index) => (
        <li 
          key={`experience-point-${index}`} 
          className="text-gray-300 text-sm tracking-wide list-disc"
          style={{ 
            wordBreak: 'break-word',
            whiteSpace: 'normal',
            lineHeight: '1.5'
          }}
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full min-h-screen mx-auto flex flex-col scroll-mt-20 pb-10"
    >
      <div className="text-center py-6">
        <h2 className="text-white font-bold text-3xl md:text-4xl">
          Work Experience
        </h2>
      </div>

      <div className="flex-grow">
        <VerticalTimeline
          animate={false}
          lineColor="rgba(94, 234, 212, 0.2)"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>

    </section>
  );
};

export default Experience;