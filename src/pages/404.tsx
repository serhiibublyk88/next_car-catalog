// src/pages/404.tsx
import { NextPage } from "next";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Head from "next/head";

const NotFound: NextPage = () => {
  return (
    <Layout title="404">
      <Head>
        <title> Not Found</title>
      </Head>
      <div style={{ textAlign: "center" }}>
        <Image src="/404.webp" alt="" width={512} height={512} />
      </div>
    </Layout>
  );
};

export default NotFound;
