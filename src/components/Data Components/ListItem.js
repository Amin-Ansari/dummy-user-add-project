import styles from "./ListItem.module.css";

export default function ListItem(props) {
  const listContext = `${props.userName} (${props.userAge} Years old)`;
  return <li className={styles["li-style"]}>{listContext}</li>;
}
