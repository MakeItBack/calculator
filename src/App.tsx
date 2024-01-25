import { useState } from "react";
import { numberKeys, operationKeys } from "./keyData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faMultiply,
  faDivide,
  faEquals,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  fa0,
  fa1,
  fa2,
  fa3,
  fa4,
  fa5,
  fa6,
  fa7,
  fa8,
  fa9,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/App.scss";

function App() {
  return (
    <div>
      <div id="display"></div>
      <div>
        <a id="add">
          <FontAwesomeIcon icon={faPlus} />
        </a>

        <FontAwesomeIcon id="subtract" icon={faMinus} />
        <FontAwesomeIcon id="divide" icon={faDivide} />
        <FontAwesomeIcon id="multiply" icon={faMultiply} />
        <FontAwesomeIcon id="equals" icon={faEquals} />
        <FontAwesomeIcon id="decimal" icon={faCircle} />
      </div>
      <div>
        <FontAwesomeIcon icon={fa0} />
        <FontAwesomeIcon icon={fa1} />
        <FontAwesomeIcon icon={fa2} />
        <FontAwesomeIcon icon={fa3} />
        <FontAwesomeIcon icon={fa4} />
        <FontAwesomeIcon icon={fa5} />
        <FontAwesomeIcon icon={fa6} />
        <FontAwesomeIcon icon={fa7} />
        <FontAwesomeIcon icon={fa8} />
        <FontAwesomeIcon icon={fa9} />
      </div>
    </div>
  );
}

export default App;
