import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";


const 



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
