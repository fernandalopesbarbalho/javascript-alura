//Jogo onde o professor não pode ver os alunos bagunçando (acionado pelo click do mouse).

let costas1, costas2;
let quieto, farra1, farra2;
let olhando, gameover;

let situacao = "olhando";
let proximaAlteracao = 0;

let giz, grito;

const CADEIRAS_Y = 460;

function preload() {
  //carregando as imagens do professor
  costas1 = loadImage("costas1.jpg");
  costas2 = loadImage("costas2.jpg");
  olhando = loadImage("olhando.jpg");
  gameover = loadImage("gameover.jpg");

  //carregando as imagens dos estudantes
  quieto = loadImage("quieto.jpg");
  farra1 = loadImage("farra1.jpg");
  farra2 = loadImage("farra2.jpg");

  //carregando os áudios do jogo
  giz = loadSound("giz.mp3");
  giz.setLoop(true)
  grito = loadSound("grito.mp3");
  grito.setLoop(true)
}

function setup() {
  createCanvas(1024, 576);
}

function troca() {
  if (situacao === "olhando") {
    situacao = "não olhando";
    giz.play();
  } else {
    situacao = "olhando";
    giz.pause();
  }
  proximaAlteracao = millis() + random(2500, 7000);
}

function draw() {
  if (millis() > proximaAlteracao) {
    troca();
  }

  if (situacao === "olhando") {
    image(olhando, 0, 0);
  } else {
    let tempo = millis() % 1000;
    if (tempo > 500) {
      image(costas2, 0, 0);
    } else {
      image(costas1, 0, 0);
    }
  }

  if (mouseIsPressed || touches.length > 0 || keyIsPressed) {

    if(estaBaguncando === false){
      grito.play();
      estaBaguncando = true;      
    }

    if(situacao == "olhando"){
      image(gameover, 0, 0);
    }

    //estudante 1
    let tempo = millis() % 1200;
    if (tempo > 400) {
      image(farra1, 50, CADEIRAS_Y, 100, 160, 180, 100, 450, 720);
    } else {
      image(farra2, 50, CADEIRAS_Y, 100, 160, 180, 100, 450, 720);
    }

    //estudante 2
    tempo = millis() % 800;
    if (tempo > 400) {
      image(farra1, 150, CADEIRAS_Y, 100, 160, 180, 100, 450, 720);
    } else {
      image(farra2, 150, CADEIRAS_Y, 100, 160, 180, 100, 450, 720);
    }

    //estudante 3
    tempo = millis() % 900;
    if (tempo > 450) {
      image(farra1, 250, CADEIRAS_Y, 100, 160, 180, 100, 450, 720);
    } else {
      image(farra2, 250, CADEIRAS_Y, 100, 160, 180, 100, 450, 720);
    }

    if(situacao === "olhando"){
      textSize(64);
      fill("red");
      textAlign(CENTER, CENTER);
      text("GAME OVER", width/2, height/2);
      giz.stop()
      grito.stop();
      noLoop();
    }

  } else {
    grito.pause();
    estaBaguncando = false;

    //adicionando os três estudantes lado a lado
    image(quieto, 50, CADEIRAS_Y, 100, 160, 180, 100, 450, 720);
    image(quieto, 150, CADEIRAS_Y, 100, 160, 180, 100, 450, 720);
    image(quieto, 250, CADEIRAS_Y, 100, 160, 180, 100, 450, 720);
  }
}
