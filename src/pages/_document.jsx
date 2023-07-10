import Document, { Html, Head, Main, NextScript } from "next/document";

const MyApp = () => (
  <Html lang="en">
    <Head />
    <body>
      <Main />
      <NextScript />
      <div id="contact-notification"></div>
    </body>
  </Html>
);

export default class MyDocument extends Document {
  render() {
    return <MyApp />;
  }
}
