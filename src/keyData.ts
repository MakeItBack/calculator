type Key = {
  label: string;
  id: string;
  icon: string;
};

export const numberKeys: Key[] = [
  { label: "0", id: "zero", icon: "fa0" },
  { label: "1", id: "one", icon: "fa1" },
  { label: "2", id: "two", icon: "fa2" },
  { label: "3", id: "three", icon: "fa3" },
  { label: "4", id: "four", icon: "fa4" },
  { label: "5", id: "five", icon: "fa5" },
  { label: "6", id: "six", icon: "fa6" },
  { label: "7", id: "seven", icon: "fa7" },
  { label: "8", id: "eight", icon: "fa8" },
  { label: "9", id: "nine", icon: "fa9" },
];

export const operationKeys: Key[] = [
  { label: "+", id: "add", icon: "faPlus" },
  { label: "-", id: "subtract", icon: "faMinus" },
  { label: "X", id: "multiply", icon: "faMultiply" },
  { label: "/", id: "divide", icon: "faDivide" },
  { label: "=", id: "equals", icon: "faEquals" },
  { label: ".", id: "decimal", icon: "faCircle" },
];
