import React from 'react';
import Document, {
  Head,
  Main,
  NextScript,
  DocumentContext,
  Html,
} from 'next/document';

import { ServerStyleSheet } from 'styled-components';

type CombinedProps = any;

export default class DefaultDocument extends Document<CombinedProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Sacramento:400&display=swap"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
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
