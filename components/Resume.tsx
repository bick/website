import Link from "next/link";
import heroStyles from "@/styles/components/hero.module.scss";
import styles from "@/styles/components/resume.module.scss";

export default function Footer() {
    return (
        <>
        <section className={heroStyles.hero}>
            <div className="container">
                <h1>
                    Resume
                </h1>
            </div>
        </section>
            <section className={styles.resume}>
                <div className="container">
                    <h2>
                        Experience
                    </h2>
                    <div className={styles.resume__item}>
                        <div className={styles.resume__item__meta}>
                            <h3>Software Engineer</h3>
                            <h4>Discount Drug Network</h4>
                        </div>
                        <time>May 2022 - <i>Present</i></time>
                    </div>
                    <div className={styles.resume__item}>
                        <div className={styles.resume__item__meta}>
                            <h3>Software Engineer</h3>
                            <h4>Spot Easy</h4>
                        </div>
                        <time>Feb 2023 - Feb 2024</time>
                    </div>
                    <div className={styles.resume__item}>
                        <div className={styles.resume__item__meta}>
                            <h3>Web Developer</h3>
                            <h4>Freelance</h4>
                        </div>
                        <time>2017 - 2023</time>
                    </div>
                    <h2>
                        Education
                    </h2>
                    <div className={styles.resume__item}>
                        <div className={styles.resume__item__meta}>
                            <h3>B.S. Business Management</h3>
                            <h4>Champlain College</h4>
                        </div>
                        <time>2018 - 2022</time>
                    </div>
                </div>
            </section>
        </>
    );
}
