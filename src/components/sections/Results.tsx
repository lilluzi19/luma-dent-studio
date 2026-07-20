"use client";

import Link from "next/link";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Results() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="results" id="results">
      <div className="container">
        <SectionHeading
          icon="bi-trophy"
          title="Results"
        >
          Smile transformations created through careful planning, cosmetic
          treatments and personalised dental care
        </SectionHeading>

        <div className="results-showcase">
          <div
            className="results-content"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <span className="results-label">
              Featured Transformation
            </span>

            <h2>
              Confidence Restored With A Complete Smile Makeover
            </h2>

            <p>
              This patient combined whitening, veneers and minor alignment
              treatment to achieve a brighter, more balanced smile in just
              a few months.
            </p>

            <div className="results-tags">
              <span>Veneers</span>
              <span>Whitening</span>
              <span>Smile Design</span>
            </div>

            <div className="results-stats">
              <div>
                <strong>8 Weeks</strong>
                <span>Treatment Time</span>
              </div>

              <div>
                <strong>4.9★</strong>
                <span>Patient Rating</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Custom Plan</span>
              </div>
            </div>

            <Link
              href="/booking"
              className="results-btn"
            >
              Book Consultation
            </Link>
          </div>

          <div
            className="results-slider-aos"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="results-slider-wrapper">
              <div className="results-slider">
                <img
                  src="/images/results/before.webp"
                  alt="Before smile treatment"
                  className="results-before"
                />

                <div
                  className="results-after-wrap"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src="/images/results/after.webp"
                    alt="After smile treatment"
                    className="results-after"
                  />
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  className="results-range"
                  aria-label="Before and after slider"
                  onChange={(event) =>
                    setSliderPosition(Number(event.target.value))
                  }
                />

                <div
                  className="results-handle"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <i className="bi bi-arrow-left-short" />
                  <i className="bi bi-arrow-right-short" />
                </div>

                <span className="results-before-label">
                  Before
                </span>

                <span className="results-after-label">
                  After
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}