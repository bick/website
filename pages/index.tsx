import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Social from "../components/Social";
import About from "../components/About"

export default function Home() {
  return (
    <>
      <Head>
        <title>Owen Bick – A software engineer based in Boston</title>
        <link rel="icon" href="./static/favicon.ico" />
        <meta
          name="description"
          content="Owen Bick is a software engineer based in Boston."
        />
        <meta name="author" content="Owen Bick" />
      </Head>
      <Header></Header>
      <Layout>
        <Hero />
        <Portfolio />
        <About />
        <Social />
      </Layout>
      <Footer></Footer>
    </>
  );
}
