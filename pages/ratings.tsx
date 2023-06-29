import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Home() {
  const [ratings] = useState([
    { name: "Star Wars: Episode IV", rating: 8 },
    { name: "Star Wars: Episode V", rating: 8.5 },
    { name: "Star Wars: Episode VI", rating: 8.5 },
  ]);

  const getRatingColor = (rating) => {
    if (rating >= 0 && rating <= 4) return "red";
    if (rating > 4 && rating <= 7) return "yellow";
    if (rating > 7 && rating <= 10) return "#23C55E";
  };

  return (
    <>
      <Head>
        <title>Reviews – Owen Bick</title>
        <link rel="icon" href="./static/favicon.ico" />
        <meta name="description" content="Ratings and reviews by Owen Bick" />
        <meta name="author" content="Owen Bick" />
      </Head>
      <Header></Header>
      <Layout>
        <section className="hero">
          <div className="container">
            <h1>Reviews &amp; Ratings</h1>
          </div>
        </section>
        <section className="reviews">
          <div className="container">
            <p>
              Here is where I'll rate anything that I feel deserves a documented
              rating out of
              <span className="reviews__number">10</span>stars. These are just
              my opinion with no further context.
            </p>
            <table>
              <tr>
                <th>Content Name</th>
                <th>Rating</th>
              </tr>
              {ratings.map((ratingData) => (
                <tr key={ratingData.name}>
                  <td>{ratingData.name}</td>
                  <td>
                    <span style={{ color: getRatingColor(ratingData.rating) }}>
                      {ratingData.rating}
                    </span>
                    /10
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </section>
      </Layout>
      <Footer></Footer>
    </>
  );
}
