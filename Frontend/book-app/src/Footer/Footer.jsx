import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import styles from "../Footer/Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerLinks}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className={styles.footerSocials}>
          <a href="https://facebook.com" >
            <FaFacebook />
          </a>
          <a href="https://twitter.com" >
            <FaTwitter />
          </a>
          <a href="https://linkedin.com">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
        <p>Made with ❤️ in India</p>
      </div>
    </footer>
  );
}

export default Footer;
