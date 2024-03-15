import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Resume from "../components/Resume";

export default function Home() {
  return (
    <>
      <Head>
        <title>Resume – Owen Bick</title>
        <link rel="icon" href="./static/favicon.ico" />
        <meta name="description" content="About Owen Bick" />
        <meta name="author" content="Owen Bick" />
      </Head>
      <Header></Header>
      <Layout>
        <Resume />
      </Layout>
      <Footer></Footer>
    </>
  );
}
