let predatorOne = [];

function predatorOnePattern() {
  // x:14 -> x: 131 {x:131, y:14}
  for (let i = 14; i < 132; i++) {
    predatorOne.push({ x: i, y: 14 });
  }

  // y: 14 -> y:92 {x:131, y:92}
  for (let i = 14; i < 93; i++) {
    predatorOne.push({ x: 131, y: i });
  }

  // x:131 -> x: 53 {x:53, y:92}
  for (let i = 131; i > 52; i--) {
    predatorOne.push({ x: i, y: 92 });
  }

  //y: 92 -> y: 170 {x:53 ,y:170 }
  for (let i = 92; i < 171; i++) {
    predatorOne.push({ x: 53, y: i });
  }

  // x: 53 -> x: 14 {x:14 ,y:170 }
  for (let i = 53; i > 14; i--) {
    predatorOne.push({ x: i, y: 170 });
  }

  // y: 170 -> y: 248 {x:14 ,y:248 }
  for (let i = 170; i < 249; i++) {
    predatorOne.push({ x: 14, y: i });
  }

  // x: 14 -> x: 209 {x:209 ,y:248 }
  for (let i = 14; i < 210; i++) {
    predatorOne.push({ x: i, y: 248 });
  }

  return predatorOne;
}

export default predatorOnePattern;
