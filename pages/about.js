import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>About – Owen Bick</title>
        <link rel="icon" href="./static/favicon.ico" />
        <meta name="description" content="About Owen Bick" />
        <meta name="author" content="Owen Bick" />
      </Head>
      <Header></Header>
      <Layout>
        <section className="hero">
          <div className="container">
            <h1>About Owen Bick</h1>
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
              <br />
              <br />I have done web development as a hobby for about six years
              (this site is built in React and is publically available on my
              GitHub) so I know the tech jargon that matters to be a successful
              UX designer.
            </p>
          </div>
        </section>
        <section className="social">
          <div className="container">
            <h3>My tech stack</h3>
            <span>MacBook Pro (14-inch, M1 Pro)</span>
            <br />
            <span>24" LG Ultrafine Monitor (x2)</span>
            <br />
            <span>Keychron K10</span>
            <br />
            <span>Logitech MX Master 2S</span>
            <br />
            <span>DX Racer</span>
          </div>
        </section>
        <section className="social">
          <div className="container">
            <h3>This website was built using NextJS, SASS, and Netlify.</h3>
          </div>
        </section>
        <section className="social">
          <div className="container">
            <h3>Follow me</h3>
            <span>Twitter: </span>
            <Link href="//twitter.com/owenbick" target="_blank">@owenbick</Link>
            <br />
            <span>LinkedIn: </span>
            <Link href="//linkedin.com/in/bick" target="_blank">@bick</Link>
            <br />
            <span>GitHub: </span>
            <Link href="//github.com/bick" target="_blank">@bick</Link>
            <br />
            <span>ProductHunt: </span>
            <Link href="//producthunt.com/@bick" target="_blank">@bick</Link>
            <br />
            <span>Instagram: </span>
            <Link href="//instagram.com/owenbick" target="_blank">@owenbick</Link>
          </div>
        </section>
      </Layout>
      <Footer></Footer>
    </>
  );
}
