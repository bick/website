import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Clock from "react-live-clock";
import heroStyles from "@/styles/components/hero.module.scss";
import React from "react";

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
        <section className={heroStyles.hero}>
          <div className="container">
            <h1>✉️ Contact Me</h1>
          </div>
        </section>
        <section className="social">
          <div className="container">
            <h3>Email me</h3>
            <a href="mailto:owenbick@gmail.com">owenbick@gmail.com</a>
            <div className="flex flex-col my-12">
              <Clock
                format={"MMMM Mo, YYYY, h:mm:ss A"}
                ticking={true}
                timezone={"US/Eastern"}
              ></Clock>
              <span className="opacity-50">UTC-05:00 - Boston, MA</span>
            </div>
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
            <span>X: </span>
            <Link href="https://x.com/owenbick" target="_blank">
              @owenbick
            </Link>
            <br />
            <span>LinkedIn: </span>
            <Link href="https://linkedin.com/in/bick" target="_blank">
              @bick
            </Link>
          </div>
        </section>
      </Layout>
      <Footer></Footer>
    </>
  );
}
