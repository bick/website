import styles from "@/styles/components/hero.module.scss";
import Blob from "@/components/Blob";

type HeroProps = {
    type: string;
};
export default function Hero({ type }: HeroProps) {
    const heroClass = type === "home" ? `${styles.hero} ${styles.home}` : styles.hero;

    return (
        <section className={heroClass}>
            <div className="container">
                <div>
                    <Blob />
                </div>
                <div>
                <h1>
                    Hi, I&apos;m <div className="flex"><span className="owen">Owen Bick</span><span
                    className={styles.wave}>👋</span></div>
                </h1>
                <h2>I&apos;m a software engineer based in Dallas</h2>
                </div>
            </div>
        </section>
    );
};