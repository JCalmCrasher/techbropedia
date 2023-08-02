import { montserratFont } from "@/fonts/fonts";
import { classNames as cn } from "@/lib/helpers";
import { Metadata } from "next";
import { ReactNode } from "react";
import "@/styles/global.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import PageLayout from "@/components/layouts/page-layout";

config.autoAddCss = false;

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
   <body
    className={cn(
     `bg-aqua dark:bg-primary-main text-primary-100 dark:text-white transition-colors duration-300`,
     montserratFont.variable
    )}
   >
    <PageLayout>{children}</PageLayout>
   </body>
  </html>
 );
}
