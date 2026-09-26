import type { Metadata } from "next";
import "./globals.css";
import IntroScreen from "./components/IntroScreen";

export const metadata: Metadata = {
  title: "Chengene Private Limited | Biologics & IVF Media",
  description:
    "Chengene Private Limited, Chennai, develops biologics, IVF media, monoclonal antibodies and advanced life science solutions.",
  keywords: [
    "Chengene Private Limited",
    "Biologics manufacturer Chennai",
    "IVF media",
    "Monoclonal antibodies",
    "Life science research",
    "Biopharmaceutical company",
    "MEPZ Tambaram",
  ],
  authors: [{ name: "Chengene Private Limited" }],
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-[#40345C] antialiased">
        <IntroScreen>{children}</IntroScreen>
      </body>
    </html>
  );
}