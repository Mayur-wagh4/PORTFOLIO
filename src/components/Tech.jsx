import { motion } from "framer-motion";
import React from "react";
import { technologies } from "../constants/constants";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <section className="relative flex flex-col items-center py-12">
      
      {/* Headline */}
      <motion.h2
        className="text-white text-2xl md:text-3xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Technologies & Tools
      </motion.h2>

      {/* Linear flowing balls */}
      <div className="flex flex-wrap justify-center gap-12">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            className="w-20 h-20 relative"
            animate={{
              y: index % 2 === 0 ? [0, -18, 0] : [0, 18, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.15,
            }}
          >
            <BallCanvas icon={technology.icon} />
          </motion.div>
        ))}
      </div>

      {/* Soft background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/10 to-purple-900/10" />
      </div>
    </section>
  );
};

export default Tech;
