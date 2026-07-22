export default function ContactPage() {
  return (
    <section
      id="contact"
      className="contact section"
    >
      <div className="section-heading">
        <div className="section-heading-badge">
          <i
            className="bi bi-chat-heart"
            aria-hidden="true"
          />

          <span>Contact</span>
        </div>

        <p>
          Have a question about treatment options
          or visiting our clinic? Contact us and
          our team will be happy to help
        </p>
      </div>

      <div className="container">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps?q=123%20King%27s%20Road%2C%20Chelsea%2C%20London%20SW3%205XP&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="LumaDent Studio location"
          />
        </div>

        <div className="row g-4 g-lg-5">
          <div className="col-lg-5">
            <div className="info-box">
              <h3>Visit Our Chelsea Clinic</h3>

              <p>
                Whether you&apos;re considering
                cosmetic dentistry, Invisalign,
                veneers or general dental care,
                our team is here to help.
              </p>

              <div className="info-item">
                <div className="icon-box">
                  <i
                    className="bi bi-geo-alt"
                    aria-hidden="true"
                  />
                </div>

                <div className="content">
                  <h4>Clinic Address</h4>
                  <p>123 King&apos;s Road</p>
                  <p>
                    Chelsea, London SW3 5XP
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <i
                    className="bi bi-telephone"
                    aria-hidden="true"
                  />
                </div>

                <div className="content">
                  <h4>Call Us</h4>
                  <p>+44 20 7868 1198</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <i
                    className="bi bi-envelope"
                    aria-hidden="true"
                  />
                </div>

                <div className="content">
                  <h4>Email Us</h4>
                  <p>
                    lumadentstudio@hotmail.com
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <i
                    className="bi bi-clock"
                    aria-hidden="true"
                  />
                </div>

                <div className="content">
                  <h4>Opening Hours</h4>

                  <p>
                    Mon – Fri: 9:00am – 6:00pm
                  </p>

                  <p>
                    Saturday: 9:00am – 2:00pm
                  </p>
                </div>
              </div>

              <div className="contact-trust">
                <div>
                  <strong>4.9★</strong>
                  <span>Patient Rating</span>
                </div>

                <div>
                  <strong>2500+</strong>
                  <span>Smiles Treated</span>
                </div>

                <div>
                  <strong>0%</strong>
                  <span>Finance Available</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-form">
              <h3>Send Us A Message</h3>

              <p>
                Have a question about treatment
                options, appointments, pricing or
                visiting our clinic? Complete the
                form below and a member of our
                team will respond shortly.
              </p>

              <form
                className="contact-message-form"
                noValidate
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Full Name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={6}
                      placeholder="Message"
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-footer">
                  <button
                    type="submit"
                    className="btn-submit"
                  >
                    Send Message
                  </button>

                  <div className="contact-form-note">
                    <i
                      className="bi bi-shield-check"
                      aria-hidden="true"
                    />

                    <span>
                      We typically respond within
                      24 hours.
                    </span>
                  </div>

                  <div
                    className="contact-message"
                    id="contactMessage"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}