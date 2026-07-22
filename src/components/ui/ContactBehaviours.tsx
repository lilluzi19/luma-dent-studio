"use client";

import { useEffect } from "react";

export default function ContactBehaviours() {
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    let contactMessageTimer:
      | number
      | undefined;

    let sendingTimer:
      | number
      | undefined;

    const contactForm =
      document.querySelector<HTMLFormElement>(
        ".contact-message-form",
      );

    const contactMessage =
      document.querySelector<HTMLElement>(
        "#contactMessage",
      );

    const showContactMessage = (
      text: string,
      type: "error" | "sending" | "success",
    ) => {
      if (!contactMessage) return;

      contactMessage.textContent = text;

      contactMessage.className =
        `contact-message show ${type}`;

      if (contactMessageTimer) {
        window.clearTimeout(
          contactMessageTimer,
        );
      }

      contactMessageTimer =
        window.setTimeout(() => {
          contactMessage.classList.remove(
            "show",
          );
        }, 3500);
    };

    if (contactForm && contactMessage) {
      contactForm.addEventListener(
        "submit",
        (event) => {
          event.preventDefault();

          const requiredFields =
            contactForm.querySelectorAll<
              HTMLInputElement |
              HTMLTextAreaElement
            >(
              "input[required], textarea[required]",
            );

          let isValid = true;

          requiredFields.forEach((field) => {
            if (!field.value.trim()) {
              isValid = false;
            }
          });

          if (!isValid) {
            showContactMessage(
              "Please complete all contact fields before sending.",
              "error",
            );

            return;
          }

          showContactMessage(
            "Sending your message...",
            "sending",
          );

          sendingTimer =
            window.setTimeout(() => {
              showContactMessage(
                "Thank you. Your message has been sent successfully.",
                "success",
              );

              contactForm.reset();
            }, 1400);
        },
        { signal },
      );
    }

    return () => {
      controller.abort();

      if (contactMessageTimer) {
        window.clearTimeout(
          contactMessageTimer,
        );
      }

      if (sendingTimer) {
        window.clearTimeout(sendingTimer);
      }
    };
  }, []);

  return null;
}