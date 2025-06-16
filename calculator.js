function add(numbers) {
  if (numbers === "") return 0;

  const normalized = numbers.replace(/\n/g, ",");
  const parts = normalized.split(",");
  return parts.reduce((sum, num) => sum + parseInt(num), 0);
}

  module.exports = { add }; 