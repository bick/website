import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
        <section className="hero">
          <div className="container">
            <h1>
              Hi, I&apos;m <span className="line">Owen Bick</span>
              <span className="wave">👋</span>
            </h1>
            <h2>I&apos;m a software engineer based in Boston</h2>
          </div>
        </section>
        <section className="portfolio">
          <div className="container">
            <h3>Featured Projects</h3>
            <ul className="portfolio__list">
              <li>
                <Link href="https://spoteasy.com" target="_blank">
                  SpotEasy
                </Link>
                <span className="portfolio__desc hidden lg:block">
                  , Boston's homegrown rental marketplace
                </span>
                👈 Current project
              </li>
              <li>
                <Link href="https://weekendlabs.net" target="_blank">
                  Weekend Labs
                </Link>
                <span className="portfolio__desc">
                  , A full-service software consultancy
                </span>
              </li>
              <li>
                <Link href="https://hourlytomonthly.com" target="_blank">
                  Hourly to Monthly
                </Link>
                <span className="portfolio__desc">
                  , Convert the hourly costs of services to its monthly cost
                </span>
              </li>
            </ul>
          </div>
        </section>
        <section className="about">
          <div className="container">
            <h3>About Me</h3>
            <p>
              Hi, my name is Owen, and I'm a software engineer based in Boston.
              With a passion for startups, I enjoy working with early-stage
              companies to help them develop innovative software solutions that
              drive growth and success. As an investor, I bring a unique
              perspective to the table, combining my technical expertise with my
              experience in identifying promising startups with strong potential
              for success.
            </p>
            <Link href="/about">Read more &#8594;</Link>
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
