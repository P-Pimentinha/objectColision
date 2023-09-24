class Player {
  constructor(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.score = 0;
  }

  //Getters
  getScore() {
    return this.score;
  }

  //setters
  setScore() {
    this.score++;
  }

  draw(ctx) {
    ctx.fillStyle = '#ffd700';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update(keys) {
    if (keys.left) this.x -= this.speed;
    if (keys.right) this.x += this.speed;
    if (keys.up) this.y -= this.speed;
    if (keys.down) this.y += this.speed;

    // Check for collisions with obstacles

    // Ensure the player stays within the canvas boundaries
  }

  colisionWall(canvas) {
    if (this.x < 0) this.x = 0;
    if (this.x + this.width > canvas.width) this.x = canvas.width - this.width;
    if (this.y < 0) this.y = 0;
    if (this.y + this.height > canvas.height)
      this.y = canvas.height - this.height;
  }

  colisionObj(obstacles) {
    obstacles.forEach((obstacle) => {
      if (
        this.x <= obstacle.x + obstacle.width &&
        this.x + this.width >= obstacle.x &&
        this.y <= obstacle.y + obstacle.height &&
        this.y + this.height >= obstacle.y
      ) {
        // Calculate the overlap in the x and y directions
        var overlapX =
          Math.min(this.x + this.width, obstacle.x + obstacle.width) -
          Math.max(this.x, obstacle.x);
        var overlapY =
          Math.min(this.y + this.height, obstacle.y + obstacle.height) -
          Math.max(this.y, obstacle.y);

        // Determine which direction has the smaller overlap and move the this accordingly
        if (overlapX < overlapY) {
          if (this.x < obstacle.x) {
            this.x -= overlapX;
          } else {
            this.x += overlapX;
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

  colisionEnemies(enemies) {
    enemies.forEach((enemie) => {
      if (
        this.x <= enemie.x + enemie.width &&
        this.x + this.width >= enemie.x &&
        this.y <= enemie.y + enemie.height &&
        this.y + this.height >= enemie.y
      ) {
        this.setScore();
        const index = enemies.findIndex((item) => item.id === enemie.id);

        if (index !== -1) {
          enemies.splice(index, 1);
        }
      }
    });
  }
}

export default Player;
