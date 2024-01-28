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

function FirstFeatureSection({ variant }) {
  return (
    <div
      // variants={parentVariant}
      // initial="initial"
      // whileInView="animate"
      className="first-feature-section box-container p-x"
    >
      <div>
        <div className="first-feature-block">
          <div className="first-feature-block__img-box">
            <motion.img
              variants={variant}
              className="first-feature-block__img-box first-feature-block__img-box--desktop"
              src="/assets/desktop-feature-img.png"
              alt=""
            />
            <img
              className="first-feature-block__img-box first-feature-block__img-box--mobile"
              src="/assets/mobile-feature-img.png"
              alt=""
            />
          </div>
          <motion.div
            variants={variant}
            className="first-feature-block-content"
          >
            <h2 className="first-feature-block-content__title">
              Does your website suck at acquiring <span>customers?</span>
            </h2>
            <span className="first-feature-block-content__desc">
              A finance management platform is a great way to keep in touch with
              your customers. They create a sense of personal intimacy and
              experience. At the same time, finance manaegment platforms can
              make money through subscriptions or apps.
            </span>
            <div className="first-feature-block-content__stats">
              <div className="stats-box">
                <h5 className="stats-box__count">1, 289</h5>
                <span className="stats-box__desc">Conversation monthly</span>
              </div>
              <div className="stats-box">
                <h5 className="stats-box__count">2, 350</h5>
                <span className="stats-box__desc">Chatbot triggers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default FirstFeatureSection;
