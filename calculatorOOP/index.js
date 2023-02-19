const CalculatorClass = require("./CalculatorClass");

const [operator, ...args] = process.argv.slice(2);
const numbers = args.map((arg) => Number(arg));

const calculator = new CalculatorClass(operator, numbers);
// console.log(calculator.calculate(operator, numbers));
console.log(calculator.init());
