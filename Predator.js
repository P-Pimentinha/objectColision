class Predator {
  constructor(x, y, width, height, speed, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.color = color;
    this.counter = 0;
    this.forward = false;
    this.backwards = false;
  }

  getPosition() {
    return [{ x: this.x, y: this.y, width: this.width, height: this.height }];
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update(arr, speed) {
    let arrSize = arr.length;

    if (this.counter == 0) {
      this.backwards = false;
      this.forward = true;
    }

    if (this.counter >= arrSize - speed) {
      this.forward = false;
      this.backwards = true;
    }

    this.x = arr[this.counter].x;
    this.y = arr[this.counter].y;

    if (this.forward) {
      this.counter += speed;
    }

    if (this.backwards) {
      this.counter -= speed;
    }
  }
}

export default Predator;
