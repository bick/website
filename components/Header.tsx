import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { PiDotsNineBold, PiXBold, PiLinkedinLogoFill } from "react-icons/pi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "@/styles/components/header.module.scss";

interface OffCanvasMenuProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const Backdrop: React.FC<{ isOpen: boolean; toggleOpen: () => void }> = ({
  isOpen,
  toggleOpen
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
  toggleOpen
}) => {
  return (
    <div
      className={`${
        isOpen
          ? `${styles["header__dropdown--open"]} ${styles.header__dropdown}`
          : styles.header__dropdown
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
          <Link href="/blog">Writing</Link>
        </li>
        <li>
          <Link href="/reviews">Reviews</Link>
        </li>
        <li className="block mt-12 opacity-75">Featured Projects</li>
        <li>
          <Link href="https://devgigs.com" target="_blank" rel="nofollow">
            Devgigs
          </Link>
        </li>
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
          <Link href="https://x.com/bick" target="_blank" rel="nofollow">
            X
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
    <header className={styles.header}>
      {/* <div className="header__logo">
        <Link href="/">
          <img src="/static/earth.gif" className="header__logo__img" />
        </Link>
      </div> */}
      <ul className={styles.header__list}>
        <li className={styles.header__item}>
          <Link
            href="/"
            className={
              currentRoute === "/"
                ? styles.header__link
                : `${styles.header__link} ${styles.header__active}`
            }
          >
            Index
          </Link>
        </li>
        <li className={styles.header__item}>
          <Link
            href="/about"
            className={
              currentRoute === "/"
                ? styles.header__link
                : `${styles.header__link} ${styles.header__active}`
            }
          >
            About
          </Link>
        </li>
        <li className={styles.header__item}>
          <Link
            href="/resume"
            className={
              currentRoute === "/"
                ? styles.header__link
                : `${styles.header__link} ${styles.header__active}`
            }
          >
            Resume
          </Link>
        </li>
        <li className={styles.header__item}>
          <Link
            href="/contact"
            className={
              currentRoute === "/"
                ? styles.header__link
                : `${styles.header__link} ${styles.header__active}`
            }
          >
            Contact
          </Link>
        </li>
        <li className={styles.header__item}>
          <Link
            href="/contact"
            className={
              currentRoute === "/contact"
                  ? `${styles.header__link} ${styles.header__social} ${styles.active}`
                  : `${styles.header__link} ${styles.header__social}`
            }
          >
            <FaLinkedin />
          </Link>
        </li>
        <li className={styles.header__item}>
          <Link
              href="/contact"
              className={
                currentRoute === "/contact"
                    ? `${styles.header__link} ${styles.header__social} ${styles.active}`
                    : `${styles.header__link} ${styles.header__social}`
              }
          >
            <FaGithub />
          </Link>
        </li>
        <li className={styles.header__item}>
          <button
            onClick={toggleMenu}
            className={`${
              isMenuOpen
                ? `${styles.header__button} ${styles["header__button--active"]}`
                : styles.header__button
            }`}
          >
            {isMenuOpen ? (
              <>
                <PiXBold /> Close
              </>
            ) : (
              <>
                <PiDotsNineBold /> Menu
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
