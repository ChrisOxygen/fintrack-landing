/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

// const parentVariant = {
//   initial: { y: "200px", opacity: 0 },
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       delayChildren: 0.2,
//       staggerChildren: 0.5,
//     },
//   },
// };
// const childVariant = {
//   initial: { y: "100px", opacity: 0 },
//   animate: {
//     y: 0,
//     opacity: 1,
//   },
// };

function SecondFeatureSection({ variant }) {
  return (
    <motion.div
      // variants={parentVariant}
      // initial="initial"
      // whileInView="animate"
      className="second-feature-section box-container p-x"
    >
      <div>
        <div className="second-feature-block">
          <motion.div
            variants={variant}
            className="second-feature-block-content"
          >
            <h2 className="second-feature-block-content__title">
              The reason to choose<span> our platform</span>
            </h2>
            <p className="second-feature-block-content__desc">
              A finance management platform is a great way to keep in touch with
              your customers. They create a sense of personal intimacy and
              experience.
            </p>
            <div className="section-feature-container">
              <div className="feature-box">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: "-20deg" }}
                  className="feature-box__img"
                >
                  <img src="/assets/rtdata.png" alt="" />
                </motion.div>
                <h6 className="feature-box__title">Real time data</h6>
                <span className="feature-box__desc">
                  Get the data you need to make smarter decisions.
                </span>
              </div>
              <div className="feature-box">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: "-20deg" }}
                  className="feature-box__img"
                >
                  <img src="/assets/fae.png" alt="" />
                </motion.div>
                <h6 className="feature-box__title">Fast and Easy to use</h6>
                <span className="feature-box__desc">
                  Easily to convert API with just a few clicks
                </span>
              </div>
              <div className="feature-box">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: "-20deg" }}
                  className="feature-box__img"
                >
                  <img src="/assets/ss.png" alt="" />
                </motion.div>
                <h6 className="feature-box__title">Safely Security</h6>
                <span className="feature-box__desc">
                  All customer data is encrypted
                </span>
              </div>
              <div className="feature-box">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: "-20deg" }}
                  className="feature-box__img"
                >
                  <img src="/assets/pa.png" alt="" />
                </motion.div>
                <h6 className="feature-box__title">Powerfull App</h6>
                <span className="feature-box__desc">
                  Provide simple and minimalist dashboard
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div variants={variant} className="second-feature-block__img">
            <img src="/assets/desktop-feature2-img.png" alt="" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default SecondFeatureSection;
