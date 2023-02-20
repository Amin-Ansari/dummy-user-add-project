import styles from "./SectionWrapper.module.css";

export default function (props) {
  return (
    <div
      className={styles["section-wrapper"]}
      style={{
        display: props.children.props.children.length ? "block" : "none",
      }}
    >
      {props.children}
    </div>
  );
}
