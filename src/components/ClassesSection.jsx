import { motion } from "framer-motion";
import {
  FaFire,
  FaHeart,
  FaRunning,
  FaDumbbell,
  FaSwimmer,
  FaBiking,
} from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Class1 from "../assets/images/class-1.webp";
import Class2 from "../assets/images/class-2.webp";
import Class3 from "../assets/images/class-3.jpg";
import Class4 from "../assets/images/class-4.jpg";
import Class5 from "../assets/images/class-5.jpg";
import Class6 from "../assets/images/class-6.jpg";

const ClassesSection = () => {
  const classes = [
    {
      icon: <FaFire size={30} className="text-primary" />,
      title: "HIIT Training",
      description: "High-intensity interval training for maximum fat burn.",
      time: "Mon, Wed, Fri - 7:00 AM",
      image: Class1,
    },
    {
      icon: <FaHeart size={30} className="text-primary" />,
      title: "Cardio",
      description:
        "Improve your cardiovascular health with our cardio sessions.",
      time: "Tue, Thu - 6:00 PM",
      image: Class2,
    },
    {
      icon: <FaRunning size={30} className="text-primary" />,
      title: "CrossFit",
      description: "Functional movements performed at high intensity.",
      time: "Mon, Wed, Fri - 5:00 PM",
      image: Class3,
    },
    {
      icon: <FaDumbbell size={30} className="text-primary" />,
      title: "Weight Lifting",
      description: "Build strength and muscle with proper techniques.",
      time: "Tue, Thu, Sat - 8:00 AM",
      image: Class4,
    },
    {
      icon: <FaSwimmer size={30} className="text-primary" />,
      title: "Swimming",
      description: "Low-impact full-body workout in our pool.",
      time: "Mon, Wed, Fri - 6:00 AM",
      image: Class5,
    },
    {
      icon: <FaBiking size={30} className="text-primary" />,
      title: "Cycling",
      description: "Indoor cycling classes for endurance and stamina.",
      time: "Tue, Thu - 7:00 PM",
      image: Class6,
    },
  ];

  return (
    <section
      id="classes"
      className="py-20 bg-light dark:bg-gray-700 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold mb-4 title-font"
            data-aos="fade-up"
          >
            OUR <span className="text-primary">CLASSES</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We offer a variety of classes to suit all fitness levels and goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((cls, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-0 rounded-lg shadow-md hover-scale overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 overflow-hidden">
                <LazyLoadImage
                  src={cls.image}
                  alt={cls.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">{cls.icon}</div>
                  <h3 className="text-xl font-bold dark:text-white">
                    {cls.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {cls.description}
                </p>
                <p className="text-primary font-medium">{cls.time}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-16 text-center" data-aos="fade-up">
          <motion.button
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Classes
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ClassesSection;
