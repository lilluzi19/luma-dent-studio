"use client";

import { useEffect } from "react";

export default function GlobalBehaviours() {
  useEffect(() => {
    const preloader = document.querySelector<HTMLElement>("#preloader");

    const hidePreloader = () => {
      if (!preloader) return;

      window.setTimeout(() => {
        preloader.classList.add("hide");
        document.body.classList.remove("preloader-active");
      }, 1300);

      window.setTimeout(() => {
        preloader.remove();
      }, 3600);
    };

    if (document.readyState === "complete") {
      hidePreloader();
    } else {
      window.addEventListener("load", hidePreloader, { once: true });
    }

    const fallbackTimer = window.setTimeout(hidePreloader, 5000);

    return () => {
      window.removeEventListener("load", hidePreloader);
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  return null;
}