import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileNavigation from "@/components/layout/MobileNavigation";

import TermsPage from "@/components/sections/TermsPage";

import GlobalBehaviours from "@/components/ui/GlobalBehaviours";
import Preloader from "@/components/ui/Preloader";

export const metadata: Metadata = {
  title: "LumaDent Studio | Terms & Conditions",

  description:
    "Read the LumaDent Studio Terms and Conditions for using our website, submitting enquiries and requesting dental appointments at our Chelsea clinic.",

  alternates: {
    canonical: "/terms",
  },

  openGraph: {
    title:
      "LumaDent Studio | Terms & Conditions",

    description:
      "Read the LumaDent Studio Terms and Conditions for using our website, submitting enquiries and requesting dental appointments at our Chelsea clinic.",

    url: "/terms",
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
      "LumaDent Studio | Terms & Conditions",

    description:
      "Read the LumaDent Studio Terms and Conditions for using our website, submitting enquiries and requesting dental appointments at our Chelsea clinic.",

    images: ["/images/icons/logo.png"],
  },
};

export default function Terms() {
  return (
    <>
      <GlobalBehaviours />

      <Preloader />

      <Header />
      <MobileNavigation />

      <main className="main policy-background">
        <TermsPage />
      </main>

      <Footer />
    </>
  );
}