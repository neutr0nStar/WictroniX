import React from "react";
import styles from "../styles/Quotes.module.css";
import TextTransition, { presets } from "react-text-transition";

export default function Quotes() {
  const [idx, setIdx] = React.useState(0);
  const quotes = [
    "We're here to put a dent in the universe. Otherwise why else even be here? - Steve Jobs",
    "The people who are crazy enough to think they can change the world are the ones who actually do. - Steve Jobs",
    "Keep a little fire burning; however small, however hidden. - Corman McCarthy",
    "Go for Greatness. Everything else is a waste of time. - Marianne Williamson",
    "Make a mark on the world that can't be erased. - Maya Angelou",
    "Great spirits have always encountered violent opposition from mediocre minds. - Albert Einstein",
  ];

  React.useEffect(() => {
    const intervalId = setInterval(() => setIdx((idx) => (idx + 1) % 6), 6000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <TextTransition springConfig={presets.molasses}>
          {quotes[idx]}
        </TextTransition>
      </div>
    </div>
  );
}
