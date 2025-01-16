import { motion } from "framer-motion";
import React, { useMemo } from "react";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) => {
  const WrappedComponent = React.memo(() => {
    const animationVariants = useMemo(() => staggerContainer(), []);

    return (
      <motion.section
        variants={animationVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  });

  WrappedComponent.displayName = `StarWrapper(${Component.displayName || Component.name || 'Component'})`;

  return WrappedComponent;
};

export default StarWrapper;
