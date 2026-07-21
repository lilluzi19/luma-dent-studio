"use client";

import { useEffect, useRef } from "react";

type TreatmentCategory =
  | "cosmetic"
  | "general"
  | "restorative";

type Treatment = {
  title: string;
  description: string;
  icon: string;
  category: TreatmentCategory;
  features: string[];
  buttonText: string;
};

const treatments: Treatment[] = [
  {
    title: "Veneers",

    description:
      "Thin custom shells designed to improve tooth shape, colour and symmetry.",

    icon: "bi-stars",

    category: "cosmetic",

    features: [
      "Natural finish",
      "Smile design planning",
      "Long-lasting results",
    ],

    buttonText: "Book Consultation",
  },

  {
    title: "Teeth Whitening",

    description:
      "Professional whitening options for a brighter smile with safe, guided care.",

    icon: "bi-brightness-high",

    category: "cosmetic",

    features: [
      "Noticeable brightness",
      "Safe process",
      "Custom guidance",
    ],

    buttonText: "Book Consultation",
  },

  {
    title: "Invisalign",

    description:
      "Clear aligners planned to gradually straighten teeth with minimal disruption.",

    icon: "bi-align-center",

    category: "cosmetic",

    features: [
      "Discreet aligners",
      "Digital planning",
      "Flexible appointments",
    ],

    buttonText: "Book Consultation",
  },

  {
    title: "Dental Implants",

    description:
      "Modern replacement options for missing teeth, designed for function and confidence.",

    icon: "bi-gem",

    category: "restorative",

    features: [
      "Natural appearance",
      "Strong replacement",
      "Personalised plan",
    ],

    buttonText: "Book Consultation",
  },

  {
    title: "Dental Check-ups",

    description:
      "Routine assessments to monitor oral health and catch problems early.",

    icon: "bi-shield-check",

    category: "general",

    features: [
      "Oral health review",
      "Clear advice",
      "Preventative focus",
    ],

    buttonText: "Book Appointment",
  },

  {
    title: "Hygiene Cleans",

    description:
      "Professional cleaning to support gum health and keep your smile fresh.",

    icon: "bi-droplet",

    category: "general",

    features: [
      "Deep clean",
      "Gum care",
      "Fresh feel",
    ],

    buttonText: "Book Appointment",
  },
];

export default function TreatmentsPage() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const treatmentFilters =
      section.querySelectorAll<HTMLButtonElement>(
        ".treatment-filter",
      );

    const treatmentCards =
      section.querySelectorAll<HTMLElement>(
        ".treatment-card-wrapper",
      );

    const treatmentCta =
      section.querySelector<HTMLElement>(
        ".treatment-cta-wrapper",
      );

    let treatmentFilterTimer:
      | ReturnType<typeof setTimeout>
      | undefined;

    let treatmentCleanupTimer:
      | ReturnType<typeof setTimeout>
      | undefined;

    const removeListeners: Array<
      () => void
    > = [];

    treatmentFilters.forEach((filter) => {
      const handleClick = () => {
        const selectedCategory =
          filter.dataset.filter;

        const animatedItems = treatmentCta
          ? [
              ...Array.from(treatmentCards),
              treatmentCta,
            ]
          : Array.from(treatmentCards);

        if (treatmentFilterTimer) {
          clearTimeout(
            treatmentFilterTimer,
          );
        }

        if (treatmentCleanupTimer) {
          clearTimeout(
            treatmentCleanupTimer,
          );
        }

        treatmentFilters.forEach(
          (button) => {
            button.classList.remove("active");
          },
        );

        filter.classList.add("active");

        animatedItems.forEach((item) => {
          item.classList.remove(
            "treatment-fade-in",
          );

          item.classList.add(
            "treatment-fade-out",
          );
        });

        treatmentFilterTimer =
          setTimeout(() => {
            treatmentCards.forEach(
              (card) => {
                const cardCategory =
                  card.dataset.category;

                const shouldShow =
                  selectedCategory === "all" ||
                  selectedCategory ===
                    cardCategory;

                card.classList.toggle(
                  "treatment-hidden",
                  !shouldShow,
                );

                if (shouldShow) {
                  card.classList.remove(
                    "treatment-fade-out",
                  );

                  card.classList.add(
                    "treatment-fade-in",
                  );
                }
              },
            );

            if (treatmentCta) {
              treatmentCta.classList.remove(
                "treatment-fade-out",
              );

              treatmentCta.classList.add(
                "treatment-fade-in",
              );
            }

            treatmentCleanupTimer =
              setTimeout(() => {
                animatedItems.forEach(
                  (item) => {
                    item.classList.remove(
                      "treatment-fade-in",
                    );
                  },
                );
              }, 700);
          }, 450);
      };

      filter.addEventListener(
        "click",
        handleClick,
      );

      removeListeners.push(() => {
        filter.removeEventListener(
          "click",
          handleClick,
        );
      });
    });

    return () => {
      removeListeners.forEach(
        (removeListener) => {
          removeListener();
        },
      );

      if (treatmentFilterTimer) {
        clearTimeout(
          treatmentFilterTimer,
        );
      }

      if (treatmentCleanupTimer) {
        clearTimeout(
          treatmentCleanupTimer,
        );
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="treatments treatments-page"
      id="treatments"
    >
      <div className="container">
        <div className="section-heading">
          <div className="section-heading-badge">
            <i
              className="bi bi-grid-1x2"
              aria-hidden="true"
            />

            <span>Treatments</span>
          </div>

          <p>
            Explore cosmetic, general and
            restorative dental treatments designed
            around your smile goals
          </p>
        </div>

        <div className="treatment-filters">
          <button
            className="treatment-filter active"
            type="button"
            data-filter="all"
          >
            All
          </button>

          <button
            className="treatment-filter"
            type="button"
            data-filter="cosmetic"
          >
            Cosmetic
          </button>

          <button
            className="treatment-filter"
            type="button"
            data-filter="general"
          >
            General
          </button>

          <button
            className="treatment-filter"
            type="button"
            data-filter="restorative"
          >
            Restorative
          </button>
        </div>

        <div className="treatments-grid">
          {treatments.map((treatment) => (
            <div
              className="treatment-card-wrapper"
              data-category={
                treatment.category
              }
              key={treatment.title}
            >
              <div className="treatment-card">
                <div className="treatment-icon">
                  <i
                    className={`bi ${treatment.icon}`}
                    aria-hidden="true"
                  />
                </div>

                <h3>{treatment.title}</h3>

                <p>
                  {treatment.description}
                </p>

                <ul>
                  {treatment.features.map(
                    (feature) => (
                      <li key={feature}>
                        {feature}
                      </li>
                    ),
                  )}
                </ul>

                <a href="/booking">
                  {treatment.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="treatment-cta-wrapper">
          <div className="treatment-cta">
            <div>
              <span>
                Not sure what you need?
              </span>

              <h2>
                Start With A Personal
                Consultation
              </h2>

              <p>
                We’ll assess your smile, explain
                your options and recommend the
                safest treatment plan.
              </p>
            </div>

            <a href="/booking">
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}