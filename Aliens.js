class Alien {
  constructor(id, x, y, width, height) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
}

export default Alien;
