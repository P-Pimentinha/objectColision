const fs = require('fs');

let arrayTest = [];

for (let i = 14; i < 132; i++) {
  arrayTest.push({ x: i, y: 14 });
}

for (let i = 14; i < 93; i++) {
  arrayTest.push({ x: 131, y: i });
}

const jsonArrayAsString = JSON.stringify(arrayTest, null, 2); // 2 spaces for
fs.writeFile('PredatorOutput.txt', jsonArrayAsString, (err) => {
  // In case of a error throw err.
  if (err) throw err;
});
