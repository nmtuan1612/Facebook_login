import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";
import { APP_ID } from "./api/hello";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "164147563069632",
        autoLogAppEvents: true,
        // cookie: true,
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
