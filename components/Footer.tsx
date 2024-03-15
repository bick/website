import Link from "next/link";
import styles from "@/styles/components/footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <ul className={styles.footer__list}>
          <li className={styles.footer__list__item}>
            <Link href="/" className={styles.footer__list__link}>
              Index
            </Link>
          </li>
          <li className={styles.footer__list__item}>
            <Link href="/resume" className={styles.footer__list__link}>
              Resume
            </Link>
          </li>
          <li className={styles.footer__list__item}>
            <Link href="/reviews" className={styles.footer__list__link}>
              Reviews
            </Link>
          </li>
          <li className={styles.footer__list__item}>
            <Link href="/contact" className={styles.footer__list__link}>
              Contact
            </Link>
          </li>
        </ul>
        <span>
          Copyright &copy; {new Date().getFullYear()} Owen Bick. All Rights
          Reserved. Made with ❤️ and ☕ in Boston.
        </span>
      </div>
    </footer>
  );
}
