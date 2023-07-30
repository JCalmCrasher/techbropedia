import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
 title: "Techbropedia",
 description: "The Wikipedia for Techbros & Techsis in Nigeria"
};

export default function RootLayout({
 // Layouts must accept a children prop.
 // This will be populated with nested layouts or pages
 children
}: {
 children: ReactNode;
}) {
 return (
  <html lang="en">
   <body className="bg-aqua dark:bg-primary-main text-primary-100 dark:text-white transition-colors duration-300">
    {children}
   </body>
  </html>
 );
}
