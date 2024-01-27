import { useEffect, useState } from "react";
import { numberKeys, operationKeys, equalsKey } from "./keyData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/App.scss";

type KeyType = "operation" | "number";

function App() {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [currentCalc, setCurrentCalc] = useState<string[]>([]);

  useEffect(() => {
    console.log("new calc", currentCalc);
  });

  function clearValue() {
    setDisplayValue("0");
    setCurrentCalc([]);
  }

  function addToCalc(keyValue: string, keyType: KeyType) {
    console.log("key clicked", keyValue, keyType);

    if (currentCalc.length === 0 && keyType === "number") {
      setCurrentCalc([...currentCalc, keyValue]);
      setDisplayValue(keyValue);
      return;
    }
    if (currentCalc.length === 0 && keyType === "operation") {
      return;
    }

    if (currentCalc.length > 0) {
      const previousEntry = currentCalc[currentCalc.length - 1];
      const previousIsNumber = !["+", "-", "/", "*"].includes(previousEntry);

      // It's a number (inc decimal point) and last was a number concatenate with last. update display
      if (keyType === "number" && previousIsNumber) {
        const copyCalc = [...currentCalc];
        // prevent 2 leading zeros
        let newNum = keyValue === "0" && previousEntry === "0" ? previousEntry : previousEntry + keyValue;
        // TODO: prevent 2 decimal points
        if (previousEntry.includes(".") && keyValue === ".") {
          newNum = previousEntry;
        }

        copyCalc.splice(-1, 1, newNum);
        setCurrentCalc(copyCalc);
        setDisplayValue(newNum);
        return;
      }
      // It's a number and last was an operation then add as a new entry in array. Update display
      if (keyType === "number" && previousIsNumber === false) {
        setCurrentCalc([...currentCalc, keyValue]);
        setDisplayValue(keyValue);
        return;
      }

      // It's an operation and last was a number then add as a new entry in array. Don't update display.
      if (keyType === "operation" && previousIsNumber) {
        setCurrentCalc([...currentCalc, keyValue]);
        return;
      }
      // if it's a operator and last one was also an operator the overwrite it instead. Don't update display.
      if (keyType === "operation" && previousIsNumber === false) {
        const copyCalc = [...currentCalc];
        keyValue === "-" ? copyCalc.push(keyValue) : copyCalc.splice(-1, 1, keyValue);
        setCurrentCalc(copyCalc);
        return;
      }
    }

    console.log("ERROR - THIS SHOULD BE UNREACHABLE CODE");
  }

  function calculateAnswer() {
    let answer = eval(currentCalc.join(""));

    if (Math.floor(answer) !== answer) {
      answer = answer.toFixed(8);
    }
    setDisplayValue(answer + "");
    setCurrentCalc([answer + ""]);
  }

  return (
    <div id="calculator">
      <div id="screen">
        <div id="display">{displayValue}</div>
      </div>

      <div id="operation-keys">
        {operationKeys.map((opKey) => {
          function processClick() {
            addToCalc(opKey.value, "operation");
          }

          return (
            <div id={opKey.id} className="key" onClick={processClick} key={opKey.id}>
              <FontAwesomeIcon icon={opKey.icon} />
            </div>
          );
        })}
      </div>

      <div id="number-keys">
        {numberKeys.map((numKey) => {
          function processClick() {
            addToCalc(numKey.value, "number");
          }

          return (
            <div id={numKey.id} className="key" onClick={processClick} key={numKey.id}>
              <FontAwesomeIcon icon={numKey.icon} />
            </div>
          );
        })}
      </div>

      <div id="execute-keys">
        <div id="clear" className="key" onClick={clearValue}>
          clear
        </div>
        <div id="equals" className="key" onClick={calculateAnswer}>
          <FontAwesomeIcon icon={equalsKey.icon} />
        </div>
      </div>
    </div>
  );
}

export default App;
