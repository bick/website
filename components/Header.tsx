import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const OffCanvasMenu = ({ isOpen, toggleOpen }) => {
  return (
    <div
      className={`header__dropdown ${
        isOpen ? "header__dropdown__open" : "header__dropdown__closed"
      }`}
    >
      <ul>
        <li className="md:hidden">
          <Link href="/">Index</Link>
        </li>
        <li>
          <Link href="/ratings">Ratings & Reviews</Link>
        </li>
        <li>
          <Link
            href="https://hourlytomonthly.com"
            target="_blank"
            rel="nofollow"
          >
            Hourly to Monthly
          </Link>
        </li>
        <li>
          <Link
            href="https://whois.weekendlabs.net"
            target="_blank"
            rel="nofollow"
          >
            WHOIS
          </Link>
        </li>
        <li className="md:hidden">
          <Link href="/about">About</Link>
        </li>
        <li className="md:hidden">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default function Header() {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link href="/">
          <img src="/static/earth.gif" className="header__logo__img" />
        </Link>
      </div>
      <ul className="header__list">
        <li className="header__item">
          <Link
            href="/"
            className={
              currentRoute === "/" ? "header__link active" : "header__link"
            }
          >
            Index
          </Link>
        </li>
        <li className="header__item">
          <Link
            href="/about"
            className={
              currentRoute === "/about" ? "header__link active" : "header__link"
            }
          >
            About
          </Link>
        </li>
        <li className="header__item">
          <Link
            href="/contact"
            className={
              currentRoute === "/contact"
                ? "header__link active"
                : "header__link"
            }
          >
            Contact
          </Link>
        </li>
        <li className="header__item">
          <button onClick={toggleMenu} className="header__button">
            {isMenuOpen ? (
              "← Close"
            ) : (
              <>
                <span className="lg:hidden">Menu →</span>
                <span className="hidden lg:inline">More →</span>
              </>
            )}
          </button>
        </li>
      </ul>
      <OffCanvasMenu isOpen={isMenuOpen} toggleOpen={toggleMenu} />
    </header>
  );
}
