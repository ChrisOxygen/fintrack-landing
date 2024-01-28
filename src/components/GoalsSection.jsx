/* eslint-disable react/no-unescaped-entities */

/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

function GoalsSection({ variant }) {
  return (
    <div className="goals-section box-container p-x">
      <div>
        <div className="goals-block">
          <div className="goals-block-content">
            <motion.h2
              variants={variant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="goals-block-content__title"
            >
              Reach your goals by using <span>Dashboard</span>
            </motion.h2>
            <motion.p variants={variant} className="goals-block-content__desc">
              Do you enjoy managing your own finances? Well, we're sure you'll
              love TC Tax Software! Our software makes filing taxes easy. Just
              enter your numbers and we'll do the rest. TurboTax also has an app
              for phones and tablets. Save money on your taxes with our
              discount!
            </motion.p>
          </div>
          <motion.div
            variants={variant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="goals-block__img"
          >
            <img src="/assets/reach-your-goals.png" alt="" className="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default GoalsSection;
