"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function GlobalBehaviours() {
  useEffect(() => {
    const body = document.body;
    const header = document.querySelector<HTMLElement>("#header");
    const preloader = document.querySelector<HTMLElement>("#preloader");
    const heroVideo =
      document.querySelector<HTMLVideoElement>(".hero .hero-video");
    const scrollIndicator =
      document.querySelector<HTMLElement>(
        ".hero .scroll-down-indicator",
      );

    let preloaderHideTimer: number | undefined;
    let preloaderRemoveTimer: number | undefined;
    let fallbackTimer: number | undefined;

    const initialiseAOS = () => {
      const isMobileOrTablet = window.matchMedia(
        "(max-width: 1024px)",
      ).matches;

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

      window.requestAnimationFrame(() => {
        AOS.refreshHard();
      });
    };

    const runPreloader = () => {
      if (body.dataset.preloaderFinished === "true") {
        initialiseAOS();
        return;
      }

      body.dataset.preloaderFinished = "true";

      preloaderHideTimer = window.setTimeout(() => {
        preloader?.classList.add("hide");
        body.classList.remove("preloader-active");

        initialiseAOS();
      }, 1300);

      preloaderRemoveTimer = window.setTimeout(() => {
        preloader?.remove();
      }, 3600);
    };

    const updateHeaderState = () => {
      if (!header) return;

      header.classList.toggle(
        "header-shrink",
        window.scrollY > 10,
      );
    };

    const updateScrollIndicator = () => {
      if (!scrollIndicator) return;

      scrollIndicator.classList.toggle(
        "scroll-hidden",
        window.scrollY > 50,
      );
    };

    const playHeroVideo = () => {
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

      if (playPromise) {
        playPromise.catch(() => {});
      }
    };

    const magneticLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(
        ".header .navmenu a",
      ),
    );

    const magneticHandlers = magneticLinks.map((link) => {
      const handleMouseMove = (event: MouseEvent) => {
        if (window.innerWidth <= 992) return;

        const rect = link.getBoundingClientRect();
        const x =
          event.clientX - rect.left - rect.width / 2;
        const y =
          event.clientY - rect.top - rect.height / 2;

        link.style.transition =
          "color 0.4s ease, transform 0.25s ease-out";

        link.style.transform = `translate(${x * 0.15}px, ${
          y * 0.15
        }px)`;
      };

      const handleMouseLeave = () => {
        link.style.transition =
          "color 0.4s ease, transform 0.35s ease";

        link.style.transform = "translate(0, 0)";
      };

      link.addEventListener("mousemove", handleMouseMove);
      link.addEventListener("mouseleave", handleMouseLeave);

      return {
        link,
        handleMouseMove,
        handleMouseLeave,
      };
    });

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

    const openMobileNavigation = (
      event: MouseEvent,
    ) => {
      event.stopPropagation();

      body.classList.add("mobile-nav-active");
      mobileBurger?.setAttribute(
        "aria-expanded",
        "true",
      );
    };

    const closeMobileNavigation = () => {
      body.classList.remove("mobile-nav-active");
      mobileBurger?.setAttribute(
        "aria-expanded",
        "false",
      );
    };

    const handleCloseButton = (
      event: MouseEvent,
    ) => {
      event.stopPropagation();
      closeMobileNavigation();
    };

    const handleDocumentClick = (
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

      if (mobileDrawer?.contains(target)) return;
      if (mobileBurger?.contains(target)) return;

      closeMobileNavigation();
    };

    const handleMobileLinkClick = (
      event: Event,
    ) => {
      const target = event.target as HTMLElement;
      const link = target.closest("a");

      if (!link) return;

      closeMobileNavigation();
    };

    updateHeaderState();
    updateScrollIndicator();
    playHeroVideo();

    window.addEventListener(
      "scroll",
      updateHeaderState,
      { passive: true },
    );

    window.addEventListener(
      "scroll",
      updateScrollIndicator,
      { passive: true },
    );

    window.addEventListener(
      "load",
      runPreloader,
      { once: true },
    );

    window.addEventListener(
      "load",
      playHeroVideo,
    );

    window.addEventListener(
      "pageshow",
      playHeroVideo,
    );

    window.addEventListener(
      "touchstart",
      playHeroVideo,
      { once: true },
    );

    mobileBurger?.addEventListener(
      "click",
      openMobileNavigation,
    );

    mobileClose?.addEventListener(
      "click",
      handleCloseButton,
    );

    mobileDrawer?.addEventListener(
      "click",
      handleMobileLinkClick,
    );

    document.addEventListener(
      "click",
      handleDocumentClick,
    );

    if (document.readyState === "complete") {
      runPreloader();
    }

    fallbackTimer = window.setTimeout(
      runPreloader,
      5000,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateHeaderState,
      );

      window.removeEventListener(
        "scroll",
        updateScrollIndicator,
      );

      window.removeEventListener(
        "load",
        runPreloader,
      );

      window.removeEventListener(
        "load",
        playHeroVideo,
      );

      window.removeEventListener(
        "pageshow",
        playHeroVideo,
      );

      window.removeEventListener(
        "touchstart",
        playHeroVideo,
      );

      mobileBurger?.removeEventListener(
        "click",
        openMobileNavigation,
      );

      mobileClose?.removeEventListener(
        "click",
        handleCloseButton,
      );

      mobileDrawer?.removeEventListener(
        "click",
        handleMobileLinkClick,
      );

      document.removeEventListener(
        "click",
        handleDocumentClick,
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

      if (preloaderHideTimer) {
        window.clearTimeout(preloaderHideTimer);
      }

      if (preloaderRemoveTimer) {
        window.clearTimeout(preloaderRemoveTimer);
      }

      if (fallbackTimer) {
        window.clearTimeout(fallbackTimer);
      }
    };
  }, []);

  return null;
}