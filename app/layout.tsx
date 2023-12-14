import "./globals.css";

import PlausibleProvider from "next-plausible";
import { Bellefair, Cardo } from "next/font/google";
import Script from "next/script";

import Announcement from "./components/announcement";
import Footer from "./components/footer";
import SmoothScrolling from "./components/lenis-scroll";
import Navigation from "./components/navigation";

const cardo = Cardo({
  subsets: ["latin"],
  variable: "--font-cardo",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
const bellefair = Bellefair({
  subsets: ["latin"],
  variable: "--font-bellefair",
  weight: "400",
});

export const metadata = {
  title: "Wayfarers Space",
  description:
    "We are a community of autodidacts and dropouts creating an alternative and better environment for ourselves, one that the conventional system should have provided, but didn&rsquo;t. And we aim to support each other in getting educated in the most adventurous and audacious way possible by cundertaking the most ambitious goals.",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#EDEDED",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cardo.variable}  ${bellefair.variable}`}>
      <head>
        <PlausibleProvider
          domain="wayfarers.space"
          customDomain="https://anal.bad.al"
          selfHosted={true}
        />
      </head>
      <link rel="icon" href="/images/favicon.png" sizes="any" />

      <body suppressHydrationWarning={true}>
        <Announcement />
        <Navigation />
        <SmoothScrolling> {children}</SmoothScrolling>
        <Footer />
      </body>
    </html>
  );
}
