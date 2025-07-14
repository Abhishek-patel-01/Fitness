import { motion } from "framer-motion";

const Loader = () => {
  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const loadingCircleVariants = {
    start: {
      y: "0%",
    },
    end: {
      y: "100%",
    },
  };

  const loadingCircleTransition = {
    duration: 0.4,
    repeat: Infinity, // Changed from yoyo to repeat
    repeatType: "reverse", // This gives the same effect as yoyo
    ease: "easeInOut",
  };

  return (
    <div className="fixed inset-0 bg-dark z-50 flex items-center justify-center flex-col">
      <motion.div
        className="flex space-x-4 mb-8"
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-6 h-6 bg-primary rounded-full"
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
        ))}
      </motion.div>
      <motion.h1
        className="text-3xl font-bold text-white title-font"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }} // Updated transition
      >
        <span className="text-primary">FIT</span>NESS
      </motion.h1>
    </div>
  );
};

export default Loader;
