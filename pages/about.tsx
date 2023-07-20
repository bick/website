import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
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
        <section className="hero about">
          <div className="container">
            <h1>About Owen Bick</h1>
          </div>
        </section>
        <section className="about">
          <div className="container">
            <h3>About Me</h3>
            <p className="about__boston">
              I&apos;m Owen, I&apos;m a software engineer that currently lives
              in Boston.
              <Image
                src="/static/boston.webp"
                alt="Owen Bick"
                width={42}
                height={42}
              />
            </p>
            <p>
              <br />I first started writing code for the web around 2012. My
              experience has led me to work on some of the most challenging and
              intricate business cases, where I've mastered the art of
              simplifying and building out complex infrastructures with
              cost-effectiveness in mind.
              <br />
              <br />
              Currently, my primary focus is working with ambitious startups in
              Series A, B, and C rounds, helping them develop cutting-edge
              digital products, secure funding, and scale their engineering and
              product teams.
            </p>
          </div>
        </section>
        <section className="social">
          <div className="container">
            <h3>My tech stack</h3>
            <span>MacBook Pro (14-inch, M1 Pro)</span>
          </div>
        </section>
        <section className="social">
          <div className="container">
            <h4>
              This website was built using NextJS, TypeScript, SASS, and Vercel.
            </h4>
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
