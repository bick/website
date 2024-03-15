import styles from "@/styles/components/hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <h1>
                    Hi, I&apos;m <span className="owen">Owen Bick</span>
                    <span className={styles.wave}>👋</span>
                </h1>
                <h2>I&apos;m a software engineer based in Boston</h2>
            </div>
        </section>
    );
};