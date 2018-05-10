
var background;
var r, g, b;
var smallman = [];
var bigman = [];

function setup() {
  createCanvas(1198, 1005);
  background = loadImage('assets/amebito.png');
  for(var i = 0; i<42; i++)
    smallman.push(new People());
  for(var i = 0; i<9; i++)
    bigman.push(new People());
    r = 0;
    g = 25;
    b = 0;
}


function draw() {
  time++;
  r+=5;
  b+=30;
  if(time>50)
    r+=20;  
  background(r, g, b);
  image(background, 0, 0);
  for(var i=0; i<42; i++){
    smallman[i].display();
    smallman[i].yPos += 30;
    smallman[i].ysize = 100;
    smallman[i].xsize = 75;
  }
  for(var i=0; i<9; i++){
    bigman[i].display();
    bigman[i].yPos += 30;
  }
}
function People(){
  this.time = 0;
  this.num = 0;
  this.xsize = 150;
  this.ysize = 200;
  this.xPos = random(0, width-200);
  this.yPos = random(-1000, -100);
  man[0] = loadImage("assets/man0.png");
  man[1] = loadImage("assets/man1.png");
  
  this.display = function(){
    this.time++;
    if(this.time%2==0)
      this.num = 1;
    else
      this.num = 0;
    for(this.xPos = 40; this.xPos < width - 100; this.xPos+=120){
      image(man[0], this.xPos, this.yPos);
    }
    this.yPos += 15;
}
}
function keyPressed() {
    if(keyCode === UP_ARROW){
        for(var i=0; i<42; i++){
          smallman[i].yPos-=60;
        }
        for(var i=0; i<9; i++){
          bigman[i].yPos -= 60;
        }
    }
}
