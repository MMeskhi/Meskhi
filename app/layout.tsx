import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ActiveSectionContextProvider from "../context/active-section-context";
import { constructMetadata } from "@/lib/utils";

const inter = Roboto({ weight: "700", subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth overflow-x-hidden">
      <body className={`${inter.className} bg-[#1a0b1f] overflow-x-hidden`}>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
