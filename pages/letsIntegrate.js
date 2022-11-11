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

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    AOS.init();
  }, []);
  return (
    <div className={styles.root} style={{ overflow: loading ? "hidden" : "" }}>
      <Head>
        <title>Lets Integrate - WictroniX</title>
        <meta name="description" content="Let's Integrate WictroniX" />
      </Head>
      <Navbar delay={1000} />
      <AnimatedPageTitle>Lets Integrate</AnimatedPageTitle>
      <div className={styles.rootContainer}>
        <div className={styles.title}>
          Lets Integrate to Build Something Great
        </div>
        <Widget id="jtjoevsq" style={{ height: "90vh" }} />
      </div>
      <Footer />
    </div>
  );
}
