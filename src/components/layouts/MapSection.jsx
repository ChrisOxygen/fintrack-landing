/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

function MapSection({ variant }) {
  return (
    <div className="map-section box-container p-x">
      <div>
        <div className="map-block">
          <motion.div variants={variant} className="map-block-desc-title">
            <span className="map-block-desc-title__desc">Global Scale</span>
            <h2 className="map-block-desc-title__title">
              Trusted by company around <span>the World</span>
            </h2>
          </motion.div>
          <motion.div variants={variant} className="map-image">
            <img src="/assets/Map.png" alt="" />
          </motion.div>
          <motion.div variants={variant} className="map-stats-block">
            <div className="map-stat-box">
              <h4 className="map-stat-box__count">350+</h4>
              <span className="map-stat-box__desc">
                Over 500k business powered with us
              </span>
            </div>
            <div className="map-stat-box">
              <h4 className="map-stat-box__count">750k</h4>
              <span className="map-stat-box__desc">
                Users used our platform in around the world
              </span>
            </div>
            <div className="map-stat-box">
              <h4 className="map-stat-box__count">4.8 </h4>
              <span className="map-stat-box__desc">
                Rating on google play and app store
              </span>
            </div>
            <div className="map-stat-box">
              <h4 className="map-stat-box__count">24+</h4>
              <span className="map-stat-box__desc">
                More than 30 countries trust our platform
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default MapSection;
