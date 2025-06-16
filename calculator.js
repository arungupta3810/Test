function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const match = numbers.match(/^\/\/(.)\n/);
    delimiter = new RegExp(match[1]);
    numbers = numbers.slice(match[0].length);
  }

  const parts = numbers.split(delimiter).map(n => parseInt(n));
  const negatives = parts.filter(n => n < 0);
  if (negatives.length) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  return parts.reduce((sum, num) => sum + num, 0);
}
  module.exports = { add }; 