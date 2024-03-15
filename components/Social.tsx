import Link from "next/link";
import styles from "@/styles/components/social.module.scss";

export default function Social() {
    return (
        <section className={styles.social}>
            <div className="container">
                <h3>Follow me</h3>
                <span>GitHub: </span>
                <Link href="https://github.com/bick" target="_blank">
                    @bick
                </Link>
                <br/>
                <span>X: </span>
                <Link href="https://x.com/owenbick" target="_blank">
                    @owenbick
                </Link>
                <br/>
                <span>LinkedIn: </span>
                <Link href="https://linkedin.com/in/bick" target="_blank">
                    @bick
                </Link>
            </div>
        </section>
    );
};