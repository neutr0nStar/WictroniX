import React from "react";
import AnimatedPageTitle from "../components/AnimatedPageTitle";
import Aos from "aos";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/About.module.css";

import Head from "next/head";
import TeamCard from "../components/TeamCard";

export default function About() {
  const [loading, setLoading] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(true);
  const [showMore, setShowMore] = React.useState(false);
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
        <meta
          name="keywords"
          content="legacy, legendary, legends,eccentrics, outcasts, rebels, troublemakers, square pegs in round holes, comfort zone, founder of wictronix,ceo of wictronix, ceo, cto,cmo,cfo,coo,cso, mihir gandhi, sneharsh belsare, sunil kumar poonia, karnik gandhi, nehal jhajaharia, darshan upadhyay
          , wictronix,WictroniX,infotech,technology,build a website, make a website,simple website, build a website for free,freelancers near mesoftware company
     Web developers near me, Web Development, Content Writing, Graphic Designers, Photo Editing, Business Planning, SEO, WordPress Management, Cloud Management, Logo Designing"
        />
        <meta name="robots" content="index, follow" />
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
            backgroundColor: "#99e0ff",
            padding: "1rem",
            borderRadius: "1rem",
            color: "white",
          }}
        >
          <div className={styles.title} style={{ color: "black" }}>
            Our Philosophy
          </div>
          <div
            style={{
              width: "75%",
              marginInline: "auto",
              marginBottom: "3rem",
              paddingBottom: "3rem",
              lineHeight: "1.6rem",
              fontFamily: "verdana",
              fontSize: "1.2rem",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              textAlign: isMobile ? "center" : "",
            }}
          >
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
              linkedin="https://www.linkedin.com/in/mihir--gandhi"
              instagram="https://instagram.com/mihir_1407"
              cxo
            />
            <TeamCard
              imgSrc={require("../public/images/People/CMO.jpeg")}
              name="Sunil Kumar Poonia"
              position="Co Founder & CMO"
              email="mailto:cmo@wictronix.com"
              linkedin="https://www.linkedin.com/in/sunil-kumar-poonia"
              twitter="https://twitter.com/SKPoonia_01"
              instagram="https://instagram.com/sunilkumarpoonia_01?igshid=YmMyMTA2M2Y="
              cxo
            />
            <TeamCard
              imgSrc={require("../public/images/People/CTO.jpeg")}
              name="Sneharsh Belsare"
              position="Chief Technology Officer"
              email="mailto:cto@wictronix.com"
              linkedin="https://www.linkedin.com/in/sneharsh-belsare/"
              twitter="https://twitter.com/SneharshB"
              instagram="https://instagram.com/sneharsh_belsare"
              cxo
            />
            <TeamCard
              imgSrc={require("../public/images/People/CSO.jpeg")}
              name="Nehal Jhajharia"
              position="Chief Strategy Officer"
              email="mailto:coo@wictronix.com"
              linkedin="https://www.linkedin.com/in/nehal-jhajharia-494999200/"
              cxo
            />
            <TeamCard
              imgSrc={require("../public/images/People/CFO.jpeg")}
              name="Darshan Upadhyay"
              position="Chief Finance Officer"
              email="mailto:cfo@wictronix.com"
              linkedin="https://www.linkedin.com/in/thedarshanupadhyay"
              instagram="https://instagram.com/upadhyay__darshan"
              cxo
            />
            <TeamCard
              imgSrc={require("../public/images/People/COO.jpeg")}
              name="Karnik Gandhi"
              position="Chief Operating Officer"
              email="mailto:cso@wictronix.com"
              linkedin="https://www.linkedin.com/in/karnik-gandhi-89a832256"
              twitter="https://twitter.com/GandhiKarnik?t=MsXX0ypLlQ7xjIidegP4Iw&s=08"
              instagram="https://instagram.com/karnik_0909?igshid=YmMyMTA2M2Y="
              cxo
            />
            {showMore && (
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                  }}
                >
                  <TeamCard
                    imgSrc={require("../public/images/People/Mohit.jpg")}
                    name="Mohit Doad"
                    position="Design Head"
                    email="mohitdoad1234@gmail.com"
                    linkedin="https://www.linkedin.com/in/mohit-doad-3613431ba"
                    instagram="https://www.instagram.com/mohit_doad/"
                  />
                  <TeamCard
                    imgSrc={require("../public/images/People/Burhanuddin.jpeg")}
                    name="Burhanuddin"
                    position="Internal Operations Head"
                    email="burhansvnit4@gmail.com"
                    linkedin="https://in.linkedin.com/in/burhanuddinlokhandwala04"
                    instagram="https://instagram.com/burhan____04"
                  />
                  <TeamCard
                    imgSrc={require("../public/images/People/Rohan.jpeg")}
                    name="Rohan Verma"
                    position="Research Head"
                    email="r0hnvrm4@gmail.com"
                    linkedin="https://www.linkedin.com/in/rhnvrma/"
                    twitter="https://mobile.twitter.com/Rhnvrma"
                    instagram="https://www.instagram.com/rhnvrma/"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                  }}
                >
                  <TeamCard
                    imgSrc={require("../public/images/People/Ronit.jpeg")}
                    name="Ronit Desai"
                    position="Web Developer"
                    email="ronitdesai67@gmail.com"
                    linkedin="https://www.linkedin.com/in/ronit-desai-49974b19b"
                    twitter="https://twitter.com/RonitDesai7?t=nPX6QfURbkRaiYZtGGpuIw&s=09"
                    instagram="https://www.instagram.com/ronitdesai1212/"
                  />

                  <TeamCard
                    imgSrc={require("../public/images/People/Vats.jpeg")}
                    name="Vats Agarawal"
                    position="Sales Head"
                    email="agarwal.vats001@gmail.com"
                  />
                  <TeamCard
                    imgSrc={require("../public/images/People/Aniket.jpeg")}
                    name="Aniket Rana"
                    position="Tech Lead"
                    email="aniketnareshkumarrana@gmail.com"
                    linkedin="https://www.linkedin.com/in/aniket-rana2934"
                    twitter="https://twitter.com/aniumbott"
                    instagram="https://instagram.com/aniumbott"
                  />
                </div>
              </div>
            )}
            <div
              className={styles.viewMore}
              onClick={() => {
                setShowMore((prev) => !prev);
              }}
            >
              View {showMore ? "less" : "more"}
            </div>
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
