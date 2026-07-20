import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <SectionHeading
          icon="bi-stars"
          title="Services"
        >
          Premium dental care, cosmetic treatments and smile-focused
          services in one modern clinic
        </SectionHeading>

        <div className="services-grid">
          <div
            className="service-card-wrapper"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="service-card" data-number="01">
              <div className="service-icon">
                <i className="bi bi-brightness-high" />
              </div>

              <h3>Cosmetic Dentistry</h3>

              <p>
                Veneers, whitening and smile design treatments for a
                brighter, natural-looking smile.
              </p>

              <ul className="service-features">
                <li>Veneers</li>
                <li>Teeth Whitening</li>
                <li>Smile Design</li>
                <li>Natural Results</li>
                <li>Cosmetic Planning</li>
              </ul>
            </div>
          </div>

          <div
            className="service-card-wrapper"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div
              className="service-card service-card-raised"
              data-number="02"
            >
              <div className="service-icon">
                <i className="bi bi-shield-check" />
              </div>

              <h3>General Care</h3>

              <p>
                Check-ups, hygiene appointments and preventative care to
                protect long-term oral health.
              </p>

              <ul className="service-features">
                <li>Dental Check-ups</li>
                <li>Hygiene Cleans</li>
                <li>Preventative Care</li>
                <li>Gum Health</li>
                <li>Routine X-rays</li>
              </ul>
            </div>
          </div>

          <div
            className="service-card-wrapper"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div
              className="service-card service-card-raised"
              data-number="03"
            >
              <div className="service-icon">
                <i className="bi bi-grid-1x2" />
              </div>

              <h3>Treatment Options</h3>

              <p>
                Explore popular treatments including Invisalign, implants,
                whitening and restorative care.
              </p>

              <ul className="service-features">
                <li>Invisalign</li>
                <li>Dental Implants</li>
                <li>Restorative Care</li>
              </ul>

              <Link
                href="/treatments"
                className="service-card-link"
              >
                View All Treatments
              </Link>
            </div>
          </div>

          <div
            className="service-card-wrapper"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="service-card" data-number="04">
              <div className="service-icon">
                <i className="bi bi-gem" />
              </div>

              <h3>Smile Makeovers</h3>

              <p>
                Bespoke plans combining cosmetic and alignment options for
                full transformations.
              </p>

              <ul className="service-features">
                <li>Smile Planning</li>
                <li>Alignment Options</li>
                <li>Visible Results</li>
                <li>Bespoke Treatment</li>
                <li>Confidence Focused</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}