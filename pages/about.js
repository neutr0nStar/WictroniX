import Image from "next/image";
import React from "react";
import AnimatedPageTitle from "../components/AnimatedPageTitle";
import Aos from "aos";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/About.module.css";

import wxLogo from "../public/images/wx.svg";
import Head from "next/head";
import TeamCard from "../components/TeamCard";

export default function About() {
  const [loading, setLoading] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(true);
  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    Aos.init();
  }, []);
  return (
    <div className={styles.root} style={{ overflow: loading ? "hidden" : "" }}>
      <Head>
        <title>About - WictroniX</title>
        <meta name="description" content="About WictroniX" />
      </Head>
      <Navbar delay={1000} />
      <AnimatedPageTitle>About</AnimatedPageTitle>
      <div className={styles.rootContainer}>
        <div className={styles.sfsbfb}>
          We are a <span style={{ color: "#FECD05" }}>Startup</span> for{" "}
          <span style={{ color: "#00b9ff" }}>Startups</span>,
          <br />
          and a <span style={{ color: "#FECD05" }}>Business</span> for{" "}
          <span style={{ color: "#00b9ff" }}>Businesses</span>.
        </div>
        <br />
        <br />
        <br />
        <br />
        <div
          style={{
            backgroundColor: "#00b2ff",
            padding: "1rem",
            borderRadius: "1rem",
            color: "white",
          }}
        >
          <div className={styles.title} style={{ color: "black" }}>
            Our WHY
          </div>
          <div
            style={{
              width: "75%",
              marginInline: "auto",
              marginBottom: "3rem",
              lineHeight: "1.6rem",
              fontFamily: "verdana",
              fontSize: "1.2rem",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              textAlign: isMobile ? "center" : "",
            }}
          >
            <Image
              src={require("../public/images/wxBlack.svg")}
              alt="placeholder"
              width={isMobile ? "250" : "300"}
              style={{
                marginRight: "3rem",
                marginBlock: isMobile ? "2rem" : "auto",
              }}
            />
            <div style={{ color: "black" }}>
              There are eccentrics, outcasts, rebels, troublemakers, square pegs
              in round holes, with a different vision, and a burning desire to
              challenge the Status Quo who go for greatness.
              <br />
              <br /> We respect those legends and consider ourselves honored if
              we get an opportunity to be a part of their journey of creating an
              Unparalleled Legacy. These passionate legends motivate us to
              strive for greatness by inspiring us to go beyond our comfort
              zones.
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />

        <div>
          <div className={styles.title} data-aos="zoom-out">
            Our Team
          </div>
          <div className={styles.teamCardContainer}>
            <TeamCard
              imgSrc={require("../public/images/People/CEO.jpeg")}
              name="Mihir Gandhi"
              position="Founder & CEO"
              email="mailto:ceo@wictronix.com"
            />
            <TeamCard
              imgSrc={require("../public/images/People/CMO.jpeg")}
              name="Sunil Kumar Poonia"
              position="Co Founder & CMO"
              email="mailto:cmo@wictronix.com"
            />
            <TeamCard
              imgSrc={require("../public/images/People/CTO.jpeg")}
              name="Sneharsh Belsare"
              position="Chief Technology Officer"
              email="mailto:cto@wictronix.com"
            />
            <TeamCard
              imgSrc={require("../public/images/People/CSO.jpeg")}
              name="Karnik Gandhi"
              position="Chief Strategy Officer"
              email="mailto:cso@wictronix.com"
            />
            <TeamCard
              imgSrc={require("../public/images/People/COO.jpeg")}
              name="Nehal Jhajharia"
              position="Chief Operations Officer"
              email="mailto:coo@wictronix.com"
            />
            <TeamCard
              imgSrc={require("../public/images/People/CFO.jpeg")}
              name="Darshan Upadhyay"
              position="Chief Finance Officer"
              email="mailto:cfo@wictronix.com"
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        {/* <div>
          <div className={styles.title} data-aos="zoom-out">
            Vision
          </div>
          <div
            style={{
              marginTop: "4rem",
              width: "75%",
              marginInline: "auto",
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            ipsam, aperiam quasi perspiciatis distinctio obcaecati accusantium
            debitis, eius, quibusdam libero deleniti sed! Nulla perferendis
            sequi optio autem quae officia, vel eius amet, quidem deleniti,
            numquam voluptate ratione quos doloremque cupiditate. Sint rem
            provident, reprehenderit ut perferendis ipsa saepe qui eligendi!
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div>
          <div className={styles.title} data-aos="zoom-out">
            Mission
          </div>
          <div
            style={{
              marginTop: "4rem",
              width: "75%",
              marginInline: "auto",
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
            ipsam, aperiam quasi perspiciatis distinctio obcaecati accusantium
            debitis, eius, quibusdam libero deleniti sed! Nulla perferendis
            sequi optio autem quae officia, vel eius amet, quidem deleniti,
            numquam voluptate ratione quos doloremque cupiditate. Sint rem
            provident, reprehenderit ut perferendis ipsa saepe qui eligendi!
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
