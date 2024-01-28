import { motion } from "framer-motion";

const btnSectVarian = {
  initial: {
    opacity: 0,
    y: "50%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
    },
  },
};

function HeroDesc() {
  return (
    <motion.span
      variants={btnSectVarian}
      initial="initial"
      animate="visible"
      className="hero-content__desc"
    >
      I help Saas business businessess convert visitors into customer through
      powerful positionning and crystal-clear messaging.
    </motion.span>
  );
}

export default HeroDesc;
