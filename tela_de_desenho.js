//Cria uma tela que ao pressionar o mouse é possível desenhar e escrever.

function setup() { //preparação do código
  createCanvas(600, 600); //tela/quadro
  background("white"); //fundo
}

function draw() { //desenho
  stroke("blue"); //traço/borda
  fill("red"); //preenchimento
  
  if (mouseIsPressed) { //interação
    rect(mouseX, mouseY, 20, 30); //retângulo
  }
}
