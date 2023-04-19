import "./globals.css";
import "@fontsource/cormorant-garamond";
import Script from 'next/script';

export const metadata = {
  title: "Wayfarers' Space",
  description:
    "Leave the ordinary behind,\n Embark on a cosmic journey to find,\n Your inner Wayfarer, free and wild,\n Unleash your spirit, like a celestial child. ",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script async src="https://umami.theblapse.me/script.js" data-website-id="ca81da90-abde-477a-8df1-8131b22ae1a8" />
    </html>
  );
}
