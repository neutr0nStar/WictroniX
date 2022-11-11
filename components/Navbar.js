import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";
import brandImg from "../public/images/wxBlack.svg";
import Link from "next/link";

export default function Navbar({ delay = 0 }) {
  const router = useRouter();

  const [loading, setLoading] = React.useState(true);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(true);

  function handleWindowSizeChange() {
    setIsMobile(window.innerWidth < 768);
  }

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    setTimeout(() => {
      setLoading(false);
    }, delay);

    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${isMenuOpen ? styles.rootExtended : styles.root}`}>
      <div
        className={`${
          isMenuOpen ? styles.containerExtended : styles.container
        }`}
        style={{
          transform: loading ? "translateY(-6rem)" : "translateY(0)",
          transition: "1s ease-out",
        }}
      >
        <div className={styles.mainMenu}>
          <Link href="/">
            <Image src={brandImg} alt="logo" className={styles.brandImg} />
          </Link>

          {!isMobile ? (
            <div className={styles.navLinks} style={{ color: "white" }}>
              <div className={styles.navLink} onClick={() => router.push("/")}>
                Home
              </div>
              <div
                className={styles.navLink}
                onClick={() => router.push("/execution")}
              >
                eXecution
              </div>
              <div
                className={styles.navLink}
                onClick={() => router.push("/about")}
              >
                About
              </div>
              <div
                className={styles.navLink}
                onClick={() => router.push("/contact")}
              >
                Contact
              </div>
              <div
                className={styles.cta}
                onClick={() => router.push("/letsIntegrate")}
              >
                Lets Integrate
              </div>
            </div>
          ) : (
            <div>
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={styles.hamburger}
                  onClick={handleMenuOpen}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className={styles.hamburger}
                  onClick={handleMenuOpen}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </div>
          )}
        </div>
        <div className={styles.moMeCon}>
          <div className={styles.moMeLink} onClick={() => router.push("/")}>
            Home
          </div>
          <div
            className={styles.moMeLink}
            onClick={() => router.push("/execution")}
          >
            eXecution
          </div>
          <div
            className={styles.moMeLink}
            onClick={() => router.push("/about")}
          >
            About
          </div>
          <div
            className={styles.moMeLink}
            onClick={() => router.push("/contact")}
          >
            Contact
          </div>
          <div
            className={styles.cta}
            onClick={() => router.push("/letsIntegrate")}
          >
            Lets Integrate
          </div>
        </div>
      </div>
    </nav>
  );
}
