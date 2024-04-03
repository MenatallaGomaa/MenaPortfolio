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
          <a href="mailto:minafathi98@gmail.com">
            <img src={getImageUrl("contact/Email.png")} alt="Email icon" />
          </a>
          <a href="mailto:minafathi98@gmail.com"></a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/menatalla-gomaa-0703mg/">
            <img
              src={getImageUrl("contact/LinkedIn.png")}
              alt="LinkedIn icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/menatalla-gomaa-0703mg/"></a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/MenatallaGomaa">
            <img src={getImageUrl("contact/Github.png")} alt="Github icon" />
          </a>
          <a href="https://github.com/MenatallaGomaa"></a>
        </li>
      </ul>
    </footer>
  );
};
