import "./globals.css";

import { Bellefair, Cardo } from "next/font/google";
import Script from "next/script";

import Navigation from "./components/navigation";
import Footer from "./components/footer";

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
  themeColor: "#121212",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cardo.variable}  ${bellefair.variable}`}>
      <link rel="icon" href="/images/favicon.png" sizes="any" />
      <body className="w-full h-full">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
