import Image from "next/image";
import React from "react";
import AnimatedPageTitle from "../components/AnimatedPageTitle";
import AOS from "aos";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Contact.module.css";
import { Widget } from "@typeform/embed-react";

import wxLogo from "../public/images/wx.svg";
import Head from "next/head";
import TeamCard from "../components/TeamCard";
import Link from "next/link";

export default function Contact() {
  const [isMobile, setIsMobile] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    AOS.init();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div
      className={styles.root}
      style={{ overflow: isLoading ? "hidden" : "" }}
    >
      <Head>
        <title>Support - WictroniX</title>
        <meta name="description" content="Contact WictroniX" />
        <meta
          name="keywords"
          content="wictronix,WictroniX,infotech,technology,build a website, make a website,simple website, build a website for free,freelancers near mesoftware company
     Web developers near me, Web Development, Content Writing, Graphic Designers, Photo Editing, Business Planning, SEO, WordPress Management, Cloud Management, Logo Designing"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Navbar delay={1000} />
      <AnimatedPageTitle>Support</AnimatedPageTitle>
      <div className={styles.rootContainer}>
        <div className={styles.title}>
          <span style={{ color: "#FECD05" }}>Connect.</span> Construct.{" "}
          <span style={{ color: "#0059ff" }}>Conquer.</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: !isMobile ? "row" : "column",
          }}
        >
          <div className={styles.contactForm}>
            <form
              action=""
              style={{
                display: "flex",
                flexDirection: "column",
                width: isMobile ? "90%" : "70%",
                marginBlock: "2rem",
                marginInline: "auto",
              }}
            >
              <label
                htmlFor="name"
                style={{ margin: "auto auto 0.5rem 0.25rem" }}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className={styles.inpEle}
              />
              <br />
              <br />
              <label
                htmlFor="email"
                style={{ margin: "auto auto 0.5rem 0.25rem" }}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className={styles.inpEle}
              />
              <br />
              <br />
              <label
                htmlFor="message"
                style={{ margin: "auto auto 0.5rem 0.25rem" }}
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                cols="30"
                rows="10"
                className={styles.inpEle}
              ></textarea>
              <br />
              <br />
              <button type="submit" className={styles.sub}>
                Submit
              </button>
            </form>
          </div>
          <div className={styles.contactDetails}>
            <h1>Connect with Us</h1>
            <div>
              <h5>Email</h5>
              <Link
                className={styles.contactLink}
                href="mailto:info@wictronix.com"
              >
                <Image
                  src={require("../public/images/email.png")}
                  height={20}
                  style={{ marginRight: "0.5rem" }}
                  alt="email"
                />
                info@wictronix.com
              </Link>
            </div>
            <div>
              <h5>LinkedIn</h5>
              <Link
                className={styles.contactLink}
                height={20}
                style={{ marginRight: "0.5rem" }}
                href="https://www.linkedin.com/company/wictronix/"
              >
                <Image
                  src={require("../public/images/linkedin.png")}
                  height={20}
                  style={{ marginRight: "0.5rem" }}
                  alt="linkedin"
                />
                WictroniX
              </Link>
            </div>
            <div>
              <h5>Instagram</h5>
              <Link
                className={styles.contactLink}
                height={20}
                style={{ marginRight: "0.5rem" }}
                href="https://www.instagram.com/wictronix/"
              >
                <Image
                  src={require("../public/images/instagram.png")}
                  height={20}
                  style={{ marginRight: "0.5rem" }}
                  alt="instagram"
                />
                WictroniX
              </Link>
            </div>
            <div>
              <h5>Contact</h5>
              <Link
                className={styles.contactLink}
                height={20}
                style={{ marginRight: "0.5rem" }}
                href="https://twitter.com/WictroniX"
              >
                <Image
                  src={require("../public/images/phone.png")}
                  height={20}
                  style={{ marginRight: "0.5rem" }}
                  alt="twitter"
                />
                +91 9574663353
              </Link>
            </div>
            
            <div>
              <h5>Address</h5>
              <Link
                className={styles.contactLink}
                height={20}
                style={{ marginRight: "0.5rem" }}
                href="https://www.google.com/maps/place/WictroniX/@22.2850813,73.202197,14z/data=!4m6!3m5!1s0x395fc55c70ce64ef:0xa1911c12a3084a52!8m2!3d22.2876624!4d73.2049865!16s%2Fg%2F11tn7029dm?entry=ttu"
              >
                <Image
                  src={require("../public/images/pin-point.png")}
                  height={20}
                  style={{ marginRight: "0.5rem" }}
                  alt="facebook"
                />
                5,Maharshi Arvind Society, beside Khanderao Mandir R.V Desai Road, Navapura,Vadodara, 390001
              </Link>
              
            </div>
          </div>
        </div>
        {/* 
        <div className={styles.title}>Join Us</div>
        <Widget id="kN71lCt8" style={{ width: "90vw", height: "50vh" }} /> */}
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}