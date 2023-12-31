import { Layout } from "@components/layout/layout";
import Head from "next/head";
import "@styles/globals.css";

const App = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </Layout>
);

export default App;
