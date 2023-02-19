class CalculatorClass {
  constructor(operator, numbers) {
    this.operator = operator;
    this.numbers = numbers;
  }
  init() {
    return this.calculate(this.operator, this.numbers);
  }
  calculate(op, numArr) {
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
  }
}

module.exports = CalculatorClass;
