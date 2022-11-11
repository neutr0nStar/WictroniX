import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/ConnectWithUs.module.css";

export default function ConnectWithUs() {
  const router = useRouter();
  return (
    <div className={styles.root}>
      <div className={styles.title}>Connect With Us</div>
      <p className={styles.content} style={{ textAlign: "center" }}>
        Now let&apos;s join hands to build a better business.
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
  );
}
