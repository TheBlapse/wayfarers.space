import "./globals.css";
import { Cormorant, Ibarra_Real_Nova } from "next/font/google";
import Script from "next/script";

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const ibarra_real_nova = Ibarra_Real_Nova({
  subsets: ["latin"],
  variable: "--font-ibarra-real-nova",
});


export const metadata = {
  title: "Wayfarers' Space",
  description:
    "Leave the ordinary behind,\n Embark on a cosmic journey to find,\n Your inner Wayfarer, free and wild,\n Unleash your spirit, like a celestial child. ",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#E1E1E1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable}  ${ibarra_real_nova.variable}`}
    >
      <body>{children}</body>
      <Script
        async
        src="https://umami.theblapse.me/script.js"
        data-website-id="ca81da90-abde-477a-8df1-8131b22ae1a8"
      />
    </html>
  );
}
