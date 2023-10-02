import Player from './Player.js';
import obstacles from './data/obstaclesDataArray.js';
import { enemiePosition } from './data/enemiesDataArray.js';
import { draw } from './functions/draw.js';
import playerHouse from './data/playerHouse.js';
import Predator from './Predator.js';
import predatorOnePattern from './algorithm/predatorPatternOne.js';
import predatorTwoPattern from './algorithm/predatorPatternTwo.js';
import predatorThreePattern from './algorithm/predatorPatternThree.js';
import predatorFourPattern from './algorithm/predatorPatternFour.js';

//HTML
const score = document.getElementById('score');
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

//Class
const player = new Player(182, 310, 36, 36, 2);
const predator = new Predator(14, 14, 23, 23, 1, '#00FFFF');
const predatorTwo = new Predator(365, 14, 23, 23, 1, 'pink');
const predatorThree = new Predator(365, 560, 23, 23, 1, '#FFB852');
const predatorFour = new Predator(14, 560, 23, 23, 1, '#FF0000');

let enemiesPositionArray = enemiePosition();
let predatorPatternOne = predatorOnePattern();
let predatorPatternTwo = predatorTwoPattern();
let predatorPatternThree = predatorThreePattern();
let predatorPatternFour = predatorFourPattern();

function gameLoop() {
  if (player.GameOver) {
    return;
  }
  //clear
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'green';

  //
  score.textContent = player.getScore();

  //draws the enemies
  draw(ctx, enemiesPositionArray, 'orange');
  //draws the obstacles
  draw(ctx, obstacles, 'blue');
  // draw player house
  draw(ctx, playerHouse, 'green');

  //predator
  predator.draw(ctx);
  predator.update(predatorPatternOne, 2);

  //predatorTwo
  predatorTwo.draw(ctx);
  predatorTwo.update(predatorPatternTwo, 2);

  //predatorThree
  predatorThree.draw(ctx);
  predatorThree.update(predatorPatternThree, 2);

  //predatorThree
  predatorFour.draw(ctx);
  predatorFour.update(predatorPatternFour, 2);

  //player
  player.draw(ctx);
  //update
  player.update(keys);
  //colisions
  player.colisionObj(playerHouse);
  player.colisionObj(obstacles);
  player.colisionEnemies(enemiesPositionArray);
  player.colisionPredator(predator.getPosition());
  player.colisionPredator(predatorTwo.getPosition());

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
