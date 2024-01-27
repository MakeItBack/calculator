import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9 } from "@fortawesome/free-solid-svg-icons";
import { faPlus, faMinus, faMultiply, faDivide, faEquals, faCircle } from "@fortawesome/free-solid-svg-icons";

type Key = {
  value: string;
  id: string;
  icon: IconProp;
};

export const operationKeys: Key[] = [
  { value: "+", id: "add", icon: faPlus },
  { value: "-", id: "subtract", icon: faMinus },
  { value: "*", id: "multiply", icon: faMultiply },
  { value: "/", id: "divide", icon: faDivide },
];

export const equalsKey: Key = { value: "=", id: "equals", icon: faEquals };

export const numberKeys: Key[] = [
  { value: "1", id: "one", icon: fa1 },
  { value: "2", id: "two", icon: fa2 },
  { value: "3", id: "three", icon: fa3 },
  { value: "4", id: "four", icon: fa4 },
  { value: "5", id: "five", icon: fa5 },
  { value: "6", id: "six", icon: fa6 },
  { value: "7", id: "seven", icon: fa7 },
  { value: "8", id: "eight", icon: fa8 },
  { value: "9", id: "nine", icon: fa9 },
  { value: "0", id: "zero", icon: fa0 },
  { value: ".", id: "decimal", icon: faCircle },
];
