import React from "react";
import { motion } from "framer-motion";

import "../css/playground.css";

const Playground = () => {
  const variants = {
    hidden: { opacity: 0, y: 300, x: -100 },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1 }}
      >
        <h1>Testing</h1>
      </motion.div>
      <motion.div className="div-wrapper">
        <div className="margin padding wide red">red</div>
        <div className="margin padding wide blue">blue</div>
        <div className="margin padding wide green">green</div>
        <div className="margin padding wide orange">orange</div>
      </motion.div>
    </>
  );
};

export default Playground;
