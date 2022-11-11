import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const [isMobile, setIsMobile] = React.useState(true);
  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);
  return (
    <footer className={styles.root} style={{ position: "relative" }}>
      <div className={styles.logoContainer}>
        <Image
          src={require("../public/images/wxWhite.svg")}
          alt="Footer logo"
          className={styles.logo}
        />
      </div>
      <div className={styles.linksContainer}>
        <h2>Links</h2>
        <div style={{ marginTop: "0.5rem" }}>Privacy Policy</div>
        <div style={{ marginTop: "0.5rem" }}>Tearms and Conditions</div>
        <div style={{ marginTop: "0.5rem" }}>Gallery</div>
        <div style={{ marginTop: "0.5rem" }}>FAQs</div>
      </div>
      <div className={styles.socialContainer}>
        <h2>Connect with Us</h2>
        <div
          style={{
            marginBlock: "2rem",
            width: isMobile ? "90%" : "60%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link href="https://www.linkedin.com/company/wictronix/">
            <Image
              src={require("../public/images/linkedin.png")}
              alt="LinkedIn"
              style={{ height: "32px", width: "auto", cursor: "pointer" }}
            />
          </Link>
          <Link href="mailto:info@wictronix.com">
            <Image
              src={require("../public/images/email.png")}
              alt="email"
              style={{ height: "32px", width: "auto", cursor: "pointer" }}
            />
          </Link>

          <Link href="https://www.instagram.com/wictronix/">
            <Image
              src={require("../public/images/instagram.png")}
              alt="Instagram"
              style={{ height: "32px", width: "auto", cursor: "pointer" }}
            />
          </Link>
          <Link href="https://twitter.com/WictroniX">
            <Image
              src={require("../public/images/twitter.png")}
              alt="Twitter"
              style={{ height: "32px", width: "auto", cursor: "pointer" }}
            />
          </Link>
          <Link href="https://www.facebook.com/WictroniX">
            <Image
              src={require("../public/images/facebook.png")}
              alt="Facebook"
              style={{ height: "32px", width: "auto", cursor: "pointer" }}
            />
          </Link>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "5px",
          left: "0",
          width: "100%",
          color: "white",
          textAlign: "center",
        }}
      >
        Copyright © 2022 - <strong>WictroniX</strong>. All rights reserved
      </div>
    </footer>
  );
}
