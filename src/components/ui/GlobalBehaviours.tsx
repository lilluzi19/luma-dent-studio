"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function GlobalBehaviours() {
  useEffect(() => {
    const initialPageHash = window.location.hash;

    const body = document.body;
    const header = document.querySelector<HTMLElement>("#header");
    const preloader = document.querySelector<HTMLElement>("#preloader");

    const heroVideo =
      document.querySelector<HTMLVideoElement>(".hero .hero-video");

    const heroScrollIndicator =
      document.querySelector<HTMLElement>(
        ".hero .scroll-down-indicator",
      );

    const mobileBurger =
      document.querySelector<HTMLButtonElement>(
        ".mobile-burger",
      );

    const mobileClose =
      document.querySelector<HTMLButtonElement>(
        ".mobile-nav-close",
      );

    const mobileDrawer =
      document.querySelector<HTMLElement>(
        ".mobile-nav-drawer",
      );

    let preloaderHideTimer: number | undefined;
    let preloaderFallbackTimer: number | undefined;
    let scrollAnimationFrame: number | undefined;

    const heroVideoMobileFix = () => {
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
    };

    const aosInit = () => {
      const isMobileOrTablet = window.innerWidth <= 1024;

      if (isMobileOrTablet) {
        body.classList.add("aos-disabled-mobile");

        document
          .querySelectorAll<HTMLElement>("[data-aos]")
          .forEach((element) => {
            element.classList.add("aos-animate");
            element.style.opacity = "1";
            element.style.transform = "none";
          });

        return;
      }

      AOS.init({
        duration: 650,
        easing: "ease-in-out",
        once: false,
        mirror: false,
        offset: 80,
      });

      AOS.refreshHard();
    };

    const runPreloader = () => {
      if (body.dataset.preloaderHasRun === "true") {
        return;
      }

      body.dataset.preloaderHasRun = "true";

      body.classList.add("preloader-active");
      preloader?.classList.remove("hide");

      if (initialPageHash) {
        const target =
          document.querySelector<HTMLElement>(
            initialPageHash,
          );

        if (target) {
          window.scrollTo({
            top: target.offsetTop - 60,
            behavior: "instant",
          });

          history.replaceState(
            null,
            "",
            window.location.pathname,
          );
        }
      }

      preloaderHideTimer = window.setTimeout(() => {
        preloader?.classList.add("hide");
        body.classList.remove("preloader-active");

        aosInit();
      }, 1300);
    };

    const handleInitialPageLoad = () => {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }

      if (initialPageHash) {
        return;
      }

      window.setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "instant",
        });
      }, 10);
    };

    const getDesktopOffset = (targetId: string) => {
      if (targetId === "#hero") {
        return 125;
      }

      return 60;
    };

    const smoothScrollDesktop = (
      target: HTMLElement,
      targetId: string,
    ) => {
      const offset = getDesktopOffset(targetId);
      const start = window.pageYOffset;

      const end =
        target.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      const duration = 1000;
      let startTime: number | null = null;

      const animate = (currentTime: number) => {
        if (startTime === null) {
          startTime = currentTime;
        }

        const timeElapsed = currentTime - startTime;
        const progress = Math.min(
          timeElapsed / duration,
          1,
        );

        const ease =
          progress < 0.5
            ? 4 * progress * progress * progress
            : 1 -
              Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(
          0,
          start + (end - start) * ease,
        );

        if (timeElapsed < duration) {
          scrollAnimationFrame =
            window.requestAnimationFrame(animate);
        }
      };

      scrollAnimationFrame =
        window.requestAnimationFrame(animate);
    };

    const isMobileOrTablet = () =>
      window.matchMedia(
        "(max-width: 1024px)",
      ).matches;

    const getMobileOffset = (targetId: string) => {
      if (targetId === "#hero") {
        return 0;
      }

      return 75;
    };

    const smoothScrollMobile = (
      target: HTMLElement,
      targetId: string,
    ) => {
      const offset = getMobileOffset(targetId);

      const start =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      const end =
        target.getBoundingClientRect().top +
        start -
        offset;

      const distance = end - start;
      const duration = 550;

      let startTime: number | null = null;

      const animate = (currentTime: number) => {
        if (startTime === null) {
          startTime = currentTime;
        }

        const elapsed = currentTime - startTime;

        const progress = Math.min(
          elapsed / duration,
          1,
        );

        const ease =
          1 - Math.pow(1 - progress, 3);

        const nextPosition =
          start + distance * ease;

        window.scrollTo(0, nextPosition);
        document.documentElement.scrollTop =
          nextPosition;
        document.body.scrollTop = nextPosition;

        if (progress < 1) {
          scrollAnimationFrame =
            window.requestAnimationFrame(animate);
        }
      };

      scrollAnimationFrame =
        window.requestAnimationFrame(animate);
    };

   const handleAnchorNavigation = (
      event: MouseEvent,
    ) => {
      const clickedElement =
        event.target as HTMLElement;

      const link =
        clickedElement.closest<HTMLAnchorElement>(
          "a[href]",
        );

      if (!link) return;

      const rawHref = link.getAttribute("href");

      if (
        !rawHref ||
        rawHref === "#" ||
        rawHref.startsWith("mailto:") ||
        rawHref.startsWith("tel:")
      ) {
        return;
      }

      let destinationUrl: URL;

      try {
        destinationUrl = new URL(
          rawHref,
          window.location.href,
        );
      } catch {
        return;
      }

      const targetId = destinationUrl.hash;

      if (!targetId) return;

      const isSameOrigin =
        destinationUrl.origin ===
        window.location.origin;

      if (!isSameOrigin) return;

      const currentPath =
        window.location.pathname;

      const destinationPath =
        destinationUrl.pathname;

      const isCurrentPageHomepage =
        currentPath === "/" ||
        currentPath === "/index.html";

      const isDestinationHomepage =
        destinationPath === "/" ||
        destinationPath === "/index.html";

      if (
        !isCurrentPageHomepage ||
        !isDestinationHomepage
      ) {
        body.classList.remove(
          "mobile-nav-active",
        );

        mobileBurger?.setAttribute(
          "aria-expanded",
          "false",
        );

        return;
      }

      const target =
        document.querySelector<HTMLElement>(
          targetId,
        );

      if (!target) return;

      event.preventDefault();

      if (scrollAnimationFrame) {
        window.cancelAnimationFrame(
          scrollAnimationFrame,
        );
      }

      body.classList.remove(
        "mobile-nav-active",
      );

      mobileBurger?.setAttribute(
        "aria-expanded",
        "false",
      );

      if (isMobileOrTablet()) {
        smoothScrollMobile(target, targetId);
      } else {
        smoothScrollDesktop(target, targetId);
      }

      history.replaceState(
        null,
        "",
        window.location.pathname,
      );
    };

    const updateHeaderState = () => {
      if (!header) return;

      header.classList.toggle(
        "header-shrink",
        window.scrollY > 10,
      );
    };

    const updateHeroScrollIndicator = () => {
      if (!heroScrollIndicator) return;

      heroScrollIndicator.classList.toggle(
        "scroll-hidden",
        window.scrollY > 50,
      );
    };

    const magneticLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(
        ".header .navmenu a",
      ),
    );

    const magneticHandlers = magneticLinks.map(
      (link) => {
        const handleMouseMove = (
          event: MouseEvent,
        ) => {
          if (window.innerWidth <= 992) return;

          const rect =
            link.getBoundingClientRect();

          const x =
            event.clientX -
            rect.left -
            rect.width / 2;

          const y =
            event.clientY -
            rect.top -
            rect.height / 2;

          link.style.transition =
            "color 0.4s ease, transform 0.25s ease-out";

          link.style.transform =
            `translate(${x * 0.15}px, ${
              y * 0.15
            }px)`;
        };

        const handleMouseLeave = () => {
          link.style.transition =
            "color 0.4s ease, transform 0.35s ease";

          link.style.transform =
            "translate(0, 0)";
        };

        link.addEventListener(
          "mousemove",
          handleMouseMove,
        );

        link.addEventListener(
          "mouseleave",
          handleMouseLeave,
        );

        return {
          link,
          handleMouseMove,
          handleMouseLeave,
        };
      },
    );

    const openMobileNavigation = (
      event: MouseEvent,
    ) => {
      event.stopPropagation();

      body.classList.add(
        "mobile-nav-active",
      );

      mobileBurger?.setAttribute(
        "aria-expanded",
        "true",
      );
    };

    const closeMobileNavigation = (
      event?: MouseEvent,
    ) => {
      event?.stopPropagation();

      body.classList.remove(
        "mobile-nav-active",
      );

      mobileBurger?.setAttribute(
        "aria-expanded",
        "false",
      );
    };

    const handleOutsideMobileClick = (
      event: MouseEvent,
    ) => {
      if (
        !body.classList.contains(
          "mobile-nav-active",
        )
      ) {
        return;
      }

      const target = event.target as Node;

      if (mobileDrawer?.contains(target)) {
        return;
      }

      if (mobileBurger?.contains(target)) {
        return;
      }

      closeMobileNavigation();
    };

    const scrollSpySections = Array.from(
      document.querySelectorAll<HTMLElement>(
        "#services, #results, #reviews, #faq",
      ),
    );

    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(
        ".header .navmenu a, .mobile-nav-drawer a",
      ),
    );

    const normalizePage = (
      value: string | null,
    ) => {
      if (!value) return "index";

      let page = value.split("#")[0];

      page = page.substring(
        page.lastIndexOf("/") + 1,
      );

      page = page.replace(".html", "");

      return page || "index";
    };

    const clearActiveNavLinks = () => {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
    };

    const setActiveNavByHash = (
      hash: string,
    ) => {
      if (!hash) return false;

      let matched = false;

      navLinks.forEach((link) => {
        const href =
          link.getAttribute("href");

        if (!href) return;

        if (
          href === hash ||
          href.endsWith(hash)
        ) {
          link.classList.add("active");
          matched = true;
        }
      });

      return matched;
    };

    const updateActiveNavLink = () => {
      const currentPage = normalizePage(
        window.location.pathname,
      );

      clearActiveNavLinks();

      const isIndexPage =
        window.location.pathname === "/" ||
        window.location.pathname === "/index.html";

      if (isIndexPage) {
        let currentSection = "";

        scrollSpySections.forEach(
          (section) => {
            const sectionTop =
              section.offsetTop - 150;

            const sectionBottom =
              sectionTop +
              section.offsetHeight;

            if (
              window.scrollY >= sectionTop &&
              window.scrollY < sectionBottom
            ) {
              currentSection =
                section.getAttribute("id") || "";
            }
          },
        );

        if (currentSection) {
          setActiveNavByHash(
            `#${currentSection}`,
          );
        }

        return;
      }

      navLinks.forEach((link) => {
        const href =
          link.getAttribute("href");

        if (!href) return;

        const linkPage =
          normalizePage(href);

        if (linkPage === currentPage) {
          link.classList.add("active");
        }
      });
    };

    body.classList.remove(
      "mobile-nav-active",
    );

    mobileBurger?.setAttribute(
      "aria-expanded",
      "false",
    );

    heroVideoMobileFix();
    updateHeaderState();
    updateHeroScrollIndicator();
    updateActiveNavLink();

    if (document.readyState === "complete") {
      handleInitialPageLoad();
      runPreloader();
    }

    window.addEventListener(
      "load",
      handleInitialPageLoad,
      { once: true },
    );

    window.addEventListener(
      "load",
      runPreloader,
      { once: true },
    );

    window.addEventListener(
      "load",
      heroVideoMobileFix,
    );

    window.addEventListener(
      "pageshow",
      heroVideoMobileFix,
    );

    window.addEventListener(
      "touchstart",
      heroVideoMobileFix,
      { once: true },
    );

    window.addEventListener(
      "scroll",
      updateHeaderState,
      { passive: true },
    );

    window.addEventListener(
      "scroll",
      updateHeroScrollIndicator,
      { passive: true },
    );

    window.addEventListener(
      "scroll",
      updateActiveNavLink,
      { passive: true },
    );

    window.addEventListener(
      "hashchange",
      updateActiveNavLink,
    );

    document.addEventListener(
      "click",
      handleAnchorNavigation,
    );

    document.addEventListener(
      "click",
      handleOutsideMobileClick,
    );

    mobileBurger?.addEventListener(
      "click",
      openMobileNavigation,
    );

    mobileClose?.addEventListener(
      "click",
      closeMobileNavigation,
    );

    preloaderFallbackTimer =
      window.setTimeout(
        runPreloader,
        5000,
      );

    return () => {
      delete body.dataset.preloaderHasRun;

      body.classList.remove(
        "mobile-nav-active",
      );

      mobileBurger?.setAttribute(
        "aria-expanded",
        "false",
      );

      window.removeEventListener(
        "load",
        handleInitialPageLoad,
      );

      window.removeEventListener(
        "load",
        runPreloader,
      );

      window.removeEventListener(
        "load",
        heroVideoMobileFix,
      );

      window.removeEventListener(
        "pageshow",
        heroVideoMobileFix,
      );

      window.removeEventListener(
        "touchstart",
        heroVideoMobileFix,
      );

      window.removeEventListener(
        "scroll",
        updateHeaderState,
      );

      window.removeEventListener(
        "scroll",
        updateHeroScrollIndicator,
      );

      window.removeEventListener(
        "scroll",
        updateActiveNavLink,
      );

      window.removeEventListener(
        "hashchange",
        updateActiveNavLink,
      );

      document.removeEventListener(
        "click",
        handleAnchorNavigation,
      );

      document.removeEventListener(
        "click",
        handleOutsideMobileClick,
      );

      mobileBurger?.removeEventListener(
        "click",
        openMobileNavigation,
      );

      mobileClose?.removeEventListener(
        "click",
        closeMobileNavigation,
      );

      magneticHandlers.forEach(
        ({
          link,
          handleMouseMove,
          handleMouseLeave,
        }) => {
          link.removeEventListener(
            "mousemove",
            handleMouseMove,
          );

          link.removeEventListener(
            "mouseleave",
            handleMouseLeave,
          );
        },
      );

      if (scrollAnimationFrame) {
        window.cancelAnimationFrame(
          scrollAnimationFrame,
        );
      }

      if (preloaderHideTimer) {
        window.clearTimeout(
          preloaderHideTimer,
        );
      }

      if (preloaderFallbackTimer) {
        window.clearTimeout(
          preloaderFallbackTimer,
        );
      }
    };
  }, []);

  return null;
}