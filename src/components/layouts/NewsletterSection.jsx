/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

function NewsletterSection({ variant }) {
  return (
    <div className="newsletter-section box-container">
      <span className="bg-circle"></span>
      <div>
        <div className="newsletter-block">
          <motion.div variants={variant} className="newsletter-content-box">
            <h2 className="newsletter-content-box__title">
              <span>Subscribe</span> to our newsletter
            </h2>
            <span className="newsletter-content-box__desc">
              Sign up here for useful content, relevant posts, special offers,
              and upcoming events, delivered right to your inbox.
            </span>
          </motion.div>
          <span className="bg-img">
            <img src="/assets/abstract-circle.png" alt="" />
          </span>
          <motion.div
            variants={variant}
            className="newsletter-form-box"
            id="news"
          >
            <div className="newsletter-form-box__img">
              <img src="/assets/envelope.png" alt="" />
            </div>
            <form className="newsletter-form">
              <input
                type="text"
                placeholder="hellogmail.com"
                className="newsletter-form__email-input"
              />
              <button className="newsletter-form__submit-btn">
                Subscribe <span>Now</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default NewsletterSection;
