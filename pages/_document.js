import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Developer and Design Portfolio Website by Lerato Mokgwabona"
          />
          <meta name="robots" content="index, follow" />
          <meta
            name="keywords"
            content="Front-End Developer, UX/UI Designer, South Africa, Lerato Mokgwabona, South African Front-End Developer"
          />
          <link rel="shortcut icon" href="/favicon.ico" />

          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <Script
            id="bootstrap"
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
          ></Script>
          <script
            id="fontawesome"
            src="https://kit.fontawesome.com/b3aaa53a92.js"
            crossOrigin="anonymous"
          ></script>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <Script
            id="google analytics"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <Script
            id="google analytics"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
