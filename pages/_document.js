import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';

import { createDisplayHelpers, createSpacingHelpers } from 'utils/css';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
    color: ${props => props.theme.colors.text5};
  }

  h1, body, figure {
    margin: 0;
  }

  ul {
    padding-inline-start: 0;
  }

  .text-uppercase {
    text-transform: uppercase;
  }

  .lh-0 {
    line-height: 0;
  }

  .position-absolute {
    position: absolute;
  }

  .overflow-hidden {
    overflow: hidden;
  }

  ${props => createDisplayHelpers(props.theme.breakpoints)}
  ${createSpacingHelpers()}
`;

class CustomDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(
        <>
          <GlobalStyles />
          <App {...props} />
        </>
      ),
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
          <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Merriweather&display=swap" rel="stylesheet" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument;
