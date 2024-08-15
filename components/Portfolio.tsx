import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/portfolio.module.scss";

export default function Portfolio() {
    return (
        <section className={styles.portfolio} id="projects">
            <div className="container">
                <h3>🤘 Current Projects</h3>
                <div className={styles.portfolio__list}>
                    <Link
                        className={styles.portfolio__item}
                        href="https://discountdrugnetwork.com"
                        target="_blank"
                        rel="nofollow"
                    >
                        <Image
                            src="/static/discountdrugnetwork.png"
                            width="400"
                            height="150"
                            alt="Discount Drug Network."
                        />
                        <div className={styles.portfolio__meta}>
                            <blockquote>
                                Building an enterprise-grade pharmaceutical API
                            </blockquote>
                            <h3>Discount Drug Network</h3>
                        </div>
                    </Link>
                    <Link
                        className={styles.portfolio__item}
                        href="https://devgigs.com"
                        target="_blank"
                        rel="nofollow"
                    >
                        <Image
                            src="/static/devgigs.png"
                            width="400"
                            height="25"
                            alt="Devgigs."
                        />
                        <div className={styles.portfolio__meta}>
                            <blockquote className="hidden md:block">
                                Coming Fall 2024
                            </blockquote>
                            <h3>Devgigs</h3>
                        </div>
                    </Link>
                    <Link
                        className={styles.portfolio__item}
                        href="https://placeholderjs.com"
                        target="_blank"
                        rel="nofollow"
                    >
                        <span className={styles.portfolio__item__placeholder}>
                            PlaceholderJS
                        </span>
                        <div className={styles.portfolio__meta}>
                            <blockquote className="hidden md:block">
                                Ridiculously simple and lightweight placeholders
                            </blockquote>
                            <h3>PlaceholderJS</h3>
                        </div>
                    </Link>
                    <Link
                        className={styles.portfolio__item}
                        href="https://instagram.com/genzswe"
                        target="_blank"
                        rel="nofollow"
                    >
                        <Image
                            src="/static/genzswe.png"
                            width="400"
                            height="400"
                            alt="genzswe."
                            className="px-0 py-6"
                        />
                        <div className={styles.portfolio__meta}>
                            <blockquote className="hidden md:block">
                                I post software engineering memes sometimes
                            </blockquote>
                            <h3>@genzswe</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
};