class Figura {
  constructor() {
    this.noiseTime = 0;
    this.noiseTam = 50;
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
  }

  display() {
    fill(255, 70, 255);
    stroke(211, 169, 250);
    strokeWeight(0.5);
    rect(this.posX1, this.posY1, this.tam);

    fill(150, 255, 100);
    stroke(50, 75, 20);
    strokeWeight(1);
    circle(this.posX2, this.posY2, this.tam);

    // osc.start();
    // freq = constrain(map(noise(this.noiseTime), 0, 1, 300, 100), 100, 300);
    // amp = 0.05;

    // osc.freq(freq, 0.5);
    // osc.amp(amp, 0.3);
    // t += 0.01;
  }
}
