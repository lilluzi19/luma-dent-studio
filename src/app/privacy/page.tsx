import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileNavigation from "@/components/layout/MobileNavigation";

import PrivacyPage from "@/components/sections/PrivacyPage";

import GlobalBehaviours from "@/components/ui/GlobalBehaviours";
import Preloader from "@/components/ui/Preloader";

export const metadata: Metadata = {
  title: "LumaDent Studio | Privacy Policy",

  description:
    "Read the LumaDent Studio Privacy Policy to understand how we collect, use and protect information when you visit our website or contact our Chelsea dental clinic.",

  alternates: {
    canonical: "/privacy",
  },

  openGraph: {
    title: "LumaDent Studio | Privacy Policy",

    description:
      "Read the LumaDent Studio Privacy Policy to understand how we collect, use and protect information when you visit our website or contact our Chelsea dental clinic.",

    url: "/privacy",
    type: "website",

    images: [
      {
        url: "/images/icons/logo.png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "LumaDent Studio | Privacy Policy",

    description:
      "Read the LumaDent Studio Privacy Policy to understand how we collect, use and protect information when you visit our website or contact our Chelsea dental clinic.",

    images: ["/images/icons/logo.png"],
  },
};

export default function Privacy() {
  return (
    <>
      <GlobalBehaviours />

      <Preloader />

      <Header />
      <MobileNavigation />

      <main className="main privacy-background">
        <PrivacyPage />
      </main>

      <Footer />
    </>
  );
}