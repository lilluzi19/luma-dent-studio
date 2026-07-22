export default function BookingPage() {
  return (
    <section
      className="booking"
      id="booking"
    >
      <div className="container">
        <div className="section-heading">
          <div className="section-heading-badge">
            <i
              className="bi bi-calendar2-check"
              aria-hidden="true"
            />

            <span>Booking</span>
          </div>

          <p>
            Book your consultation online and take
            the first step towards a healthier,
            more confident smile
          </p>
        </div>

        <div className="booking-content">
          <div className="booking-info">
            <span className="booking-label">
              Start Your Journey
            </span>

            <h2>Choose Your Visit Type</h2>

            <p>
              Select the appointment that best
              matches your needs. Our team will
              review your request and confirm
              availability.
            </p>

            <div className="booking-options">
              <button
                className="booking-option active"
                type="button"
                data-visit="Cosmetic Consultation"
              >
                <i
                  className="bi bi-stars"
                  aria-hidden="true"
                />

                <span>
                  Cosmetic Consultation
                </span>
              </button>

              <button
                className="booking-option"
                type="button"
                data-visit="General Check-up"
              >
                <i
                  className="bi bi-shield-check"
                  aria-hidden="true"
                />

                <span>General Check-up</span>
              </button>

              <button
                className="booking-option"
                type="button"
                data-visit="Emergency Appointment"
              >
                <i
                  className="bi bi-heart-pulse"
                  aria-hidden="true"
                />

                <span>
                  Emergency Appointment
                </span>
              </button>
            </div>

            <div
              className="booking-message"
              id="bookingMessage"
            />
          </div>

          <div className="booking-form-card">
            <h4>Booking Enquiry</h4>

            <form
              className="booking-form"
              noValidate
            >
              <div className="row g-3">
                <div className="col-12 booking-type">
                  <input
                    type="text"
                    className="form-control"
                    id="appointment-type"
                    value="Cosmetic Consultation"
                    readOnly
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="First Name"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Last Name"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <div className="booking-date">
                    <button
                      type="button"
                      className="booking-date-toggle"
                    >
                      <span>Select Date</span>

                      <i
                        className="bi bi-calendar3"
                        aria-hidden="true"
                      />
                    </button>

                    <div className="booking-calendar">
                      <div className="booking-calendar-header">
                        <button
                          type="button"
                          className="booking-calendar-prev"
                          aria-label="Previous month"
                        >
                          <i
                            className="bi bi-chevron-left"
                            aria-hidden="true"
                          />
                        </button>

                        <strong className="booking-calendar-title" />

                        <button
                          type="button"
                          className="booking-calendar-next"
                          aria-label="Next month"
                        >
                          <i
                            className="bi bi-chevron-right"
                            aria-hidden="true"
                          />
                        </button>
                      </div>

                      <div className="booking-calendar-days">
                        <span>Mo</span>
                        <span>Tu</span>
                        <span>We</span>
                        <span>Th</span>
                        <span>Fr</span>
                        <span>Sa</span>
                        <span>Su</span>
                      </div>

                      <div className="booking-calendar-grid" />
                    </div>

                    <input
                      type="hidden"
                      name="date"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="booking-time">
                    <button
                      type="button"
                      className="booking-time-toggle"
                    >
                      <span>Select Time</span>

                      <i
                        className="bi bi-clock"
                        aria-hidden="true"
                      />
                    </button>

                    <div className="booking-time-menu">
                      <div className="booking-time-header">
                        <strong>
                          Available Times
                        </strong>

                        <small>
                          Please select a preferred
                          slot
                        </small>
                      </div>

                      <div className="booking-time-grid">
                        <button
                          type="button"
                          data-value="09:00"
                        >
                          09:00
                        </button>

                        <button
                          type="button"
                          data-value="09:30"
                        >
                          09:30
                        </button>

                        <button
                          type="button"
                          data-value="10:00"
                        >
                          10:00
                        </button>

                        <button
                          type="button"
                          data-value="10:30"
                        >
                          10:30
                        </button>

                        <button
                          type="button"
                          data-value="11:00"
                        >
                          11:00
                        </button>

                        <button
                          type="button"
                          data-value="11:30"
                        >
                          11:30
                        </button>

                        <button
                          type="button"
                          data-value="14:00"
                        >
                          14:00
                        </button>

                        <button
                          type="button"
                          data-value="14:30"
                        >
                          14:30
                        </button>

                        <button
                          type="button"
                          data-value="15:00"
                        >
                          15:00
                        </button>

                        <button
                          type="button"
                          data-value="15:30"
                        >
                          15:30
                        </button>

                        <button
                          type="button"
                          data-value="16:00"
                        >
                          16:00
                        </button>

                        <button
                          type="button"
                          data-value="16:30"
                        >
                          16:30
                        </button>
                      </div>
                    </div>

                    <input
                      type="hidden"
                      name="time"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <textarea
                    name="message"
                    rows={5}
                    className="form-control"
                    placeholder="Any extra details?"
                    required
                  />
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    className="booking-submit"
                  >
                    Send Enquiry
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}