import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./Components/display";
import ButtonsContainer from "./Components/ButtonsContainer";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }
function App() {
  let [displayValue, setDisplayValue] = useState("");
  function buttonClick(elements) {
    if (elements != "=" && elements != "C") {
      let newVal = elements;
      let newdisplayValue = displayValue.concat(newVal);
      setDisplayValue(newdisplayValue);
    } else if (elements == "=") {
      let newVal1 = eval(displayValue);
      setDisplayValue(newVal1);
    } else {
      setDisplayValue("");
    }
  }

  return (
    <center>
      <h1>Calculator Uisng React.js</h1>
      <div id="calculator">
        <Display displayValue={displayValue} />
        <ButtonsContainer buttonClick={buttonClick} />
      </div>
    </center>
  );
}

export default App;
