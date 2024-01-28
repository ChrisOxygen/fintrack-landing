import { IoIosArrowForward } from "react-icons/io";
import { IoRocketOutline } from "react-icons/io5";
import { IoMegaphoneOutline } from "react-icons/io5";
import { LiaChartBarSolid } from "react-icons/lia";
import { IoTrendingUpSharp } from "react-icons/io5";

/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

function SpecialitiesSection({ variant }) {
  return (
    <div className="specialities-section box-container p-x">
      <span className="bg-circle bg-circle--top"></span>
      <span className="bg-circle bg-circle--bottom"></span>
      <div>
        <div className="specialities-block">
          <motion.div
            variants={variant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="special-feature-block"
          >
            <span className="special-feature-block__desc">Features</span>
            <h2 className="special-feature-block__title">
              Our Platform specially designed for everyone.
            </h2>
            <button className="see-features-btn">
              <span className="see-features-btn__text">See All Features</span>
              <span className="see-features-btn__icon">
                <IoIosArrowForward />
              </span>
            </button>
          </motion.div>
          <motion.div
            variants={variant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="specialty-block"
          >
            <div className="specialty-block__img">
              <IoRocketOutline />
            </div>
            <h4 className="specialty-block__title">Performance</h4>
            <p className="specialty-block__desc">
              Identify your top performers, and equip every person to succeed
              with their work.
            </p>
          </motion.div>
          <motion.div
            variants={variant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="specialty-block"
          >
            <div className="specialty-block__img">
              <IoMegaphoneOutline />
            </div>
            <h4 className="specialty-block__title">Engagement</h4>
            <p className="specialty-block__desc">
              Get feedback from everyone in the organization and find insights
              to build the culture you desire.
            </p>
          </motion.div>
          <motion.div
            variants={variant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="specialty-block"
          >
            <div className="specialty-block__img">
              <LiaChartBarSolid />
            </div>
            <h4 className="specialty-block__title">Analytics</h4>
            <p className="specialty-block__desc">
              Utilize advanced people analytics to increase impact and
              innovation.
            </p>
          </motion.div>
          <motion.div
            variants={variant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="specialty-block"
          >
            <div className="specialty-block__img">
              <IoTrendingUpSharp />
            </div>
            <h4 className="specialty-block__title">Grow</h4>
            <p className="specialty-block__desc">
              Increase growth and engagement with Macrivates dynamic employee
              development tools.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SpecialitiesSection;
