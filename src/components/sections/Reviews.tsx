"use client";

import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Reviews() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const swiper = new Swiper(sliderRef.current, {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 700,
      loop: true,
      navigation: {
        prevEl: ".reviews-prev",
        nextEl: ".reviews-next",
      },
      pagination: {
        el: ".reviews-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <SectionHeading
          icon="bi-chat-heart"
          title="Reviews"
        >
          Patient feedback from cosmetic treatments, routine care and smile
          transformations
        </SectionHeading>

        <div
          className="reviews-slider-wrapper"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div
            ref={sliderRef}
            className="reviews-slider swiper"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="review-card">
                  <div className="review-stars">
                    ★★★★★
                  </div>

                  <p>
                    “The whole experience felt calm, modern and
                    professional. My whitening results were amazing.”
                  </p>

                  <div className="review-user">
                    <strong>Amelia R.</strong>
                    <span>Teeth Whitening</span>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="review-card">
                  <div className="review-stars">
                    ★★★★★
                  </div>

                  <p>
                    “I finally felt listened to. The treatment plan was
                    clear and my smile looks completely natural.”
                  </p>

                  <div className="review-user">
                    <strong>Daniel K.</strong>
                    <span>Smile Design</span>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="review-card">
                  <div className="review-stars">
                    ★★★★★
                  </div>

                  <p>
                    “The clinic feels premium without being intimidating.
                    Everything was explained before treatment.”
                  </p>

                  <div className="review-user">
                    <strong>Sophia M.</strong>
                    <span>General Care</span>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="review-card">
                  <div className="review-stars">
                    ★★★★★
                  </div>

                  <p>
                    “My Invisalign journey was smooth from start to finish.
                    The team made every step easy.”
                  </p>

                  <div className="review-user">
                    <strong>Harris A.</strong>
                    <span>Invisalign</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="reviews-controls">
              <button
                className="reviews-prev"
                type="button"
                aria-label="Previous review"
              >
                <i className="bi bi-arrow-left-short" />
              </button>

              <div className="reviews-pagination" />

              <button
                className="reviews-next"
                type="button"
                aria-label="Next review"
              >
                <i className="bi bi-arrow-right-short" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}