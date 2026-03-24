import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Import Playfair
import "./globals.css";

// Daftarkan font Sans-serif (Inter) dengan weight tipis
const inter = Inter({ subsets: ["latin"], weight: ["200", "400", "500"] });

// Daftarkan font Serif (Playfair Display)
const playfair = Playfair_Display({ subsets: ["latin"], style: "italic" });

export const metadata: Metadata = {
  title: "Saifulloh Rahman | Portfolio",
  description: "Crafting user-centered digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Warna Latar Belakang disesuaikan menjadi #0A0A0A */}
      <body className={`${inter.className} bg-[#0a0a0a] text-gray-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}