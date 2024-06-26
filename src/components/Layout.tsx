import React from "react";
import styles from "./Layout.module.css";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.layout}>{children}</div>;
};
