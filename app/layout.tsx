import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: "Yu - Build Custom Blockchains That Actually Ship",
  description: "A highly customizable blockchain framework trusted by L2 builders. Modular architecture, EVM compatible, production-ready.",
  keywords: ["blockchain", "framework", "ethereum", "L2", "web3", "customizable"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
