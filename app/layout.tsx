import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Sugar Blossom Cake",
  description: "A cake shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
