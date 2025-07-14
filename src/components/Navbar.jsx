import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") setDarkMode(true);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Classes", href: "#classes" },
    { name: "Trainers", href: "#trainers" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "dark:bg-gray-900 bg-dark py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
      data-aos="fade-down"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="text-2xl font-bold text-white title-font">
              <span className="text-primary">FIT</span>NESS
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {item.href.startsWith("#") ? (
                  <a
                    href={item.href}
                    className="text-white hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className="text-white hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-xl ml-4 text-white hover:text-primary transition-colors"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <motion.button
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
            </motion.button>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden dark:bg-gray-900 bg-dark mt-4 p-4 rounded-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.href.startsWith("#") ? (
                    <a
                      href={item.href}
                      className="text-white hover:text-primary transition-colors block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-white hover:text-primary transition-colors block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-white hover:text-primary transition-colors"
                >
                  {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                </button>

                <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-colors">
                  Join Now
                </button>
              </div>

              <div className="flex justify-center space-x-4 pt-4 border-t border-gray-700">
                <a href="#" className="text-white hover:text-primary">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-white hover:text-primary">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-white hover:text-primary">
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
