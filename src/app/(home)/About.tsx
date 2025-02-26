'use client'
import Link from "next/link";
import Image from "next/image";

export default function Social() {
    return (
        <section className="about my-12 text-lg">
            <div className="container">
                <h2>😺 About Me</h2>
                <p className="mt-4">
                    I&apos;m Owen, I&apos;m a software engineer that currently lives
                    in Austin.
                </p>
                <p>
                    <br/>I first started writing code for the web around 2012. My
                    experience has led me to work on some of the most challenging and
                    intricate business cases, where I've mastered the art of
                    simplifying and building out complex infrastructures with
                    cost-effectiveness in mind.
                    <br/>
                    <br/>
                    Currently, my primary focus is working with ambitious startups in
                    Series C or higher rounds helping them develop cutting-edge
                    digital products, secure funding, and scale their engineering and
                    product teams.
                </p>
            </div>
        </section>
    );
};