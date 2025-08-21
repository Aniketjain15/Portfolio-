import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aniket Jain</h1>
        <p className={styles.description}>
          I'm a Full-stack developer.Proficient in Java, JavaScript, React.js, Node.js, Express.js, and MongoDB.
           Reach out if you'd like to learn more!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/a1.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />``
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
