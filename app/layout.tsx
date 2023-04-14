import "./globals.css";
import "@fontsource/cormorant-garamond";

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
    </html>
  );
}
