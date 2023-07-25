import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>404 Not Found – Owen Bick</title>
        <link rel="icon" href="./static/favicon.ico" />
        <meta
          name="description"
          content="Owen Bick is a software engineer based in Boston."
        />
        <meta name="author" content="Owen Bick" />
      </Head>
      <Header></Header>
      <Layout>
        <section className="hero">
          <div className="container">
            <h1>Coming soon!</h1>
          </div>
        </section>
      </Layout>
      <Footer></Footer>
    </>
  );
}
