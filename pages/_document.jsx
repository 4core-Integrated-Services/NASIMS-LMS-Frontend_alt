import { Head, Main, Html, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/images/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/images/favicons/favicon1.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/images/favicons/favicon2.png"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,500i,600,700,800%7CSatisfy&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />

        <Script
          src="/assets/plugins/bootstrap/jquery.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/plugins/bootstrap/bootstrap.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}
