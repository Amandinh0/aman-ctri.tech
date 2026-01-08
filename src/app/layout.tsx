import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

const geist = localFont({ 
  src: '../../public/Geist/Geist-VariableFont_wght.ttf',
  variable: '--font-geist',
});
export const metadata: Metadata = {
  title: "Aman's Personal Website",
  description: "Aman Chhetri Personal Webiste Portfolio",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body className={geist.className}>
        <div className="main-container mx-auto max-w-2xl">
          <Navbar/>
          <Header/>
            {children}
         
          <footer className="text-center mt-4 mb-8">
            Made with 🖤
          </footer>
        </div>
      </body>
    </html>
  );
}
