import type { Metadata } from "next";
import { Sora } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title:
    "LumaDent Studio | Cosmetic Dentistry & Smile Design in Chelsea",

  description:
    "Premium cosmetic dentistry, veneers, Invisalign, teeth whitening and smile transformations from LumaDent Studio in Chelsea, London.",

  icons: {
    icon: "/images/icons/logo.png",
    shortcut: "/images/icons/logo.png",
    apple: "/images/icons/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var savedTheme = localStorage.getItem("theme");
                  var systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light";

                  document.documentElement.setAttribute(
                    "data-theme",
                    savedTheme || systemTheme
                  );
                } catch (error) {
                  document.documentElement.setAttribute("data-theme", "light");
                }
              })();
            `,
          }}
        />
      </head>

      <body className={`${sora.variable} preloader-active`}>
        {children}
      </body>
    </html>
  );
}