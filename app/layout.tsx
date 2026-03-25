import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; 
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["200", "400", "500"] });

// Kita kunci Playfair Display di sini
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

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
      {/* Memasukkan variabel playfair ke dalam body */}
      <body className={`${inter.className} ${playfair.variable} bg-[#0A0A0A] text-gray-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}