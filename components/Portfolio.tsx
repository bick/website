import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/portfolio.module.scss";

export default function Portfolio() {
    return (
        <section className={styles.portfolio}>
            <div className="container">
                <h3>What I'm Currently Working On</h3>
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
                            height="50"
                            alt="Devgigs."
                        />
                        <div className={styles.portfolio__meta}>
                            <blockquote>
                                A job board, powered by AI, for coders
                            </blockquote>
                            <h3>Devgigs</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};