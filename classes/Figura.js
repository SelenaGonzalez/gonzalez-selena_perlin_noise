class Figura {
  constructor() {
    this.noiseTime = 0;
    this.noiseTam = 100;
    // this.osc, playing, freq, amp;
    // this.t = 0;
  }
  update() {
    this.posX1 = map(noise(this.noiseTime), 0, 1, 0, windowWidth);
    this.posY1 = map(noise(this.noiseTime + 1), 0, 1, 0, windowHeight);

    this.posX2 = map(noise(this.noiseTime), 0, 1, windowWidth, 0);
    this.posY2 = map(noise(this.noiseTime + 2), 0, 1, windowHeight, 0);

    this.tam = map(noise(this.noiseTam), 0, 1, 75, 75);

    this.noiseTime += 0.005;
    this.noiseTam += 0.008;

    this.r = 60 * this.noiseTime;
    this.g = 100 * this.noiseTime;
    this.b = 30 * this.noiseTime;
    this.r2 = 80 * this.noiseTime;
    this.g2 = 20 * this.noiseTime;
    this.b2 = 150 * this.noiseTime;
  }

  display() {
    fill(this.r, this.g, this.b);
    // noStroke();
    // stroke(211, 169, 250);
    strokeWeight(0.09);
    rect(this.posX1, this.posY1, this.tam);

    fill(this.r2, this.g2, this.b2);
    // noStroke();
    // stroke(50, 75, 20);
    strokeWeight(0.05);
    circle(this.posX2, this.posY2, this.tam + 20);

    // osc.start();
    // freq = constrain(map(noise(this.noiseTime), 0, 1, 300, 100), 100, 300);
    // amp = 0.05;

    // osc.freq(freq, 0.5);
    // osc.amp(amp, 0.3);
    // t += 0.01;
  }
}
