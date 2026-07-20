"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const faqItems = [
  {
    question: "Do I need a consultation before treatment?",
    answer:
      "Yes. A consultation helps us understand your goals, check your oral health and recommend the safest treatment plan.",
    animation: "fade-right",
    delay: 300,
    initiallyOpen: true,
  },
  {
    question: "Do you offer cosmetic dentistry?",
    answer:
      "Yes. We offer whitening, veneers, smile design and makeover planning for patients who want a brighter, more confident smile.",
    animation: "fade-left",
    delay: 300,
    initiallyOpen: true,
  },
  {
    question: "Can I spread the cost of treatment?",
    answer:
      "Flexible payment options may be available depending on the treatment. Full costs are explained before anything begins.",
    animation: "fade-right",
    delay: 350,
    initiallyOpen: false,
  },
  {
    question: "How long does teeth whitening take?",
    answer:
      "Whitening timelines vary, but most patients see noticeable improvements within a few weeks depending on the chosen option.",
    animation: "fade-left",
    delay: 350,
    initiallyOpen: false,
  },
  {
    question: "Are veneers suitable for everyone?",
    answer:
      "Not always. We assess your teeth, bite and goals first, then recommend veneers only if they are a suitable long-term choice.",
    animation: "fade-right",
    delay: 400,
    initiallyOpen: false,
  },
  {
    question: "Do you provide Invisalign treatment?",
    answer:
      "Yes. Invisalign can help straighten teeth discreetly using clear aligners planned around your smile and lifestyle.",
    animation: "fade-left",
    delay: 400,
    initiallyOpen: false,
  },
  {
    question: "Will treatment be painful?",
    answer:
      "Most treatments are comfortable. We explain every step clearly and use modern techniques to keep appointments calm.",
    animation: "fade-right",
    delay: 450,
    initiallyOpen: false,
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book online through the booking page, call the clinic or send an enquiry through the contact form.",
    animation: "fade-left",
    delay: 450,
    initiallyOpen: false,
  },
  {
    question: "Do you accept emergency appointments?",
    answer:
      "Emergency availability depends on the day, but we always recommend contacting the clinic as early as possible.",
    animation: "fade-right",
    delay: 500,
    initiallyOpen: false,
  },
  {
    question: "Where is LumaDent Studio based?",
    answer:
      "LumaDent Studio is presented as a private cosmetic dental clinic based in Chelsea, London.",
    animation: "fade-left",
    delay: 500,
    initiallyOpen: false,
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([0, 1]);

  const toggleItem = (index: number) => {
    setOpenItems((currentItems) =>
      currentItems.includes(index)
        ? currentItems.filter((item) => item !== index)
        : [...currentItems, index],
    );
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <SectionHeading
          icon="bi-question-circle"
          title="FAQ"
        >
          Helpful answers about appointments, treatments, pricing and what
          to expect before visiting LumaDent Studio
        </SectionHeading>

        <div className="faq-grid">
          {faqItems.map((item, index) => {
            const isOpen = openItems.includes(index);

            return (
              <div
                key={item.question}
                className="faq-item-wrapper"
                data-aos={item.animation}
                data-aos-delay={item.delay}
              >
                <div
                  className={`faq-item${isOpen ? " active" : ""}`}
                >
                  <button
                    className="faq-question"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleItem(index)}
                  >
                    <span>{item.question}</span>
                    <i className="bi bi-plus-lg" />
                  </button>

                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}