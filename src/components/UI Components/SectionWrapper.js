import styles from "./SectionWrapper.module.css";

export default function (props) {
  return <div className={styles["section-wrapper"]}>{props.children}</div>;
}
