var tamanhoBola = 1;

function setup() {
 createCanvas(windowWidth, windowHeight);
 
}

function draw() {
  background(0);  
  criarBola(width/2, height/2)
  
  //OBS: Nunca coloque o translate e suas outras funções diretamente aqui no Draw
  //Só coloque por meio de uma função como nesse exemplo
  //Pois se não, ao aumentar o tamanho do objeto com scale(x); ele saira da tela.  
}

function criarBola(x, y){
  
  push();
   translate(x, y);  //Transferimos o plano cartesiano para o meio da tela.
   scale(tamanhoBola);
   fill(255);
   noStroke();
   ellipse(0, 0, 100, 100); //Agora a posição X = 0 e Y = 0 de nosso plano cartesiano é o meio da tela.
  pop();
  
  var mousePassouParaLadoDireito = mouseX > width/2;
  var mousePassouParaLadoEsquerdo = mouseX < width/2;
  
  if(mousePassouParaLadoDireito){
    tamanhoBola+=0.1;
  }else if(mousePassouParaLadoEsquerdo && tamanhoBola > 0){
    tamanhoBola-=0.01;
  }
  
}
