import React, { ReactNode } from "react";
import styles from "./layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className={styles.layout}>
    {children}
  </div>
);

export default Layout;