//Variable to keep the Game going
var gamePlaying = false;
var points=0;
var currentScene = 0;
var pointsUntilLife = 30;

var lives = 3;

//Partner Bitmoji
var drawBitmojiSecond = function (bodyX,bodyY,bodyHeight) {
   
noStroke();

fill(255,224,189); //skin color
ellipse(bodyX-25*bodyHeight/150,bodyY-125*bodyHeight/150,85*bodyHeight/150,100*bodyHeight/150); //head

fill(255,255,255); //white for chisels

arc(bodyX-65*bodyHeight/150,bodyY-85*bodyHeight/150,28*bodyHeight/150,55*bodyHeight/150,0*bodyHeight/150,361*bodyHeight/10); //left chisel
arc(bodyX+15*bodyHeight/150,bodyY-85*bodyHeight/150,28*bodyHeight/150,55*bodyHeight/150,0*bodyHeight/150,361*bodyHeight/10); //right chisel

fill(139,69,19); //brown hair
quad(bodyX-64*bodyHeight/150,bodyY-156*bodyHeight/150,bodyX-73*bodyHeight/150,bodyY-130*bodyHeight/150,bodyX-37*bodyHeight/150,bodyY-150*bodyHeight/150,bodyX-14*bodyHeight/150,bodyY-173*bodyHeight/150); //left hair
quad(bodyX+20*bodyHeight/150,bodyY-137*bodyHeight/150,bodyX-48*bodyHeight/150,bodyY-157*bodyHeight/150,bodyX-84*bodyHeight/150,bodyY-168*bodyHeight/150,bodyX+19*bodyHeight/150,bodyY-181*bodyHeight/150); //right hair

fill(214, 54, 214);//fill purple
quad(bodyX-90*bodyHeight/150,bodyY-139*bodyHeight/150,bodyX-60*bodyHeight/150,bodyY-177*bodyHeight/150,bodyX+6*bodyHeight/150,bodyY-181*bodyHeight/150,bodyX+35*bodyHeight/150,bodyY-144*bodyHeight/150);//hat

stroke(255,255,255); //white eye
fill(255, 255, 255); //eye color
ellipse(bodyX-45*bodyHeight/150,bodyY-125*bodyHeight/150,11*bodyHeight/150,6*bodyHeight/150); //left eye
ellipse(bodyX-10*bodyHeight/150,bodyY-125*bodyHeight/150,11*bodyHeight/150,6*bodyHeight/150); //right eye
fill(115,23,23); //fill brown
ellipse(bodyX-45*bodyHeight/150,bodyY-125*bodyHeight/150,8*bodyHeight/150,5*bodyHeight/150); //left eye
ellipse(bodyX-10*bodyHeight/150,bodyY-125*bodyHeight/150,8*bodyHeight/150,5*bodyHeight/150); //right eye

fill(255,224,189); //skin color
stroke(115,23,23); //nose color

bezier(bodyX-33*bodyHeight/150,bodyY-111*bodyHeight/150,bodyX-14*bodyHeight/150,bodyY-106*bodyHeight/150,bodyX-24*bodyHeight/150,bodyY-119*bodyHeight/150,bodyX-28*bodyHeight/150,bodyY-119*bodyHeight/150); //nose
stroke(0, 0, 0); //outline of mouth
fill(255, 255, 255); //white teeth
arc(bodyX-25*bodyHeight/150,bodyY-99*bodyHeight/150,34*bodyHeight/150,13*bodyHeight/150,1*bodyHeight/150,180); //mouth
line(bodyX-42*bodyHeight/150,bodyY-100*bodyHeight/150,bodyX-9*bodyHeight/150,bodyY-100*bodyHeight/150); //middle mouth line

noStroke();
strokeWeight(1); //reset strokeWeight

fill(214, 54, 214); //shirt color
triangle(bodyX-20*bodyHeight/150,bodyY-80*bodyHeight/150,bodyX+25*bodyHeight/150,bodyY-80*bodyHeight/150,bodyX+25*bodyHeight/150,bodyY-50*bodyHeight/150); //shirt
quad(bodyX-80*bodyHeight/150,bodyY-80*bodyHeight/150,bodyX+25*bodyHeight/150,bodyY-80*bodyHeight/150,bodyX+25*bodyHeight/150,bodyY-50*bodyHeight/150,bodyX-80*bodyHeight/150,bodyY-50*bodyHeight/150); //shirt

stroke(255, 213, 0); //fill gold
strokeWeight(6);
line(bodyX-73*bodyHeight/150, bodyY-150*bodyHeight/150, bodyX-73*bodyHeight/150, bodyY-77*bodyHeight/150); //tasel
fill(255,213,0); //fill gold
stroke(255, 213, 0); //stroke gold
ellipse(bodyX-73*bodyHeight/150,bodyY-77*bodyHeight/150,5*bodyHeight/150,10*bodyHeight/150); //gold ball on hat
stroke(255, 255, 255); //white lines in shirt
line(bodyX-46*bodyHeight/150,bodyY-80*bodyHeight/150,bodyX-53*bodyHeight/150,bodyY-52*bodyHeight/150); //left white line
line(bodyX-8*bodyHeight/150,bodyY-80*bodyHeight/150,bodyX-4*bodyHeight/150,bodyY-47*bodyHeight/150); //right white line
fill(0, 0, 0);
text ("F.A.",bodyX-38*bodyHeight/150,bodyY-58*bodyHeight/150);
strokeWeight(1);
};

//Bitmoji colors
var colors = {
    red: color(255, 0, 0),
    blue: color(0, 0, 255),
    green: color(0, 255, 9),
    yellow: color(255, 221, 0),
    purple: color(68, 0, 82),
    orange: color(255, 153, 0)
    
};
//Bitmoji Object
var Bitmoji = function(bodyX,bodyY,h,colors,initials){
    this.bodyX = bodyX;
    this.bodyY = bodyY;
    this.h = h;
    this.colors = colors;
    this.initials = initials;
};

Bitmoji.prototype.draw = function() {
fill(this.colors);
stroke(this.colors);
ellipse(this.bodyX+this.h,this.bodyY-this.h/50,this.h*1.24,this.h*1.35);
fill(36, 36, 36);
ellipse(this.bodyX+this.h*1.01,this.bodyY-this.h/100,this.h*1.15,this.h*1.14);
fill(this.colors);
quad(this.bodyX+this.h*1.84,this.bodyY+this.h*0.56,this.bodyX+this.h*0.14,this.bodyY+this.h*0.56,this.bodyX+this.h*0.62,this.bodyY+this.h*2.37,this.bodyX+this.h*1.53,this.bodyY+this.h*2.38);
ellipse(this.bodyX+this.h*0.41,this.bodyY+this.h*0.72,this.h*0.69,this.h*0.56);
ellipse(this.bodyX+this.h*0.21,this.bodyY+this.h*1.13,this.h*0.42,this.h*1.25);
ellipse(this.bodyX+this.h*0.22,this.bodyY+this.h*1.77,this.h*0.38,this.h*1.09);
ellipse(this.bodyX+this.h*1.59,this.bodyY+this.h*0.72,this.h*0.69,this.h*0.56);
ellipse(this.bodyX+this.h*1.79,this.bodyY+this.h*1.13,this.h*0.42,this.h*1.25);
ellipse(this.bodyX+this.h*1.83,this.bodyY+this.h*1.87,this.h*0.38,this.h*1.09);
fill(0, 0, 0);

if (this.initials){  //Reads if initials are needed
//BL
stroke(0, 0, 0);
strokeWeight(this.h*0.05);
line(this.bodyX+this.h*0.73,this.bodyY+this.h*0.71,this.bodyX+this.h*0.73,this.bodyY+this.h*1.10);
fill(this.colors);
ellipse(this.bodyX+this.h*0.8,this.bodyY+this.h*0.82,this.h*0.33,this.h*0.23);
ellipse(this.bodyX+this.h*0.82,this.bodyY+this.h*1.02,this.h*0.33,this.h*0.23);
line(this.bodyX+this.h*0.73,this.bodyY+this.h*0.71,this.bodyX+this.h*0.73,this.bodyY+this.h*1.1);
stroke(this.colors);
rect(this.bodyX+this.h*0.38,this.bodyY+this.h*0.73,this.h*0.3,this.h*0.53);
stroke(0, 0, 0);
strokeWeight(this.h*0.05);
line(this.bodyX+this.h*1.12,this.bodyY+this.h*0.71,this.bodyX+this.h*1.12,this.bodyY+this.h*1.10);
line(this.bodyX+this.h*1.37,this.bodyY+this.h*1.10,this.bodyX+this.h*1.12,this.bodyY+this.h*1.10);
strokeWeight(1);
}
//head
fill(219, 188, 125);
stroke(219, 188, 125);
ellipse(this.bodyX+this.h, this.bodyY+this.h*0.1, this.h*0.7, this.h*0.85);
    //hair
    fill(0, 0, 0);
    stroke(0, 0, 0);
    rect(this.bodyX+this.h*0.63,this.bodyY-this.h*0.31,this.h*0.15,this.h*0.28);
    rect(this.bodyX+this.h*1.22,this.bodyY-this.h*0.31,this.h*0.14,this.h*0.28);
    rect(this.bodyX+this.h*0.64,this.bodyY-this.h*0.35,this.h*0.71,this.h*0.16);
    ellipse(this.bodyX+this.h*0.63,this.bodyY,this.h*0.25,this.h*0.25);
    ellipse(this.bodyX+this.h*0.59,this.bodyY-this.h*0.14,this.h*0.25,this.h*0.25);
    ellipse(this.bodyX+this.h*0.64,this.bodyY-this.h*0.29,this.h*0.25,this.h*0.25);
    ellipse(this.bodyX+this.h*0.79,this.bodyY-this.h*0.40,this.h*0.25,this.h*0.25);       
    ellipse(this.bodyX+this.h*0.96,this.bodyY-this.h*0.42,this.h*0.25,this.h*0.25);
    ellipse(this.bodyX+this.h*1.13,this.bodyY-this.h*0.40,this.h*0.25,this.h*0.25);
    ellipse(this.bodyX+this.h*1.3,this.bodyY-this.h*0.32,this.h*0.25,this.h*0.25);
    ellipse(this.bodyX+this.h*1.38,this.bodyY-this.h*0.15,this.h*0.25,this.h*0.25);        
    ellipse(this.bodyX+this.h*1.38,this.bodyY+this.h*0.01,this.h*0.25,this.h*0.25);
    
    //ear
    fill(219, 188, 125);
    stroke(219, 188, 125);
    ellipse(this.bodyX+this.h*0.64,this.bodyY+this.h*0.10,this.h*0.10,this.h*0.20);
    ellipse(this.bodyX+this.h*0.76,this.bodyY+this.h*0.09,this.h*0.10,this.h*0.20);
    ellipse(this.bodyX+this.h*1.36,this.bodyY+this.h*0.10,this.h*0.10,this.h*0.20);
    ellipse(this.bodyX+this.h*1.24,this.bodyY+this.h*0.09,this.h*0.10,this.h*0.20);
    
    //eyes
    fill(255, 255, 255);
    stroke(0, 0, 0);
    arc(this.bodyX+this.h*0.87,this.bodyY+this.h*0.06,this.h*0.17,this.h*0.19,0,180);
    arc(this.bodyX+this.h*1.14,this.bodyY+this.h*0.06,this.h*0.17,this.h*0.19,0,180);
    fill(0, 0, 0);
    arc(this.bodyX+this.h*0.87,this.bodyY+this.h*0.06,this.h*0.09,this.h*0.12,0,180);
    arc(this.bodyX+this.h*1.14,this.bodyY+this.h*0.06,this.h*0.09,this.h*0.12,0,180);
    stroke(0, 0, 0);
    strokeWeight(this.h*0.03);
    line(this.bodyX+this.h*0.77,this.bodyY+this.h*0.05,this.bodyX+this.h*0.96,this.bodyY+this.h*0.05);
    line(this.bodyX+this.h*1.22,this.bodyY+this.h*0.05,this.bodyX+this.h*1.05,this.bodyY+this.h*0.05);
    
    //nose
    strokeWeight(this.h*0.01);
    fill(219, 188, 125);
    arc(this.bodyX+this.h*1.01,this.bodyY+this.h*0.2,this.h*0.12,this.h*0.07,30,140);
    
    //mouth
    line(this.bodyX+this.h*0.89,this.bodyY+this.h*0.35,this.bodyX+this.h*1.15,this.bodyY+this.h*0.34);
    line(this.bodyX+this.h*0.94,this.bodyY+this.h*0.39,this.bodyX+this.h*1.09,this.bodyY+this.h*0.38);
};

//Bitmoji Movement
Bitmoji.prototype.left = function() {
    if(gamePlaying){
    if(this.bodyX>0){
    this.bodyX -= 5;
    }
    }
};

Bitmoji.prototype.right = function() {
    if(this.bodyX<325){
    this.bodyX += 5;
    }
};

Bitmoji.prototype.hop = function() {
if(this.bodyY>200){
    this.bodyY -= 5;
}
};

Bitmoji.prototype.fall = function() {
if(this.bodyY<270){
    this.bodyY += 5;
}
};

Bitmoji.prototype.checkForBoulderGrab = function(rocket) {
    if ((rocket.x >= this.bodyX && rocket.x <= (this.bodyX + 70)) &&
        (rocket.y >= this.bodyY && rocket.y <= (this.bodyY + 70))) {
        rocket.y = -400;
        lives--;
    }
};

Bitmoji.prototype.checkForLifeGrab = function(rocket) {
    if ((rocket.x >= this.bodyX && rocket.x <= (this.bodyX + 70)) &&
        (rocket.y >= this.bodyY && rocket.y <= (this.bodyY + 70))) {
        rocket.y = -400;
        pointsUntilLife = 30;
        lives++;
        
    }
};


//Boulders
var Boulders = function(x,y){
    this.x = x;
    this.y = y;
};



Boulders.prototype.draw = function() {
    fill(87, 57, 6);
    ellipse(this.x,this.y,60,60);
};



Boulders.prototype.fall = function(){
if(gamePlaying){
    if(this.y<400){
     this.y+=6;   
    }else if(this.y >=400)
    {
        
        this.x=random(0,350);
        this.y=-300;
        points++;
        pointsUntilLife--;
            
            
    }
}
};

Boulders.prototype.roll = function(){
if(gamePlaying){
    if(this.x>-50){
     this.x-=6;   
    }else if(this.x <=-50)
    {
        
        this.x=800;
        this.y=330;
        points++;
            pointsUntilLife--;
            
    }
}
};

//In game boulders
var boulders = [];
boulders.push(new Boulders(random(0,350),0));
var rollingBoulders = [];
rollingBoulders.push(new Boulders(400,330));


//Life Boost
var Boost = function(x,y){
    this.x = x;
    this.y = y;
};


Boost.prototype.draw = function() {
    image(getImage("cute/Heart"),this.x,this.y,50,50);
};

//In game boost
var boosts = [];
boosts.push(new Boost(random(0,350),270));

//Button constructor
var Button = function(config) {     //Constructor function for button
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 90;
    this.height = config.height || 30;
    this.label = config.label || "Click";
    this.color = config.color || color(255, 255, 255);
    this.onClick = config.onClick || function() {};
};


Button.prototype.changeColor = function(newColor){
    this.color= newColor;
};


Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
    
};


Button.prototype.draw = function(){     //Creates method for button
    fill(this.color);
    rect(this.x,this.y,this.width,this.height);
    fill(0, 0, 0);
    textSize(18);
    text(this.label,this.x+20,this.y+20);
};


Button.prototype.isMouseInside = function() {
    if( mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height)){return true;}
};


//Declares bitmoji
    //Game Scene
var Bitmoji1 = new Bitmoji(160,270,37,colors.blue,false);
    //Splash screen
var Bitmoji2 = new Bitmoji(230,240,40,colors.blue,false);


//All Buttons
    //Start Game
var btn1 = new Button({x:144,y:340,label:"Start"});  


//Timer
var startTime = 0;
var currentTime;



//Endscene
var endScene = function()
{
    gamePlaying = false;
    background(148, 8, 8);
    fill(0, 0, 0);
    textSize(40);
    text("Game Over",89,150);
    textSize(31);
    text("Points: "+points,107,220);
    
};

//Game Scene
var gameScene = function(){
    gamePlaying = true;
currentScene=1;
if(currentScene===1){
startTime= round(millis()/1000);
}
background(255, 255, 255);

//Game function
draw = function() {
   
    
//Static background
background(121, 143, 145);
fill(61, 37, 10);
triangle(200,350,412,100,400,350);
rect(0,330,400,200);
fill(97, 19, 19);
triangle(374,146,430,76,400,148);



//Lives
if(lives>3){lives=3;}
for(var l=0; l<lives; l++)
{
    fill(0, 0, 0);
    image(getImage("cute/Heart"),(l*30)+20,50,30,30);
}

//Bitmoji Movement
if (keyIsPressed && keyCode === 37) 
{
    Bitmoji1.left();   
}
else if (keyIsPressed && keyCode === 39)
{
    Bitmoji1.right();    
}
else if (keyIsPressed && keyCode === 0)
{
    Bitmoji1.hop();
}
else if (!keyIsPressed && Bitmoji1.bodyY<270)
{
    Bitmoji1.fall();
}


//Draw Bitmoji
Bitmoji1.draw();

//Boulders

for(var i=0; i<boulders.length; i++)
{
    boulders[i].draw();
    boulders[i].fall();
    Bitmoji1.checkForBoulderGrab(boulders[i]);

}
if(points>19){
    for(var i=0; i<rollingBoulders.length; i++)
    {
        rollingBoulders[i].draw();
        rollingBoulders[i].roll();
        Bitmoji1.checkForBoulderGrab(rollingBoulders[i]);
    }
}
//Spawn Boosts
if(pointsUntilLife<2)
{
    for (var l = 0; l<boosts.length; l++)
    {
        boosts[l].draw();
        boosts[l].y = 270;
        Bitmoji1.checkForLifeGrab(boosts[l]); 
    }
}
//Scoreboard
fill(255, 255, 255);
rect(20,18,80,30);
fill(0, 0, 0);
text("points: "+points,22,35);

if(lives<1)
        {
            endScene();
        }

};
};

//Splash Screen
var splashScene = function(){
//Static background
background(170, 235, 240);
fill(0, 0, 0);
textSize(30);
text("Watch Out!", 114,67);
textSize(15);
text("The goal is to keep your player from hiting the debris ",28,102); 
text("and survive as long as possible.",88,123);
text("Have Fun!",153,154);
text("These give you extra lives",150,200);
image(getImage("cute/Heart"),70,170,50,50);
text("Use arrow keys and spacebar to",10,250);
text("move left and right and jump",15,270);

    //bitmojis
    Bitmoji2.draw();
    drawBitmojiSecond(370,350,100);
    //Button
    btn1.draw();
    btn1.handleMouseClick();

};

//Scene Change
splashScene();
mouseReleased = function(){
        if(mouseX<234 && mouseX>144 && mouseY<370 && mouseY>340)
        {
            gameScene();
        }
return;
};
if(lives<1){endScene();}

