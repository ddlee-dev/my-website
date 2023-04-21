import Link from "next/link";
import Badge from "@/client/components/Badge/Badge";
import styles from "./BackContent.module.css";

const BackContent = () => {
  return (
    <div className={styles["card-container-back"]}>
      {/*   */}
      <h2 id="work-history">WORK EXPERIENCE</h2>
      <ul className={styles["list-container"]} aria-labelledby="work-history">
        <li>
          <Badge icon="apple_logo.png">Apple</Badge>
        </li>
        <li>
          <Badge icon="phillips_logo.png">Phillips</Badge>
        </li>
        <li>
          <Badge icon="mmlearning_logo.png">MacMillan</Badge>
        </li>
        <li>
          <Badge icon="kaplan_logo.png">Kaplan</Badge>
        </li>
      </ul>

      <h2 id="skills-list">THINGS I KNOW</h2>
      <ul className={styles["list-container"]} aria-labelledby="skills-list">
        <li>
          <Badge>HTML5</Badge>
        </li>
        <li>
          <Badge>CSS3</Badge>
        </li>
        <li>
          <Badge>JavaScript</Badge>
        </li>
        <li>
          <Badge>TypeScript</Badge>
        </li>
        <li>
          <Badge>React</Badge>
        </li>
        <li>
          <Badge>Node.js</Badge>
        </li>
        <li>
          <Badge>Electron.js</Badge>
        </li>
        <li>
          <Badge>WCAG</Badge>
        </li>
        <li>
          <Badge>UX/UI</Badge>
        </li>
      </ul>
      <h2 id="contact-list">EXTRAS</h2>
      <ul
        className={styles["list-container-full"]}
        aria-labelledby="contact-list"
      >
        <li>
          <Link
            className={styles["icon-link"]}
            href="https://www.linkedin.com/in/entropicthinker/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#01649b",
              boxShadow: "0px 0px 3px #ffffff, -0px -0px 4px #005685",
            }}
          >
            Visit My LinkedIn
          </Link>
        </li>
        <li>
          <Link
            className={styles["icon-link"]}
            href="https://github.com/inquisitive-entropy"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#2c2c2c",
              boxShadow: "0px 0px 3px #ffffff, -0px -0px 4px #2c2c2c",
            }}
          >
            Browse My Github
          </Link>
        </li>
        <li>
          <Link
            className={styles["icon-link"]}
            href="mailto:entropic.thinker@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#4B8500",
              boxShadow: "0px 0px 3px #ffffff, -0px -0px 4px #4B8500",
            }}
          >
            Send Me An Email
          </Link>
        </li>
        <li>
          <Link
            className={styles["icon-link"]}
            href="/david_lee_resume_2023.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="david_lee_resume_2023.pdf"
            style={{
              background: "#D60557",
              boxShadow: "0px 0px 3px #ffffff, -0px -0px 4px #ff3370",
            }}
          >
            Download My Resume
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BackContent;
