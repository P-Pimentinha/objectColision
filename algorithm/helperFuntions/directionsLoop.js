function xPlus(xA, yA, goal, arr) {
  for (let i = xA; i < goal + 1; i++) {
    arr.push({ x: i, y: yA });
  }
}
function xMinus(xA, yA, goal, arr) {
  for (let i = xA; i > goal - 1; i--) {
    arr.push({ x: i, y: yA });
  }
}

function yPlus(yA, xA, goal, arr) {
  for (let i = yA; i < goal + 1; i++) {
    arr.push({ x: xA, y: i });
  }
}
function yMinus(yA, xA, goal, arr) {
  for (let i = yA; i > goal - 1; i--) {
    arr.push({ x: xA, y: i });
  }
}

export { xPlus, xMinus, yPlus, yMinus };
