# String Calculator TDD Kata

This project implements the classic **String Calculator Kata** using **JavaScript**, following **Test-Driven Development (TDD)** principles.

## ✅ Features Implemented

- Returns 0 for empty input
- Returns a single number if only one is provided
- Returns the sum for two or more comma-separated numbers
- Supports new lines as delimiters
- Allows custom single-character delimiters in the format `//[delimiter]\n`
- Throws an error for negative numbers and lists them in the message

## 📂 Project Structure
```
string-calculator-tdd/
├── calculator.js          # Core calculator logic
├── calculator.test.js     # Jest test cases
├── README.md              # Project documentation
```

## 🧪 Running Tests

### Install dependencies
```bash
npm install
```

### Run tests
```bash
npm test
```

## 🧠 Sample Inputs & Outputs
| Input           | Output | Notes                         |
|----------------|--------|-------------------------------|
| ""              | 0      | Empty string                  |
| "1"             | 1      | Single number                 |
| "1,2"           | 3      | Two numbers                  |
| "1,2,3"         | 6      | Multiple numbers             |
| "1\n2,3"        | 6      | New line as delimiter        |
| "//;\n1;2"      | 3      | Custom delimiter `;`         |
| "1,-2,3,-4"     | Error  | Exception with message: `negative numbers not allowed: -2,-4` |

## 💡 TDD Workflow Demonstrated
- Start with a failing test
- Make the test pass with the minimum code
- Refactor the code
- Commit after each meaningful step

## 🔗 Repository
https://github.com/arungupta3810/Test.git
