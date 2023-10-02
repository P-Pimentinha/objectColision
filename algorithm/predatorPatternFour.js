import {
  xPlus,
  xMinus,
  yMinus,
  yPlus,
} from './helperFuntions/directionsLoop.js';

let predatorFour = [];

function predatorFourPattern() {
  yMinus(560, 14, 365, predatorFour);
  xPlus(14, 365, 131, predatorFour);
  yPlus(365, 131, 443, predatorFour);
  xPlus(131, 443, 248, predatorFour);
  yMinus(443, 248, 248, predatorFour);
  xPlus(248, 248, 326, predatorFour);
  yPlus(248, 326, 365, predatorFour);
  xMinus(326, 365, 248, predatorFour);
  yPlus(365, 248, 521, predatorFour);
  xMinus(248, 521, 131, predatorFour);
  yPlus(521, 131, 560, predatorFour);
  xMinus(131, 560, 14, predatorFour);
  yMinus(560, 14, 482, predatorFour);
  xPlus(14, 482, 131, predatorFour);
  return predatorFour;
}

export default predatorFourPattern;
