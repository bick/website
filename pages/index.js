import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Owen Bick – A product consultant and web developer based in Boston
        </title>
        <link rel="icon" href="./static/favicon.ico" />
        <meta name="description" content="Owen Bick is a product consultant and web developer based in Boston." />
        <meta name="author" content="Owen Bick" />
      </Head>
      <Header></Header>
      <Layout>
        <section className="hero">
          <div className="container">
            <h1>
              Hi, I&apos;m <span className="line">Owen Bick</span>
              <span className="wave">👋</span>
            </h1>
            <h2>I&apos;m a product consultant and web developer based in Boston</h2>
          </div>
        </section>
        <section className="portfolio">
          <div className="container">
            <h3>Featured Projects</h3>
            <ul className="portfolio__list">
              <li>
                <a href="//weekendlabs.net" target="_blank">Weekend Labs</a>
                <span>, A full-service digital agency</span>
              </li>
              <li>
                <a href="//devgigs.com" target="_blank">Impossible Chess</a>
                <span>, How long can you last against the world's best chess engine?</span>
              </li>
              <li>
                <a href="//websiteshowcase.org" target="_blank">Website Showcase</a>
                <span>, A collection of some awesome websites</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="about">
          <div className="container">
            <h3>About Me</h3>
            <p>
              I&apos;m Owen, I&apos;m a product consultant and web developer that currently lives in
              Boston. I&apos;ve helped many companies build digital products that are
              more human. My philosophy is simple: design products in a way that
              allows someone to use the product for the first time and feel like
              they understand what they&apos;re looking at. They don&apos;t need to be
              experts, but a digital product should not be overwhelming.
            </p>
            <Link href="/about">
              Read more &#8594;
            </Link>
          </div>
        </section>
        <section className="social">
          <div className="container">
            <h3>Follow me</h3>
            <span>Twitter: </span>
            <Link href="https://twitter.com/owenbick" target="_blank">@owenbick</Link>
            <br />
            <span>LinkedIn: </span>
            <Link href="https://linkedin.com/in/bick" target="_blank">@bick</Link>
            <br />
            <span>GitHub: </span>
            <Link href="https://github.com/bick" target="_blank">@bick</Link>
            <br />
            <span>ProductHunt: </span>
            <Link href="https://producthunt.com/@bick" target="_blank">@bick</Link>
            <br />
            <span>Instagram: </span>
            <Link href="https://instagram.com/owenbick" target="_blank">@owenbick</Link>
          </div>
        </section>
      </Layout>
      <Footer></Footer>
    </>
  );
}
