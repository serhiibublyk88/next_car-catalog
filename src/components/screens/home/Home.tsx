import { FC } from "react";
import Head from "next/head";

import Image from "next/image";
import Layout from "@/components/layout/Layout";
import styles from "./Home.module.scss";



const Home: FC = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.background}></div>

        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          className={styles.logo}
          priority
        />

        
      </main>
    </Layout>
  );
};

export default Home;
