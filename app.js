import Player from './Player.js';
import obstacles from './data/obstaclesDataArray.js';
import { enemiePosition } from './data/enemiesDataArray.js';
import { draw } from './functions/draw.js';
import playerHouse from './data/playerHouse.js';
import Predator from './Predator.js';
import predatorOnePattern from './algorithm/predatorPatternOne.js';
import predatorTwoPattern from './algorithm/predatorPatternTwo.js';

const score = document.getElementById('score');
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const player = new Player(182, 310, 36, 36, 2);
const predator = new Predator(14, 14, 24, 24, 1, '#00FFFF');
const predatorTwo = new Predator(365, 14, 24, 24, 1, 'pink');

let enemiesPositionArray = enemiePosition();
let predatorPatternOne = predatorOnePattern();
let predatorPatternTwo = predatorTwoPattern();

function gameLoop() {
  //clear
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //
  score.textContent = player.getScore();

  //draws the enemies
  draw(ctx, enemiesPositionArray, 'yellow');
  //draws the obstacles
  draw(ctx, obstacles, 'blue');
  // draw player house
  draw(ctx, playerHouse, 'orange');

  //predator
  predator.draw(ctx);
  predator.update(predatorPatternOne, 2);

  //predatorTwo
  predatorTwo.draw(ctx);
  predatorTwo.update(predatorPatternTwo, 2);

  //player
  player.draw(ctx);
  //update
  player.update(keys);
  //colisions
  player.colisionObj(playerHouse);
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
