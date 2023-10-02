import {
  xPlus,
  xMinus,
  yMinus,
  yPlus,
} from './helperFuntions/directionsLoop.js';

let predatorOne = [];

function predatorOnePattern() {
  yPlus(14, 14, 92, predatorOne);
  xPlus(14, 92, 53, predatorOne);
  yPlus(92, 53, 170, predatorOne);
  xMinus(53, 170, 14, predatorOne);
  yPlus(170, 14, 248, predatorOne);
  xPlus(14, 248, 170, predatorOne);
  yMinus(248, 170, 170, predatorOne);
  xPlus(170, 170, 365, predatorOne);
  yPlus(170, 365, 248, predatorOne);
  xMinus(365, 248, 209, predatorOne);

  return predatorOne;
}

export default predatorOnePattern;
