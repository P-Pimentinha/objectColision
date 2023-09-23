function draw(ctx, arr, color) {
  arr.forEach((obstacle) => {
    ctx.fillStyle = color;
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  });
}

export { draw };
