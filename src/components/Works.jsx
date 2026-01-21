import { motion } from "framer-motion";
import React, { useState } from "react";
import { projects } from "../constants/constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    ...new Set(projects.flatMap(p => p.tags.map(t => t.name))),
  ].slice(0, 6);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(p =>
          p.tags.some(t => t.name === activeFilter)
        );

  return (
    <section
      id="projects"
      className="py-12 bg-gradient-to-br from-slate-50 via-white to-sky-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-sky-600 text-xs font-semibold uppercase tracking-wider mb-1">
            Production Work
          </p>
          <h2 className="text-slate-900 text-3xl font-extrabold">
            DevOps & Cloud Projects
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-purple-600 to-sky-600 text-white shadow"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Cards */}
        <div className="flex flex-col gap-4">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition"
            >
              {/* Top Row */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-slate-900 font-bold text-base">
                    {project.name}
                  </h3>
                  <p className="text-slate-600 text-sm mt-1 max-w-3xl">
                    {project.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3 text-slate-500">
                  {project.source_code_link && (
                    <FaGithub
                      className="cursor-pointer hover:text-slate-900"
                      onClick={() =>
                        window.open(project.source_code_link, "_blank")
                      }
                    />
                  )}
                  {project.website_link && (
                    <FaExternalLinkAlt
                      className="cursor-pointer hover:text-slate-900"
                      onClick={() =>
                        window.open(project.website_link, "_blank")
                      }
                    />
                  )}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.slice(0, 6).map(tag => (
                  <span
                    key={tag.name}
                    className="px-2.5 py-1 text-xs rounded-md border border-slate-200 bg-slate-50 text-slate-700"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>

              {/* subtle accent */}
              <div className="mt-3 h-[2px] w-full bg-gradient-to-r from-purple-500/40 to-sky-500/40 rounded-full opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
