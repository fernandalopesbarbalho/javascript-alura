//Três círculos percorrem a tela em direções aleatórias e mudam de cor e transparência a cada click.

let cor; //declarar variável
let circuloX; //horizontal
let circuloY; //vertical

function setup() {
  createCanvas(400, 400);
  background("black");
  
  cor = color(random(0, 255), random(0, 255), random(0, 255)); //cor aleatória
  
  circuloX = [0, 0, 0];
  circuloY = [random(height), random(height), random(height)]
}

function draw() {
  fill(cor);
stroke("white")
  
  for(let contador in circuloX) {
    console.log(contador);
    circle(circuloX[contador], circuloY[contador], 50);
    circuloX[contador] += random(0, 3);
    circuloY[contador] += random(-3, 3);
  
    if(circuloX[contador]>= width) {
      circuloX[contador] = 0;
      circuloY[contador] = random(height);
    }

}
  
  if (mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
  
}