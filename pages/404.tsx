import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>404 Not Found – Owen Bick</title>
        <link rel="icon" href="./static/favicon.ico" />
        <meta name="description" content="Contact Owen Bick" />
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
                <a className="header__nav__link">About</a>
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
            <h1>404 Not Found</h1>
          </div>
        </section>
        <section className="social">
          <div className="container">
            <h3>Uh oh... looks like this page doesn't exist.</h3>
            <Link href="/"><a>&#8592; Go back home</a></Link><br /><br /><br /><br />
            <img src="https://cdn.owenbick.com/cat.gif" />
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
