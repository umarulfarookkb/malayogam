import Head from "next/head";
import { Poppins } from "next/font/google";
import { APP_NAME } from "@/utils/constants";
import type { AppProps } from "next/app";

import "@/styles/globals.css";

const primaryFont = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-primary",
});

const WEBSITE_URL = "https://malayogam.com";
const TITLE = APP_NAME;
const DESCRIPTION = "";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="theme-color" content="#111111" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={WEBSITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta
          property="og:image"
          content={`${WEBSITE_URL}/android-chrome-512x512.png`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta
          name="twitter:image"
          content={`${WEBSITE_URL}/android-chrome-512x512.png`}
        />
        <meta name="twitter:url" content={WEBSITE_URL} />
      </Head>

      <style jsx global>{`
        html,
        body {
          font-family: ${primaryFont.style.fontFamily};
        }
      `}</style>

      <Component {...pageProps} />
    </>
  );
}
