import "./globals.css";
import { Roboto } from "next/font/google";
import Aside from "@/components/aside";
import Footer from "@/components/footer";
import ActiveSectionContextProvider from "../context/active-section-context";
import { constructMetadata } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth overflow-x-hidden">
      <body
        className={`${roboto.className} bg-[#1a0b1f] overflow-x-hidden flex flex-col justify-between min-h-screen`}
      >
        <ActiveSectionContextProvider>
          <Aside />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
