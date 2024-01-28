import { IoLogoTwitter } from "react-icons/io5";
import { LiaLinkedinIn } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import { IoLogoFacebook } from "react-icons/io5";
import { IoPaperPlane } from "react-icons/io5";
import { IoMdPin } from "react-icons/io";

function Footer() {
  return (
    <footer className="footer-section p-x">
      <div className="footer-section__top box-container">
        <div>
          <div className="footer-top-block">
            <div className="footer-about-block">
              <div className="footer-about-block__img">
                <img src="/assets/header-logo.png" alt="" />
              </div>
              <span className="footer-about-block__desc">
                Live up your life!, While knowing that your loved ones and you
                are protected by us.
              </span>

              <div className="social-icons-container">
                <span className="social-icon">
                  <IoLogoTwitter />
                </span>
                <span className="social-icon">
                  <LiaLinkedinIn />
                </span>
                <span className="social-icon">
                  <LiaInstagram />
                </span>
                <span className="social-icon">
                  <IoLogoFacebook />
                </span>
              </div>
            </div>
            <div className="footer-list-box">
              <h6 className="footer-list-box__title">Company</h6>
              <ul className="footer-list">
                <li className="footer-list__item">Home</li>
                <li className="footer-list__item">About Us</li>
                <li className="footer-list__item">News</li>
                <li className="footer-list__item">Testimonial</li>
              </ul>
            </div>
            <div className="footer-list-box">
              <h6 className="footer-list-box__title">Services</h6>
              <ul className="footer-list">
                <li className="footer-list__item">Health Insurance</li>
                <li className="footer-list__item">Vehicle Insurance</li>
                <li className="footer-list__item">Education Insurance</li>
                <li className="footer-list__item">Financial Insurance</li>
              </ul>
            </div>
            <div className="footer-list-box">
              <h6 className="footer-list-box__title">Support</h6>
              <ul className="footer-list">
                <li className="footer-list__item">FAQs</li>
                <li className="footer-list__item">Help Center</li>
              </ul>
            </div>
            <div className="footer-list-box">
              <h6 className="footer-list-box__title">Contact Us</h6>
              <ul className="footer-list">
                <li className="footer-list__item">
                  <span className="footer-list__icon">
                    <IoPaperPlane />
                  </span>
                  hello@fintrack.com
                </li>
              </ul>
              <h6 className="footer-list-box__title">Visit Us</h6>
              <ul className="footer-list">
                <li className="footer-list__item">
                  <span className="footer-list__icon">
                    <IoMdPin />
                  </span>
                  1901 Thornridge Hawaii
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section__bottom box-container">
        <div>
          <div className="footer-bottom-block">
            <span className="footer-bottom-block__copyright">
              Copyright © 2023 Macrivate. All Rights Reserved.
            </span>
            <ul className="bottom-list">
              <li className="bottom-list__item">Terms of Service</li>
              <li className="bottom-list__item">Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
