"use client";

import { ReactNode, useEffect, useState } from "react";
import TheFooter from "./footer";
import TheHeader from "./header";

export default function PageLayout({ children }: { children: ReactNode }) {
 const [loaded, setLoaded] = useState(false);

 useEffect(() => {
  setLoaded(true);
 }, [setLoaded]);

 if (!loaded) return <></>;
 return (
  <>
   <TheHeader />
   <main>{children}</main>
   <TheFooter />
  </>
 );
}
