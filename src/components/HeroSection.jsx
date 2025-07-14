import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import gymVideo from "../assets/videos/gym-video.mp4";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center pt-16">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          data-aos="fade"
        >
          <source src={gymVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            BUILD YOUR <span className="text-primary">PERFECT</span> BODY
          </motion.h1> */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              staggerChildren: 0.1,
            }}
          >
            {["BUILD YOUR", "PERFECT", "BODY"].map((word, i) => (
              <motion.span
                key={i}
                className="block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
              >
                {i === 1 ? <span className="text-primary">{word}</span> : word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-lg text-gray-300 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your body and mind with our expert trainers and
            state-of-the-art facilities.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
            <motion.button
              className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-dark transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPlay /> Watch Video
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-white rounded-full mt-2"
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
