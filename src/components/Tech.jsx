import { motion } from "framer-motion";
import React from "react";
import { technologies } from "../constants/constants";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <section className="relative flex flex-col items-center py-12 bg-gradient-to-b from-black to-gray-900">
      {/* Animated Headline */}
      <motion.h2
        className="text-white text-2xl md:text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Click and drag the balls to interact with them!
      </motion.h2>

      {/* Technology Icons */}
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <motion.div
            className="w-28 h-28 relative group"
            key={technology.name}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 rounded-full"></div>
            <BallCanvas icon={technology.icon} />
          </motion.div>
        ))}
      </div>

      {/* Subtle background animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-black opacity-20 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Tech ;
