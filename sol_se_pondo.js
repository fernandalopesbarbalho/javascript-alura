//O desenho de um sol se pondo em uma praia.

let posVertical;

function setup() {
  createCanvas(500, 500);
  posVertical = 250;
}

function draw() {
  if (posVertical < 400) {
    background("lightblue");
    posVertical ++;
    
  } else {
    background("black");
  }
  
  
  fill("yellow");
  circle(250, posVertical, 300);
  
  fill("darkblue");
  rect(0, 250, 500, 350);
  
  fill("khaki");
  rect(0, 400, 500, 100);
}
