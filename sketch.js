var Gamestate=0
var database
var playercount
var player
var game
var form
var allplayers
var car1,car2,car3,car4,cars
 var car1img,car2img,car3img,car4img,groundimg,trackimg

function preload(){
car1img=loadImage("images/car1.png")
car2img=loadImage("images/car2.png")
car3img=loadImage("images/car3.png")
car4img=loadImage("images/car4.png")
groundimg=loadImage("images/ground.png")
trackimg=loadImage("images/track.jpg")






}



function setup(){
    database=firebase.database()
    createCanvas(windowWidth-50,windowHeight-50);
    game= new Game()
    game.getGamestate()
    game.start()
    
}

function draw(){
    background("white");
    if(playercount===4){
    game.updategamestate(1)
    }
if(Gamestate===1){
    clear()
game.play()
}
if(Gamestate===2){
game.End()
}
    
}
 
