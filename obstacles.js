import obstacles from './data/obstaclesDataArray.js';

function drawObstacles(ctx) {
  obstacles.forEach((obstacle) => {
    ctx.fillStyle = 'red';
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  });
}

export { drawObstacles };
