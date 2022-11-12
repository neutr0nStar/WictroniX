import React from "react";
import { Typewriter } from "react-simple-typewriter";
import styles from "../styles/MainContainer.module.css";
import Quotes from "./Quotes";

export default function MainContainer() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 7500);
  }, []);
  return (
    <div
      className={styles.root}
      style={{
        transform: loading ? "translateY(12rem)" : "translateY(0)",
        transition: "1s ease-out",
      }}
    >
      <div className={styles.container}>
        <div className={styles.tagLine}>Integration Is Incredible</div>
        <br />
        <br />

        {/* <section className={styles.contentSection}>What we do/provide</section> */}
        <br />
        <br />
        <section className={styles.contentSection}>
          <div className={styles.typewriter} data-aos="fade-down">
            <Typewriter
              words={["You + Your Idea + WictroniX = Successful Business !"]}
              loop={0}
              // cursor
              typeSpeed={80}
              deleteSpeed={25}
              // delaySpeed={1000}
              // onLoopDone={handleDone}
              // onType={handleType}
            />
          </div>
        </section>
        <br />
        <br />
        <section className={styles.contentSection}>
          {/* <div className={styles.quote} data-aos="zoom-in-up">
            “The people who are crazy enough to think they can change the world
            are the ones who actually do.” - Steve Jobs
          </div> */}
          <Quotes />
        </section>
      </div>
      <br />
    </div>
  );
}
