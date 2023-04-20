import Head from "next/head";
import { Ubuntu } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import App from "@/client/_pages/home/Home";
import styles from "@/styles/Home.module.css";

const fontType = Ubuntu({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Entropic Thinker&apos;s Website</title>
        <meta name="description" content="Welcome to David Lee's Website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${fontType.className}`}>
        <h1 className="visually-hidden">Entropic Thinker&apos;s Website</h1>
        <App />
      </main>
      <Analytics />
    </>
  );
}
