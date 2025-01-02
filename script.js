const canvas = document.getElementById('landscapeCanvas');
const ctx = canvas.getContext('2d');

// Canvasサイズ設定
canvas.width = 1000;
canvas.height = 600;

// 背景の描画（空と地面）
function drawBackground() {
  // 空
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#fde1c3'); // 上部の空
  gradient.addColorStop(1, '#f4a688'); // 下部の空
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 地面
  ctx.fillStyle = '#c2a385';
  ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);
}

// 道路の描画
function drawRoad() {
  ctx.fillStyle = '#505050'; // 道路の色
  ctx.fillRect(0, canvas.height / 1.8, canvas.width, 40);

  // ガードレール
  ctx.fillStyle = '#dcdcdc';
  ctx.fillRect(0, canvas.height / 1.85, canvas.width, 10);
}

// フェンスの描画
function drawFence() {
  ctx.strokeStyle = '#40332d';
  ctx.lineWidth = 2;
  for (let i = 0; i < canvas.width; i += 50) {
    ctx.beginPath();
    ctx.moveTo(i, canvas.height / 1.9);
    ctx.lineTo(i + 25, canvas.height / 1.85);
    ctx.stroke();
  }
}

// 木の描画
function drawTree(x, y, height, color) {
  // 幹
  ctx.fillStyle = '#8B4513';
  ctx.fillRect(x - 5, y, 10, height);

  // 枝
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2, false);
  ctx.fillStyle = color;
  ctx.fill();
}

// 鳥の描画
function drawBird(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 40, y - 20);
  ctx.lineTo(x + 80, y);
  ctx.lineTo(x + 40, y + 20);
  ctx.closePath();
  ctx.fillStyle = '#ffffff';
  ctx.fill();
}

// 描画実行
function drawScene() {
  drawBackground();
  drawRoad();
  drawFence();

  // 木々の配置
  drawTree(150, canvas.height / 2 - 40, 50, '#5c4033');
  drawTree(250, canvas.height / 2 - 60, 50, '#5c4033');
  drawTree(350, canvas.height / 2 - 50, 50, '#5c4033');
  drawTree(450, canvas.height / 2 - 55, 50, '#5c4033');

  // 鳥の描画
  drawBird(700, 150);
}

drawScene();
