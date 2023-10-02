import {
  xPlus,
  xMinus,
  yMinus,
  yPlus,
} from './helperFuntions/directionsLoop.js';

let predatorThree = [];

function predatorThreePattern() {
  xMinus(365, 560, 248, predatorThree);
  yMinus(560, 248, 521, predatorThree);
  xMinus(248, 521, 131, predatorThree);
  yMinus(521, 131, 248, predatorThree);
  xMinus(131, 248, 53, predatorThree);
  yPlus(248, 53, 365, predatorThree);
  xPlus(53, 365, 131, predatorThree);
  yPlus(365, 131, 443, predatorThree);
  xPlus(131, 443, 248, predatorThree);
  yMinus(443, 248, 404, predatorThree);
  xPlus(248, 404, 287, predatorThree);
  yMinus(404, 287, 365, predatorThree);
  xPlus(287, 365, 365, predatorThree);
  yPlus(365, 365, 560, predatorThree);

  return predatorThree;
}

export default predatorThreePattern;
