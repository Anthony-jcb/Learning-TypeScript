function combine(
  input1: number | string,
  input2: number | string,
  conversion: "" | "number" | "text" = ""
) {
  let result;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    conversion === "number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (conversion === "text") return result.toString();
  return result;
}

const combineAges = combine(14, 15);
const combineNames = combine("Adri", "May");

const combineConvertAges = combine(14, 15, "text");
const combineConvertNames = combine("Adri", "May", "number");

console.log(combineAges);
console.log(combineNames);

console.log(combineConvertAges);
console.log(combineConvertNames);

/* type aliases */

type Combinable = number | string;
type CombinableDescriptor = "number" | "text" | "";

function combinables(
  input1: Combinable,
  input2: Combinable,
  conversion: CombinableDescriptor = ""
) {
  let result;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    conversion === "number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (conversion === "text") return result.toString();
  return result;
}

console.log(combinables(14, 15, "text"));
console.log(combinables("Adria", "Maya"));
