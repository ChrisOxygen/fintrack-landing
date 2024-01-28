import FirstFeatureSection from "./components/FirstFeatureSection";
import GoalsSection from "./components/GoalsSection";
import SecondFeatureSection from "./components/SecondFeatureSection";
import SpecialitiesSection from "./components/SpecialitiesSection";
import BrandLogosSection from "./components/layouts/BrandLogosSection";
import Footer from "./components/layouts/Footer";
import HeroSection from "./components/layouts/HeroSection";
import MapSection from "./components/layouts/MapSection";
import NewsletterSection from "./components/layouts/NewsletterSection";
import TestimonialSection from "./components/layouts/TestimonialSection";

import { motion } from "framer-motion";

const parentVariant = {
  initial: { opacity: 0.7 },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.3,
    },
  },
};
const fadeInUpVariant = {
  initial: { y: "100px", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
  },
};

function App() {
  return (
    <motion.div
      variants={parentVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="page-container"
    >
      <HeroSection />
      <BrandLogosSection />
      <FirstFeatureSection variant={fadeInUpVariant} />
      <SecondFeatureSection variant={fadeInUpVariant} />
      <SpecialitiesSection variant={fadeInUpVariant} />
      <GoalsSection variant={fadeInUpVariant} />
      <TestimonialSection variant={fadeInUpVariant} />
      <MapSection variant={fadeInUpVariant} />
      <NewsletterSection variant={fadeInUpVariant} />
      <Footer />
    </motion.div>
  );
}

export default App;
