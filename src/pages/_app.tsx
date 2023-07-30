import PageLayout from "@/components/layouts/page-layout";
import "@/styles/global.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Montserrat } from "next/font/google";
import type { AppProps } from "next/app";

config.autoAddCss = false;

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html,
          body {
            font-family: ${montserrat.style.fontFamily};
          }
        `}
      </style>

      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
}
