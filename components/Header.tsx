import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
interface OffCanvasMenuProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const Backdrop: React.FC<{ isOpen: boolean; toggleOpen: () => void }> = ({
  isOpen,
  toggleOpen,
}) => {
  return (
    <div
      className={`backdrop ${isOpen ? "backdrop__open" : ""}`}
      onClick={toggleOpen}
    ></div>
  );
};

const OffCanvasMenu: React.FC<OffCanvasMenuProps> = ({
  isOpen,
  toggleOpen,
}) => {
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
        <li className="md:hidden">
          <Link href="/about">About</Link>
        </li>
        <li className="md:hidden">
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/writing">Writing</Link>
        </li>
        <li>
          <Link href="/reviews">Reviews</Link>
        </li>
        <li className="block mt-12 opacity-75">More Projects</li>
        <li>
          <Link href="https://weekendlabs.net" target="_blank" rel="nofollow">
            Weekend Labs
          </Link>
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
      </ul>
      <li className="block opacity-75 mb-4">Follow me</li>
      <ul className="header__dropdown__social">
        <li>
          <Link href="https://github.com/bick" target="_blank" rel="nofollow">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/bick" target="_blank" rel="nofollow">
            Twitter
          </Link>
        </li>
        <li>
          <Link
            href="https://linkedin.com/in/bick"
            target="_blank"
            rel="nofollow"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link
            href="https://instagram.com/owenbick"
            target="_blank"
            rel="nofollow"
          >
            Instagram
          </Link>
        </li>
        <li>
          <Link
            href="https://producthunt.com/@bick"
            target="_blank"
            rel="nofollow"
          >
            ProductHunt
          </Link>
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
          <button
            onClick={toggleMenu}
            className={`header__button ${isMenuOpen ? "active" : ""}`}
          >
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
      <Backdrop isOpen={isMenuOpen} toggleOpen={toggleMenu} />
      <OffCanvasMenu isOpen={isMenuOpen} toggleOpen={toggleMenu} />
    </header>
  );
}
