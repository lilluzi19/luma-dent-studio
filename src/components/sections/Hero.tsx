import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero/hero-background.webp"
      >
        <source
          src="/videos/hero/hero-background.mp4"
          type="video/mp4"
        />
      </video>

      <div className="hero-overlay" />

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-tagline">
              Private Dental &amp; Cosmetic Clinic
            </span>

            <h1>
              Confident Smiles Designed With Precision
            </h1>

            <p>
              Premium cosmetic dentistry, smile design and preventative
              care from a calm, modern clinic in Chelsea.
            </p>

            <div className="hero-buttons">
              <Link href="/booking" className="btn btn-primary">
                Book Consultation
              </Link>

              <Link href="/treatments" className="btn btn-secondary">
                View Treatments
              </Link>
            </div>

            <div className="hero-stats">
              <div>
                <strong>4.9★</strong>
                <span>Patient Rating</span>
              </div>

              <div>
                <strong>2,500+</strong>
                <span>Smiles Treated</span>
              </div>

              <div>
                <strong>0%</strong>
                <span>Finance Available</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-card">
              <img
                src="/images/hero/dentist.webp"
                alt="Dental Clinic Room"
              />
            </div>

            <div className="hero-treatment hero-treatment-one">
              <i className="bi bi-stars" />
              <span>Smile Design</span>
            </div>

            <div className="hero-treatment hero-treatment-two">
              <i className="bi bi-calendar2-check" />
              <span>Online Booking</span>
            </div>

            <div className="hero-treatment hero-treatment-three">
              <i className="bi bi-shield-check" />
              <span>Trusted Care</span>
            </div>

            <div className="hero-glass-card">
              <span className="hero-card-kicker">
                Next Available
              </span>

              <strong>Today, 14:30</strong>

              <p>
                Cosmetic consultation slot available.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="scroll-down-indicator"
        aria-hidden="true"
      >
        <span>Scroll Down</span>
      </div>
    </section>
  );
}