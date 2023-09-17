import Player from './Player.js';
import { drawObstacles, obstacles } from './obstacles.js';
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const player = new Player(100, 20, 50, 50, 5);

function gameLoop() {
  //clear
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //draw
  drawObstacles(ctx);
  player.draw(ctx);

  //update
  player.update(keys);

  //colisions
  player.colisionWall(canvas);
  player.colisionObj(obstacles);

  requestAnimationFrame(gameLoop);
}

// Keyboard input handling
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

// const canvas = document.getElementById('myCanvas');
// const ctx = canvas.getContext('2d');

// const player = {
//   x: 10,
//   y: 10,
//   width: 50,
//   height: 50,
//   speed: 5,
// };

// const obs = { x: 150, y: 150, width: 50, height: 50 };
// function gameLoop() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   ctx.fillStyle = 'blue';
//   ctx.fillRect(player.x, player.y, player.width, player.height);

//   ctx.fillStyle = 'red';
//   ctx.fillRect(obs.x, obs.y, obs.width, obs.height);

//   if (colision(obs)) {
//     player.x -= player.speed;
//     player.y -= player.speed;
//   }

//   update(keys);

//   requestAnimationFrame(gameLoop);
// }

// function update(keys) {
//   if (keys.left) player.x -= player.speed;
//   if (keys.right) player.x += player.speed;
//   if (keys.up) player.y -= player.speed;
//   if (keys.down) player.y += player.speed;
// }

// function colision(obstacle) {
//   return (
//     player.x <= obstacle.x + obstacle.width &&
//     player.x + player.width >= obstacle.x &&
//     player.y <= obstacle.y + obstacle.height &&
//     player.y + player.height >= obstacle.y
//   );
// }

// const keys = {
//   left: false,
//   right: false,
//   up: false,
//   down: false,
// };

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'ArrowLeft') keys.left = true;
//   if (e.key === 'ArrowRight') keys.right = true;
//   if (e.key === 'ArrowUp') keys.up = true;
//   if (e.key === 'ArrowDown') keys.down = true;
// });

// document.addEventListener('keyup', function (e) {
//   if (e.key === 'ArrowLeft') keys.left = false;
//   if (e.key === 'ArrowRight') keys.right = false;
//   if (e.key === 'ArrowUp') keys.up = false;
//   if (e.key === 'ArrowDown') keys.down = false;
// });

// gameLoop();
