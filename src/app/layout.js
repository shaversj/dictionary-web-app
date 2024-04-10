import { Inter, Lora, Inconsolata } from "next/font/google";
import "./globals.css";

const inter = Inter({ weight: "variable", subsets: ["latin"], display: "swap", variable: "--font-inter" });
const lora = Lora({ weight: "variable", subsets: ["latin"], display: "swap", variable: "--font-lora" });
const inconsolata = Inconsolata({ weight: "variable", subsets: ["latin"], display: "swap", variable: "--font-inconsolata" });
export const metadata = {
  title: "Frontend Mentor | Dictionary web app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable} ${inconsolata.variable} mx-auto px-6 pt-6 md:w-[689px] md:px-[40px] md:pt-[58px] lg:w-[737px] dark:bg-gray2`}>{children}</body>
    </html>
  );
}
