import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Climb Tracker",
    template: "%s | Climb Tracker",
  },
  description: "An app to keep track of your daily climb routines",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
