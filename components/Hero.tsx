import styles from "@/styles/components/hero.module.scss";

type HeroProps = {
    type: string;
};
export default function Hero({ type }: HeroProps) {
    const heroClass = type === "home" ? `${styles.hero} ${styles.home}` : styles.hero;

    return (
        <section className={heroClass}>
            <div className="container">
                <h1>
                    Hi, I&apos;m <span className="owen">Owen Bick <span className={styles.wave}>👋</span></span>
                </h1>
                <h2>I&apos;m a software engineer based in Boston</h2>
            </div>
        </section>
    );
};