import { useState } from "react";
import { numberKeys, operationKeys, equalsKey } from "./keyData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/App.scss";

function App() {
  const [displayValue, setDisplayValue] = useState<number>(0);

  function clearValue() {
    setDisplayValue(0);
  }

  return (
    <div id="calculator">
      <div id="screen">
        <div id="display">{displayValue}</div>
      </div>

      <div id="operation-keys">
        {operationKeys.map((opKey) => {
          return (
            <div id={opKey.id} className="key">
              <FontAwesomeIcon icon={opKey.icon} />
            </div>
          );
        })}
      </div>

      <div id="number-keys">
        {numberKeys.map((numKey) => {
          return (
            <div id={numKey.id} className="key">
              <FontAwesomeIcon icon={numKey.icon} />
            </div>
          );
        })}
      </div>

      <div id="execute-keys">
        <div id="clear" className="key" onClick={clearValue}>
          clear
        </div>
        <div id="equals" className="key">
          <FontAwesomeIcon icon={equalsKey.icon} />
        </div>
      </div>
    </div>
  );
}

export default App;
