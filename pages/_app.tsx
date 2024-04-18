import React from "react";
import {Analytics} from "@vercel/analytics/react";
import {GoogleAnalytics} from "@next/third-parties/google";
import "@/styles/style.scss";

interface BickProps {
    Component: React.ComponentType;
    pageProps: Record<string, unknown>;
}

const Bick: React.FC<BickProps> = ({Component, pageProps}) => {
    return (
        <>
            <Component {...pageProps} />
            <GoogleAnalytics gaId="G-3X4LD4BT5X" />
            <Analytics/>
        </>
    );
};

export default Bick;
