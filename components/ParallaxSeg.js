import React from "react";
import styles from "../styles/ParallaxSeg.module.css";

export default function ParallaxSeg({ title, children, bgImg }) {
  return (
    <div
      className={styles.root}
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <div className={styles.title} data-aos="fade-down">
            {title}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
