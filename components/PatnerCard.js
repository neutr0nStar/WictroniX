import Image from "next/image";
// import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/PatnerCard.module.css";

export default function PatnerCard({
  imgSrc,
  name,
  pos,
  des,
  // position,
  // email,
  // linkedin = "https://www.linkedin.com/company/wictronix/",
  // twitter = "https://www.twitter.com/wictronix/",
  // instagram = "https://www.instagram.com/wictronix/",
  cxo = false,
}) {
  const router = useRouter();
  return (
    <div className={styles.root} data-aos="fade-up">
      <Image src={imgSrc} alt="dp" style={{ width: "100%", height: "auto" }} />
      <div
        className={styles.teamPersonInfo}
        style={{
          borderBottom: cxo ? "8px solid #0059FF" : "none",
          borderTop: cxo ? "8px solid #0059ff" : "none",
        }}
      >
        <h3>{name}</h3>
        <h4>{pos}</h4>
        <p>{des}</p>
      </div>
    </div>
  );
}
