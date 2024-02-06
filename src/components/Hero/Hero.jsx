import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Menatalla Gomaa</h1>
        <p className={styles.description}>
          I'm a FullStack Developer with with a knack for the MERN stack, honed
          through an intensive 9-week bootcamp with Ironhack.{" "}
          <p>Reach out if you'd like to learn more!</p>
        </p>
        <a href="minafathi98@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
