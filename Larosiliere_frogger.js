

var colors = {
    red: color(255, 0, 0),
    blue: color(0, 0, 255),
    green: color(0, 255, 9),
    yellow: color(255, 221, 0),
    purple: color(68, 0, 82),
    orange: color(255, 153, 0)
};

var Bitmoji = function(bodyX,bodyY,h,colors,initials){
    this.bodyX = bodyX;
    this.bodyY = bodyY;
    this.h = h;
    this.colors = colors;
    this.initials = initials;
    this.rockets = 0;
};

var goalChange = true;

Bitmoji.prototype.draw = function() {
    this.bodyY = constrain(this.bodyY, 0, height-70);
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
  
  if (goalChange){
        if (this.bodyY<100)
        {this.rockets++;
        goalChange = false;
        }
    }
    if (!goalChange){
         if (this.bodyY>300)
        {this.rockets++;
        goalChange = true;
        }
    }
    
};

Bitmoji.prototype.hop = function() {
    this.bodyY -= 5;
};

Bitmoji.prototype.fall = function() {
    this.bodyY += 5;
};

Bitmoji.prototype.checkForRocketGrab = function(rocket) {
    if ((rocket.x >= this.bodyX && rocket.x <= (this.bodyX + 40)) &&
        (rocket.y >= this.bodyY && rocket.y <= (this.bodyY + 40))) {
        rocket.y = -400;
        this.rockets--;
    }
};

var Rocket = function(x, y) {
    this.x = x;
    this.y = y;
};

Rocket.prototype.draw = function() {
    fill(89, 71, 0);
    rectMode(CENTER);
    image(getImage("space/rocketship"),this.x,this.y,50,50);
};

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
    text(this.label,this.x+-22,this.y+12);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

var pause = false;

//Buttons
var btn1 = new Button({x:70,y:340,label:"Start"});
var btn2 = new Button({x:70,y:340,label:"Pause"});
var btn3 = new Button({x:20,y:280,width:120,label:"Continue"});

var Bitmoji1 = new Bitmoji(150,200,50,colors.blue,true);

var currentScene = 0;



var drawScene0 = function(){
currentScene = 0;
    background(181, 226, 242);
    textSize(50);
    fill(0, 0, 0);
    text("Frogger Z",80,80);
    textSize(20);
    text("Click 'start' to begin. Avoid rocketships and \n     reach the other side of the road.",20,115);
    Bitmoji1.draw();    //Calls bitmoji 
    btn1.draw();   //Button to switch 

};



var drawScene1 = function(){
currentScene=1;
var bitmoji2 = new Bitmoji(150,200,25,colors.blue,true);

mouseClicked = function(){
if(btn2.isMouseInside){
    pause = true;
}
};


var rockets = [];
for (var i = 0; i < 100; i++) {  
    rockets.push(new Rocket(i * 40 - 4000, random(20, 260)));

}

draw = function() {
    // static
    background(227, 254, 255);
    fill(130, 79, 43);
    rectMode(CORNER);
    rect(0, height*0.90, width, height*0.10);
    rect(0, height*0.00, width, height*0.15);
    
if(pause){
 btn3.draw();
 mouseClicked = function(){
if (btn3.isMouseInside){
 pause = false;   
}
};
}

    for (var i = 0; i < rockets.length; i++) {
        rockets[i].draw();
        bitmoji2.checkForRocketGrab(rockets[i]);
        if (!pause){
       rockets[i].x += 1;
        }
    }
    
    textSize(18);
    text("Score: " + bitmoji2.rockets, 20, 30);
    
    
    if (keyIsPressed && keyCode === 0) {
        bitmoji2.hop();
    } else {
        bitmoji2.fall();
    }
    bitmoji2.draw();
    btn2.draw();

};
};


drawScene0();
draw= function() {
    

mouseClicked = function(){
    if(currentScene===0){
      if(btn1.isMouseInside){
          drawScene1();
      }
    }
    
};
};
