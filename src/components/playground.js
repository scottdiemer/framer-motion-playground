import React from "react";
import { motion } from "framer-motion";

import "../css/playground.css";

const Playground = () => {
  const list = {
    hidden: { opacity: 0, transition: { when: "afterChildren" } },
    visible: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.3 },
    },
  };

  const item = {
    visible: { opacity: 0 },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={list}
        transition={{ duration: 1 }}
        className="div-wrapper"
      >
        <motion.div variants={item} className="margin padding wide red">
          red
        </motion.div>
        <motion.div variants={item} className="margin padding wide blue">
          blue
        </motion.div>
        <motion.div variants={item} className="margin padding wide green">
          green
        </motion.div>
        <motion.div variants={item} className="margin padding wide orange">
          orange
        </motion.div>
      </motion.div>
    </>
  );
};

export default Playground;
