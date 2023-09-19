/* const obstacles = [
  //Outside Walls
  { x: 0, y: 0, width: 400, height: 5 },
  { x: 0, y: 0, width: 5, height: 590 },
  { x: 395, y: 0, width: 5, height: 590 },
  { x: 0, y: 590, width: 400, height: 5 },

  // { x: 44, y: 44, width: 5, height: 512 },

  //1 Line
  { x: 46, y: 44, width: 72, height: 39 },
  { x: 280, y: 44, width: 72, height: 39 },
  { x: 161, y: 5, width: 78, height: 78 },

  //2 Line
  { x: 4, y: 122, width: 39, height: 39 },
  { x: 357, y: 122, width: 39, height: 39 },
  { x: 84, y: 122, width: 232, height: 39 },

  //3 Line
  { x: 46, y: 200, width: 132, height: 36 },
  { x: 221, y: 200, width: 133, height: 36 },

  //4 Line (House)
  { x: 161, y: 278, width: 17, height: 5 },
  { x: 221, y: 278, width: 17, height: 5 },

  { x: 161, y: 278, width: 5, height: 63 },
  { x: 234, y: 278, width: 5, height: 63 },

  { x: 161, y: 336, width: 78, height: 5 },

  //4Line
  { x: 5, y: 278, width: 36, height: 78 },
  { x: 83, y: 278, width: 36, height: 78 },

  { x: 278, y: 278, width: 39, height: 78 },
  { x: 356, y: 278, width: 39, height: 78 },
]; */

const obstacles = [
  //Outside Walls
  { x: 0, y: 0, width: 400, height: 5 },
  { x: 0, y: 0, width: 5, height: 590 },
  { x: 395, y: 0, width: 5, height: 590 },
  { x: 0, y: 590, width: 400, height: 5 },

  //Y 6
  { x: 162, y: 6, width: 37, height: 37 },
  { x: 201, y: 6, width: 37, height: 37 },
  //Y 45
  { x: 162, y: 45, width: 37, height: 37 },
  { x: 201, y: 45, width: 37, height: 37 },

  { x: 45, y: 45, width: 37, height: 37 },
  { x: 84, y: 45, width: 37, height: 37 },

  { x: 279, y: 45, width: 37, height: 37 },
  { x: 318, y: 45, width: 37, height: 37 },

  // { x: 47, y: 47, width: 36, height: 36 },
  // { x: 86, y: 47, width: 36, height: 36 },
  // { x: 281, y: 47, width: 36, height: 36 },
  // { x: 320, y: 47, width: 36, height: 36 },

  // { x: 164, y: 8, width: 36, height: 36 },
  // { x: 203, y: 8, width: 36, height: 36 },
  // { x: 203, y: 47, width: 36, height: 36 },
  // { x: 164, y: 47, width: 36, height: 36 },
];

function drawObstacles(ctx) {
  obstacles.forEach((obstacle) => {
    ctx.fillStyle = 'red';
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  });
}

export { obstacles, drawObstacles };
