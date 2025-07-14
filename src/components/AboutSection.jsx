import { motion } from "framer-motion";
import { FaDumbbell, FaHeartbeat, FaUsers, FaTrophy } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AboutImg from "../assets/images/about-img.png";

const AboutSection = () => {
  const features = [
    {
      icon: <FaDumbbell size={40} className="text-primary" />,
      title: "Modern Equipment",
      description:
        "Our gym is equipped with the latest fitness technology to help you achieve your goals.",
    },
    {
      icon: <FaHeartbeat size={40} className="text-primary" />,
      title: "Health Care",
      description:
        "We prioritize your health with regular check-ups and personalized nutrition plans.",
    },
    {
      icon: <FaUsers size={40} className="text-primary" />,
      title: "Professional Trainers",
      description:
        "Certified trainers will guide you through every step of your fitness journey.",
    },
    {
      icon: <FaTrophy size={40} className="text-primary" />,
      title: "Success Stories",
      description:
        "Join hundreds of members who transformed their lives with our programs.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold mb-4 title-font"
            data-aos="fade-up"
          >
            WHY CHOOSE <span className="text-primary">US?</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We are dedicated to helping you achieve your fitness goals with our
            expert trainers and state-of-the-art facilities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-light dark:bg-gray-700 p-8 rounded-lg text-center hover-scale shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          data-aos="fade-up"
        >
          <div className="relative">
            <LazyLoadImage
              src={AboutImg}
              alt="About us"
              // effect="blur"
              className="rounded-lg shadow-xl w-full"
            />
            <motion.div
              className="absolute -bottom-8 -right-8 bg-primary text-white p-6 rounded-lg shadow-lg"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-bold">10+</h4>
              <p>Years Experience</p>
            </motion.div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-6 dark:text-white">
              WE ARE HERE TO HELP YOU BUILD YOUR DREAM BODY
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our gym offers a comprehensive approach to fitness with
              personalized training programs, nutritional guidance, and a
              supportive community to keep you motivated.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Personalized workout plans",
                "Nutritional counseling",
                "Progress tracking",
                "Community support",
                "Flexible schedules",
                "Clean and safe environment",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <motion.button
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
