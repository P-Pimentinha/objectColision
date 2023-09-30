import {
  xPlus,
  xMinus,
  yMinus,
  yPlus,
} from './helperFuntions/directionsLoop.js';

let predatorTwo = [];

function predatorTwoPattern() {
  yPlus(14, 365, 92, predatorTwo);
  xMinus(365, 92, 248, predatorTwo);
  yMinus(92, 248, 14, predatorTwo);

  return predatorTwo;
}

export default predatorTwoPattern;
