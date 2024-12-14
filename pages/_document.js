import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
      ></script>
      <Head />
      <body>
        <Main />
        <NextScript />

        {/* Initialize EmailJS */}
        <Script id="emailjs-init" strategy="lazyOnload">
          {`
            emailjs.init("KA-ttVx2YeJhBmdAs");
          `}
        </Script>
      </body>
    </Html>
  );
}
