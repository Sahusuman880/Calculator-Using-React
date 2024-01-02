import styles from "./ButtonsContainer.module.css";
function ButtonsContainer(props) {
  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div id={styles.buttonContainer}>
      {buttonName.map((elements) => {
        return (
          <button
            key={elements}
            className={styles.button}
            onClick={() => props.buttonClick(elements)}
          >
            {elements}
          </button>
        );
      })}
    </div>
  );
}
export default ButtonsContainer;
