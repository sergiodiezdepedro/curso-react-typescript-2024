import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Quiosco Next.js + Prisma",
   description: "Quiosco Next.js + Prisma",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${inter.className} bg-gray-100`}>
            {children}
         </body>
      </html>
   );
}
