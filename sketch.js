//Um circulo muda sua direção percorrendo outro caminho quando o mouse se aproxima e a cada click muda de cor e transparência.

let cor; //declarar variável
let posHorizontal; //x
let posVertical; //y

function setup() {
  createCanvas(400, 400);
  background("black");
  
  cor = color(random(0, 255), random(0, 255), random(0, 255)); //cor aleatória
  
  posHorizontal = 200;
  posVertical = 200;
}

function draw() {
  fill(cor);
stroke("white")
  
  circle(posVertical, posHorizontal, 50);

  if (mouseX < posHorizontal) {
    posHorizontal--;
  }

  if (mouseX > posHorizontal) {
posHorizontal++;
  }

  if (mouseY < posVertical) {
    posVertical--;
  }

  if (mouseY > posVertical) {
    posVertical++;
  }
  
  if (mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
  
}