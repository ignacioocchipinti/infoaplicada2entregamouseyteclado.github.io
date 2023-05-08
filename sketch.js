let cuadrado1;
let cuadrado2;
let cuadrado3;
let cuadrado4;
let cuadrado5;
let cuadrado6;

let posX = 70;
let posY = 70;
let t = 90;
let velX = 2;
let velY = 2;
let cuadradosBailan = 0;

function setup() {
  let myCanvas = createCanvas(600, 600);
  myCanvas.parent("canvas-container");
  rectMode(CORNER);
  colorMode(RGB);
  strokeCap(SQUARE);
  cuadrado3 = new Cuadrado(0, 0, 0, width, height, 0, 0, 0, 3);
  cuadrado4 = new Cuadrado(0, 100, 100, 400, 400, 0, 0, 0, 4);
  cuadrado1 = new Cuadrado(width-140, posX, posY, t, t, velX, velY, 1, 1);
  cuadrado2 = new Cuadrado(posX,  width-140,  height - 140,  t, t,  -velX,  velY, 1, 2);
  cuadrado5 = new Cuadrado(height-140,  width-140,  70,  t, t,  velX,  velY, 1, 5);
  cuadrado6 = new Cuadrado(70,  70,  height - 140,  t, t,  velX,  -velY, 1, 6);
  
}

function draw() {

  background(0);

  for(let i = 4; i < width; i += 8) {
    strokeWeight(3);
    stroke(150, 255, 0, 80);
    line(i, 0, i, height);
  }

  cuadrado3.dibujarCuadrado();
  cuadrado4.dibujarCuadrado();
  cuadrado1.dibujarCuadrado();
  cuadrado2.dibujarCuadrado();
  cuadrado5.dibujarCuadrado();
  cuadrado6.dibujarCuadrado();

  while (cuadradosBailan) {

    cuadrado1.moverCuadrado();
    cuadrado2.moverCuadrado();
    cuadrado5.moverCuadrado();
    cuadrado6.moverCuadrado();
    break;
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') {
    cuadradosBailan = 1;
  }
  else {
    cuadradosBailan = 0;
  }
}




