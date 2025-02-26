import React, {ReactNode} from "react";
import styles from "@/styles/components/layout.module.scss";

interface LayoutProps {
    children: ReactNode;
    type?: string;
}

const Layout = ({children, type}: LayoutProps) => {
    const layoutClass = type === "home" ? `${styles.layout} ${styles.home}` : styles.layout;

    return (
        <div className={layoutClass}>
            {/*<div className="fixed top-0 right-0 m-4 p-8 border border-gray-600 rounded-2xl">*/}
            {/*    Alert*/}
            {/*</div>*/}
            {children}
        </div>
    );
};
export default Layout;