import { Layout } from "@components/layout/layout";
import Head from "next/head";

import "@styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
