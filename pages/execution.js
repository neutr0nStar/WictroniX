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
import { useRouter } from "next/router";

export default function Execution() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(true);

  const [tabIdx, setTabIdx] = React.useState(1);

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
        <meta
          name="keywords"
          content="ideas meet execution, advanced technology, exceptional marketing, great management, good finance, AI, ML, Web 3, website, web application, mobile app, android, cloud, product market fit, brand development, personal branding, market research, 
          wictronix,WictroniX,infotech,technology,build a website, make a website,simple website, build a website for free,freelancers near mesoftware company
     Web developers near me, Web Development, Content Writing, Graphic Designers, Photo Editing, Business Planning, SEO, WordPress Management, Cloud Management, Logo Designing"
        />
        <meta name="robots" content="index, follow" />
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
        <br />
        <p
          style={{
            maxWidth: isMobile ? "120%" : "1080px",
            marginInline: "auto",
            lineHeight: "1.75rem",
            fontSize: "1.3rem",
            textAlign: "center",
          }}
        >
          Integrate with us and we&apos;ll look after all the components
          pertaining to the creation and growth of a business/startup. We
          integrate all the below components and you&apos;ll have only one-stop
          solution for all these things. You focus on what you&apos;re great at
          i.e. your product and let us provide all the backend support to your
          business venture.
        </p>
        <br />
        <br />
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
            {!isMobile && (
              <div
                className={styles.sbLink}
                style={{
                  backgroundColor: tabIdx === 7 ? "white" : "#0059FF",
                  color: tabIdx === 7 ? "#0059ff" : "white",
                }}
                onClick={() => setTabIdx(7)}
              >
                Miscellaneous Work
              </div>
            )}
          </div>
          <div className={styles.tabContent}>
            <div style={{ display: tabIdx === 1 ? "block" : "none" }}>
              <h2>Advanced Technology</h2>
              <p>
                Advanced Tech is the backbone of any kind of business.
                Technology helps increase the efficiency of systems, products,
                and services. It helps track and streamline processes, maintain
                data flow and manage contacts and employee records. In fact,
                this increased efficiency in operation helps reduce costs as
                well as enable the business to grow rapidly.{" "}
              </p>
              <div>
                WictroniX provides industry-leading advanced cutting-edge
                technology for the efficiency and productivity of business
                operations. Our solutions include:
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                  }}
                >
                  <div>
                    <ul>
                      <li>Artificial Intelligence</li>
                      <li>Data Science</li>
                      <li>Web 3.0 / Blockchain</li>
                      <li>IoT Hardware and Software</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Web Applications</li>
                      <li>Mobile Applications</li>
                      <li>DevOps</li>
                      <li>Cloud computation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: tabIdx === 2 ? "block" : "none" }}>
              <h2>Business Strategy</h2>
              <p>
                Not all businesses get it right straight away. There are natural
                weaknesses within all organizations for various reasons. What a
                business strategy does is try to remedy these weaknesses so that
                companies don&apos;t trip up and suffer their impact too
                greatly. Strategies look at these future risks and help develop
                ways in which they can overcome these obstacles.
              </p>
              <p>
                Strategy is not the same as a plan, it&apos;s much more complex
                than that. WictroniX takes inspiration and knowlegde from great
                companies, leaders, literature and events about the best
                strategies in diffrerent scenarios.{" "}
              </p>
            </div>
            <div style={{ display: tabIdx === 3 ? "block" : "none" }}>
              <h2>Exceptional Marketing</h2>
              <p>
                Marketing has the power to make or break your business. It
                allows you to strategically share your products and services
                with a niche audience. It helps you tell, show, and prove to
                people how terrific your business is and how you can help them.
              </p>
              <div>
                WictroniX thrives to provide creative and unique marketing
                methods and thus helps your brand differentiate from
                competitors. Our marketing includes:
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                  }}
                >
                  <div>
                    <ul>
                      <li>Brand Development</li>
                      <li>Social Media Management</li>
                      <li>Digital Marketing</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Offline Marketing</li>
                      <li>Events & Seminars</li>
                      <li>Public Surveys</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: tabIdx === 4 ? "block" : "none" }}>
              <h2>Great Management</h2>
              <p>
                Nothing is more important than good and efficient management in
                a business. Management turns the unorganized resources of
                people, machines, money, etc. into a useful enterprise. These
                resources are coordinated, directed, and controlled in such a
                way that the enterprise works to achieve its goals.
              </p>
              <div>
                WictroniX will help you manage your business smoothly so that
                the company can be efficient andgrow at its full potential. How
                do we help in management? -
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                  }}
                >
                  <div>
                    <ul>
                      <li>Performance tracking</li>
                      <li>Techniques to improve productivity</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>HR management (Hiring new talent)</li>
                      <li>Employee Training</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: tabIdx === 5 ? "block" : "none" }}>
              <h2>Good Finance</h2>
              <p>
                Money is the elixir of any business. Thus it requires careful
                and judicious management and planning. Financial management
                enables to determine the financial requirement of the business
                and leads to take financial decisions accordingly.
              </p>
              <div>
                We are aware that hiring a professional or experienced financial
                manager is not always feasible during the early phases of a
                startup. As a result, many firms and startups make mistakes in
                their financial planning and encounter cash flow issues.
                WictroniX makes sure that its clients maintain very strong
                financial positions so that they can expand quickly without
                compromising their ability to do so.Our financial management
                includes:
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                  }}
                >
                  <div>
                    <ul>
                      <li>Accounting</li>
                      <li>Taxation and Auditing</li>
                      <li>Funding and Capital</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Cost Optimisation</li>
                      <li>Budgeting</li>
                      <li>Investing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: tabIdx === 6 ? "block" : "none" }}>
              <h2>Dazzling Content</h2>
              <p>
                Great content is an important asset. It has the ability to
                create positive experiences for your potential customers and
                compel them to come back for more. It&apos;s your ticket to
                capturing your audience&apos;s attention and continually
                reinforcing a positive brand impression.
              </p>
              <div>
                WictroniX focuses on creating unique,creative and precise
                content that creates a long lasting impact on the viewer. Our
                content creation includes:
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                  }}
                >
                  <div>
                    <ul>
                      <li>Logos and Designs</li>
                      <li>Posts, Brochures and Posters</li>
                      <li>Articles and Blogs</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>YouTube videos and ads</li>
                      <li>Writeups and Speeches</li>
                      <li>Photo/Video editing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: tabIdx === 7 ? "block" : "none" }}>
              <h2>Miscellanous Work</h2>
              <div>
                Small things create a great difference and many times companies
                just focus on the bigger picture and overlook the small tiny
                details that would matter in a long run. But we make sure that
                that does not happen with our clients. The miscellaneous things
                that we take care of are:
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                  }}
                >
                  <div>
                    <ul>
                      <li>Competitor analysis</li>
                      <li>Market Research</li>
                      <li>Product-Market fit</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Upcoming threats</li>
                      <li>Personal Branding</li>
                      <li>Changing Trends</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div
          className={styles.moreBtn}
          onClick={() => {
            router.push("/letsIntegrate");
          }}
        >
          Let&apos;s Integrate
        </div>
      </div>

      <Footer />
    </div>
  );
}
