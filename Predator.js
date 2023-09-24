class Predator {
  constructor(x, y, width, height, speed, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.color = color;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update(obstacles) {
    obstacles.forEach((obstacle) => {
      if (
        this.x <= obstacle.x + obstacle.width &&
        this.x + this.width >= obstacle.x &&
        this.y <= obstacle.y + obstacle.height &&
        this.y + this.height >= obstacle.y
      ) {
        var overlapX =
          Math.min(this.x + this.width, obstacle.x + obstacle.width) -
          Math.max(this.x, obstacle.x);
        var overlapY =
          Math.min(this.y + this.height, obstacle.y + obstacle.height) -
          Math.max(this.y, obstacle.y);

        // Determine which direction has the smaller overlap and move the this accordingly
        if (overlapX < overlapY) {
          if (this.x < obstacle.x) {
            r = this.x - 3;
          } else {
            this.x += this.speed;
          }
        } else {
          if (this.y < obstacle.y) {
            this.y -= overlapY;
          } else {
            this.y += overlapY;
          }
        }
      }
    });
  }
}

export default Predator;
