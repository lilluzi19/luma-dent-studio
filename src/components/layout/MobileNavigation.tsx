import Link from "next/link";

export default function MobileNavigation() {
  return (
    <nav
      id="mobile-navigation"
      className="mobile-nav-drawer"
      aria-label="Mobile navigation"
    >
      <button
        className="mobile-nav-close"
        type="button"
        aria-label="Close menu"
      >
        <i className="bi bi-x-lg" />
      </button>

      <div className="mobile-nav-title">
        Navigation
      </div>

      <div className="mobile-nav-divider" />

      <ul>
        <li>
          <a href="/#services">Services</a>
        </li>

        <li>
          <a href="/#results">Results</a>
        </li>

        <li>
          <a href="/#reviews">Reviews</a>
        </li>

        <li>
          <a href="/#faq">FAQ</a>
        </li>

        <li>
          <Link href="/treatments">Treatments</Link>
        </li>

        <li>
          <Link href="/booking">Booking</Link>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <div className="mobile-nav-contact">
        <a href="mailto:lumadentstudio@hotmail.com">
          <i className="bi bi-envelope" />
          <span>lumadentstudio@hotmail.com</span>
        </a>

        <a href="tel:+442078681198">
          <i className="bi bi-phone" />
          <span>+44 20 7868 1198</span>
        </a>

        <div className="mobile-nav-socials">
          <a href="#" aria-label="TikTok">
            <i className="bi bi-tiktok" />
          </a>

          <a href="#" aria-label="Instagram">
            <i className="bi bi-instagram" />
          </a>

          <a href="#" aria-label="Twitter">
            <i className="bi bi-twitter-x" />
          </a>

          <a href="#" aria-label="LinkedIn">
            <i className="bi bi-linkedin" />
          </a>
        </div>
      </div>
    </nav>
  );
}