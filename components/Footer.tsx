import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer__list">
          <li className="footer__list__item">
            <Link href="/" className="footer__list__link">
              Index
            </Link>
          </li>
          <li className="footer__list__item">
            <Link href="/about" className="footer__list__link">
              About
            </Link>
          </li>
          <li className="footer__list__item">
            <Link href="/contact" className="footer__list__link">
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
