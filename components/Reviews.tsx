import Image from "next/image";
import {useState} from "react";
import styles from "@/styles/components/reviews.module.scss";
import heroStyles from "@/styles/components/hero.module.scss";

export default function Footer() {
    const [ratings] = useState([
        // Movies
        {name: "Star Wars: Episode I", rating: 6, tags: ["Movie"]},
        {name: "Star Wars: Episode II", rating: 6.5, tags: ["Movie"]},
        {name: "Star Wars: Episode III", rating: 7, tags: ["Movie"]},
        {name: "Star Wars: Episode IV", rating: 9, tags: ["Movie"]},
        {name: "Star Wars: Episode V", rating: 9, tags: ["Movie"]},
        {name: "Star Wars: Episode VI", rating: 9, tags: ["Movie"]},
        {name: "Star Wars: Episode VII", rating: 6, tags: ["Movie"]},
        {name: "Star Wars: Episode VIII", rating: 4, tags: ["Movie"]},
        {name: "Star Wars: Episode IX", rating: 4, tags: ["Movie"]},
        {name: "Oppenheimer", rating: 9, tags: ["Movie"]},
        {name: "Django: Unchained", rating: 10, tags: ["Movie"]},
        {name: "The Wolf of Wall Street", rating: 9.5, tags: ["Movie"]},
        {name: "Goodfellas", rating: 9.5, tags: ["Movie"]},
        {name: "The Shawshank Redemption", rating: 9.5, tags: ["Movie"]},
        {name: "The Godfather", rating: 9, tags: ["Movie"]},
        {name: "The Godfather Part II", rating: 9, tags: ["Movie"]},
        {name: "Pulp Fiction", rating: 9, tags: ["Movie"]},
        {name: "Reservoir Dogs", rating: 9, tags: ["Movie"]},
        {name: "The Batman", rating: 8, tags: ["Movie"]},
        {name: "It", rating: 8, tags: ["Movie"]},
        {name: "It Chapter Two", rating: 5, tags: ["Movie"]},
        // Video Games
        {name: "Red Dead Redemption 2", rating: 9, tags: ["Video Game"]},
        {name: "Elden Ring", rating: 10, tags: ["Video Game"]},
        // Music
        {
            name: "To Pimp A Butterfly",
            credit: ["Kendrick Lamar"],
            rating: 10,
            tags: ["Music"]
        },
        {
            name: "The Dark Side of the Moon",
            credit: ["Pink Floyd"],
            rating: 10,
            tags: ["Music"]
        },
        {name: "Madvillany", credit: ["MF DOOM"], rating: 9, tags: ["Music"]},
        {
            name: "My Beautiful Dark Twisted Fantasy",
            credit: ["Kanye West"],
            rating: 9,
            tags: ["Music"]
        },
        {
            name: "In the Aeroplane Over the Sea",
            credit: ["Neutral Milk Hotel"],
            rating: 8,
            tags: ["Music"]
        },
        {name: "DAMN.", credit: ["Kendrick Lamar"], rating: 9.5, tags: ["Music"]},
        {
            name: "Mr. Morale & The Big Steppers",
            credit: ["Kendrick Lamar"],
            rating: 9,
            tags: ["Music"]
        },
        {
            name: "The Marshall Mathers LP",
            credit: ["Eminem"],
            rating: 10,
            tags: ["Music"]
        },
        {
            name: "Beerbongs & Bentleys",
            credit: ["Post Malone"],
            rating: 8,
            tags: ["Music"]
        },
        {name: "Stoney", credit: ["Post Malone"], rating: 7, tags: ["Music"]},
        // Tech
        {name: "Apple M1 Pro 14-inch MacBook Pro", rating: 8, tags: ["Tech"]},
        {name: "Apple iPhone 12", rating: 9, tags: ["Tech"]},
        {name: "Apple iPhone 15", rating: 10, tags: ["Tech"]},
        // Wrestling Shows
        {name: "Wrestlemania 24", rating: 9, tags: ["Wrestling"]},
        {name: "Wrestlemania 25", rating: 9.5, tags: ["Wrestling"]},
        {name: "Wrestlemania 26", rating: 9, tags: ["Wrestling"]},
        {name: "Wrestlemania 27", rating: 3, tags: ["Wrestling"]},
        {name: "Wrestlemania 28", rating: 5, tags: ["Wrestling"]},
        {name: "Wrestlemania 29", rating: 6, tags: ["Wrestling"]},
        {name: "Wrestlemania 30", rating: 10, tags: ["Wrestling"]},
        {name: "Wrestlemania 38 Night 1", rating: 10, tags: ["Wrestling"]},
        {name: "Wrestlemania 38 Night 2", rating: 9, tags: ["Wrestling"]},
        {name: "Wrestlemania 39 Night 1", rating: 10, tags: ["Wrestling"]},
        {name: "Wrestlemania 39 Night 2", rating: 9.5, tags: ["Wrestling"]},
        {name: "Wrestlemania XL Night 1", rating: 7, tags: ["Wrestling"]},
        {name: "Wrestlemania XL Night 2", rating: 10, tags: ["Wrestling"]},
    ]);

    const [selectedTag, setSelectedTag] = useState("All");

    const uniqueTags = [...new Set(ratings.flatMap((rating) => rating.tags))];

    const getRatingColor = (rating: number) => {
        if (rating >= 0 && rating <= 4) return "red";
        if (rating > 4 && rating <= 7) return "var(--link)";
        if (rating > 7 && rating <= 9.99) return "#23C55E";
        if (rating === 10) return "gold";
    };

    return (
        <>
            <section className={heroStyles.hero}>
                <div className="container">
                    <h1>
                        ⭐️ Reviews
                    </h1>
                </div>
            </section>
            <section className={styles.reviews}>
                <div className="container">
                    <p>
                        Here is where I'll rate anything that I feel deserves a documented
                        rating out of
                        <span className={styles.reviews__number}>10</span>stars. These are just
                        my opinion with no further context.
                    </p>
                    <select
                        className={styles.reviews__select}
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
                                        : tag === "Wrestling"
                                            ? "Wrestling"
                                            : tag}
                            </option>
                        ))}
                    </select>
                    <table>
                        <tr>
                            <th>Name</th>
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
                                        <td>
                                            {ratingData.name}
                                            {ratingData.credit !== undefined && (
                                                <span className={styles.reviews__credit}>
                            by {ratingData.credit}
                          </span>
                                            )}
                                        </td>
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
                                                style={{color: getRatingColor(ratingData.rating)}}
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
        </>
    );
};