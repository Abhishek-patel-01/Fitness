import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ClassesSection from "../components/ClassesSection";
import Trainers from "../components/Trainers";
import PricingSection from "../components/PricingSection";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ClassesSection />
      <Trainers />
      <PricingSection />
      <Testimonials />
    </div>
  );
};

export default Home;
