import Layout from '../components/layout';
import Head from 'next/head';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>CryptoLAB</title>
        <meta name="keywords" content="coins" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700&family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>

    </>
  )
}

export default MyApp;
