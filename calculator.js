function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const match = numbers.match(/^\/\/(.)\n/);
    delimiter = new RegExp(match[1]);
    numbers = numbers.slice(match[0].length);
  }

  const parts = numbers.split(delimiter);
  return parts.reduce((sum, num) => sum + parseInt(num), 0);
}

  module.exports = { add }; 