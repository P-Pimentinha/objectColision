// grab canvas from html and get "context" to make use of canvas API
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const player = { x: 10, y: 10, width: 50, height: 50, speed: 5 };

const obs = { x: 150, y: 150, width: 50, height: 50 };

function gameLoop() {
  //clear
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //draw
  ctx.fillStyle = 'blue';
  ctx.fillRect(player.x, player.y, player.width, player.height);
  ctx.fillStyle = 'red';
  ctx.fillRect(obs.x, obs.y, obs.width, obs.height);

  //update
  update(keys);

  //colision
  colisionWall();
  colisionObj(obs);

  requestAnimationFrame(gameLoop);
}

function update(keys) {
  if (keys.left) player.x -= player.speed;
  if (keys.right) player.x += player.speed;
  if (keys.up) player.y -= player.speed;
  if (keys.down) player.y += player.speed;
}

function colisionWall(obstacle) {
  if (player.x < 0) player.x = 0;
  if (player.x + player.width > canvas.width)
    player.x = canvas.width - player.width;
  if (player.y < 0) player.y = 0;
  if (player.y + player.height > canvas.height)
    player.y = canvas.height - player.height;
}

function colisionObj(obstacle) {
  if (
    player.x <= obstacle.x + obstacle.width &&
    player.x + player.width >= obstacle.x &&
    player.y <= obstacle.y + obstacle.height &&
    player.y + player.height >= obstacle.y
  ) {
    // Calculate the overlap in the x and y directions
    var overlapX =
      Math.min(player.x + player.width, obstacle.x + obstacle.width) -
      Math.max(player.x, obstacle.x);
    var overlapY =
      Math.min(player.y + player.height, obstacle.y + obstacle.height) -
      Math.max(player.y, obstacle.y);

    // Determine which direction has the smaller overlap and move the player accordingly
    if (overlapX < overlapY) {
      if (player.x < obstacle.x) {
        player.x -= overlapX;
      } else {
        player.x += overlapX;
      }
    } else {
      if (player.y < obstacle.y) {
        player.y -= overlapY;
      } else {
        player.y += overlapY;
      }
    }
  }
}

const keys = {
  left: false,
  right: false,
  up: false,
  down: false,
};

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') keys.left = true;
  if (e.key === 'ArrowRight') keys.right = true;
  if (e.key === 'ArrowUp') keys.up = true;
  if (e.key === 'ArrowDown') keys.down = true;
});

document.addEventListener('keyup', function (e) {
  if (e.key === 'ArrowLeft') keys.left = false;
  if (e.key === 'ArrowRight') keys.right = false;
  if (e.key === 'ArrowUp') keys.up = false;
  if (e.key === 'ArrowDown') keys.down = false;
});

gameLoop();
