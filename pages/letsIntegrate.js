import Image from "next/image";
import React from "react";
import AnimatedPageTitle from "../components/AnimatedPageTitle";
import AOS from "aos";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/LetsIntegrate.module.css";

import { Widget } from "@typeform/embed-react";

import wxLogo from "../public/images/wx.svg";
import Head from "next/head";
import TeamCard from "../components/TeamCard";

export default function Contact() {
  const [loading, setLoading] = React.useState(true);
  const [isMobile, setisMobile] = React.useState(true);

  React.useEffect(() => {
    setisMobile(window.innerWidth < 768);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    AOS.init();
  }, []);
  return (
    <div className={styles.root} style={{ overflow: loading ? "hidden" : "" }}>
      <Head>
        <title>Let&apos;s Integrate - WictroniX</title>
        <meta name="description" content="Let's Integrate WictroniX" />
        <meta
          name="keywords"
          content="Lets integrate, pricing, dreams, dynamic,connect,project, 
          wictronix,WictroniX,infotech,technology,build a website, make a website,simple website, build a website for free,freelancers near mesoftware company
     Web developers near me, Web Development, Content Writing, Graphic Designers, Photo Editing, Business Planning, SEO, WordPress Management, Cloud Management, Logo Designing"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Navbar delay={1000} />
      <AnimatedPageTitle>Let&apos;s Integrate</AnimatedPageTitle>
      <div className={styles.rootContainer}>
        <div className={styles.title}>
          Let&apos;s Integrate to Build Something Great
        </div>
        <div
          style={{
            textAlign: "center",
            width: isMobile ? "100%" : "60%",
            marginInline: "auto",
          }}
        >
          <h2>Pricing</h2>
          We don&apos;t put a price tag on your dreams. We are very dynamic with
          our Pricing Models depending on the conditions of the business like
          idea, business model, liquidity, current growth, future potential,
          etc. To get an accurate pricing quote, please fill the form below.
        </div>
        <br />
        <br />
        <Widget
          id="jtjoevsq"
          style={{
            height: "90vh",
            width: isMobile ? "100%" : "auto",
            // marginLeft: isMobile ? "-3rem" : "0",
          }}
        />
      </div>
      <Footer />
    </div>
  );
}
