import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/TeamCard.module.css";

export default function TeamCard({
  imgSrc,
  name,
  position,
  email,
  linkedin = "https://www.linkedin.com/company/wictronix/",
  twitter = "https://www.twitter.com/wictronix/",
  instagram = "https://www.instagram.com/wictronix/",
}) {
  const router = useRouter();
  return (
    <div className={styles.root} data-aos="fade-up">
      <Image src={imgSrc} alt="dp" style={{ width: "100%", height: "auto" }} />
      <div className={styles.teamPersonInfo}>
        <h2>{name}</h2>
        <div className={styles.designation}>{position}</div>
        <div className={styles.socials}>
          <Link href={email}>
            <Image
              src={require("../public/images/email.png")}
              alt="email"
              style={{ height: "25px", width: "25px" }}
            />
          </Link>
          <Link href={linkedin}>
            <Image
              src={require("../public/images/linkedin.png")}
              alt="linkedin"
              style={{ height: "25px", width: "25px" }}
            />
          </Link>
          <Link href={twitter}>
            <Image
              src={require("../public/images/twitter.png")}
              alt="twitter"
              style={{ height: "25px", width: "25px" }}
            />
          </Link>
          <Link href={instagram}>
            <Image
              src={require("../public/images/instagram.png")}
              alt="instagram"
              style={{ height: "25px", width: "25px" }}
            />
          </Link>
        </div>
        <div className={styles.desc}>
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, dolor. */}
        </div>
      </div>
    </div>
  );
}
