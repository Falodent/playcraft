import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Playcraft - The Digital Agency</title>
        <meta
          name="description"
          content="Default description for PLAYCRAFT. The Digital Agency offering premium solutions in marketing, tech, and content creation."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
