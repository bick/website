import React, { FC, useCallback, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface OffCanvasMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const OffCanvasMenu: FC<OffCanvasMenuProps> = ({ isOpen, onToggle }) => {
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

interface MenuItemProps {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}

const MenuItem: FC<MenuItemProps> = ({ href, children, isActive }) => (
  <li className="header__item">
    <Link
      href={href}
      className={isActive ? "header__link active" : "header__link"}
    >
      {children}
    </Link>
  </li>
);

export default function Header() {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }, []);

  const routes = {
    index: "/",
    about: "/about",
    contact: "/contact",
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link href="/">
          <img src="/static/earth.gif" alt="logo" width={50} height={50} />
        </Link>
      </div>
      <ul className="header__list">
        {Object.entries(routes).map(([key, href]) => (
          <MenuItem key={key} href={href} isActive={currentRoute === href}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </MenuItem>
        ))}
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
      <OffCanvasMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
    </header>
  );
}
