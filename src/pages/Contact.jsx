import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold mb-4 title-font"
            data-aos="fade-up"
          >
            CONTACT <span className="text-primary">US</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Have questions? Get in touch with our team for more information.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-6 dark:text-white">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 dark:text-gray-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 dark:text-gray-300"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-6 dark:text-white">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 dark:text-white">Address</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    123 Fitness Street, Gym City, 10001
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <FaPhone size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    +1 234 567 890
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    info@fitnessgym.com
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <FaClock size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 dark:text-white">
                    Opening Hours
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Monday - Friday: 6:00 AM - 10:00 PM
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Saturday: 8:00 AM - 8:00 PM
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291234!2d-73.9878449241646!3d40.74844097138988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg shadow-md"
                title="Gym Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
