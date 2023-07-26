//Quadrado verde no canto inferior direito é mostrado caso o mouse não estiver pressionado e, caso estiver, muda para um vermelho no canto superior esquerdo.

function setup() {
  createCanvas(200, 200);

}

function draw() {
  background("white");
  
  noStroke();

  if (mouseIsPressed) {

    fill("red");
    rect(0, 0, 100, 100);

  } else {
    fill("green");
    rect(100, 100, 100, 100);

  }
}
