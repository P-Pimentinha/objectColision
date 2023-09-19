// Requiring fs module in which
// writeFile function is defined.
const fs = require('fs');

// Data which will write in a file.

let initialColumn = 6;
let initialRow = 6;

let arayTest = [];
let i = 0;

while (i < 150) {
  arayTest.push({ x: initialColumn, y: initialRow });
  initialRow += 39;
  i++;

  if (i % 15 === 0) {
    initialColumn += 39;
    initialRow = 6;
  }
}

const jsonArrayAsString = JSON.stringify(arayTest, null, 2); // 2 spaces for indentation

// Write data in 'Output.txt' .
fs.writeFile('Output.txt', jsonArrayAsString, (err) => {
  // In case of a error throw err.
  if (err) throw err;
});

// for (let i = 0; i < 100; i++) {
//   if ((reset = 10 && initialRow === 591)) {
//     console.log(arayTest);
//     break;
//   }
//   console.log(initialRow);
//   initialRow += 39;
//   arayTest.push({ X: 1, y: 1 });
// }
