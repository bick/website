import React from "react";
import {Analytics} from "@vercel/analytics/react";
import "@/styles/style.scss";

interface BickProps {
    Component: React.ComponentType;
    pageProps: Record<string, unknown>;
}

const Bick: React.FC<BickProps> = ({Component, pageProps}) => {
    return (
        <>
            <Component {...pageProps} />
            <Analytics/>
        </>
    );
};

export default Bick;
