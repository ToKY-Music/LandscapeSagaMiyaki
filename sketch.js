let clouds = [];
let grassBlades = [];
let birdX = 0;

function setup() {
  createCanvas(1000, 600);
  noStroke();

  // 初期化: 雲
  for (let i = 0; i < 3; i++) {
    clouds.push({
      x: random(width),
      y: random(50, 150),
      speed: random(0.2, 0.5),
      size: random(50, 100)
    });
  }

  // 初期化: 草
  for (let i = 0; i < 200; i++) {
    grassBlades.push({
      x: random(width),
      y: random(height / 2, height),
      sway: random(0.5, 2),
      length: random(20, 50)
    });
  }
}

function draw() {
  background('#fde1c3'); // 空の色
  drawBackground();
  drawRoad();
  drawFence();
  drawTrees();
  drawBird();
  drawClouds();
  drawGrass();
}

function drawBackground() {
  // 地面
  fill('#c2a385');
  rect(0, height / 2, width, height / 2);
}

function drawRoad() {
  // 道路
  fill('#505050');
  rect(0, height / 1.8, width, 40);

  // ガードレール
  fill('#dcdcdc');
  rect(0, height / 1.85, width, 10);
}

function drawFence() {
  stroke('#40332d');
  strokeWeight(2);
  for (let i = 0; i < width; i += 50) {
    line(i, height / 1.9, i + 25, height / 1.85);
  }
  noStroke();
}

function drawTrees() {
  for (let i = 100; i < 700; i += 150) {
    drawTree(i, height / 2 - 40, 50);
  }
}

function drawTree(x, y, height) {
  fill('#8B4513'); // 幹の色
  rect(x - 5, y, 10, height);

  fill('#5c4033'); // 枝の色
  ellipse(x, y, 40, 40);
}

function drawBird() {
  fill('#ffffff');
  birdX = (birdX + 1) % width; // 徐々に右へ移動
  triangle(birdX, 150, birdX + 20, 140, birdX + 20, 160);
}

function drawClouds() {
  fill(255, 200);
  clouds.forEach(cloud => {
    ellipse(cloud.x, cloud.y, cloud.size, cloud.size / 2);
    cloud.x = (cloud.x + cloud.speed) % width; // 徐々に右へ移動
  });
}

function drawGrass() {
  fill('#5caa5c');
  grassBlades.forEach(grass => {
    let sway = sin(frameCount * 0.05 + grass.x * 0.1) * grass.sway; // 揺れる動き
    rect(grass.x + sway, grass.y, 2, -grass.length);
  });
}
