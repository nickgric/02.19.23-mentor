// console.log(process.argv);
// 1 sum
// 2 sub
// 3 mult
// 4 div
// node calc.js sum 1 2 3 4

const [operator, ...args] = process.argv.slice(2);
const numbers = args.map((arg) => Number(arg));

const calculate = (op, numArr) => {
  let result = null;
  switch (op) {
    case "sum":
      result = numArr.reduce((total, item) => total + item);
      break;
    case "sub":
      result = numArr.reduce((total, item) => total - item);
      break;
    case "mult":
      result = numArr.reduce((total, item) => total * item);
      break;
    case "div":
      result = numArr.reduce((total, item) => total / item);
      break;

    default:
      result = "Unknown operations ";
  }
  return result;
};

console.log(calculate(operator, numbers));
