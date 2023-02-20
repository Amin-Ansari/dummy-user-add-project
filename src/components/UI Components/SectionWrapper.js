import styles from "./SectionWrapper.module.css";

export default function (props) {
  const ifEmptyList = function () {
    if (typeof props.children.props.children.length == "number") {
      if (props.children.props.children.length) {
        return "block";
      } else {
        return "none";
      }
    } else {
      return "block";
    }
  };

  return (
    <div
      className={styles["section-wrapper"]}
      style={{
        display: ifEmptyList(),
      }}
    >
      {props.children}
    </div>
  );
}
