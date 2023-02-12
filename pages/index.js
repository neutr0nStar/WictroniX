import Head from "next/head";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Intro from "../components/Intro";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import OurArsenal from "../components/OurArsenal";
import OurClients from "../components/OurClients";
import ParallaxSeg from "../components/ParallaxSeg";
import styles from "../styles/Home.module.css";
import ConnectWithUs from "../components/ConnectWithUs";
import Footer from "../components/Footer";

import bubbles from "../public/images/bubbles.svg";
import bubblesStatic from "../public/images/bubblesStatic.svg";
import particles from "../public/images/particles.svg";
import particlesStatic from "../public/images/particlesStatic.svg";
import speedline from "../public/images/speedlineDark.svg";
import speedlineStatic from "../public/images/speedlineStatic.svg";
import Image from "next/image";

export default function Home() {
  const [isMobile, setIsMobile] = React.useState(true);
  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    AOS.init({
      duration: 500,
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={styles.root}
      style={{ backgroundSize: isMobile ? "cover" : "" }}
    >
      <Head>
        <title>WictroniX - Integration Is Incredible</title>
        <meta name="title" content="WictroniX - Integration Is Incredible" />
        <meta
          name="description"
          content="We provide end-to-end integrated execution to startups and businesses and help them become a great company from a good one."
        />
        <meta
          name="keywords"
          content="wictronix,WictroniX,infotech,technology,build a website, make a website,simple website, build a website for free,freelancers near mesoftware company
          Web developers near me, Web Development, Content Writing, Graphic Designers, Photo Editing, Business Planning, SEO, WordPress Management, Cloud Management, Logo Designing, 
          integration is incredible,integration,integrated end-to-end, execution, x factor, innovation, creativity, speed, efficiency, strategy, business, startup, company, growth, marketing, finance, website, team, co-founder, management, connect"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="wictronix" />
        <meta
          property="og:title"
          content="WictroniX - Integration is Incredible"
        />
        <meta property="og:type" content="image" />
        <meta property="og:url" content="https://www.wictronix.com/" />
        <meta
          property="og:image"
          content="https://www.wictronix.com/favicon.ico"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar delay={4500} />
      <Intro />
      <MainContainer />
      <Image
        src={require("../public/favicon.ico")}
        alt="wictronix"
        style={{ display: "none" }}
      />
      {/* Magical segment */}
      <div className={styles.magical}>
        <div data-aos="fade-down">Our Magical Spells</div>
      </div>

      <ParallaxSeg bgImg={isMobile ? particlesStatic : particles}>
        <div className={styles.title}>
          The{" "}
          <span
            style={{ color: "#FECD05", fontSize: isMobile ? "2rem" : "5rem" }}
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
            style={{
              margin: isMobile ? "auto auto 2rem auto" : "auto 4rem auto auto",
            }}
          />
          <div>
            Performing routine tasks does not make a business exceptional. You
            must possess a differentiating quality that makes you stand out from
            your rivals. Here at Wictronix, we always concentrate on looking for
            what we refer to as the X-Factor. Additionally, it appears right
            here in our name.
          </div>
        </div>
      </ParallaxSeg>
      <ParallaxSeg bgImg={isMobile ? particlesStatic : particles}>
        <div className={styles.title}>Innovation and Creativity</div>
        <div className={styles.content}>
          <Image
            src={require("../public/images/innovation.png")}
            width={150}
            alt="innovation"
            style={{
              margin: isMobile ? "auto auto 2rem auto" : "auto 4rem auto auto",
            }}
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
            width={150}
            alt="xFactor"
            style={{
              margin: isMobile ? "auto auto 2rem auto" : "auto 4rem auto auto",
            }}
          />
          <div>
            “Tactics without Strategy is the noise before defeat” - Sun Tzu. A
            strategy helps companies define their businesses and gives them a
            set of values and a purpose. Great businesses require great
            strategies, and we develop our business plans by drawing inspiration
            from outstanding businesses, people, events, and publications.
          </div>
        </div>
      </ParallaxSeg>
      <ParallaxSeg bgImg={isMobile ? bubblesStatic : bubbles}>
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
            src={require("../public/images/integration1.png")}
            width={200}
            alt="Integration"
            style={{
              margin: isMobile ? "auto auto 2rem auto" : "auto 1rem auto auto",
            }}
          />
          <div>
            There is always friction and inefficiency if different types of
            tasks are assigned to various authorities.Without any hassle, we set up a precise
            and correct framework underneath to enable you to focus on your
            product.
          </div>
        </div>
      </ParallaxSeg>
      <ParallaxSeg
        bgImg={isMobile ? bubblesStatic : bubbles}
        style={{ marginBottom: isMobile ? "auto auto 2rem auto" : "4rem" }}
      >
        <div className={styles.title}>No respect for the Status Quo</div>
        <div className={styles.content}>
          <Image
            src={require("../public/images/growth.png")}
            width={200}
            alt="growth"
          />
          <div>
            - “Go for Greatness. Everything else is a waste of time.” - Marianne
            Williamson. We believe that greatness begins beyond our comfort zone
            and we always strive to do so. We push ourselves, innovate and go
            beyond our limits to achieve something legendary.
          </div>
        </div>
      </ParallaxSeg>

      {isMobile || (
        <div>
          <br></br>
        </div>
      )}

      <OurArsenal />

      <div><section style={{backgroundColor:"white",width:"100%",padding:"2rem"}}>
          <div className={styles.title1}>Why WictroniX?</div>
          <p className={styles.whatwedo}>
            <ul>
            <li>Flexible and dynamic Pricing acoording to the situation and needs of the startup/business.</li>
            <li>Get access to the fastest growing network of startups,entrepreneurs, businesses, investors and industry experts. </li>
            <li>We offer all the execution integrated under one roof. Grow your startup easily as you get everything at one place with fast and efficient working.</li>
            <li>Collaborate with other startups,businesses,programs, experts and mentors. Find and connect with investors easily.</li>
            <li>You can be collaborate and work with us on WictroniX's revolutionary flagship projects which involves technologies like AI/Ml, Web 3.0, IoT, Cybersecurity, Big Data etc. </li>
            </ul> 
          </p>
      </section></div>
      
      <OurClients />
      <ConnectWithUs />
     
      <Footer />
    </div>
  );
}
