import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Header() {
  return (
    <header id="header" className="header sticky-top">
      <div className="topbar">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="topbar-contact d-flex align-items-center">
            <a href="mailto:lumadentstudio@hotmail.com">
              <i className="bi bi-envelope" />
              <span>lumadentstudio@hotmail.com</span>
            </a>

            <a href="tel:+442078681198">
              <i className="bi bi-phone" />
              <span>+44 20 7868 1198</span>
            </a>
          </div>

          <div className="topbar-socials d-flex align-items-center">
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
      </div>

      <div className="main-header">
        <div className="container header-inner">
          <button
            className="mobile-burger"
            type="button"
            aria-label="Open menu"
            aria-expanded="false"
            aria-controls="mobile-navigation"
          >
            <span />
            <span />
            <span />
          </button>

          <a
            href="#hero"
            className="logo"
            id="logo"
            aria-label="LumaDent Studio Home"
          >
            <span className="logo-mark">
              <img
                src="/images/icons/logo.webp"
                alt="LumaDent Logo"
              />
            </span>

            <span className="logo-text">
              <strong>LumaDent</strong>
              <small>Studio</small>
            </span>
          </a>

          <nav id="navmenu" className="navmenu">
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
                <Link href="/treatments">Treatments</Link>
              </li>

              <li>
                <Link href="/booking">Booking</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}