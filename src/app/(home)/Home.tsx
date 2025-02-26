"use client"
import React, {ReactNode} from "react";
import Social from "@/components/Social";
import Hero from "@/components/Hero";
import Portfolio from "./Portfolio";
import About from "./About";
import {motion} from "framer-motion";

interface LayoutProps {
    children: ReactNode;
    type?: string;
}

const LayoutAnimation = ({children, type}: LayoutProps) => {
    const isHome = type === "home";

    return (
        <motion.div
            className={`w-full mx-auto py-0 ${
                isHome ?
                    "py-28 bg-[url('/static/background.svg')] bg-no-repeat bg-[length:1000px] bg-[center_-500px]" :
                    ""
            }`}
            initial={{opacity: 0, y: 3}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.3, ease: "easeOut"}}
        >
            {children}
        </motion.div>
    );
};

export default function Home() {
    return (
        <LayoutAnimation type="home">
            <Hero type="home"/>
            <Portfolio/>
            <About/>
            <Social/>
        </LayoutAnimation>
    );
}