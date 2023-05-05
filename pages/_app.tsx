import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: process.env.APP_ID,
        autoLogAppEvents: true,
        xfbml: true,
        version: "v16.0",
      });
    };
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js"
      />
    </>
  );
}
