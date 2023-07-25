//Cria a bandeira da Itália.

function setup() {
  createCanvas(300, 200);
  background("white");

}

function draw() {
  noStroke(); //função para retirar a borda
  
  fill("green");
  rect(0, 0, 100, 200); //x, y, largura e altura
  
  fill("white");
  rect(100, 0, 100, 200);

  fill("red");
  rect(200, 0, 100, 200);

}