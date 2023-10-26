let noiseTime = 0;
let noiseTam = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  let posX1 = map(noise(noiseTime + 0.008), 0, 1, 0, windowWidth);
  let posY1 = map(noise(noiseTime + 100), 0, 1, 0, windowHeight);

  let posX2 = map(noise(noiseTime), 0, 1, windowWidth, 0);
  let posY2 = map(noise(noiseTime + 100), 0, 1, windowHeight, 0);

  let tam = map(noise(noiseTam), 0, 1, 50, 50);

  noiseTime += 0.006;
  noiseTam += 0.007;

  fill(255, random(10, 100), 200, random(100, 200), 20);
  stroke(0, 0, 20, 50);
  strokeWeight(20);
  rect(posX1, posY1, tam);
  circle(posX2, posY2, tam);

  // noStroke(0);
}
