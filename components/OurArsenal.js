import React from "react";
import Image from "next/image";
import styles from "../styles/OurArsenal.module.css";
import verified from "../public/images/verified.svg";
import { useRouter } from "next/router";

export default function OurArsenal() {
  const router = useRouter();

  return (
    <div className={styles.root}>
      <div className={styles.title} data-aos="zoom-out">
        Our Arsenal
      </div>
      <div className={styles.tableContainer} data-aos="flip-up">
        <div className={styles.tableHead}>
          <div>Business Needs</div>
          <div>WictroniX Provides</div>
        </div>
        <div className={styles.tableRow}>
          <div>Innovation & Creativity</div>
          <div>
            <Image src={verified} alt="verified" style={{ height: "20px" }} />
          </div>
        </div>
        <div className={styles.tableRow}>
          <div>Speed & Efficiency</div>
          <div>
            <Image src={verified} alt="verified" style={{ height: "20px" }} />
          </div>
        </div>
        <div className={styles.tableRow}>
          <div>Passionate Team</div>
          <div>
            <Image src={verified} alt="verified" style={{ height: "20px" }} />
          </div>
        </div>
        <div className={styles.tableRow}>
          <div>Great Ideas</div>
          <div>
            <Image src={verified} alt="verified" style={{ height: "20px" }} />
          </div>
        </div>
        <div className={styles.tableRow}>
          <div>Advanced Technology</div>
          <div>
            <Image src={verified} alt="verified" style={{ height: "20px" }} />
          </div>
        </div>
        <div className={styles.tableRow}>
          <div>Out-of-Box Marketing</div>
          <div>
            <Image src={verified} alt="verified" style={{ height: "20px" }} />
          </div>
        </div>
        <div className={styles.tableRow}>
          <div>Efficient Management</div>
          <div>
            <Image src={verified} alt="verified" style={{ height: "20px" }} />
          </div>
        </div>
        <div className={styles.tableRow}>
          <div>Dazzling Content</div>
          <div>
            <Image src={verified} alt="verified" style={{ height: "20px" }} />
          </div>
        </div>
        <div className={styles.tableRow}>
          <div>Excellent Financial Management</div>
          <div>
            <Image src={verified} alt="verified" style={{ height: "20px" }} />
          </div>
        </div>
        <div className={styles.tableRow}>
          <div>Great Graphics</div>
          <div>
            <Image src={verified} alt="verified" style={{ height: "20px" }} />
          </div>
        </div>
      </div>

      <div
        className={styles.moreBtn}
        onClick={() => {
          router.push("/execution");
        }}
      >
        Explore More &nbsp; &rarr;
      </div>
    </div>
  );
}
