import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNavigation from "@/components/layout/MobileNavigation";

import ContactPage from "@/components/sections/ContactPage";

import ContactBehaviours from "@/components/ui/ContactBehaviours";
import GlobalBehaviours from "@/components/ui/GlobalBehaviours";
import Preloader from "@/components/ui/Preloader";

export const metadata: Metadata = {
  title:
    "LumaDent Studio | Contact Our Dental Clinic in Chelsea",

  description:
    "Contact LumaDent Studio in Chelsea for dental enquiries, appointment questions, clinic details and support from our cosmetic dentistry team.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title:
      "LumaDent Studio | Contact Our Dental Clinic in Chelsea",

    description:
      "Contact LumaDent Studio in Chelsea for dental enquiries, appointment questions, clinic details and support from our cosmetic dentistry team.",

    url: "/contact",
    type: "website",

    images: [
      {
        url: "/images/icons/logo.png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "LumaDent Studio | Contact Our Dental Clinic in Chelsea",

    description:
      "Contact LumaDent Studio in Chelsea for dental enquiries, appointment questions, clinic details and support from our cosmetic dentistry team.",

    images: ["/images/icons/logo.png"],
  },
};

export default function Contact() {
  return (
    <>
      <GlobalBehaviours />
      <ContactBehaviours />

      <Preloader />

      <Header />
      <MobileNavigation />

      <main className="main contact-background">
        <ContactPage />
      </main>

      <Footer />
    </>
  );
}