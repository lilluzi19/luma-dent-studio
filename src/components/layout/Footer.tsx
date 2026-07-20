import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <a href="#hero" className="footer-logo">
                <img
                  src="/images/icons/logo.webp"
                  alt="LumaDent Studio Logo"
                />
              </a>

              <div>
                <h4>
                  Premium Cosmetic Dentistry &amp; Smile Design In Chelsea
                </h4>

                <p>
                  LumaDent Studio provides cosmetic dentistry, smile
                  makeovers, preventative care and personalised treatment
                  plans in a modern, patient-focused environment.
                </p>

                <div className="footer-trust">
                  <div className="footer-trust-item">
                    <strong>4.9★</strong>
                    <span>Patient Rating</span>
                  </div>

                  <div className="footer-trust-item">
                    <strong>2,500+</strong>
                    <span>Smiles Treated</span>
                  </div>

                  <div className="footer-trust-item">
                    <strong>0%</strong>
                    <span>Finance Available</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-links">
              <h4>Navigation</h4>

              <ul>
                <li>
                  <a href="#services">Services</a>
                </li>

                <li>
                  <a href="#results">Results</a>
                </li>

                <li>
                  <a href="#reviews">Reviews</a>
                </li>

                <li>
                  <a href="#faq">FAQ</a>
                </li>

                <li>
                  <Link href="/treatments">
                    Treatments
                  </Link>
                </li>

                <li>
                  <Link href="/booking">
                    Book Appointment
                  </Link>
                </li>

                <li>
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Patient Information</h4>

              <ul>
                <li>
                  <Link href="/booking">
                    New Patients
                  </Link>
                </li>

                <li>
                  <Link href="/booking">
                    Finance Options
                  </Link>
                </li>

                <li>
                  <Link href="/contact">
                    Clinic Location
                  </Link>
                </li>

                <li>
                  <Link href="/contact">
                    Opening Hours
                  </Link>
                </li>

                <li>
                  <Link href="/privacy">
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link href="/terms">
                    Terms &amp; Conditions
                  </Link>
                </li>

                <li>
                  <Link href="/cookie">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-socials">
              <h4>Follow Us</h4>

              <div>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                >
                  <i className="bi bi-tiktok" />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <i className="bi bi-instagram" />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                >
                  <i className="bi bi-twitter-x" />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          <p>
            © Copyright LumaDent Studio. All Rights Reserved
          </p>

          <div className="credits">
            <p>
              <span>Designed &amp; Created By</span>

              <a
                href="https://usmanzaman.com"
                target="_blank"
                rel="noreferrer"
                className="usman"
              >
                Usman Zaman
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}