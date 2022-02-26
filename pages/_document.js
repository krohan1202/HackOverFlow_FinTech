import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@mui/styles";
import { ServerStyleSheet } from "styled-components";

import theme from "@/config/theme";

export default class MyDocument extends Document {
  componentDidMount() {}

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="http://fonts.cdnfonts.com/css/circular-std"
            rel="stylesheet"
          />
          <link
            href="http://fonts.cdnfonts.com/css/euclid-circular-a"
            rel="stylesheet"
          />
          <link
            href="http://fonts.cdnfonts.com/css/helvetica-255"
            rel="stylesheet"
          />
          <meta charSet="utf-8" />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          sheet.collectStyles(sheets.collect(<App {...props} />)),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: (
        <>
          {initialProps.styles}
          {sheets.getStyleElement()}
          {sheet.getStyleElement()}
          {/* {flush() || null} */}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
};
