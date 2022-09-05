import Document, { Html, Head, Main, NextScript } from 'next/document';
class WebDocument extends Document {
  render() {
    return (
      <Html >
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default WebDocument;
