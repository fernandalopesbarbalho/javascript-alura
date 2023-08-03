//Ao passar o cursor na tela, uma frase aparece e forma uma poesia.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("white");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
  
  let maximo = width;
  let minimo = 0;
  let palavra = "Hoje sonhei";
  
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  console.log(quantidade);
  
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 200, 200);
}
