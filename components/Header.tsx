import React, {useEffect, useRef} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import VanillaTilt from 'vanilla-tilt';

export default function Header() {
    const router = useRouter();
    const currentRoute = router.pathname;
    const tiltRef = useRef(null);

    const menuItems = [
        {href: "/#projects", label: "Projects"},
        {href: "/resume", label: "Resume"},
        {href: "/reviews", label: "Reviews"},
    ];

    const socialLinks = [
        {href: "https://linkedin.com/in/bick", icon: FaLinkedin, label: "LinkedIn"},
        {href: "https://github.com/bick", icon: FaGithub, label: "GitHub"},
    ];

    const linkClasses = "flex text-[var(--link)] font-medium text-base md:text-[15px] mx-2 md:mx-3 h-12 leading-[3rem] transition-all duration-150 ease mix-blend-exclusion hover:text-white hover:no-underline hover:text-shadow hover:opacity-100";
    const activeLinkClasses = "text-white opacity-100";

    useEffect(() => {
        // Using type assertion to handle the element properly
        VanillaTilt.init(tiltRef.current as unknown as HTMLElement, {
            max: 5,
            speed: 400,
            glare: true,
            "max-glare": 0.05,
        });

        return () => {
            if (tiltRef.current) {
                // Using proper type assertion to avoid TypeScript error
                (tiltRef.current as any).vanillaTilt?.destroy();
            }
        };
    }, []);

    return (
        <header className="flex fixed justify-content-center items-center top-0 w-full p-4 z-[9999]">
            <ul className="flex justify-center bg-black/38 backdrop-blur-md w-full md:max-w-fit transition-shadow duration-200 ease-in-out mx-auto items-center py-0.5 px-4 rounded-[10px] border border-[var(--border)]"
                ref={tiltRef}>
                {/* Logo */}
                <li>
                    <Link
                        href="/"
                        className={`${linkClasses} text-xl ml-0 before:content-['🦞'] hover:before:content-['🏠'] ${currentRoute === "/" ? activeLinkClasses : ""}`}
                    >
                        &nbsp;
                    </Link>
                </li>

                {/* Menu Items */}
                {menuItems.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className={`${linkClasses} ${currentRoute === item.href ? activeLinkClasses : ""}`}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}

                {/* Social Links */}
                {socialLinks.map((social) => (
                    <li key={social.href}>
                        <Link
                            href={social.href}
                            target="_blank"
                            rel="nofollow"
                            aria-label={social.label}
                            className={`${linkClasses} hidden md:block text-lg`}
                        >
                            <social.icon className="flex m-auto h-full"/>
                        </Link>
                    </li>
                ))}

                {/* Contact Button */}
                <li>
                    <Link
                        href="/contact"
                        className="flex items-center text-[15px] bg-white/10 rounded-[10px] text-white shadow-[inset_0_0_20px_rgba(255,255,255,0.15),inset_0_1px_1px_rgba(255,255,255,0.15)] py-[7px] px-[14px] font-medium leading-5 my-0 transition-all border-b-0 duration-200 ease ml-2 border-none hover:shadow-none"
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