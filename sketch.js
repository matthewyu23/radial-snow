var allSnow = [];
var sound; 
var amp; 

function preload(){

    song = loadSound("music.mp3")
    
}


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    amp = new p5.Amplitude();
    song.play();
    amp.toggleNormalize()
}


class SnowBalls{

    constructor(xPosition, yPosition, direction, velocity, size){
        this.xPosition = xPosition; 
        this.yPosition = yPosition; 
        this.direction = direction; 
        this.velocity = velocity;
        this.size = size;
    }

    

    move(){
        this.xPosition = this.xPosition + Math.cos(this.direction)*this.velocity*this.size/10* Math.pow(amp.getLevel()+1, 3)/2;
        this.yPosition = this.yPosition + Math.sin(this.direction)*this.velocity*this.size/10* Math.pow(amp.getLevel()+1, 3)/2;

        
    }

    display(){
        ellipse(this.xPosition, this.yPosition, this.size, this.size);
    }


}

function draw() {
    background(30);
    noStroke();

    for(var i = 0; i < 5; i++){
        allSnow.push(new SnowBalls(window.innerWidth/2, window.innerHeight/2, Math.random()*2*Math.PI, 3, Math.random()*5+1));
    }

    for(var i = 0; i<allSnow.length; i++){
        allSnow[i].move();
    }
    fill(255);
    for(var i = 0; i<allSnow.length; i++){
        allSnow[i].display();
    }

    console.log(amp.getLevel())
    
    
    fill(0);
    //rect(window.innerWidth/2-window.innerWidth/14* map(amp.getLevel(), 0, 1, 1, 1.5), window.innerHeight/2-window.innerHeight/14 * map(amp.getLevel(), 0, 1, 1, 1.5), map(amp.getLevel(), 0, 1, 1, 1.5)*window.innerWidth/7, map(amp.getLevel(), 0, 1, 1, 1.5)*window.innerHeight/7, 10);
    rect(window.innerWidth/2-window.innerWidth/14* Math.pow(amp.getLevel()+1, 0.2), window.innerHeight/2-window.innerHeight/14 * Math.pow(amp.getLevel()+1, 0.2), Math.pow(amp.getLevel()+1, 0.2)*window.innerWidth/7, Math.pow(amp.getLevel()+1, 0.2)*window.innerHeight/7, 10);
    
    textAlign(CENTER, CENTER);
    fill(255);
    textSize(window.innerWidth/30* Math.pow(amp.getLevel()+1, 0.2));
    textFont("Courier");
    text("ZERO", window.innerWidth/2, window.innerHeight/2);
}