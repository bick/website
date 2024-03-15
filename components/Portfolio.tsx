import Link from "next/link";
import styles from "@/styles/components/portfolio.module.scss";

export default function Portfolio() {
    return (
        <section className={styles.portfolio}>
            <div className="container">
                <h3>Featured Projects</h3>
                <ul className={styles.portfolio__list}>
                    <li>
                        <Link href="https://devgigs.com" target="_blank">
                            Devgigs
                        </Link>
                        <span className={`${styles.portfolio__desc} hidden lg:inline-block`}>
                  , A remote job community for coders
                </span>
                    </li>
                    <li>
                        <Link href="https://weekendlabs.net" target="_blank">
                            Weekend Labs
                        </Link>
                        <span className={`${styles.portfolio__desc} hidden lg:inline-block`}>
                  , A full-service software consultancy
                </span>
                    </li>
                    <li>
                        <Link href="https://hourlytomonthly.com" target="_blank">
                            Hourly to Monthly
                        </Link>
                        <span className={`${styles.portfolio__desc} hidden lg:inline-block`}>
                  , Convert the hourly costs of services to its monthly cost
                </span>
                    </li>
                </ul>
            </div>
        </section>
    );
};