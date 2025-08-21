import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
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
              <h3> Full-Stack  Developer</h3>
              <p>
                I'm a Full-Stack developer with experience in building responsive
                and optimized sites.Proficient in Java, JavaScript, React.js, Node.js, Express.js, and MongoDB.
               
            </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>DSA</h3>
              <p>
                Learning DSA in Java 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>TOOLS & Framework</h3>
              <p>
              Familier to tools like Git & Github , JWT ,POSTMAN & Framework like React, tailwind & Bootstrap 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
