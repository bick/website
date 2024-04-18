import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "@/styles/components/header.module.scss";
import VanillaTilt from 'vanilla-tilt';

export default function Header() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const tiltRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    VanillaTilt.init(tiltRef.current, {
      max: 5,
      speed: 400,
      glare: true,
      "max-glare": 0.05,
    });

    // Cleanup function to destroy the VanillaTilt effect when the component unmounts
    return () => {
      if (tiltRef.current) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <header className={styles.header}>
      <ul className={styles.header__list} ref={tiltRef}>
        <li className={styles.header__item}>
          <Link
            href="/"
            className={
              currentRoute === "/"
                  ? `${styles.header__link} ${styles.header__active}`
                  : styles.header__link
            }
          >
            Index
          </Link>
        </li>
        <li className={styles.header__item}>
          <Link
            href="/resume"
            className={
              currentRoute === "/resume"
                  ? `${styles.header__link} ${styles.header__active}`
                  : styles.header__link
            }
          >
            Resume
          </Link>
        </li>
        <li className={styles.header__item}>
          <Link
            href="/reviews"
            className={
              currentRoute === "/reviews"
                ? `${styles.header__link} ${styles.header__active}`
                : styles.header__link
            }
          >
            Reviews
          </Link>
        </li>
        <li className={styles.header__item}>
          <Link
            href="https://linkedin.com/in/bick"
            target="_blank"
            rel="nofollow"
            className={`${styles.header__link} ${styles.header__social}`}
          >
            <FaLinkedin />
          </Link>
        </li>
        <li className={styles.header__item}>
          <Link
              href="https://github.com/bick"
              target="_blank"
              rel="nofollow"
              className={`${styles.header__link} ${styles.header__social}`}
          >
            <FaGithub />
          </Link>
        </li>
        <li className={styles.header__item}>
          <Link
            href="/contact"
            className={styles.header__button}
          >
            <span className="hidden md:block">
            🤩&nbsp;&nbsp;Start A Project
              </span>
            <span className="md:hidden">
              Contact
            </span>
          </Link>
        </li>
      </ul>
    </header>
  );
}
