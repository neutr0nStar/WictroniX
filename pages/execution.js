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

  const [tabIdx, setTabIdx] = React.useState(1);

  const content = [
    {
      title: "Advanced Technology",
      body: "Stay tuned. Coming soon.",
    },
    {
      title: "Business Strategy",
      body: "Stay tuned. Coming soon.",
    },
    {
      title: "Exceptional Marketing",
      body: "Stay tuned. Coming soon.",
    },
    {
      title: "Great Management",
      body: "Stay tuned. Coming soon.",
    },
    {
      title: "Good Finance",
      body: "Stay tuned. Coming soon.",
    },
    {
      title: "Dazzling Contact",
      body: "Stay tuned. Coming soon.",
    },
  ];

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
      <AnimatedPageTitle>
        e<span styles={{ color: "yellow" }}>X</span>ecution
      </AnimatedPageTitle>
      <div className={styles.rootContainer}>
        <div className={styles.rootTitle}>
          Where <span style={{ color: "#FECD05" }}>Ideas</span> Meet{" "}
          <span style={{ color: "#00B9ff" }}>Execution</span>.
        </div>
        <div className={styles.tabContainer}>
          <div className={styles.sidebar}>
            <div
              className={styles.sbLink}
              style={{
                backgroundColor: tabIdx === 1 ? "white" : "#0059FF",
                color: tabIdx === 1 ? "#0059ff" : "white",
              }}
              onClick={() => setTabIdx(1)}
            >
              Advanced Technology
            </div>
            <div
              className={styles.sbLink}
              style={{
                backgroundColor: tabIdx === 2 ? "white" : "#0059FF",
                color: tabIdx === 2 ? "#0059ff" : "white",
              }}
              onClick={() => setTabIdx(2)}
            >
              Business Strategy
            </div>
            <div
              className={styles.sbLink}
              style={{
                backgroundColor: tabIdx === 3 ? "white" : "#0059FF",
                color: tabIdx === 3 ? "#0059ff" : "white",
              }}
              onClick={() => setTabIdx(3)}
            >
              Exceptional Marketing
            </div>
            <div
              className={styles.sbLink}
              style={{
                backgroundColor: tabIdx === 4 ? "white" : "#0059FF",
                color: tabIdx === 4 ? "#0059ff" : "white",
              }}
              onClick={() => setTabIdx(4)}
            >
              Great Management
            </div>
            <div
              className={styles.sbLink}
              style={{
                backgroundColor: tabIdx === 5 ? "white" : "#0059FF",
                color: tabIdx === 5 ? "#0059ff" : "white",
              }}
              onClick={() => setTabIdx(5)}
            >
              Good Finance
            </div>
            <div
              className={styles.sbLink}
              style={{
                backgroundColor: tabIdx === 6 ? "white" : "#0059FF",
                color: tabIdx === 6 ? "#0059ff" : "white",
              }}
              onClick={() => setTabIdx(6)}
            >
              Dazzling Content
            </div>
          </div>
          <div className={styles.tabContent}>
            <h1>{content[tabIdx - 1].title}</h1>
            <p>{content[tabIdx - 1].body}</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
