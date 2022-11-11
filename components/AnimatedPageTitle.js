import React from "react";
import styles from "../styles/AnimatedPageTitle.module.css";

export default function AnimatedPageTitle({ children }) {
  const [loading, setLoading] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(true);
  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div
      className={styles.root}
      style={{
        height: loading ? "calc(100vh - 8rem)" : "20rem",
      }}
    >
      <div
        className={styles.title}
        style={{
          fontSize: isMobile
            ? loading
              ? "3rem"
              : "3rem"
            : loading
            ? "8rem"
            : "6rem",
        }}
      >
        {children}
      </div>
    </div>
  );
}
