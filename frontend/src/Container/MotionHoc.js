//higher order component to add same functionality to each page

import { motion } from "framer-motion";

const MotionHoc = (Component) => {
  return function HOC() {
    return (
      <motion.div
        initial={{ y: 500 }}
        animate={{
          y: 0,
          transition: { duration: 0.5, type: "spring", delayChildren: 0.5 },
        }}
        exit={{
          y: -500,
          transition: {
            duration: 0.5,
            type: "spring",
            ease: "easeInOut",
            delayChildren: 0.5,
          },
        }}
      >
        <Component />
      </motion.div>
    );
  };
};

export default MotionHoc;
