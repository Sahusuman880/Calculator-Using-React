import styles from "./Display.module.css";
function Display(props) {
  return (
    <input
      type="text"
      name=""
      id={styles.display}
      value={props.displayValue}
      readOnly
    />
  );
}
export default Display;
