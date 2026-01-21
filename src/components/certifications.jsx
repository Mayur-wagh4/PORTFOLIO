import { motion } from "framer-motion";
import React from "react";
import { certifications } from "../constants/constants";

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
    <motion.a
      href={credentialLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group block"
    >
      <div className="relative bg-white border border-slate-200 rounded-xl p-4 sm:p-5 flex gap-4 hover:shadow-lg transition-shadow">

        {/* Accent Bar */}
        <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-gradient-to-b from-purple-500 to-sky-500" />

        {/* Image */}
        <div className="shrink-0 w-16 h-16 rounded-lg border border-slate-200 bg-white overflow-hidden flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain p-1"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 leading-tight">
                {title}
              </h3>
              <p className="text-sm text-sky-700 font-medium">
                {organization}
              </p>
            </div>

            {/* Arrow */}
            <span className="text-slate-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              →
            </span>
          </div>

          <p className="text-xs text-slate-500">
            Issued: {issueDate}
            {expiryDate && ` · Expires: ${expiryDate}`}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {skills.map((skill) => (
              <span
                key={`${title}-${skill.name}`}
                className="px-2.5 py-1 text-xs rounded-md font-medium bg-slate-50 border border-slate-200 text-slate-700"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
};

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-16 bg-gradient-to-br from-slate-50 via-white to-sky-50"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sky-600 text-sm font-semibold uppercase tracking-wider mb-2">
            Professional Proof
          </p>
          <h2 className="text-slate-900 text-4xl font-extrabold">
            Certifications
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} index={index} {...cert} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
