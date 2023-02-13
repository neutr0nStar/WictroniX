import React from "react";
import AnimatedPageTitle from "../components/AnimatedPageTitle";
import AOS from "aos";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/LetsIntegrate.module.css";

import { Widget } from "@typeform/embed-react";
import Head from "next/head";


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
        <title>Join Us - WictroniX</title>
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
      <AnimatedPageTitle>Join Us</AnimatedPageTitle>
      <div className={styles.rootContainer}>
        <div className={styles.title}>
         Join. Collaborate.Create.
        </div>
        <div
          style={{
            textAlign: "center",
            width: isMobile ? "100%" : "60%",
            marginInline: "auto",
          }}
        >
          <h2>We welcome people with passion.</h2>
          WictroniX always seeks to have the best people in the team. We look for passion,grit and hardwork in our teammates.
          Get access to talented people, amazing work culture and great network. Be a part of some of the most exciting and revolutionary flagships projects of WictroniX.
          <br></br><br /><h3><b>Fill out the form below to be a part of an unparallaled legacy.</b></h3>
        </div>
        <br />
        <br />
        <Widget
          id="kN71lCt8"
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
