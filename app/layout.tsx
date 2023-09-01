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
    "A community of unconventionalists, autodidacts, and dropouts to support one another in the process of getting educated in the most adventurous and audacious way possible by undertaking the most crazy goals. We believe to change the world, one should first understand it well enough.",
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
