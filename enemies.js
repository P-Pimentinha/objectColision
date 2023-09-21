function drawEnemies(ctx, arr) {
  arr.forEach((obstacle) => {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  });
}

export { drawEnemies };
