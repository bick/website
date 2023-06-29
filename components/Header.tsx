import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
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
            className={
              currentRoute === "/" ? "header__link active" : "header__link"
            }
            href="/"
          >
            Index
          </Link>
        </li>
        <li className="header__item">
          <Link
            className={
              currentRoute === "/about" ? "header__link active" : "header__link"
            }
            href="/about"
          >
            About
          </Link>
        </li>
        <li className="header__item">
          <Link
            className={
              currentRoute === "/ratings" ? "header__link active" : "header__link"
            }
            href="/ratings"
          >
            Ratings
          </Link>
        </li>
        <li className="header__item">
          <Link
            className={
              currentRoute === "/contact"
                ? "header__link active"
                : "header__link"
            }
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
}
