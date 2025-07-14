import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  const links = [
    {
      title: "Quick Links",
      items: [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Classes", href: "#classes" },
        { name: "Trainers", href: "#trainers" },
        { name: "Pricing", href: "#pricing" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Opening Hours",
      items: [
        { name: "Monday - Friday", value: "6:00 AM - 10:00 PM" },
        { name: "Saturday", value: "8:00 AM - 8:00 PM" },
        { name: "Sunday", value: "Closed" },
      ],
    },
    {
      title: "Contact Info",
      items: [
        {
          name: "123 Fitness Street, City",
          icon: <FaMapMarkerAlt className="mr-2" />,
        },
        { name: "+1 234 567 890", icon: <FaPhone className="mr-2" /> },
        { name: "info@fitnessgym.com", icon: <FaEnvelope className="mr-2" /> },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook size={20} />, href: "#" },
    { icon: <FaInstagram size={20} />, href: "#" },
    { icon: <FaTwitter size={20} />, href: "#" },
    { icon: <FaYoutube size={20} />, href: "#" },
  ];

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div data-aos="fade-up">
            <h3 className="text-2xl font-bold mb-4 title-font">
              <span className="text-primary">FIT</span>NESS
            </h3>
            <p className="text-gray-400 mb-4">
              Your journey to a healthier life starts here. Join our community
              and transform your body.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-primary transition-colors"
                  whileHover={{ y: -5 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {links.map((section, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <h4 className="text-xl font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    {item.icon && (
                      <span className="mt-1 text-gray-400">{item.icon}</span>
                    )}
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-400 hover:text-primary transition-colors ml-2"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <span className="text-gray-400 ml-2">
                        {item.name}:{" "}
                        {item.value && (
                          <span className="text-white">{item.value}</span>
                        )}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-xl font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg focus:outline-none text-dark w-full"
              />
              <motion.button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-secondary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 pt-8 text-center text-gray-400"
          data-aos="fade-up"
        >
          <p>
            &copy; {new Date().getFullYear()} Fitness Gym. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
