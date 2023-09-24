import type { Metadata } from "next";
import StyledComponentsRegistry from "../lib/registry";
import GlobalStyles from "../styles/GlobalStyles";

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
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
