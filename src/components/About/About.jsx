import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <p>Hi there! 👋🏽 I go by Mena. </p>
              <p>
                Currently, I'm diving into the world of web development with
                Ironhack's awesome Bootcamp. It's more than just coding; I'm on
                a journey to become a Full-Stack Developer and learn the coolest
                tech skills. I'm drawn to web development because I want to be
                part of something always changing and growing – stepping out of
                my comfort zone and exploring a field that's shaping the future.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <p>What motivates me the most?</p>
              <br></br>
              <p>
                {" "}
                It's a combination of enjoying solving challenging problems and
                wanting my code to have a meaningful impact beyond being mere
                lines on a screen. I'm passionate about leveraging my innate
                curiosity and enthusiasm to make a significant mark in the tech
                world.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <p>
                I'm proficient in both German and English, and it has proven
                incredibly beneficial in collaborating with diverse individuals
                from various backgrounds.By contributing my unique perspective,
                I enjoy infusing our projects with a global touch.
              </p>
              <br></br>
              <p>
                My transition from a sales background to web development is
                fueled by a deep-seated desire to align my career with my
                passion for technology, problem-solving, and the dynamic nature
                of the web development landscape. I believe this shift will not
                only challenge and fulfill me but also allow me to contribute
                meaningfully to the innovative and ever-evolving tech industry.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
