import { useEffect, useState } from "react";
import { numberKeys, operationKeys, equalsKey } from "./keyData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/App.scss";

type KeyType = "operation" | "number";

function App() {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [currentCalc, setCurrentCalc] = useState<string[]>([]);

  useEffect(() => {
    console.log("current calc", currentCalc, currentCalc.length);
  });

  function clearValue() {
    setDisplayValue("0");
    setCurrentCalc([]);
  }

  function isOperator(value: string) {
    return ["+", "-", "/", "*"].includes(value);
  }

  function addToCalc(keyValue: string, keyType: KeyType) {
    console.log("key clicked", keyValue, keyType);

    // If empty currentCalc array - add the keypress if it's a number or a minus, otherwise ignore
    if (currentCalc.length === 0 && (keyType === "number" || keyValue === "-")) {
      setCurrentCalc([...currentCalc, keyValue]);
      setDisplayValue(keyValue);
      return;
    }
    if (currentCalc.length === 0 && keyType === "operation") {
      return;
    }

    // Adding to the currentCalc array
    if (currentCalc.length > 0) {
      const previousEntry = currentCalc[currentCalc.length - 1];
      const previousIsNumber = !isOperator(previousEntry);

      // If the first array entry is a zero, ignore any more zeros
      if (currentCalc.length === 1 && previousEntry === "0" && keyValue === "0") {
        return;
      }
      // If the first array entry is zero only keep the zero it if the next entry is a decimal
      if (currentCalc.length === 1 && previousEntry === "0") {
        const newNum = keyValue === "." ? "0." : keyValue;
        setCurrentCalc([newNum]);
        setDisplayValue(newNum);
        return;
      }

      // Keypress is a number (inc decimal point) and last was a number concatenate with last. update display
      if (keyType === "number" && previousIsNumber) {
        // Prevent 2 decimal points
        if (previousEntry.includes(".") && keyValue === ".") {
          return;
        }
        const copyCalc = [...currentCalc];
        let newNum = previousEntry + keyValue;

        copyCalc.pop();
        copyCalc.push(newNum);
        setCurrentCalc(copyCalc);
        setDisplayValue(newNum);
        return;
      }

      // Keypress is a number and last was an operation then add as a new entry in array. Update display
      if (keyType === "number" && previousIsNumber === false) {
        setCurrentCalc([...currentCalc, keyValue]);
        setDisplayValue(keyValue);
        return;
      }

      // Keypress is an operation and last was a number then add as a new entry in array. Don't update display.
      if (keyType === "operation" && previousIsNumber) {
        setCurrentCalc([...currentCalc, keyValue]);
        return;
      }

      // Keypress is a minus and last one was an operation then add as a new entry in array. Don't update display.
      if (previousIsNumber === false && keyValue === "-") {
        const copyCalc = [...currentCalc];
        copyCalc.push(keyValue);
        setCurrentCalc(copyCalc);
        return;
      }
      // Keypress is an operator and last one was an operator then overwrite the last one (or two). Don't update display.
      if (keyType === "operation" && previousIsNumber === false) {
        const copyCalc = [...currentCalc];
        copyCalc.pop();
        const checkNextIsNumber = !isOperator(copyCalc[copyCalc.length - 1]);

        if (checkNextIsNumber) {
          copyCalc.push(keyValue);
        } else {
          copyCalc.pop();
          copyCalc.push(keyValue);
        }

        setCurrentCalc(copyCalc);
        return;
      }
    }

    console.log("ERROR - THIS SHOULD BE UNREACHABLE CODE");
  }

  function calculateAnswer() {
    let answer = eval(currentCalc.join(""));
    const roundedAnswer = Math.round(answer * 1e10) / 1e10;

    setDisplayValue(roundedAnswer + "");
    setCurrentCalc([roundedAnswer + ""]);
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
          if (numKey.id === "decimal") {
            return (
              <div id={numKey.id} className="key" onClick={processClick} key={numKey.id}>
                <div id="dot">.</div>
              </div>
            );
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
          <span className="hidden">=</span>
        </div>
      </div>
    </div>
  );
}

export default App;
