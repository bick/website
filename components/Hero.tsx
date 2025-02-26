import {motion, Variants} from "framer-motion";

type HeroProps = {
    type: string;
};

export default function Hero({type}: HeroProps) {
    // Wave animation variants with proper TypeScript type
    const waveVariants: Variants = {
        wave: {
            rotate: [0, 14, -8, 14, -4, 10, 0],
            transition: {
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop" as const,
                ease: "easeInOut",
                repeatDelay: 1
            }
        }
    };

    return (
        <section className={type === "home" ? "py-20" : "pt-40 pb-20"}>
            <div className="container">
                <h1 className={type === "home"
                    ? "font-medium text-2xl md:text-4xl block leading-[3rem] md:flex md:items-center mb-1"
                    : "font-medium text-2xl mb-1"
                }>
                    Hi, I&apos;m <span className="owen">Owen Bick</span>
                    <motion.span
                        className="inline-block origin-bottom-right ml-1"
                        variants={waveVariants}
                        animate="wave"
                    >
                        👋
                    </motion.span>
                </h1>
                <h2 className="font-medium text-2xl leading-normal">
                    I&apos;m a software engineer based in Dallas
                </h2>
            </div>
        </section>
    );
}