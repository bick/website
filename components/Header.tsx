import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "@/styles/components/header.module.scss";

export default function Header() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <header className={styles.header}>
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
            href="/reviews"
            className={
              currentRoute === "/"
                ? styles.header__link
                : `${styles.header__link} ${styles.header__active}`
            }
          >
            Reviews
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
          <Link
            href="/contact"
            className={styles.header__button}
          >
            🤩&nbsp;&nbsp;Start A Project
          </Link>
        </li>
      </ul>
    </header>
  );
}
