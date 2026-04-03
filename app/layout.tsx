import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Certificate of Need Law Intelligence | Rojas Report",
  description:
    "35 jurisdictions where physician competition is regulated by law. Rojas Media maps the CON laws restricting hospitals, ASCs, and imaging centers across America.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Source+Code+Pro:wght@400;600&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
