const player = document.querySelector('.player');
const scoreElement = document.querySelector('.score');
let score = 0;
let gameRunning = true;

const enemy = document.createElement('div');
enemy.style.width = '40px';
enemy.style.height = '50px';
enemy.style.borderRadius = '5px';
enemy.style.backgroundColor = '#FF1C1C';
enemy.style.transform = 'translate(500px,235px)';
document.body.appendChild(enemy);

window.addEventListener('click', () => {
  if (gameRunning) {
    player.style.transform = 'translate(30px,135px)';
    setTimeout(() => {
      player.style.transform = 'translate(30px,235px)';
    }, 250);
    score += 1;
    scoreElement.textContent = `Score : ${score}`;
  }
});

let enemyX = 500;
setInterval(() => {
  if (gameRunning) {
    enemyX -= 7;
    enemy.style.transform = `translate(${enemyX}px,185px)`;
    if (enemyX < 0) {
      enemyX = 500;
    }
    checkClient();
  }
}, 15);

function checkClient() {
  const playerClient = player.getBoundingClientRect();
  const enemyClient = enemy.getBoundingClientRect();
  if (playerClient.left < enemyClient.right &&
    playerClient.right > enemyClient.left &&
    playerClient.top < enemyClient.bottom &&
    playerClient.bottom > enemyClient.top) {
    gameRunning = false;
    score = 0;
    alert('Game Over');
    resetGame();
  }
}

function resetGame() {
  gameRunning = true;
  enemyX = 500;
  enemy.style.transform = `translate(${enemyX}px,235px)`;
  scoreElement.textContent = `Score : ${score}`;
}