import "./footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Back to Top */}
      <div
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to top
      </div>

      <div className="footer-container">

        {/* Get to Know Us */}
        <div className="footer-section">
          <h3>Get to Know Us</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Our Blog</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Help */}
        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li>Chat with Us</li>
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><MdPhone /> +91 98765 43210</p>
          <p><MdEmail /> support@amazoff.com</p>
          <p><MdLocationOn /> Hyderabad, Telangana, India</p>
        </div>

        {/* Socials (Video Style) */}
        <div className="footer-section">
          <h3>Connect with Us</h3>

          <div className="social-column">
            <div className="social-box facebook">
              <FaFacebookF />
              <span>Facebook</span>
            </div>

            <div className="social-box instagram">
              <FaInstagram />
              <span>Instagram</span>
            </div>

            <div className="social-box twitter">
              <FaTwitter />
              <span>Twitter</span>
            </div>

            <div className="social-box linkedin">
              <FaLinkedinIn />
              <span>LinkedIn</span>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Amazoff. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
