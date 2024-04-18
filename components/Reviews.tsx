import React, {useEffect, useState} from 'react';
import Image from "next/image";
import styles from "@/styles/components/reviews.module.scss";
import heroStyles from "@/styles/components/hero.module.scss";
import ratingsData from '@/data/reviews.json';

interface Rating {
    name: string;
    rating: number;
    tags: string[];
    credit?: string[];
}

export default function Footer() {
    const [ratings, setRatings] = useState<Rating[]>([]);
    const [selectedTag, setSelectedTag] = useState<string>("All");

    // Load data from JSON on mount
    useEffect(() => {
        setRatings(ratingsData);
    }, []);

    const uniqueTags = [...new Set(ratings.flatMap((rating) => rating.tags))];

    const getRatingColor = (rating: number): string => {
        if (rating >= 0 && rating <= 4) return "red";
        if (rating > 4 && rating <= 7) return "var(--link)";
        if (rating > 7 && rating <= 9.99) return "#23C55E";
        if (rating === 10) return "gold";
        return "inherit";
    };

    return (
        <>
            <section className={heroStyles.hero}>
                <div className="container">
                    <h1>⭐️ Reviews</h1>
                    <p>Here is where I'll rate anything that I feel deserves a documented rating out of <span
                        className={styles.reviews__number}>10</span> stars. These are just my opinion with no further
                        context.</p>
                </div>
            </section>
            <section className={styles.reviews}>
                <div className="container">
                    <select className={styles.reviews__select} value={selectedTag}
                            onChange={(e) => setSelectedTag(e.target.value)}>
                        <option value="All">All Ratings</option>
                        {uniqueTags.map((tag) => (
                            <option key={tag} value={tag}>
                                {tag === "Movie" ? "Movies" : tag === "Video Game" ? "Video Games" : tag === "Wrestling" ? "Wrestling" : tag}
                            </option>
                        ))}
                    </select>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Rating</th>
                        </tr>
                        {ratings.filter((rating) => selectedTag === "All" || rating.tags.includes(selectedTag)).map((ratingData) => (
                            <tr key={ratingData.name}>
                                <td>
                                    {ratingData.name}
                                    {ratingData.credit &&
                                        <span
                                            className={styles.reviews__credit}>by {ratingData.credit.join(", ")}</span>}
                                </td>
                                <td>
                                    {ratingData.rating === 10 &&
                                        <Image src="/static/star.gif" alt="Star" width={20} height={20}/>}
                                    <span style={{color: getRatingColor(ratingData.rating)}}>{ratingData.rating}</span>/10
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            </section>
        </>
    );
}
