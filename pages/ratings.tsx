import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Home() {
  const [ratings] = useState([
    { name: "Star Wars: Episode VI", rating: 8.5, tags: ["Movie"] },
    { name: "Star Wars: Episode V", rating: 8.5, tags: ["Movie"] },
    { name: "Star Wars: Episode IV", rating: 8, tags: ["Movie"] },
    { name: "Red Dead Redemption 2", rating: 9.5, tags: ["Video Game"] },
    { name: "Django: Unchained", rating: 9, tags: ["Movie"] },
    { name: "The Wolf of Wall Street", rating: 10, tags: ["Movie"] },
    { name: "Goodfellas", rating: 10, tags: ["Movie"] },
    { name: "To Pimp A Butterfly", rating: 10, tags: ["Music"] },
    { name: "The Dark Side of the Moon", rating: 10, tags: ["Music"] },
    { name: "Madvillany", rating: 9.5, tags: ["Music"] },
    { name: "The Shawshank Redemption", rating: 10, tags: ["Movie"] },
    { name: "The Godfather", rating: 10, tags: ["Movie"] },
    { name: "The Godfather Part II", rating: 10, tags: ["Movie"] },
    { name: "Pulp Fiction", rating: 9, tags: ["Movie"] },
    { name: "Reservoir Dogs", rating: 9, tags: ["Movie"] },
    { name: "The Batman", rating: 8, tags: ["Movie"] },
    { name: "It", rating: 9.5, tags: ["Movie"] },
    { name: "It Chapter Two", rating: 7, tags: ["Movie"] },
    { name: "My Beautiful Dark Twisted Fantasy", rating: 9.5, tags: ["Music"] },
    { name: "In the Aeroplane Over the Sea", rating: 8.5, tags: ["Movie"] },
    { name: "Apple M1 Pro 14-inch MacBook Pro", rating: 8, tags: ["Tech"] },
    { name: "Ed Sheeran +–=÷× Tour", rating: 9, tags: ["Music"] },
    { name: "Vance Joy: In Our Own Sweet Time Tour", rating: 9, tags: ["Music"] },
    { name: "DAMN.", rating: 9.5, tags: ["Music"] },
    { name: "Mr. Morale & The Big Steppers", rating: 9, tags: ["Music"] },
    { name: "The Marshall Mathers LP", rating: 9.5, tags: ["Music"] },
    { name: "Beerbongs & Bentleys", rating: 8.5, tags: ["Music"] },
  ]);

  const [selectedTag, setSelectedTag] = useState("All");

  const uniqueTags = [...new Set(ratings.flatMap((rating) => rating.tags))];

  const getRatingColor = (rating) => {
    if (rating >= 0 && rating <= 4) return "red";
    if (rating > 4 && rating <= 7) return "var(--link)";
    if (rating > 7 && rating <= 9.99) return "#23C55E";
    if (rating === 10) return "gold";
  };

  return (
    <>
      <Head>
        <title>Reviews – Owen Bick</title>
        <link rel="icon" href="/favicon.ico" />
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
            <select
              className="reviews__select"
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
            >
              <option value="All">All Ratings</option>
              {uniqueTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag === "Movie"
                    ? "Movies"
                    : tag === "Video Game"
                    ? "Video Games"
                    : tag}
                </option>
              ))}
            </select>
            <table>
              <tr>
                <th>Content Name</th>
                <th>Rating</th>
              </tr>
              {ratings
                .filter(
                  (rating) =>
                    selectedTag === "All" || rating.tags.includes(selectedTag)
                )
                .map((ratingData) => {
                  return (
                    <tr key={ratingData.name}>
                      <td>{ratingData.name}</td>
                      <td>
                        {ratingData.rating === 10 && (
                          <Image
                            src="/static/star.gif"
                            alt="Star"
                            width={20}
                            height={20}
                          />
                        )}
                        <span
                          style={{ color: getRatingColor(ratingData.rating) }}
                        >
                          {ratingData.rating}
                        </span>
                        /10
                      </td>
                    </tr>
                  );
                })}
            </table>
          </div>
        </section>
      </Layout>
      <Footer></Footer>
    </>
  );
}
