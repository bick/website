import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews"

export default function Home() {
  return (
    <>
      <Head>
        <title>Reviews – Owen Bick</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Ratings and reviews by Owen Bick" />
        <meta name="author" content="Owen Bick" />
      </Head>
      <Header></Header>
      <Layout>
        <section className="hero">
          <div className="container">
            <h1>Reviews &amp; Ratings</h1>
          </div>
        </section>
        <Reviews />
      </Layout>
      <Footer></Footer>
    </>
  );
}
