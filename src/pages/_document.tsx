import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from "next/document";

import { ServerStyleSheet } from "styled-components";

import { DocumentContent } from "@/presentation/pages/_document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();

    try {
      const page = await ctx.renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));

      const styles = sheet.getStyleElement();

      return {
        ...page,
        styles,
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="Next Typescript Template" />

          <DocumentContent.Favicon />

          <DocumentContent.Fonts />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
