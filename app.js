import Player from './Player.js';

import obstacles from './data/obstaclesDataArray.js';

import { enemiePosition } from './codeBlocks/test2.js';
import { draw } from './functions/draw.js';

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const player = new Player(180, 280, 36, 36, 4);

let enemiesPositionArray = enemiePosition();

function gameLoop() {
  //clear
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //draws the enemies
  draw(ctx, enemiesPositionArray, 'yellow');
  //draws the obstacles
  draw(ctx, obstacles, 'red');

  player.draw(ctx);

  //update
  player.update(keys);

  //colisions
  player.colisionObj(obstacles);
  player.colisionEnemies(enemiesPositionArray);

  // requestAnimationFrame(gameLoop);
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
