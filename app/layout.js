import Navbar from "@/components/Navbar";
import "./globals.scss";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "bonus buy",
  description: "bb nsense",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="rounded-lg">
          <Navbar />
          <div className="mt-4 ">{children}</div>
        </div>
      </body>
    </html>
  );
}
