import { useEffect, useState } from "react";
import styles from "./FrontContent.module.css";

const FrontContent = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
  }, []);

  return (
    <div className={styles["card-container-front"]}>
      <h2 className="visually-hidden">Hello World</h2>
      <p className="visually-hidden">I&apos;m David Lee</p>
      <p className="visually-hidden">
        A former teacher turned Web Developer, who enjoys craft accessible,
        user-focused magic.
      </p>
      <div aria-hidden="true">
        <h2 className={styles["greetings"]}>
          <span className={styles["greetings-1"]}>H</span>
          <span className={styles["greetings-1"]}>e</span>
          <span className={styles["greetings-1"]}>l</span>
          <span className={styles["greetings-1"]}>l</span>
          <span className={styles["greetings-1"]}>o&nbsp;</span>
          <span className={styles["greetings-1"]}>W</span>
          <span className={styles["greetings-1"]}>o</span>
          <span className={styles["greetings-1"]}>r</span>
          <span className={styles["greetings-1"]}>l</span>
          <span className={styles["greetings-1"]}>d</span>
        </h2>
        <p className={styles["my-name"]}>
          <span className={styles["my-name-1"]}>I</span>
          <span className={styles["my-name-1"]}>&apos;</span>
          <span className={styles["my-name-1"]}>m</span>
          &nbsp;
          <span className={styles["my-name-1"]}>D</span>
          <span className={styles["my-name-1"]}>a</span>
          <span className={styles["my-name-1"]}>v</span>
          <span className={styles["my-name-1"]}>i</span>
          <span className={styles["my-name-1"]}>d</span>
          &nbsp;
          <span className={styles["my-name-1"]}>L</span>
          <span className={styles["my-name-1"]}>e</span>
          <span className={styles["my-name-1"]}>e</span>
        </p>
        <p className={styles["my-description"]}>
          <span aria-hidden="true">
            <span className={styles["my-description-1"]}>A</span>
            &nbsp;
            <span className={styles["my-description-1"]}>former</span>
            &nbsp;
            <span className={styles["my-description-1"]}>teacher</span>
            &nbsp;
            <span className={styles["my-description-1"]}>turned</span>
            &nbsp;
            <span className={styles["my-description-1"]}>Web</span>
            &nbsp;
            <span className={styles["my-description-1"]}>Developer</span>
            &nbsp;
            <span className={styles["my-description-1"]}>,</span>
            &nbsp;
            <span className={styles["my-description-1"]}>who</span>
            &nbsp;
            <span className={styles["my-description-1"]}>enjoys</span>
            &nbsp;
            <span className={styles["my-description-1"]}>crafting</span>
            &nbsp;
            <span className={styles["my-description-1"]}>accessible</span>
            &nbsp;
            <span className={styles["my-description-1"]}>,</span>
            &nbsp;
            <span className={styles["my-description-1"]}>user-focused</span>
            &nbsp;
            <span className={styles["my-description-1"]}>magic</span>
            <span className={styles["my-description-1"]}>.</span>
          </span>
        </p>
      </div>
      <div className={styles["img-container"]}>
        <p className="visually-hidden">
          Below the introduction text, there is an animated cartoon image of
          David Lee waving his hand.
        </p>
        <img
          className={`${styles["avatar"]} ${styles["avatar-eyes"]}`}
          src="/avatar_eyes.png"
          aria-hidden="true"
        />
        <img
          className={`${
            !isLoaded
              ? styles["avatar"]
              : `${styles["avatar"]} ${styles["avatar-blink"]}`
          }`}
          src="/avatar_blink.png"
          aria-hidden="true"
        />
        <img
          className={styles["avatar"]}
          src="/avatar_body.png"
          aria-hidden="true"
        />
        <img
          className={`${
            !isLoaded
              ? styles["avatar"]
              : `${styles["avatar"]} ${styles["avatar-arm"]}`
          }`}
          src="/avatar_arm.png"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default FrontContent;
