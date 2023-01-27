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
          Owen Bick – A product designer and web developer based in Boston
        </title>
        <link rel="icon" href="./static/favicon.ico" />
        <meta
          name="description"
          content="Owen Bick is a product designer and web developer based in Boston."
        />
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
            <h2>I&apos;m a product designer and web developer based in Boston</h2>
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
                <a href="//websiteshowcase.org" target="_blank">Website Showcase</a>
                <span>, A collection of some awesome websites</span>
              </li>
              <li>
                <a href="//devgigs.com" target="_blank">DevGigs.com</a>
                <span>, Jobs for coders (coming soon)</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="about">
          <div className="container">
            <h3>About Me</h3>
            <p>
              I&apos;m Owen, I&apos;m a product designer and web developer that currently lives in
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
            <a href="//twitter.com/owenbick" target="_blank">@owenbick</a>
            <br />
            <span>LinkedIn: </span>
            <a href="//linkedin.com/in/bick" target="_blank">@bick</a>
            <br />
            <span>ProductHunt: </span>
            <a href="//producthunt.com/@bick" target="_blank">@bick</a>
            <br />
            <span>Instagram: </span>
            <a href="//instagram.com/owenbick" target="_blank">@owenbick</a>
            <br />
            <span>GitHub: </span>
            <a href="//github.com/bick" target="_blank">@bick</a>
            <br />
            <span>Dribbble: </span>
            <a href="//dribbble.com/bick" target="_blank">@bick</a>
          </div>
        </section>
      </Layout>
      <Footer></Footer>
    </>
  );
}
