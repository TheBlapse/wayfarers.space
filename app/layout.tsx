import "./globals.css";

import { Bellefair, Cardo } from "next/font/google";
import Script from "next/script";

const cardo = Cardo({
  subsets: ["latin"],
  variable: "--font-cardo",
  weight: ["400", "700"],
});
const bellefair = Bellefair({
  subsets: ["latin"],
  variable: "--font-bellefair",
  weight: "400",
});

export const metadata = {
  title: "Wayfarers Space",
  description:
    "We are a community of autodidacts and dropouts creating an alternative and better environment for ourselves, one that the conventional school system should have provided, but didn&rsquo;t. We aim to support each other in getting educated in the most adventurous and audacious way possible by cundertaking the most ambitious goals.",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#121212",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cardo.variable}  ${bellefair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
