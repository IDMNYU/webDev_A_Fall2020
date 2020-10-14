console.log("yay!");

function setup(){
 console.log("p5 is here!");
 createCanvas(windowWidth, windowHeight);
 background(100,0,100);
}

function draw() {

 ellipse(100,100,10,10);
 noFill();
 ellipse(mouseX,mouseY, 50,50)
 
}