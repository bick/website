import React, { ReactNode } from "react";
import styles from "@/styles/components/layout.module.scss";

interface LayoutProps {
  children: ReactNode;
  type?: string;
}

const Layout = ({ children, type }: LayoutProps) => {
  const layoutClass = type === "home" ? `${styles.layout} ${styles.home}` : styles.layout;

  return (
  <div className={layoutClass}>
    {children}
  </div>
  );
};
export default Layout;