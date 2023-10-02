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
  yPlus(14, 248, 92, predatorTwo);

  xMinus(248, 92, 14, predatorTwo);
  yMinus(92, 14, 14, predatorTwo);
  xPlus(14, 14, 131, predatorTwo);
  yPlus(14, 131, 92, predatorTwo);
  xPlus(131, 92, 365, predatorTwo);
  yMinus(92, 365, 14, predatorTwo);
  xMinus(365, 14, 248, predatorTwo);

  return predatorTwo;
}

export default predatorTwoPattern;
