import type { Metadata } from "next";
import Head from 'next/head';
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

  let footer = (
   <footer className="text-center">
    Made with 🖤
   </footer>
  )
  return (
    <>
    <html lang="en">
      <body className={inter.className}>
        <div className="main-container mx-auto max-w-2xl">
          <Navbar/>
          <Header/>
          {children}
          </div>
        </body>
    </html>
    </>
  );
}
