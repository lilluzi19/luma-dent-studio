import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileNavigation from "@/components/layout/MobileNavigation";

import CookiePage from "@/components/sections/CookiePage";

import GlobalBehaviours from "@/components/ui/GlobalBehaviours";
import Preloader from "@/components/ui/Preloader";

export const metadata: Metadata = {
  title: "LumaDent Studio | Cookie Policy",

  description:
    "Read the LumaDent Studio Cookie Policy to understand how cookies and similar technologies may be used on our Chelsea dental clinic website.",

  alternates: {
    canonical: "/cookie",
  },

  openGraph: {
    title: "LumaDent Studio | Cookie Policy",

    description:
      "Read the LumaDent Studio Cookie Policy to understand how cookies and similar technologies may be used on our Chelsea dental clinic website.",

    url: "/cookie",
    type: "website",

    images: [
      {
        url: "/images/icons/logo.png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "LumaDent Studio | Cookie Policy",

    description:
      "Read the LumaDent Studio Cookie Policy to understand how cookies and similar technologies may be used on our Chelsea dental clinic website.",

    images: ["/images/icons/logo.png"],
  },
};

export default function Cookie() {
  return (
    <>
      <GlobalBehaviours />

      <Preloader />

      <Header />
      <MobileNavigation />

      <main className="main policy-background">
        <CookiePage />
      </main>

      <Footer />
    </>
  );
}