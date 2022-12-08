import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>About – Owen Bick</title>
        <link rel="icon" href="./static/favicon.ico" />
        <meta name="description" content="About Owen Bick" />
        <meta name="author" content="Owen Bick" />
      </Head>
      <header className="header">
        <div className="header__logo">
          <Link href="/">
            <a>
              <div className="header__logo__img"></div>
            </a>
          </Link>
          <Link href="/">
            <a className="back-home">&#8592;</a>
          </Link>
        </div>
        <div className="header__nav">
          <ul className="header__nav__list">
            <li className="header__nav__item">
              <Link className="header__nav__link" href="/">
                <a className="header__nav__link">Index</a>
              </Link>
            </li>
            <li className="header__nav__item">
              <Link href="/about">
                <a className="header__nav__link active">About</a>
              </Link>
            </li>
            <li className="header__nav__item">
              <Link className="header__nav__link" href="/contact">
                <a className="header__nav__link">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
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
            <span>Blue Snowball</span>
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
      <footer className="footer">
        <div className="container">
          <ul className="footer__list">
            <li className="footer__list__item">
              <Link href="/">
                <a className="footer__list__link">Index</a>
              </Link>
            </li>
            <li className="footer__list__item">
              <Link href="/about">
                <a className="footer__list__link">About</a>
              </Link>
            </li>
            <li className="footer__list__item">
              <Link href="/contact">
                <a className="footer__list__link">Contact</a>
              </Link>
            </li>
          </ul>
          <span>
            Copyright &copy; 2022 Owen Bick. All Rights Reserved. This website
            doesn’t use any cookies.
          </span>
        </div>
      </footer>
    </>
  );
}
