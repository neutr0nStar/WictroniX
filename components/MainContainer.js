import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import styles from "../styles/MainContainer.module.css";
import Quotes from "./Quotes";

export default function MainContainer() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4500);
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
              words={["You + Your Idea + WictroniX = Great Business!"]}
              loop={0}
              typeSpeed={30}
              deleteSpeed={7}
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
        <section className={styles.contentSection}>
          <div className={styles.title}>What do we do ?</div>
          <p className={styles.whatwedo}>
            <ul>
              <li>WictroniX offers a comprehensive & integrated end-to-end solution
            needed to launch and grow a startup or business. </li>
            <li>Making a quality product is one thing; building, expanding, and maintaining a
            business that revolves around that product is quite another.
            WictroniX makes sure that you concentrate on your product, which is
            what you are best at, and that we will take care of all the other
            business-related elements.</li>
            <li>WictroniX helps a startup or business in all aspects such as Product Development, Tech, Marketing, Management, Market research, HR, Finance, Compliance, Business strategy, raising funds, networking, etc.</li>
            <li>You = Focus on your Product.<br></br>WictroniX = Looks after all other elements (just like a co-founder).</li>
            <li>We aim to solve the burning hair problems of courageous and innovative entrepreneurs so that they can create value in society and achieve their dreams.</li>
            </ul> 
          </p>
          <p style={{ lineHeight: "1.75rem", fontSize: "1.1rem",textAlign:"justify" }}>
           We will give you a solid and effective
            execution as the backbone of your startup.In order to begin your journey from good to great, integrate with
            WictroniX. Let us demonstrate how we may assist:
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              src={require("../public/images/down.gif")}
              alt="down"
              width={100}
            />
          </div>
        </section>
      </div>
      <br />
    </div>
  );
}
