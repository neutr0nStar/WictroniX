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
                Let&apos;s Integrate{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{
                    color: "yellow",
                    height: "20px",
                    marginLeft: "0.5rem",
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
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
            Let&apos;s Integrate{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{
                color: "yellow",
                height: "20px",
                marginLeft: "0.5rem",
              }}
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}
