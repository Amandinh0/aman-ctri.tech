import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aman's Personal Website",
  description: "Aman Chhetri Personal Webiste Portfolio",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main-container mx-auto max-w-2xl">
          <Navbar/>
          <Header/>
            {children}
         
          <footer className="text-center mt-4">
            Made with 🖤
          </footer>
        </div>
      </body>
    </html>
  );
}
