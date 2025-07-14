import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Tranner1 from "../assets/images/trainer-1.jpg";
import Tranner2 from "../assets/images/trainer-2.jpg";
import Tranner3 from "../assets/images/trainer-3.jpg";

const Trainers = () => {
  const trainers = [
    {
      name: "Alex Johnson",
      role: "Strength Trainer",
      bio: "Specializes in powerlifting and strength conditioning with 8 years of experience.",
      image: Tranner1,
    },
    {
      name: "Sarah Miller",
      role: "Yoga Instructor",
      bio: "Certified yoga teacher with expertise in Vinyasa and restorative yoga practices.",
      image: Tranner2,
    },
    {
      name: "Mike Rodriguez",
      role: "CrossFit Coach",
      bio: "Competitive CrossFit athlete and certified coach helping athletes reach new levels.",
      image: Tranner3,
    },
  ];

  return (
    <section
      id="trainers"
      className="py-20 bg-light dark:bg-gray-700 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold mb-4 title-font"
            data-aos="fade-up"
          >
            OUR <span className="text-primary">TRAINERS</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Meet our team of certified and experienced fitness professionals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover-scale"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -10 }}
            >
              <div className="h-64 overflow-hidden">
                <LazyLoadImage
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold dark:text-white mb-1">
                  {trainer.name}
                </h3>
                <p className="text-primary mb-3">{trainer.role}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {trainer.bio}
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-primary transition-colors"
                  >
                    <FaFacebook size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-primary transition-colors"
                  >
                    <FaInstagram size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-primary transition-colors"
                  >
                    <FaTwitter size={18} />
                  </a>
                </div>
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
            Meet All Trainers
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Trainers;
