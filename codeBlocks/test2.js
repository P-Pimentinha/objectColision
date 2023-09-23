// Requiring fs module in which
// writeFile function is defined.
// const fs = require('fs');
import obstacles from '../data/obstaclesDataArray.js';
import Alien from '../Aliens.js';

function enemiePosition() {
  let initialColumn = 6;
  let initialRow = 6;

  let initialColumnT = 17;
  let initialRowT = 17;

  let enemyPosition = [];
  let i = 0;

  while (i < 150) {
    let testRow = { x: initialColumn, y: initialRow, width: 37, height: 37 };
    let newRow = { x: initialColumnT, y: initialRowT, width: 15, height: 15 };
    if (filter(obstacles, testRow)) {
      enemyPosition.push(new Alien(initialColumnT, initialRowT, 15, 15));
    }

    initialRow += 39;
    initialRowT += 39;
    i++;

    if (i % 15 === 0) {
      initialColumn += 39;
      initialColumnT += 39;
      initialRow = 6;
      initialRowT = 17;
    }
  }

  return enemyPosition;
}

// excludes from array the positions taken by the blocks
function filter(arr1, targetObject) {
  const isObjectInArray = arr1.some(
    (obj) => obj.x === targetObject.x && obj.y === targetObject.y
  );

  if (isObjectInArray) return false;
  return true;
}

// const jsonArrayAsString = JSON.stringify(arayTest, null, 2); // 2 spaces for
// fs.writeFile('Output.txt', jsonArrayAsString, (err) => {
//   // In case of a error throw err.
//   if (err) throw err;
// });
