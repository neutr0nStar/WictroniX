import Image from "next/image";
import React from "react";
import AnimatedPageTitle from "../components/AnimatedPageTitle";
import Aos from "aos";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Execution.module.css";
import ParallaxSeg from "../components/ParallaxSeg";

import bubbles from "../public/images/bubbles.svg";
import bubblesStatic from "../public/images/bubblesStatic.svg";
import particles from "../public/images/particles.svg";
import particlesStatic from "../public/images/particlesStatic.svg";
import speedline from "../public/images/speedlineDark.svg";
import speedlineStatic from "../public/images/speedlineStatic.svg";

import Head from "next/head";

export default function Execution() {
  const [loading, setLoading] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(true);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    Aos.init();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div
      className={styles.root}
      style={{
        overflow: loading ? "hidden" : "",
      }}
    >
      <Head>
        <title>eXecution - WictroniX</title>
        <meta name="description" content="eXecution WictroniX" />
      </Head>
      <Navbar delay={1000} />
      <AnimatedPageTitle>eXecution</AnimatedPageTitle>
      <div className={styles.rootContainer}>
        <div className={styles.rootTitle}>Where Ideas Meet Execution.</div>
      </div>
      <ParallaxSeg bgImg={isMobile ? bubblesStatic : bubbles}>
        <div className={styles.title}>
          The{" "}
          <span
            style={{ color: "#FECD05", fontSize: isMobile ? "3rem" : "5rem" }}
          >
            X
          </span>
          -Factor
        </div>
        <div className={styles.content}>
          <Image
            src={require("../public/images/x-alphabet.png")}
            width={150}
            alt="xFactor"
          />
          <div>
            Performing routine tasks does not make a business exceptional. They
            must possess a differentiating quality that makes them stand out
            from their rivals. Here at Wictronix, we always concentrate on
            looking for what we refer to as the X-Factor. Additionally, it
            appears right here in our name.
          </div>
        </div>
      </ParallaxSeg>
      <ParallaxSeg bgImg={isMobile ? bubblesStatic : bubbles}>
        <div className={styles.title}>Innovation and Creativity</div>
        <div className={styles.content}>
          <Image
            src={require("../public/images/innovation.png")}
            width={isMobile ? 100 : 200}
            xFactor
            alt="innovation"
          />
          When the winds of change blow, some people build walls and others
          build windmills. Innovation and creativity drives a company from good
          to great and allows them to remain at the top of game. We are aware of
          this and see innovation and creativity as integral components of who
          we are and what we do.
        </div>
      </ParallaxSeg>

      <ParallaxSeg bgImg={isMobile ? speedlineStatic : speedline}>
        <div
          className={styles.title}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div>Speed and Efficiency</div>
        </div>
        <div className={styles.content}>
          <Image
            src={require("../public/images/rocket.svg")}
            alt="rocket"
            style={{
              height: "10rem",
              width: "10rem",
              marginRight: isMobile ? "-1rem" : "1rem",
              marginBottom: "-2rem",
            }}
          />
          <div>
            No company wants to be sluggish in todays quick-paced world. Speed
            and effectiveness are a companys secret weapons for maintaining an
            advantage over rivals. We believe that on the highways to Greatness,
            there are no imposed speed restrictions.
          </div>
        </div>
      </ParallaxSeg>
      <ParallaxSeg bgImg={isMobile ? speedlineStatic : speedline}>
        <div className={styles.title}>Legendary Business Strategies</div>
        <div className={styles.content}>
          <Image
            src={require("../public/images/analysis.png")}
            width={isMobile ? 100 : 200}
            alt="xFactor"
          />
          <div>
            “Tactics without Strategy is the noise before defeat” - Sun Tzu A
            strategy helps companies define their businesses and gives them a
            set of values and a purpose. Great businesses require great
            strategies, and we develop our business plans by drawing inspiration
            from outstanding businesses, people, events, and publications.
          </div>
        </div>
      </ParallaxSeg>

      <ParallaxSeg bgImg={isMobile ? particlesStatic : particles}>
        <div className={styles.title}>
          Integrated e
          <span
            style={{ color: "#FECD05", fontSize: isMobile ? "3rem " : "5rem" }}
          >
            X
          </span>
          ecution
        </div>
        <div className={styles.content}>
          <Image
            src={require("../public/images/integration.png")}
            width={isMobile ? 100 : 200}
            alt="Integration"
          />
          <div>
            There is always friction and inefficiency if different types of
            tasks are assigned to various authorities. However, WictroniX offers
            integrated execution for all of the procedures, making them quick
            and effective. Without causing you any worry, we set up a precise
            and correct framework underneath to enable you to focus on your
            product.
          </div>
        </div>
      </ParallaxSeg>
      <ParallaxSeg bgImg={isMobile ? particlesStatic : particles}>
        <div className={styles.title}>No respect for the Status Quo</div>
        <div className={styles.content}>
          <Image
            src={require("../public/images/growth.png")}
            width={isMobile ? 100 : 200}
            alt="xFactor"
          />
          <div>
            - “Go for Greatness. Everything else is a waste of time.” - Marianne
            Williamson We believe that greatness begins beyond our comfort zone
            and we always strive to do so. We push ourselves, innovate and go
            beyond our limits to achieve something legendary.
          </div>
        </div>
      </ParallaxSeg>
      <Footer />
    </div>
  );
}
