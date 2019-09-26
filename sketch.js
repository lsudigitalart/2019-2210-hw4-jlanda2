var num = 1;
var x = [];
var y = [];
let snakeX=400, snakeY=300;
let seedX=200, seedY=200;
let gOver=0;
let score = ["Score:",0];
let p1X=100,p1Y=100;
let p2X=700,p2Y=500;
//game over screen
function gameO(){
    if(gOver==1){
        createCanvas(1000,600);
        background("red");
        fill(0);
        textSize(40);
        textFont('Algerian');
        text('Game over. \nRefresh to start again.',400,height/2);
        noLoop();
    }
}
function setup() {
createCanvas(1000,600);
noStroke();
//fill array
for (var i = 0; i < num; i++) {
x[i] = 0;
y[i] = 0;
}
fill(255);
}

function draw() {
background(0);
fill(255);
textSize(40);
textFont("Algerian");
textAlign(CENTER,TOP);
text('Portal Snakes',400,30);
//reverse array
for (var i = num-1; i > 0; i--) {
x[i] = x[i-1];
y[i] = y[i-1];
    if(snakeX==x[i]&&snakeY==y[i]){
        gOver=1;
        gameO();
    }
}
x[0] = snakeX;
y[0] = snakeY;

//snake and direction
for (var i = 0; i < num; i++) {
    fill(255);
    rect(x[i], y[i], 20, 20);
}
    if(keyCode==UP_ARROW){
        snakeY-=2;
    }
    else if(keyCode==DOWN_ARROW){
        snakeY+=2;
    }
    else if(keyCode==RIGHT_ARROW){
        snakeX+=2;
    }
    else if(keyCode==LEFT_ARROW){
        snakeX-=2;
    }

//seed pos and reset
fill("pink");
rect(seedX,seedY,15,15);
if((snakeX+20>seedX)&&(snakeX<seedX+15)&&(snakeY+20>seedY)&&(snakeY<seedY+15)){
    num+=30;
    seedX=random(40,760);
    seedY=random(40,560);
    score[1]++;
}
//border check
if(snakeX>800||snakeX<0||snakeY>600||snakeY<0){
    gOver=1;
    gameO();
}
//game menu
    stroke(75);
    strokeWeight(10);
    fill(200);
    rect(800,5,195,590);
    noStroke();
    noFill();
    fill(0);
    textSize(20);
    text(score,898,30);
    textAlign(LEFT);
    text("\n>Use arrow\n  keys for\n  direction\n\n>Blue portal\n  =LMB\n\n>Red Portal\n  =MMB",825,60);
//potential portals
    //blue
    if(mouseIsPressed&&(mouseButton==LEFT)){
            for(var i=0;i<=1;i++){
                p1X=mouseX-20;
                p1Y=mouseY-20;

            }
    }
    fill("blue");
    rect(p1X,p1Y,40,40);
    //red
    if(mouseIsPressed&&(mouseButton==CENTER)){
        for(var i=0;i<=1;i++){
            p2X=mouseX-20;
            p2Y=mouseY-20;

        }
    }
    fill("red");
    rect(p2X,p2Y,40,40);
//teleport loops
if((snakeX>p1X)&&(snakeX<(p1X+45))&&(snakeY>p1Y)&&(snakeY<(p1Y+45))){
    snakeX=p2X;
    snakeY=p2Y;
}
if((snakeX>p2X)&&(snakeX<(p2X+45))&&(snakeY>p2Y)&&(snakeY<(p2Y+45))){
    snakeX=p1X;
    snakeY=p1Y;
}
}




