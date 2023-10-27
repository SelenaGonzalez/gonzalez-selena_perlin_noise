figuras = [];
const NF = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  for (let i = 0; i < NF; i++) {
    let figura = new Figura();
    figuras.push(figura);
    // osc = new p5.Oscillator("sawtooth");
  }
  print(figuras);
}

function draw() {
  for (let i = 0; i < figuras.length; i++) {
    figuras[i].update();
    figuras[i].display();
  }
}
