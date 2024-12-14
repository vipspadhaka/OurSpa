import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        ></script>
        {`
            (function(){
                emailjs.init("KA-ttVx2YeJhBmdAs");
            })();
          `}
      </body>
    </Html>
  );
}
