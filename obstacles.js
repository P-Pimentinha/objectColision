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

  //y123
  { x: 6, y: 123, width: 37, height: 37 },
  { x: 84, y: 123, width: 37, height: 37 },
  { x: 123, y: 123, width: 37, height: 37 },
  { x: 162, y: 123, width: 37, height: 37 },
  { x: 201, y: 123, width: 37, height: 37 },
  { x: 240, y: 123, width: 37, height: 37 },
  { x: 279, y: 123, width: 37, height: 37 },
  { x: 357, y: 123, width: 37, height: 37 },

  //Y201
  { x: 45, y: 201, width: 37, height: 37 },
  { x: 84, y: 201, width: 37, height: 37 },
  { x: 123, y: 201, width: 37, height: 37 },
  { x: 240, y: 201, width: 37, height: 37 },
  { x: 279, y: 201, width: 37, height: 37 },
  { x: 319, y: 201, width: 37, height: 37 },

  //279
  { x: 6, y: 279, width: 37, height: 37 },
  { x: 84, y: 279, width: 37, height: 37 },
  { x: 279, y: 279, width: 37, height: 37 },
  { x: 357, y: 279, width: 37, height: 37 },

  //318
  { x: 6, y: 318, width: 37, height: 37 },
  { x: 84, y: 318, width: 37, height: 37 },
  { x: 279, y: 318, width: 37, height: 37 },
  { x: 357, y: 318, width: 37, height: 37 },

  //357
  // { x: 123, y: 357, width: 37, height: 37 },
  { x: 162, y: 357, width: 37, height: 37 },
  { x: 201, y: 357, width: 37, height: 37 },
  // { x: 240, y: 357, width: 37, height: 37 },

  //396
  { x: 162, y: 396, width: 37, height: 37 },
  { x: 201, y: 396, width: 37, height: 37 },
  { x: 45, y: 396, width: 37, height: 37 },
  { x: 318, y: 396, width: 37, height: 37 },

  //Y435
  { x: 45, y: 435, width: 37, height: 37 },
  { x: 84, y: 435, width: 37, height: 37 },
  { x: 279, y: 435, width: 37, height: 37 },
  { x: 318, y: 435, width: 37, height: 37 },

  //Y478
  { x: 162, y: 478, width: 37, height: 37 },
  { x: 201, y: 478, width: 37, height: 37 },

  //Y512
  { x: 45, y: 512, width: 37, height: 37 },
  { x: 84, y: 512, width: 37, height: 37 },
  { x: 279, y: 512, width: 37, height: 37 },
  { x: 318, y: 512, width: 37, height: 37 },

  //552
  { x: 162, y: 552, width: 37, height: 37 },
  { x: 201, y: 552, width: 37, height: 37 },
];

function drawObstacles(ctx) {
  obstacles.forEach((obstacle) => {
    ctx.fillStyle = 'red';
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  });
}

export { obstacles, drawObstacles };
