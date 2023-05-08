class Cuadrado {

    constructor(limite, posX, posY, ancho, alto, velX, velY, bailar, nroCuadrado) {
        this.limite = limite;
        this.posX = posX;
        this.posY = posY;
        this.ancho = ancho;
        this.alto = alto;
        this.velX = velX;
        this.velY = velY;
        this.bailar = bailar;
        this.nroCuadrado = nroCuadrado;
    }

    dibujarCuadrado() {
        strokeCap(SQUARE);


        for (let i = this.posX; i < this.posX + this.ancho; i += 8) {
            let percent = map(i, 0, width / 2, 0, 1);


            let startColor1 = color(map(mouseX, 0, width, 160, 255), 32, 240, map(mouseY, height, 0, 120, 255));
            let endColor1 = color(255, map(mouseX, 0, width, 80, 0), 0, map(mouseY, height, 0, 80, 180));

            let startColor2 = endColor1;
            let endColor2 = startColor1;

            let startColor3 = color(map(mouseX, 0, width, 160, 255), 180, 40, map(mouseY, height, 0, 120, 255));
            let endColor3 = color(120, map(mouseX, 0, width, 180, 0), 50, map(mouseY, height, 0, 80, 180));

            let startColor4 = endColor3;
            let endColor4 = startColor3;


            let currentColor1;
            let currentColor2;

            if (i < this.ancho / 2) {
                currentColor1 = lerpColor(startColor1, endColor1, percent);
            } else {
                percent = map(i, this.ancho / 2, this.ancho, 0, 1);
                currentColor1 = lerpColor(startColor2, endColor2, percent);
            }

            if (i < this.ancho / 2) {
                currentColor2 = lerpColor(startColor3, endColor3, percent);
            } else {
                percent = map(i, this.ancho / 2, this.ancho, 0, 1);
                currentColor2 = lerpColor(startColor4, endColor4, percent);
            }

            switch (this.nroCuadrado) {
                case 1:
                    stroke(map(mouseX, 0, width, 160, 255), 0, 0);
                    break;

                case 2:
                    stroke(map(mouseX, 0, width, 160, 255), 0, 0);
                    break;

                case 3:

                    stroke(currentColor1);
                    break;

                case 4:
                    stroke(currentColor2)
                    break;

                case 5:
                    
                    stroke(map(mouseX, 0, width, 160, 255), map(mouseX, 0, width, 160, 255), 30);
                    break;

                case 6:
                    stroke(map(mouseX, 0, width, 160, 255), map(mouseX, 0, width, 160, 255), 30);
                    break;
            }
            strokeWeight(3);
            line(i, this.posY, i, this.posY + this.alto);
        }
    }

    moverCuadrado() {

        switch (this.nroCuadrado) {
            case 1:
                if(this.velX == 2 && this.posX < this.limite) {
                    this.posX += this.velX;
                    this.velY = 2;
                }
                if(this.posX == this.limite && this.velY == 2) {
                    this.posY += this.velY;
                    this.velX = -this.velX;
                }
                if(this.posY == width - t * 2 && this.velX == -2) {
                    this.posX += this.velX;
                    this.velY = -2;
                }
                if(this.posX == 70 && this.velY == -2) {
                    this.posY += this.velY;
                } 
                if(this.posY == 70) {
                    this.velY = 0;
                    this.velX = 2;
                }
                break;

            case 2:
                if(this.velX == -2 && this.posX > 70) {
                    this.posX += this.velX;
                    this.velY = -2;
                }
                if(this.posX == 70 && this.velY == -2) {
                    this.posY += this.velY;
                    this.velX = 2;
                }
                if(this.posY == 70 && this.velX == 2) {
                    this.velY = 0;
                    this.posX += this.velX;
                    this.velY = 2;
                }
                if(this.posX == width - t*2 && this.velY == 2) {
                    this.posY += this.velY;
                    this.velX = 2;
                }
                if(this.posY == height - t*2) {
                    this.velX = -2;
                }
                break;

            case 5:
                if(this.velY == 2 && this.posY < height - t*2) {
                    this.posY += this.velY;
                    this.velX = -2;
                }
                if(this.posY == height - t*2 && this.velX == -2) {
                    this.posX += this.velX;
                    this.velY = -2;
                }
                if(this.posX == 70 && this.velY == -2) {
                    this.velX = 0;
                    this.posY += this.velY;
                    this.velX = 2;
                }
                if(this.posY == 70 && this.velX == 2) {
                    this.posX += this.velX;
                }   
                if(this.posX == width - t*2 && this.posY == 70) {
                    this.velX = 0;
                    this.velY = 2;
                }
                break;

            case 6:
                if(this.velY == -2 && this.posY > 70) {
                    this.posY += this.velY;
                    this.velX = 2;
                }
                if(this.posY == 70 && this.velX == 2) {
                    this.posX += this.velX;
                    this.velY = 2;
                }
                if(this.posX == width - t*2 && this.velY == 2) {
                    this.velX = 0;
                    this.posY += this.velY;
                    this.velX = -2;
                }
                if(this.posY == height - t*2 && this.velX == -2) {
                    this.posX += this.velX;
                }   
                if(this.posX == 70 && this.posY == height - t*2) {
                    this.velX = 0;
                    this.velY = -2;
                }
                break;
        }
    }

}


/*

while(this.bailar == true) {
            if(this.bailar) {
                if (this.velX == 2 && this.posY == 100) {

                    this.posX = this.posX + this.velX;
                    this.velY = 2
                  }
            }
            console.log(this.bailar);
            break;
        }


        */