import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const router = useRouter();
  const [isMobile, setIsMobile] = React.useState(true);
  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);
  return (
    <footer className={styles.root} style={{ position: "relative" }}>
      <div className={styles.logoContainer}>
        <Image
          src={require("../public/images/wxwhite.svg")}
          alt="Footer logo"
          className={styles.logo}
        />
      </div>
      {isMobile ? <br /> : null}
      <div className={styles.linksContainer}>
        <h2>Links</h2>
        <div
          style={{ marginTop: "0.5rem", cursor: "pointer" }}
          onClick={() => {
            router.push("/about");
          }}
        >
          Our Team
        </div>
        {/* <div style={{ marginTop: "0.5rem" }}>FAQs</div> */}
        {/* <div style={{ marginTop: "0.5rem" }}>Gallery</div> */}
        <div
          style={{ marginTop: "0.5rem", cursor: "pointer" }}
          onClick={() => {
            router.push("/joinUs");
          }}
        >
          Join Us
        </div>
        <div
          style={{ marginTop: "0.5rem", cursor: "pointer" }}
          onClick={() => {
            router.push("/letsIntegrate");
          }}
        >
          Pricing
        </div>
        {isMobile ? <br /> : null}
      </div>
      {isMobile ? <br /> : null}
      <div className={styles.socialContainer}>
        <h2>Connect with Us</h2>
        <Link
          href="mailto:info@wictronix.com"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Image
            src={require("../public/images/email.png")}
            alt="email"
            style={{
              height: "32px",
              width: "32px",
              cursor: "pointer",
            }}
          />
          <div
            style={{
              marginLeft: "1rem",
              color: "white",
              textDecoration: "none",
              fontSize: "1.2rem",
            }}
          >
            info@wictronix.com
          </div>
        </Link>

        <div
          style={{
            marginBlock: "2rem",
            width: "12rem",
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
          bottom: "2rem",
          left: "0",
          width: "100%",
          color: "white",
          textAlign: "center",
        }}
      >
        <div>
          Copyright © 2022 - <strong>WictroniX</strong>. All rights reserved
          <br />
          <Link style={{ color: "white" }} href="/Privacy-Policy">
            Privacy Policy
          </Link>{" "}
          ||{" "}
          <Link style={{ color: "white" }} href="/Support">
            Support
          </Link>{" "}
          ||{" "}
          <Link style={{ color: "white" }} href="/disclaimer">
            Disclaimer
          </Link>{" "}
          ||{" "}
          <Link style={{ color: "white" }} href="/termsOfUse">
            Terms of Use
          </Link>
          ||{" "}
          <Link style={{ color: "white" }} href="/Cancellation&refund">
            Cancellation-Refund
          </Link>{" "}
        </div>
      </div>
    </footer>
  );
}
