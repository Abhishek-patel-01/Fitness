import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "James Wilson",
      role: "Bodybuilder",
      content:
        "This gym transformed my physique completely. The trainers are knowledgeable and the equipment is top-notch.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      role: "Marathon Runner",
      content:
        "The cardio programs helped me shave 15 minutes off my marathon time. Couldn't be happier with my progress!",
      rating: 5,
    },
    {
      name: "Robert Garcia",
      role: "Fitness Enthusiast",
      content:
        "The community here is amazing. Everyone is supportive and the staff goes above and beyond to help you reach your goals.",
      rating: 4,
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold mb-4 title-font"
            data-aos="fade-up"
          >
            MEMBER <span className="text-primary">STORIES</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Hear from our members about their fitness journeys.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-light dark:bg-gray-700 p-8 rounded-lg shadow-md hover-scale"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -5 }}
            >
              <div className="text-primary mb-4">
                <FaQuoteLeft size={24} />
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
