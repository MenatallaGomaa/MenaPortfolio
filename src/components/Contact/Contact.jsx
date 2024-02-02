import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/Email.png")} alt="Email icon" />
          <a href="mailto:minafathi98@gmail.com">minafathi98@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/LinkedIn.png")} alt="LinkedIn icon" />
          <a
            href="https://www.linkedin.com/in/menatalla-gomaa-0703mg/
"
          >
            https://www.linkedin.com/in/menatalla-gomaa-0703mg/
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/Github.png")} alt="Github icon" />
          <a
            href="https://github.com/MenatallaGomaa
"
          >
            https://github.com/MenatallaGomaa
          </a>
        </li>
      </ul>
    </footer>
  );
};
