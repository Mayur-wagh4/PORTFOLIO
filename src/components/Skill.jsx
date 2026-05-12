import { motion } from "framer-motion";
import React, { useState } from "react";
import { Skills } from "../constants/constants";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(Skills.map(s => s.category || "Other"))];

  // Filter skills
  const filteredSkills = activeCategory === "All" 
    ? Skills 
    : Skills.filter(s => (s.category || "Other") === activeCategory);

  // Group by category for display
  const groupedSkills = filteredSkills.reduce((acc, skill) => {
    const cat = skill.category || "Other";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-slate-50 via-white to-sky-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-sky-600 text-sm font-semibold uppercase tracking-wider mb-2">
            Technical Arsenal
          </p>
          <h2 className="text-slate-900 text-4xl font-extrabold">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-purple-600 to-sky-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid - Compact Layout */}
        <motion.div 
          layout
          className="grid gap-6"
        >
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <motion.div
              key={category}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-sky-500 rounded-full" />
                <h3 className="text-slate-800 font-bold text-sm uppercase tracking-wide">
                  {category}
                </h3>
                <span className="ml-auto text-xs text-slate-400 font-medium">
                  {skills.length} skills
                </span>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.02 }}
                    className={`group relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-default ${
                      skill.level === "expert"
                        ? "bg-gradient-to-r from-purple-50 to-sky-50 text-purple-700 border border-purple-200 hover:border-purple-400"
                        : "bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {/* Skill Name */}
                    <span className="relative z-10">{skill.name}</span>
                    
                    {/* Expert Badge */}
                    {skill.level === "expert" && (
                      <span className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-sky-500 text-white text-[9px] font-bold">
                        ★
                      </span>
                    )}

                    {/* Hover Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                      {skill.level === "expert" ? "Expert Level" : "Intermediate Level"}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center gap-6 text-xs text-slate-500"
        >
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-sky-500 text-white text-[9px] font-bold">
              ★
            </span>
            <span>Expert Level</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-slate-200" />
            <span>Intermediate Level</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;