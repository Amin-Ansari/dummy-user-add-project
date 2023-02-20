import styles from "./AddUserButton.module.css";

export default function AddUserButton() {
  return (
    <div className={styles[""]}>
      <button className={styles["button-style"]} type={"submit"}>
        Add User
      </button>
    </div>
  );
}
