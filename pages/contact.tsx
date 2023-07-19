import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Contact – Owen Bick</title>
        <link rel="icon" href="./static/favicon.ico" />
        <meta name="description" content="Contact Owen Bick" />
        <meta name="author" content="Owen Bick" />
      </Head>
      <Header></Header>
      <Layout>
        <section className="hero">
          <div className="container">
            <h1>Contact Me</h1>
          </div>
        </section>
        <section className="social">
          <div className="container">
            <h3>Email me</h3>
            <a href="mailto:owenbick@gmail.com">owenbick@gmail.com</a>
          </div>
        </section>
        <section className="social">
          <div className="container">
            <h3>Follow me</h3>
            <span>GitHub: </span>
            <Link href="https://github.com/bick" target="_blank">
              @bick
            </Link>
            <br />
            <span>Twitter: </span>
            <Link href="https://twitter.com/owenbick" target="_blank">
              @owenbick
            </Link>
            <br />
            <span>LinkedIn: </span>
            <Link href="https://linkedin.com/in/bick" target="_blank">
              @bick
            </Link>
            <br />
            <span>Instagram: </span>
            <Link href="https://instagram.com/owenbick" target="_blank">
              @owenbick
            </Link>
            <br />
            <span>ProductHunt: </span>
            <Link href="https://producthunt.com/@bick" target="_blank">
              @bick
            </Link>
          </div>
        </section>
      </Layout>
      <Footer></Footer>
    </>
  );
}
