import styles from "./AppWrapper.module.css";

const AppWrapper = (props) => {
  return <div className={styles["app-wrapper"]}>{props.children}</div>;
};

export default AppWrapper;
