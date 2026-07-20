import SectionHeading from "@/components/ui/SectionHeading";

export default function WhyChooseUs() {
  return (
    <section
      className="why-choose-us"
      id="why-choose-us"
    >
      <div className="container">
        <SectionHeading
          icon="bi-patch-check"
          title="Why Choose Us"
        >
          Premium care, modern technology and a calm patient-first
          experience from consultation to final result
        </SectionHeading>

        <div className="why-content">
          <div
            className="why-image-wrapper"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="why-image">
              <img
                src="/images/why/first-visit.webp"
                alt="Dental consultation at LumaDent Studio"
              />
            </div>
          </div>

          <div
            className="why-list"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="why-item-wrapper">
              <div className="why-item">
                <div className="why-icon">
                  <i className="bi bi-person-heart" />
                </div>

                <div>
                  <h3>Patient-First Care</h3>

                  <p>
                    Appointments designed around comfort, clarity and
                    treatment plans that suit your goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="why-item-wrapper">
              <div className="why-item">
                <div className="why-icon">
                  <i className="bi bi-cpu" />
                </div>

                <div>
                  <h3>Modern Technology</h3>

                  <p>
                    Digital scans, precise planning and advanced equipment
                    for smoother, predictable results.
                  </p>
                </div>
              </div>
            </div>

            <div className="why-item-wrapper">
              <div className="why-item">
                <div className="why-icon">
                  <i className="bi bi-chat-square-heart" />
                </div>

                <div>
                  <h3>Clear Communication</h3>

                  <p>
                    Understand your treatment options, pricing and timeline
                    before anything begins.
                  </p>
                </div>
              </div>
            </div>

            <div className="why-item-wrapper">
              <div className="why-item">
                <div className="why-icon">
                  <i className="bi bi-stars" />
                </div>

                <div>
                  <h3>Natural Results</h3>

                  <p>
                    Cosmetic work carefully planned to look clean, balanced
                    and natural to your face.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}