const obstacles = [
  { x: 150, y: 150, width: 50, height: 50 },
  { x: 250, y: 100, width: 30, height: 30 },

  { x: 300, y: 300, width: 10, height: 30 },
];

function drawObstacles(ctx) {
  obstacles.forEach((obstacle) => {
    ctx.fillStyle = 'red';
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  });
}

export { obstacles, drawObstacles };
