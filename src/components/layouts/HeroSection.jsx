import { IoIosArrowRoundForward } from "react-icons/io";
import { IoPlay } from "react-icons/io5";

import { motion } from "framer-motion";
import HeroDesc from "../HeroDesc";

import Header from "../Header";

const textVarian = {
  initial: {
    opacity: 0,
    y: "50%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
    },
  },
};

const btnSectVarian = {
  initial: {
    opacity: 0,
    y: "50%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
    },
  },
};
const midCircleVariant = {
  initial: {
    scale: 2,
  },
  visible: {
    scale: 1,
    transition: { duration: 1 },
  },
};

function HeroSection() {
  return (
    <div className="hero-section p-x box-container">
      <span className="circle circle--1"></span>
      <span className="circle circle--2"></span>
      <motion.span
        variants={midCircleVariant}
        initial="initial"
        animate="visible"
        className="circle circle--3"
      ></motion.span>
      <div>
        <div className="hero-section__block">
          <Header />
          <div className="hero-content">
            <motion.h1
              variants={textVarian}
              initial="initial"
              animate="visible"
              className="hero-content__title"
            >
              We Help You To Manage Your <span>Finances</span>
            </motion.h1>
            <HeroDesc />

            <motion.div
              variants={btnSectVarian}
              initial="initial"
              animate="visible"
              className="hero-content__cta-btns"
            >
              <button className="get-started">
                <span className="get-started__text">GET STARTED</span>
                <span className="get-started__icon">
                  <IoIosArrowRoundForward />
                </span>
              </button>
              <button className="watch-vid">
                <span className="watch-vid__icon">
                  <IoPlay />
                </span>
                <span className="watch-vid__text">Watch Video</span>
              </button>
            </motion.div>
          </div>
          <motion.img
            initial={{ y: "50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            src="/assets/hero-cta-img.png"
            alt="fin-track-dashboard"
            className="hero-content-image"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
