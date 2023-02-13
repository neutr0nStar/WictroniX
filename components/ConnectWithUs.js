import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/ConnectWithUs.module.css";

export default function ConnectWithUs() {
  const router = useRouter();
  return (
    <div className={styles.root}>
      <div className={styles.title}>Connect With Us</div>
      <div className={styles.container}>
        <div style={{ flex: "1" }}>
          <p className={styles.content} style={{ textAlign: "center" }}>
            Let&apos;s join hands to build a great business !
          </p>
          <div
            className={styles.moreBtn}
            onClick={() => {
              router.push("/letsIntegrate");
            }}
          >
            Let&apos;s Integrate
          </div>
        </div>
        <div style={{ flex: "1" }}>
          <p className={styles.content} style={{ textAlign: "center" }}>
            Be a part of this great journey !
          </p>
          <div
            className={styles.moreBtn}
            onClick={() => {
              router.push("/joinUs");
            }}
          >
            Join us
          </div>
        </div>
      </div>
    </div>
  );
}
