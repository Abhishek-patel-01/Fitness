import { motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      period: "month",
      features: [
        { name: "Gym Access", included: true },
        { name: "1 Training Session", included: true },
        { name: "Open 6AM-10PM", included: true },
        { name: "Nutrition Plan", included: false },
        { name: "24/7 Access", included: false },
        { name: "Personal Trainer", included: false },
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$59",
      period: "month",
      features: [
        { name: "Gym Access", included: true },
        { name: "5 Training Sessions", included: true },
        { name: "Open 6AM-10PM", included: true },
        { name: "Nutrition Plan", included: true },
        { name: "24/7 Access", included: true },
        { name: "Personal Trainer", included: false },
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "$99",
      period: "month",
      features: [
        { name: "Gym Access", included: true },
        { name: "Unlimited Training", included: true },
        { name: "Open 6AM-10PM", included: true },
        { name: "Nutrition Plan", included: true },
        { name: "24/7 Access", included: true },
        { name: "Personal Trainer", included: true },
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold mb-4 title-font"
            data-aos="fade-up"
          >
            MEMBERSHIP <span className="text-primary">PLANS</span>
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Choose the plan that fits your fitness goals and budget.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`relative rounded-xl shadow-lg overflow-hidden ${
                plan.popular
                  ? "border-2 border-primary transform md:scale-105 bg-light dark:bg-gray-700 z-10"
                  : "border border-gray-200 dark:border-gray-600 bg-light dark:bg-gray-700"
              }`}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-bold">
                  POPULAR
                </div>
              )}

              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-4xl font-bold mb-1 dark:text-white">
                  {plan.price}
                  <span className="text-lg font-normal">/{plan.period}</span>
                </p>
                <p className="text-gray-500 dark:text-gray-300 mb-6">
                  Billed monthly
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-300">
                        {feature.name}
                      </span>
                      {feature.included ? (
                        <span className="text-primary">
                          <FaCheck />
                        </span>
                      ) : (
                        <span className="text-gray-400">
                          <FaTimes />
                        </span>
                      )}
                    </li>
                  ))}
                </ul>

                <motion.button
                  className={`w-full py-3 rounded-lg font-bold ${
                    plan.popular
                      ? "bg-primary text-white"
                      : "bg-gray-200 dark:bg-gray-600 text-dark dark:text-white"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-12 text-center" data-aos="fade-up">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Need a custom plan? Contact us for personal training packages.
          </p>
          <motion.button
            className="border-2 border-primary text-primary dark:text-white px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
