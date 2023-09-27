import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MMeskhi | Personal Portfolio",
  description: "Mikheil Meskhi's Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} pt-40 sm:pt-60 bg-slate-900`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
