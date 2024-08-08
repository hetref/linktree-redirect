import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aryan Shinde | Portfolio | Linktr.ee Redirect",
  description: "Redirecting to Linktr.ee account of Aryan Shinde.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
