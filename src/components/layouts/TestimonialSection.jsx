import { IoChevronForwardOutline } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";

/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

function TestimonialSection({ variant }) {
  return (
    <div className="testimonial-section box-container p-x">
      <span className="bg-circle bg-circle--top"></span>
      <span className="bg-circle bg-circle--bottom"></span>
      <div>
        <div className="testimonial-block">
          <motion.h2 variants={variant} className="testimonial-block__title">
            We love our user because they <span>love us.</span>
          </motion.h2>
          <motion.div variants={variant} className="testimonial-nav">
            <div className="testimonial-nav__icon testimonial-nav__icon--left">
              <IoChevronBackOutline />
            </div>
            <div className="testimonial-nav__icon testimonial-nav__icon--right">
              <IoChevronForwardOutline />
            </div>
          </motion.div>
          <motion.div variants={variant} className="testimonials">
            <div className="single-testimonial">
              <div className="single-testimonial__logo">
                <img src="/assets/shopify-logo.png" alt="" />
              </div>
              <p className="single-testimonial__text">
                “Macrivate The most under-rated tools! Easy to setup,
                interactive analytics, great visualizations, and generous free
                tier. What more can you ask for!”
              </p>
              <div className="testimonial-author-box">
                <div className="testimonial-author-box__img">
                  <img src="/assets/jeff-img.svg" alt="" />
                </div>
                <div className="author-name-position">
                  <h6 className="author-name-position__name">Jeff Beck</h6>
                  <span className="author-name-position__position">
                    CEO, Shopnow
                  </span>
                </div>
              </div>
            </div>
            <div className="single-testimonial">
              <div className="single-testimonial__logo">
                <img src="/assets/dropbox-logo.png" alt="" />
              </div>
              <p className="single-testimonial__text">
                “My ultimate goal is to reduce the time-to-value for our
                customers, and using Dock allows us to get the right resources
                into the right hands—quickly.”
              </p>
              <div className="testimonial-author-box">
                <div className="testimonial-author-box__img">
                  <img src="/assets/sara-img.svg" alt="" />
                </div>
                <div className="author-name-position">
                  <h6 className="author-name-position__name">Sarah Hunt</h6>
                  <span className="author-name-position__position">
                    Head of Marketing, Dropdown
                  </span>
                </div>
              </div>
            </div>
            <div className="single-testimonial">
              <div className="single-testimonial__logo">
                <img src="/assets/evernote-logo.png" alt="" />
              </div>
              <p className="single-testimonial__text">
                “Amazing, this is something I have always been looking for.
                Being able to see how users interact is very helpful. Before
                using macrivate it was a blind guessing game.
              </p>
              <div className="testimonial-author-box">
                <div className="testimonial-author-box__img">
                  <img src="/assets/morton-img.svg" alt="" />
                </div>
                <div className="author-name-position">
                  <h6 className="author-name-position__name">
                    Virginia Morton
                  </h6>
                  <span className="author-name-position__position">
                    CRO, Evernose
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
