import Image from "next/image";
import React from "react";
import styles from "../styles/OurClients.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function OurClients() {
  const [isMobile, setIsMobile] = React.useState(true);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  });

  return (
    <div className={styles.root}>
      <div className={styles.title} data-aos="zoom-out">
        Our Clients
      </div>
      <div className={styles.logoContainer} data-aos="fade-up">
        <Image
          className={styles.logoImage}
          src={require("../public/images/Logos/broad.png")}
          alt="Broad"
        />

        <Image
          className={styles.logoImage}
          src={require("../public/images/Logos/zetquant.png")}
          alt="ZetQuant"
        />
        <Image
          className={styles.logoImage}
          src={require("../public/images/Logos/civifit.png")}
          alt="CiviFit"
        />
      </div>
      <div className={styles.logoContainer} data-aos="fade-up">
        <Image
          className={styles.logoImage}
          src={require("../public/images/Logos/iitian.png")}
          alt="IITian Chaiwala"
        />
        <Image
          className={styles.logoImage}
          src={require("../public/images/Logos/svnit.png")}
          alt="SVNIT"
        />
        <Image
          className={styles.logoImage}
          src={require("../public/images/Logos/mauka.png")}
          alt="Mauka"
        />
      </div>
      {isMobile ? (
        <div className={styles.marqueeContainer}>
          <Carousel autoPlay infiniteLoop interval={2000} showThumbs={false}>
            <Image
              className={styles.logoImage}
              src={require("../public/images/Logos/aaruni.jpg")}
              alt="Aaruni Multispeciality Hospital"
            />
            <Image
              className={styles.logoImage}
              src={require("../public/images/Logos/anyday.jpg")}
              alt="AnyDay Tutors"
            />
            <Image
              className={styles.logoImage}
              style={{ height: "200px", width: "auto" }}
              src={require("../public/images/Logos/KYP.png")}
              alt="kyp"
            />
            <Image
              className={styles.logoImage}
              src={require("../public/images/Logos/lst.png")}
              alt="LST Capital"
            />
            <Image
              className={styles.logoImage}
              style={{ width: "250px", height: "auto" }}
              src={require("../public/images/Logos/adt.png")}
              alt="adt"
            />
            <Image
              className={styles.logoImage}
              style={{ height: "200px", width: "auto" }}
              src={require("../public/images/Logos/rvauto.jpg")}
              alt="RV Auto"
            />
            <Image
              className={styles.logoImage}
              src={require("../public/images/Logos/thewizards.png")}
              alt="The Wizards"
            />
          </Carousel>
        </div>
      ) : (
        <div className={styles.marqueeContainer}>
          <Carousel autoPlay infiniteLoop interval={2000} showThumbs={false}>
            <div style={{ display: "flex" }}>
              <Image
                className={styles.logoImage}
                src={require("../public/images/Logos/aaruni.jpg")}
                alt="Aaruni Multispeciality Hospital"
              />
              <Image
                className={styles.logoImage}
                src={require("../public/images/Logos/anyday.jpg")}
                alt="AnyDay Tutors"
              />
            </div>
            <div style={{ display: "flex" }}>
              <Image
                className={styles.logoImage}
                src={require("../public/images/Logos/KYP.png")}
                alt="kyp"
              />
              <Image
                className={styles.logoImage}
                src={require("../public/images/Logos/lst.png")}
                alt="LST Capital"
              />
            </div>
            <div style={{ display: "flex" }}>
              <Image
                className={styles.logoImage}
                style={{ width: "250px", height: "auto" }}
                src={require("../public/images/Logos/adt.png")}
                alt="adt"
              />
              <Image
                className={styles.logoImage}
                src={require("../public/images/Logos/rvauto.jpg")}
                alt="RV Auto"
              />
              <Image
                className={styles.logoImage}
                src={require("../public/images/Logos/thewizards.png")}
                alt="The Wizards"
              />
            </div>
          </Carousel>
        </div>
      )}
    </div>
  );
}
