"use client";

import { useEffect } from "react";

export default function BookingBehaviours() {
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    let bookingMessageTimer: number | undefined;
    let sendingTimer: number | undefined;
    let calendarAnimationTimer: number | undefined;
    let dateTimeResetTimer: number | undefined;

    const bookingOptions =
      document.querySelectorAll<HTMLButtonElement>(
        ".booking .booking-option",
      );

    const appointmentTypeInput =
      document.querySelector<HTMLInputElement>(
        ".booking #appointment-type",
      );

    if (
      bookingOptions.length &&
      appointmentTypeInput
    ) {
      bookingOptions.forEach((option) => {
        option.addEventListener(
          "click",
          () => {
            bookingOptions.forEach((item) => {
              item.classList.remove("active");
            });

            option.classList.add("active");

            appointmentTypeInput.value =
              option.getAttribute("data-visit") || "";
          },
          { signal },
        );
      });
    }

    const bookingTime =
      document.querySelector<HTMLElement>(
        ".booking-time",
      );

    if (bookingTime) {
      const timeToggle =
        bookingTime.querySelector<HTMLButtonElement>(
          ".booking-time-toggle",
        );

      const timeMenu =
        bookingTime.querySelector<HTMLElement>(
          ".booking-time-menu",
        );

      const timeLabel =
        timeToggle?.querySelector<HTMLSpanElement>(
          "span",
        );

      const timeButtons =
        bookingTime.querySelectorAll<HTMLButtonElement>(
          ".booking-time-grid button",
        );

      const hiddenTime =
        bookingTime.querySelector<HTMLInputElement>(
          'input[name="time"]',
        );

      const hiddenDate =
        document.querySelector<HTMLInputElement>(
          '.booking-date input[name="date"]',
        );

      const getUnavailableTimes = (
        dateValue: string,
      ): string[] => {
        if (!dateValue) return [];

        const storageKey =
          `unavailable-times-${dateValue}`;

        const saved =
          sessionStorage.getItem(storageKey);

        if (saved) {
          return JSON.parse(saved) as string[];
        }

        const unavailableTimes: string[] = [];

        timeButtons.forEach((button) => {
          if (Math.random() < 0.28) {
            const value = button.dataset.value;

            if (value) {
              unavailableTimes.push(value);
            }
          }
        });

        sessionStorage.setItem(
          storageKey,
          JSON.stringify(unavailableTimes),
        );

        return unavailableTimes;
      };

      const updateUnavailableTimes = () => {
        if (
          !hiddenTime ||
          !timeLabel ||
          !timeToggle
        ) {
          return;
        }

        const selectedDate =
          hiddenDate?.value || "";

        const unavailableTimes =
          getUnavailableTimes(selectedDate);

        timeButtons.forEach((button) => {
          const value = button.dataset.value ?? "";

          const isUnavailable =
          unavailableTimes.includes(value);

          button.classList.toggle(
            "unavailable",
            isUnavailable,
          );

          if (
            isUnavailable &&
            hiddenTime.value === value
          ) {
            hiddenTime.value = "";
            timeLabel.textContent = "Select Time";

            timeToggle.classList.remove(
              "has-value",
            );
          }
        });
      };

      timeToggle?.addEventListener(
        "click",
        () => {
          updateUnavailableTimes();

          timeMenu?.classList.toggle("show");
          timeToggle.classList.toggle("active");
        },
        { signal },
      );

      timeButtons.forEach((button) => {
        button.addEventListener(
          "click",
          () => {
            if (
              button.classList.contains(
                "unavailable",
              )
            ) {
              return;
            }

            if (
              !hiddenTime ||
              !timeLabel ||
              !timeToggle
            ) {
              return;
            }

            timeButtons.forEach((item) => {
              item.classList.remove("selected");
            });

            button.classList.add("selected");

            const selectedTime =
              button.dataset.value || "";

            timeLabel.textContent = selectedTime;

            timeToggle.classList.add(
              "has-value",
            );

            hiddenTime.value = selectedTime;

            timeMenu?.classList.remove("show");
            timeToggle.classList.remove("active");
          },
          { signal },
        );
      });

      document.addEventListener(
        "click",
        (event) => {
          const clickedElement =
            event.target as HTMLElement;

          if (
            !clickedElement.closest(
              ".booking-time",
            )
          ) {
            timeMenu?.classList.remove("show");

            timeToggle?.classList.remove(
              "active",
            );
          }
        },
        { signal },
      );

      document.addEventListener(
        "click",
        (event) => {
          const clickedElement =
            event.target as HTMLElement;

          if (
            !clickedElement.closest(
              ".booking-calendar-grid button",
            )
          ) {
            return;
          }

          dateTimeResetTimer =
            window.setTimeout(() => {
              timeButtons.forEach((button) => {
                button.classList.remove(
                  "selected",
                );
              });

              if (hiddenTime) {
                hiddenTime.value = "";
              }

              if (timeLabel) {
                timeLabel.textContent =
                  "Select Time";
              }

              timeToggle?.classList.remove(
                "has-value",
                "active",
              );

              updateUnavailableTimes();
            }, 50);
        },
        { signal },
      );
    }

    const bookingSelects =
      document.querySelectorAll<HTMLElement>(
        ".booking-select",
      );

    bookingSelects.forEach((select) => {
      const toggle =
        select.querySelector<HTMLButtonElement>(
          ".booking-select-toggle",
        );

      const menu =
        select.querySelector<HTMLElement>(
          ".booking-select-menu",
        );

      const options =
        select.querySelectorAll<HTMLElement>("li");

      const hiddenInput =
        select.querySelector<HTMLInputElement>(
          "input",
        );

      const label =
        toggle?.querySelector<HTMLSpanElement>(
          "span",
        );

      toggle?.addEventListener(
        "click",
        () => {
          bookingSelects.forEach((other) => {
            if (other === select) return;

            other
              .querySelector(
                ".booking-select-menu",
              )
              ?.classList.remove("show");

            other
              .querySelector(
                ".booking-select-toggle",
              )
              ?.classList.remove("active");
          });

          menu?.classList.toggle("show");
          toggle.classList.toggle("active");
        },
        { signal },
      );

      options.forEach((option) => {
        option.addEventListener(
          "click",
          () => {
            if (
              !label ||
              !hiddenInput ||
              !toggle
            ) {
              return;
            }

            label.textContent =
              option.textContent;

            toggle.classList.add(
              "has-value",
            );

            hiddenInput.value =
              option.dataset.value || "";

            menu?.classList.remove("show");
            toggle.classList.remove("active");
          },
          { signal },
        );
      });
    });

    document.addEventListener(
      "click",
      (event) => {
        const clickedElement =
          event.target as HTMLElement;

        if (
          clickedElement.closest(
            ".booking-select",
          )
        ) {
          return;
        }

        document
          .querySelectorAll<HTMLElement>(
            ".booking-select-menu",
          )
          .forEach((menu) => {
            menu.classList.remove("show");
          });

        document
          .querySelectorAll<HTMLElement>(
            ".booking-select-toggle",
          )
          .forEach((toggle) => {
            toggle.classList.remove("active");
          });
      },
      { signal },
    );

    const bookingDate =
      document.querySelector<HTMLElement>(
        ".booking-date",
      );

    if (bookingDate) {
      const dateToggle =
        bookingDate.querySelector<HTMLButtonElement>(
          ".booking-date-toggle",
        );

      const dateMenu =
        bookingDate.querySelector<HTMLElement>(
          ".booking-calendar",
        );

      const dateLabel =
        dateToggle?.querySelector<HTMLSpanElement>(
          "span",
        );

      const hiddenDate =
        bookingDate.querySelector<HTMLInputElement>(
          'input[name="date"]',
        );

      const calendarTitle =
        bookingDate.querySelector<HTMLElement>(
          ".booking-calendar-title",
        );

      const calendarGrid =
        bookingDate.querySelector<HTMLElement>(
          ".booking-calendar-grid",
        );

      const prevButton =
        bookingDate.querySelector<HTMLButtonElement>(
          ".booking-calendar-prev",
        );

      const nextButton =
        bookingDate.querySelector<HTMLButtonElement>(
          ".booking-calendar-next",
        );

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      let visibleYear = today.getFullYear();
      let visibleMonth = today.getMonth();

      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const getMonthKey = (
        year: number,
        month: number,
      ) =>
        `${year}-${String(month + 1).padStart(
          2,
          "0",
        )}`;

      const getRandomBookedDays = (
        year: number,
        month: number,
      ): number[] => {
        const key = getMonthKey(year, month);

        const storageKey = `booked-${key}`;

        const saved =
          sessionStorage.getItem(storageKey);

        if (saved) {
          return JSON.parse(saved) as number[];
        }

        const daysInMonth = new Date(
          year,
          month + 1,
          0,
        ).getDate();

        const bookedDays: number[] = [];

        for (
          let day = 1;
          day <= daysInMonth;
          day++
        ) {
          if (Math.random() < 0.18) {
            bookedDays.push(day);
          }
        }

        sessionStorage.setItem(
          storageKey,
          JSON.stringify(bookedDays),
        );

        return bookedDays;
      };

      const isCurrentMonth = () =>
        visibleYear === today.getFullYear() &&
        visibleMonth === today.getMonth();

      const renderCalendar = () => {
        if (
          !calendarGrid ||
          !calendarTitle ||
          !prevButton
        ) {
          return;
        }

        calendarGrid.innerHTML = "";

        calendarTitle.textContent =
          `${monthNames[visibleMonth]} ${visibleYear}`;

        const firstDay = new Date(
          visibleYear,
          visibleMonth,
          1,
        );

        const daysInMonth = new Date(
          visibleYear,
          visibleMonth + 1,
          0,
        ).getDate();

        let startDay = firstDay.getDay();

        startDay =
          startDay === 0 ? 7 : startDay;

        const bookedDays =
          getRandomBookedDays(
            visibleYear,
            visibleMonth,
          );

        prevButton.classList.toggle(
          "disabled",
          isCurrentMonth(),
        );

        for (
          let index = 1;
          index < startDay;
          index++
        ) {
          const emptyButton =
            document.createElement("button");

          emptyButton.type = "button";
          emptyButton.classList.add("empty");

          calendarGrid.appendChild(
            emptyButton,
          );
        }

        for (
          let day = 1;
          day <= daysInMonth;
          day++
        ) {
          const dayButton =
            document.createElement("button");

          dayButton.type = "button";
          dayButton.textContent = String(day);

          const buttonDate = new Date(
            visibleYear,
            visibleMonth,
            day,
          );

          buttonDate.setHours(0, 0, 0, 0);

          const isPastDate =
            buttonDate < today;

          const isBooked =
            bookedDays.includes(day);

          if (isPastDate) {
            dayButton.classList.add(
              "disabled",
            );
          }

          if (isBooked && !isPastDate) {
            dayButton.classList.add(
              "booked",
            );
          }

          dayButton.addEventListener(
            "click",
            () => {
              if (
                dayButton.classList.contains(
                  "disabled",
                ) ||
                dayButton.classList.contains(
                  "booked",
                )
              ) {
                return;
              }

              if (
                !dateLabel ||
                !dateToggle ||
                !hiddenDate
              ) {
                return;
              }

              bookingDate
                .querySelectorAll(
                  ".booking-calendar-grid button",
                )
                .forEach((button) => {
                  button.classList.remove(
                    "selected",
                  );
                });

              dayButton.classList.add(
                "selected",
              );

              const selectedDate =
                new Date(
                  visibleYear,
                  visibleMonth,
                  day,
                );

              const displayDate =
                `${day} ${
                  monthNames[visibleMonth]
                } ${visibleYear}`;

              const inputDate =
                selectedDate
                  .toISOString()
                  .split("T")[0];

              dateLabel.textContent =
                displayDate;

              dateToggle.classList.add(
                "has-value",
              );

              hiddenDate.value = inputDate;

              dateMenu?.classList.remove(
                "show",
              );

              dateToggle.classList.remove(
                "active",
              );
            },
            { signal },
          );

          calendarGrid.appendChild(dayButton);
        }
      };

      const changeMonth = (
        direction: "prev" | "next",
      ) => {
        if (
          direction === "prev" &&
          isCurrentMonth()
        ) {
          return;
        }

        if (!calendarGrid) return;

        const fadeClass =
          direction === "next"
            ? "fade-out-left"
            : "fade-out-right";

        calendarGrid.classList.add(
          fadeClass,
        );

        calendarAnimationTimer =
          window.setTimeout(() => {
            if (direction === "next") {
              visibleMonth++;

              if (visibleMonth > 11) {
                visibleMonth = 0;
                visibleYear++;
              }
            }

            if (direction === "prev") {
              visibleMonth--;

              if (visibleMonth < 0) {
                visibleMonth = 11;
                visibleYear--;
              }
            }

            renderCalendar();

            calendarGrid.classList.remove(
              "fade-out-left",
              "fade-out-right",
            );
          }, 220);
      };

      dateToggle?.addEventListener(
        "click",
        () => {
          dateMenu?.classList.toggle("show");

          dateToggle.classList.toggle(
            "active",
          );

          renderCalendar();
        },
        { signal },
      );

      prevButton?.addEventListener(
        "click",
        () => {
          changeMonth("prev");
        },
        { signal },
      );

      nextButton?.addEventListener(
        "click",
        () => {
          changeMonth("next");
        },
        { signal },
      );

      document.addEventListener(
        "click",
        (event) => {
          const clickedElement =
            event.target as HTMLElement;

          if (
            !clickedElement.closest(
              ".booking-date",
            )
          ) {
            dateMenu?.classList.remove("show");

            dateToggle?.classList.remove(
              "active",
            );
          }
        },
        { signal },
      );

      renderCalendar();
    }

    const bookingForm =
      document.querySelector<HTMLFormElement>(
        ".booking-form",
      );

    const bookingMessage =
      document.querySelector<HTMLElement>(
        "#bookingMessage",
      );

    const showBookingMessage = (
      text: string,
      type: "error" | "sending" | "success",
    ) => {
      if (!bookingMessage) return;

      bookingMessage.textContent = text;

      bookingMessage.className =
        `booking-message show ${type}`;

      if (bookingMessageTimer) {
        window.clearTimeout(
          bookingMessageTimer,
        );
      }

      bookingMessageTimer =
        window.setTimeout(() => {
          bookingMessage.classList.remove(
            "show",
          );
        }, 3500);
    };

    const resetBookingForm = () => {
      if (!bookingForm) return;

      bookingForm.reset();

      bookingOptions.forEach((option) => {
        option.classList.remove("active");
      });

      const defaultBookingOption =
        document.querySelector<HTMLButtonElement>(
          '.booking .booking-option[data-visit="Cosmetic Consultation"]',
        );

      defaultBookingOption?.classList.add(
        "active",
      );

      if (appointmentTypeInput) {
        appointmentTypeInput.value =
          "Cosmetic Consultation";
      }

      const dateToggle =
        document.querySelector<HTMLElement>(
          ".booking-date-toggle",
        );

      const dateLabel =
        document.querySelector<HTMLElement>(
          ".booking-date-toggle span",
        );

      const hiddenDate =
        document.querySelector<HTMLInputElement>(
          '.booking-date input[name="date"]',
        );

      if (
        dateToggle &&
        dateLabel &&
        hiddenDate
      ) {
        dateToggle.classList.remove(
          "has-value",
          "active",
        );

        dateLabel.textContent = "Select Date";
        hiddenDate.value = "";
      }

      document
        .querySelectorAll(
          ".booking-calendar-grid button",
        )
        .forEach((button) => {
          button.classList.remove("selected");
        });

      const timeToggle =
        document.querySelector<HTMLElement>(
          ".booking-time-toggle",
        );

      const timeLabel =
        document.querySelector<HTMLElement>(
          ".booking-time-toggle span",
        );

      const hiddenTime =
        document.querySelector<HTMLInputElement>(
          '.booking-time input[name="time"]',
        );

      if (
        timeToggle &&
        timeLabel &&
        hiddenTime
      ) {
        timeToggle.classList.remove(
          "has-value",
          "active",
        );

        timeLabel.textContent = "Select Time";
        hiddenTime.value = "";
      }

      document
        .querySelectorAll(
          ".booking-time-grid button",
        )
        .forEach((button) => {
          button.classList.remove("selected");
        });
    };

    if (bookingForm && bookingMessage) {
      bookingForm.addEventListener(
        "submit",
        (event) => {
          event.preventDefault();

          const requiredFields =
            bookingForm.querySelectorAll<
              HTMLInputElement |
              HTMLTextAreaElement
            >(
              'input[required], textarea[required], input[type="hidden"]',
            );

          let isValid = true;

          requiredFields.forEach((field) => {
            if (!field.value.trim()) {
              isValid = false;
            }
          });

          if (!isValid) {
            showBookingMessage(
              "Please complete all booking fields before sending.",
              "error",
            );

            return;
          }

          showBookingMessage(
            "Sending your booking enquiry...",
            "sending",
          );

          sendingTimer =
            window.setTimeout(() => {
              showBookingMessage(
                "Thank you. Your booking enquiry has been sent successfully.",
                "success",
              );

              resetBookingForm();
            }, 1400);
        },
        { signal },
      );
    }

    return () => {
      controller.abort();

      if (bookingMessageTimer) {
        window.clearTimeout(
          bookingMessageTimer,
        );
      }

      if (sendingTimer) {
        window.clearTimeout(sendingTimer);
      }

      if (calendarAnimationTimer) {
        window.clearTimeout(
          calendarAnimationTimer,
        );
      }

      if (dateTimeResetTimer) {
        window.clearTimeout(
          dateTimeResetTimer,
        );
      }
    };
  }, []);

  return null;
}