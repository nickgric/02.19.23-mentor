const [operator, ...args] = process.argv.slice(2);
const numbers = args.map((arg) => Number(arg));
module.exports = { operator, numbers };
