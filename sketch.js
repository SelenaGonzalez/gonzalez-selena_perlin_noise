let noiseTime = 0;
let noiseTam = 25;
let osc, playing, freq, amp;
let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  osc = new p5.Oscillator("sawtooth");
}

function draw() {
  let posX1 = map(noise(noiseTime), 0, 1, 0, windowWidth);
  let posY1 = map(noise(noiseTime + 100), 0, 1, 0, windowHeight);

  //let posX2 = map(noise(noiseTime + 0.005), 0, 1, windowWidth, 0);
  //let posY2 = map(noise(noiseTime + 100), 0, 1, windowHeight, 0);

  //let posX3 = map(noise(noiseTime + 0.001), 0, 1, 0, windowWidth);
  //let posY3 = map(noise(noiseTime + 100), 0, 1, 0, windowHeight);

  //let posX4 = map(noise(noiseTime + 30), 0, 1, windowWidth, 0);
  //let posY4 = map(noise(noiseTime + 200), 0, 1, windowHeight, 0);

  let tam = map(noise(noiseTam), 0, 1, 50, 50);

  noiseTime += 0.006;
  noiseTam += 0.007;

  fill(255, 70, 255);
  stroke(0, 0, 20, 50);
  strokeWeight(20);
  rect(posX1, posY1, tam);

  //fill(100, 255, 100);
  //stroke(0, 0, 20, 100);
  //strokeWeight(10);
  //circle(posX2, posY2, tam);

  //fill(255, 70, 255);
  //stroke(0, 0, 20, 50);
  //strokeWeight(20);
  //rect(posX3, posY3, tam);

  //fill(100, 255, 100);
  //stroke(0, 0, 20, 100);
  //strokeWeight(10);
  //circle(posX4, posY4, tam);

  // noStroke(0);

  osc.start();
  freq = constrain(map(noise(noiseTime), 0, 1, 500, 900), 500, 900);
  amp = 0.5;

  osc.freq(freq, 0.1);
  osc.amp(amp, 0.1);
  t += 0.01;
}
