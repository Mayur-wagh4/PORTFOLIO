import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { experiences } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative pl-10"
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 top-6">
        <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-purple-600 to-sky-600 border-2 border-white shadow-md" />
      </div>

      {/* Card */}
      <Tilt
        options={{ max: 8, scale: 1.01, speed: 300 }}
        className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group"
      >
        {/* Accent Bar */}
        <div className="h-1 bg-gradient-to-r from-purple-600 to-sky-600 rounded-t-xl" />

        <div className="p-4">
          {/* Header */}
          <div className="flex items-start gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
              <img
                src={experience.icon}
                alt={experience.company_name}
                className="w-6 h-6 object-contain"
              />
            </div>

            <div>
              <h3 className="text-slate-900 font-semibold text-sm group-hover:text-purple-600 transition-colors">
                {experience.title}
              </h3>
              <p className="text-sky-600 text-xs font-medium">
                {experience.company_name}
              </p>
              <p className="text-slate-500 text-[11px] mt-0.5">
                {experience.date}
              </p>
            </div>
          </div>

          {/* Points */}
          <ul className="space-y-2 pl-4">
            {experience.points.map((point, idx) => (
              <li
                key={idx}
                className="text-slate-600 text-xs leading-relaxed list-disc"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Hover Border */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-purple-400/40 transition-all pointer-events-none" />
      </Tilt>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-14 bg-gradient-to-br from-white via-sky-50 to-purple-50"
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-purple-600 text-xs font-semibold uppercase tracking-wider mb-1">
            Career
          </p>
          <h2 className="text-slate-900 text-3xl font-extrabold mb-2">
            Work Experience
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm">
            Production experience across DevOps, cloud infrastructure, CI/CD
            and monitoring systems.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[6px] top-0 w-[2px] h-full bg-gradient-to-b from-purple-600/40 via-sky-600/40 to-purple-600/40" />

          <div className="flex flex-col gap-6">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
