const initialPageHash = window.location.hash;





(function () {
  const toggle = document.getElementById("theme-toggle");

  const savedTheme = localStorage.getItem("theme");

  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  const currentTheme = savedTheme || preferredTheme;

  if (!toggle) return;

  toggle.setAttribute("aria-pressed", currentTheme === "dark");

  toggle.addEventListener("click", () => {
    const html = document.documentElement;

    html.classList.add("theme-changing");

    const activeTheme = html.getAttribute("data-theme");
    const nextTheme = activeTheme === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    toggle.setAttribute("aria-pressed", nextTheme === "dark");

    clearTimeout(window.themeTransitionTimer);

    window.themeTransitionTimer = setTimeout(() => {
      html.classList.remove("theme-changing");
    }, 650);
  });
})();





const heroVideo = document.querySelector(".hero .hero-video");

function heroVideoMobileFix() {
  if (!heroVideo) return;

  heroVideo.muted = true;
  heroVideo.defaultMuted = true;
  heroVideo.autoplay = true;
  heroVideo.loop = true;
  heroVideo.playsInline = true;

  heroVideo.removeAttribute("controls");
  heroVideo.setAttribute("muted", "");
  heroVideo.setAttribute("autoplay", "");
  heroVideo.setAttribute("playsinline", "");
  heroVideo.setAttribute("webkit-playsinline", "");

  const playPromise = heroVideo.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {});
  }
}

heroVideoMobileFix();

document.addEventListener("DOMContentLoaded", heroVideoMobileFix);
window.addEventListener("load", heroVideoMobileFix);
window.addEventListener("pageshow", heroVideoMobileFix);
window.addEventListener("touchstart", heroVideoMobileFix, { once: true });





const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});





window.addEventListener("load", function () {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  if (initialPageHash) {
    return;
  }

  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, 10);
});





document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');

  function getOffset(targetId) {
    if (targetId === "#hero") return 125;
    return 60;
  }

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);

      if (!target) return;

      e.preventDefault();

      const offset = getOffset(targetId);
      const start = window.pageYOffset;
      const end = target.getBoundingClientRect().top + window.pageYOffset - offset;
      const duration = 1000;
      let startTime = null;

      function smoothScroll(currentTime) {
        if (!startTime) startTime = currentTime;

        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        const ease = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, start + (end - start) * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(smoothScroll);
        }
      }

      requestAnimationFrame(smoothScroll);
      history.replaceState(null, null, window.location.pathname);
    });
  });
});





(function () {
  function isMobileOrTablet() {
    return window.matchMedia("(max-width: 1024px)").matches;
  }

  function getMobileOffset(targetId) {
    if (targetId === "#hero") return 0;
    return 75;
  }

  function smoothScrollMobile(target, targetId) {
    const offset = getMobileOffset(targetId);
    const start = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const end = target.getBoundingClientRect().top + start - offset;
    const distance = end - start;
    const duration = 550;

    let startTime = null;

    function animate(currentTime) {
      if (!startTime) startTime = currentTime;

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const ease = 1 - Math.pow(1 - progress, 3);

      const nextPosition = start + distance * ease;

      window.scrollTo(0, nextPosition);
      document.documentElement.scrollTop = nextPosition;
      document.body.scrollTop = nextPosition;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }

  function handleMobileIndexScroll(event) {
    if (!isMobileOrTablet()) return;
    if (!document.body.classList.contains("index-page")) return;

    const link = event.target.closest(
      'a[href="#hero"], a[href="#services"], a[href="#results"], a[href="#reviews"], a[href="#faq"]'
    );
    if (!link) return;

    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    document.body.classList.remove("mobile-nav-active");

    smoothScrollMobile(target, targetId);

    history.replaceState(null, null, window.location.pathname);
  }

  document.addEventListener("touchend", handleMobileIndexScroll, true);
  document.addEventListener("click", handleMobileIndexScroll, true);
})();





const header = document.querySelector("#header");

if (header) {
  function updateHeaderState() {
    if (window.scrollY > 10) {
      header.classList.add("header-shrink");
    } else {
      header.classList.remove("header-shrink");
    }
  }

  window.addEventListener("scroll", updateHeaderState);
  updateHeaderState();
}





const magneticLinks = document.querySelectorAll(".header .navmenu a");

magneticLinks.forEach(link => {
  link.addEventListener("mousemove", event => {
    if (window.innerWidth <= 992) return;

    const rect = link.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    link.style.transition = "color 0.4s ease, transform 0.25s ease-out";
    link.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  });

  link.addEventListener("mouseleave", () => {
    link.style.transition = "color 0.4s ease, transform 0.35s ease";
    link.style.transform = "translate(0, 0)";
  });
});





function aosInit() {
  if (typeof AOS === "undefined") return;

  const isMobileOrTablet = window.innerWidth <= 1024;

  if (isMobileOrTablet) {
    document.body.classList.add("aos-disabled-mobile");

    document.querySelectorAll("[data-aos]").forEach(el => {
      el.classList.add("aos-animate");
      el.style.opacity = "1";
      el.style.transform = "none";
    });

    return;
  }

  AOS.init({
    duration: 650,
    easing: "ease-in-out",
    once: false,
    mirror: false,
    offset: 80
  });

  AOS.refreshHard();
}

function runPreloader() {
  if (window.preloaderHasRun) return;
  window.preloaderHasRun = true;

  const preloader = document.querySelector("#preloader");

  if (initialPageHash) {
    const target = document.querySelector(initialPageHash);

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "instant"
      });

      history.replaceState(null, null, window.location.pathname);
    }
  }

  setTimeout(() => {
    if (preloader) {
      preloader.classList.add("hide");
    }

    document.body.classList.remove("preloader-active");

    aosInit();
  }, 1300);

  setTimeout(() => {
    if (preloader) {
      preloader.remove();
    }
  }, 3600);
}

if (document.body.classList.contains("menu-page")) {
  document.addEventListener("DOMContentLoaded", runPreloader);
} else {
  window.addEventListener("load", runPreloader);
}

setTimeout(runPreloader, 5000);





const mobileBurger = document.querySelector(".mobile-burger");
const mobileClose = document.querySelector(".mobile-nav-close");
const mobileDrawer = document.querySelector(".mobile-nav-drawer");

if (mobileBurger) {
  mobileBurger.addEventListener("click", event => {
    event.stopPropagation();
    document.body.classList.add("mobile-nav-active");
  });
}

if (mobileClose) {
  mobileClose.addEventListener("click", event => {
    event.stopPropagation();
    document.body.classList.remove("mobile-nav-active");
  });
}

document.addEventListener("click", event => {
  if (!document.body.classList.contains("mobile-nav-active")) return;

  if (mobileDrawer && mobileDrawer.contains(event.target)) {
    return;
  }

  if (mobileBurger && mobileBurger.contains(event.target)) {
    return;
  }

  document.body.classList.remove("mobile-nav-active");
});





const heroScrollIndicator = document.querySelector(".hero .scroll-down-indicator");

if (heroScrollIndicator) {
  window.addEventListener("scroll", () => {
    heroScrollIndicator.classList.toggle("scroll-hidden", window.scrollY > 50);
  });
}





const resultsSlider = document.querySelector(".results .results-slider");

if (resultsSlider) {
  const range = resultsSlider.querySelector(".results-range");
  const afterWrap = resultsSlider.querySelector(".results-after-wrap");
  const handle = resultsSlider.querySelector(".results-handle");

  range.addEventListener("input", () => {
    const value = range.value;

    afterWrap.style.width = `${value}%`;
    handle.style.left = `${value}%`;
  });
}





const reviewsSlider = document.querySelector(".reviews .reviews-slider");

if (reviewsSlider && typeof Swiper !== "undefined") {
  new Swiper(reviewsSlider, {
    loop: true,
    speed: 750,
    spaceBetween: 24,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1025: {
        slidesPerView: 3
      }
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".reviews .reviews-next",
      prevEl: ".reviews .reviews-prev"
    },
    pagination: {
      el: ".reviews .reviews-pagination",
      clickable: true
    }
  });
}





const scrollSpySections = document.querySelectorAll(
  "#services, #results, #reviews, #faq"
);

const navLinks = document.querySelectorAll(
  ".header .navmenu a, .mobile-nav-drawer a"
);

function normalizePage(value) {
  if (!value) return "index";

  let page = value.split("#")[0];
  page = page.substring(page.lastIndexOf("/") + 1);
  page = page.replace(".html", "");

  return page || "index";
}

function clearActiveNavLinks() {
  navLinks.forEach(link => link.classList.remove("active"));
}

function setActiveNavByHash(hash) {
  if (!hash) return false;

  let matched = false;

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;

    if (href === hash || href.endsWith(hash)) {
      link.classList.add("active");
      matched = true;
    }
  });

  return matched;
}

function updateActiveNavLink() {
  const currentPage = normalizePage(window.location.pathname);

  clearActiveNavLinks();

  if (document.body.classList.contains("index-page")) {
    let currentSection = "";

    scrollSpySections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        currentSection = section.getAttribute("id");
      }
    });

    if (currentSection) {
      setActiveNavByHash(`#${currentSection}`);
    }

    return;
  }

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;

    const linkPage = normalizePage(href);

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNavLink);
window.addEventListener("load", updateActiveNavLink);
window.addEventListener("hashchange", updateActiveNavLink);
document.addEventListener("DOMContentLoaded", updateActiveNavLink);





const treatmentFilters = document.querySelectorAll(".treatments-page .treatment-filter");
const treatmentCards = document.querySelectorAll(".treatments-page .treatment-card-wrapper");
const treatmentCta = document.querySelector(".treatments-page .treatment-cta-wrapper");

if (treatmentFilters.length && treatmentCards.length) {
  let treatmentFilterTimer;
  let treatmentCleanupTimer;

  treatmentFilters.forEach(filter => {
    filter.addEventListener("click", () => {
      const selectedCategory = filter.getAttribute("data-filter");
      const animatedItems = treatmentCta
        ? [...treatmentCards, treatmentCta]
        : [...treatmentCards];

      clearTimeout(treatmentFilterTimer);
      clearTimeout(treatmentCleanupTimer);

      treatmentFilters.forEach(button => {
        button.classList.remove("active");
      });

      filter.classList.add("active");

      animatedItems.forEach(item => {
        item.classList.remove("treatment-fade-in");
        item.classList.add("treatment-fade-out");
      });

      treatmentFilterTimer = setTimeout(() => {
        treatmentCards.forEach(card => {
          const cardCategory = card.getAttribute("data-category");
          const shouldShow = selectedCategory === "all" || selectedCategory === cardCategory;

          card.classList.toggle("treatment-hidden", !shouldShow);

          if (shouldShow) {
            card.classList.remove("treatment-fade-out");
            card.classList.add("treatment-fade-in");
          }
        });

        if (treatmentCta) {
          treatmentCta.classList.remove("treatment-fade-out");
          treatmentCta.classList.add("treatment-fade-in");
        }

        treatmentCleanupTimer = setTimeout(() => {
          animatedItems.forEach(item => {
            item.classList.remove("treatment-fade-in");
          });
        }, 700);
      }, 450);
    });
  });
}




const bookingOptions = document.querySelectorAll(".booking .booking-option");
const appointmentTypeInput = document.querySelector(".booking #appointment-type");

if (bookingOptions.length && appointmentTypeInput) {
  bookingOptions.forEach(option => {
    option.addEventListener("click", () => {
      bookingOptions.forEach(item => {
        item.classList.remove("active");
      });

      option.classList.add("active");
      appointmentTypeInput.value = option.getAttribute("data-visit");
    });
  });
}





const bookingTime = document.querySelector(".booking-time");

if (bookingTime) {
  const timeToggle = bookingTime.querySelector(".booking-time-toggle");
  const timeMenu = bookingTime.querySelector(".booking-time-menu");
  const timeLabel = timeToggle.querySelector("span");
  const timeButtons = bookingTime.querySelectorAll(".booking-time-grid button");
  const hiddenTime = bookingTime.querySelector('input[name="time"]');
  const hiddenDate = document.querySelector('.booking-date input[name="date"]');

  function getUnavailableTimes(dateValue) {
    if (!dateValue) return [];

    const saved = sessionStorage.getItem(`unavailable-times-${dateValue}`);

    if (saved) return JSON.parse(saved);

    const unavailableTimes = [];

    timeButtons.forEach(button => {
      if (Math.random() < 0.28) {
        unavailableTimes.push(button.dataset.value);
      }
    });

    sessionStorage.setItem(`unavailable-times-${dateValue}`, JSON.stringify(unavailableTimes));

    return unavailableTimes;
  }

  function updateUnavailableTimes() {
    const selectedDate = hiddenDate ? hiddenDate.value : "";
    const unavailableTimes = getUnavailableTimes(selectedDate);

    timeButtons.forEach(button => {
      const isUnavailable = unavailableTimes.includes(button.dataset.value);

      button.classList.toggle("unavailable", isUnavailable);

      if (isUnavailable && hiddenTime.value === button.dataset.value) {
        hiddenTime.value = "";
        timeLabel.textContent = "Select Time";
        timeToggle.classList.remove("has-value");
      }
    });
  }

  timeToggle.addEventListener("click", () => {
    updateUnavailableTimes();

    timeMenu.classList.toggle("show");
    timeToggle.classList.toggle("active");
  });

  timeButtons.forEach(button => {
    button.addEventListener("click", () => {
      if (button.classList.contains("unavailable")) {
        return;
      }

      timeButtons.forEach(item => {
        item.classList.remove("selected");
      });

      button.classList.add("selected");

      timeLabel.textContent = button.dataset.value;
      timeToggle.classList.add("has-value");
      hiddenTime.value = button.dataset.value;

      timeMenu.classList.remove("show");
      timeToggle.classList.remove("active");
    });
  });

  document.addEventListener("click", event => {
    if (!event.target.closest(".booking-time")) {
      timeMenu.classList.remove("show");
      timeToggle.classList.remove("active");
    }
  });

  document.addEventListener("click", event => {
    if (event.target.closest(".booking-calendar-grid button")) {
      setTimeout(() => {
        timeButtons.forEach(button => {
          button.classList.remove("selected");
        });

        hiddenTime.value = "";
        timeLabel.textContent = "Select Time";
        timeToggle.classList.remove("has-value", "active");

        updateUnavailableTimes();
      }, 50);
    }
  });
}





document.querySelectorAll('.booking-select').forEach(select => {

  const toggle = select.querySelector('.booking-select-toggle');
  const menu = select.querySelector('.booking-select-menu');
  const options = select.querySelectorAll('li');
  const hiddenInput = select.querySelector('input');
  const label = toggle.querySelector('span');

  toggle.addEventListener('click', () => {

    document.querySelectorAll('.booking-select').forEach(other => {
      if (other !== select) {
        other.querySelector('.booking-select-menu').classList.remove('show');
        other.querySelector('.booking-select-toggle').classList.remove('active');
      }
    });

    menu.classList.toggle('show');
    toggle.classList.toggle('active');
  });

  options.forEach(option => {

    option.addEventListener('click', () => {

      label.textContent = option.textContent;
      toggle.classList.add("has-value");
      hiddenInput.value = option.dataset.value;

      menu.classList.remove('show');
      toggle.classList.remove('active');
    });

  });

});

document.addEventListener('click', e => {

  if (!e.target.closest('.booking-select')) {

    document.querySelectorAll('.booking-select-menu').forEach(menu => {
      menu.classList.remove('show');
    });

    document.querySelectorAll('.booking-select-toggle').forEach(toggle => {
      toggle.classList.remove('active');
    });

  }

});





const bookingDate = document.querySelector(".booking-date");

if (bookingDate) {
  const dateToggle = bookingDate.querySelector(".booking-date-toggle");
  const dateMenu = bookingDate.querySelector(".booking-calendar");
  const dateLabel = dateToggle.querySelector("span");
  const hiddenDate = bookingDate.querySelector('input[name="date"]');

  const calendarTitle = bookingDate.querySelector(".booking-calendar-title");
  const calendarGrid = bookingDate.querySelector(".booking-calendar-grid");
  const prevButton = bookingDate.querySelector(".booking-calendar-prev");
  const nextButton = bookingDate.querySelector(".booking-calendar-next");

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let visibleYear = today.getFullYear();
  let visibleMonth = today.getMonth();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  function getMonthKey(year, month) {
    return `${year}-${String(month + 1).padStart(2, "0")}`;
  }

  function getRandomBookedDays(year, month) {
    const key = getMonthKey(year, month);
    const saved = sessionStorage.getItem(`booked-${key}`);

    if (saved) return JSON.parse(saved);

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const bookedDays = [];

    for (let day = 1; day <= daysInMonth; day++) {
      if (Math.random() < 0.18) {
        bookedDays.push(day);
      }
    }

    sessionStorage.setItem(`booked-${key}`, JSON.stringify(bookedDays));
    return bookedDays;
  }

  function isCurrentMonth() {
    return visibleYear === today.getFullYear() && visibleMonth === today.getMonth();
  }

  function renderCalendar() {
    calendarGrid.innerHTML = "";
    calendarTitle.textContent = `${monthNames[visibleMonth]} ${visibleYear}`;

    const firstDay = new Date(visibleYear, visibleMonth, 1);
    const daysInMonth = new Date(visibleYear, visibleMonth + 1, 0).getDate();

    let startDay = firstDay.getDay();
    startDay = startDay === 0 ? 7 : startDay;

    const bookedDays = getRandomBookedDays(visibleYear, visibleMonth);

    prevButton.classList.toggle("disabled", isCurrentMonth());

    for (let i = 1; i < startDay; i++) {
      const emptyButton = document.createElement("button");
      emptyButton.type = "button";
      emptyButton.classList.add("empty");
      calendarGrid.appendChild(emptyButton);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayButton = document.createElement("button");
      dayButton.type = "button";
      dayButton.textContent = day;

      const buttonDate = new Date(visibleYear, visibleMonth, day);
      buttonDate.setHours(0, 0, 0, 0);

      const isPastDate = buttonDate < today;
      const isBooked = bookedDays.includes(day);

      if (isPastDate) {
        dayButton.classList.add("disabled");
      }

      if (isBooked && !isPastDate) {
        dayButton.classList.add("booked");
      }

      dayButton.addEventListener("click", () => {
        if (dayButton.classList.contains("disabled") || dayButton.classList.contains("booked")) {
          return;
        }

        bookingDate.querySelectorAll(".booking-calendar-grid button").forEach(button => {
          button.classList.remove("selected");
        });

        dayButton.classList.add("selected");

        const selectedDate = new Date(visibleYear, visibleMonth, day);
        const displayDate = `${day} ${monthNames[visibleMonth]} ${visibleYear}`;
        const inputDate = selectedDate.toISOString().split("T")[0];

        dateLabel.textContent = displayDate;
        dateToggle.classList.add("has-value");
        hiddenDate.value = inputDate;

        dateMenu.classList.remove("show");
        dateToggle.classList.remove("active");
      });

      calendarGrid.appendChild(dayButton);
    }
  }

  function changeMonth(direction) {
    if (direction === "prev" && isCurrentMonth()) return;

    const fadeClass = direction === "next" ? "fade-out-left" : "fade-out-right";
    calendarGrid.classList.add(fadeClass);

    setTimeout(() => {
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
      calendarGrid.classList.remove("fade-out-left", "fade-out-right");
    }, 220);
  }

  dateToggle.addEventListener("click", () => {
    dateMenu.classList.toggle("show");
    dateToggle.classList.toggle("active");
    renderCalendar();
  });

  prevButton.addEventListener("click", () => {
    changeMonth("prev");
  });

  nextButton.addEventListener("click", () => {
    changeMonth("next");
  });

  document.addEventListener("click", event => {
    if (!event.target.closest(".booking-date")) {
      dateMenu.classList.remove("show");
      dateToggle.classList.remove("active");
    }
  });

  renderCalendar();
}





const bookingForm = document.querySelector(".booking-form");
const bookingMessage = document.querySelector("#bookingMessage");

if (bookingForm && bookingMessage) {
  bookingForm.addEventListener("submit", event => {
    event.preventDefault();

    const requiredFields = bookingForm.querySelectorAll(
      'input[required], textarea[required], input[type="hidden"]'
    );

    let isValid = true;

    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
      }
    });

    if (!isValid) {
      showBookingMessage("Please complete all booking fields before sending.", "error");
      return;
    }

    showBookingMessage("Sending your booking enquiry...", "sending");

    setTimeout(() => {
      showBookingMessage("Thank you. Your booking enquiry has been sent successfully.", "success");
      resetBookingForm();
    }, 1400);
  });

  function resetBookingForm() {
    bookingForm.reset();

    bookingOptions.forEach(option => {
      option.classList.remove("active");
    });

    const defaultBookingOption = document.querySelector(
      '.booking .booking-option[data-visit="Cosmetic Consultation"]'
    );

    if (defaultBookingOption) {
      defaultBookingOption.classList.add("active");
    }

    if (appointmentTypeInput) {
      appointmentTypeInput.value = "Cosmetic Consultation";
    }

    const dateToggle = document.querySelector(".booking-date-toggle");
    const dateLabel = document.querySelector(".booking-date-toggle span");
    const hiddenDate = document.querySelector('.booking-date input[name="date"]');

    if (dateToggle && dateLabel && hiddenDate) {
      dateToggle.classList.remove("has-value", "active");
      dateLabel.textContent = "Select Date";
      hiddenDate.value = "";
    }

    document.querySelectorAll(".booking-calendar-grid button").forEach(button => {
      button.classList.remove("selected");
    });

    const timeToggle = document.querySelector(".booking-time-toggle");
    const timeLabel = document.querySelector(".booking-time-toggle span");
    const hiddenTime = document.querySelector('.booking-time input[name="time"]');

    if (timeToggle && timeLabel && hiddenTime) {
      timeToggle.classList.remove("has-value", "active");
      timeLabel.textContent = "Select Time";
      hiddenTime.value = "";
    }

    document.querySelectorAll(".booking-time-grid button").forEach(button => {
      button.classList.remove("selected");
    });
  }

  function showBookingMessage(text, type) {
    bookingMessage.textContent = text;
    bookingMessage.className = `booking-message show ${type}`;

    clearTimeout(window.bookingMessageTimer);

    window.bookingMessageTimer = setTimeout(() => {
      bookingMessage.classList.remove("show");
    }, 3500);
  }
}





const contactForm = document.querySelector(".contact-message-form");
const contactMessage = document.querySelector("#contactMessage");

if (contactForm && contactMessage) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const requiredFields = contactForm.querySelectorAll(
      "input[required], textarea[required]"
    );

    let isValid = true;

    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
      }
    });

    if (!isValid) {
      showContactMessage("Please complete all contact fields before sending.", "error");
      return;
    }

    showContactMessage("Sending your message...", "sending");

    setTimeout(() => {
      showContactMessage("Thank you. Your message has been sent successfully.", "success");
      contactForm.reset();
    }, 1400);
  });

  function showContactMessage(text, type) {
    contactMessage.textContent = text;
    contactMessage.className = `contact-message show ${type}`;

    clearTimeout(window.contactMessageTimer);

    window.contactMessageTimer = setTimeout(() => {
      contactMessage.classList.remove("show");
    }, 3500);
  }
}