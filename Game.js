class Game {
    constructor(){
 
    }
    getGamestate(){
    var  Gamestateref= database.ref('Gamestate')
    Gamestateref.on("value",(data)=>{
        Gamestate=data.val()
    })
    }
    updategamestate(state){
     database.ref('/').update({
        Gamestate:state

     })
    }
     async start(){
         if(Gamestate===0){
        player=new Player()
        var playercountref=await database.ref('playercount').once("value")
       if(playercountref.exists()){
      playercount=playercountref.val()
      player.getplayercount()
       }

       
        form= new Form()
        form.display()
         }
     car1=createSprite(500,200)
     car1.addImage(car1img)
     car2=createSprite(700,200)
     car2.addImage(car2img)
     car3=createSprite(900,200)
     car3.addImage(car3img)
     car4=createSprite(1100,200)
     car4.addImage(car4img)
     cars=[car1,car2,car3,car4]
        }

    play(){
    form.hide()

    
    Player.getplayerinfo()
    player.getrank()
    if(allplayers!==undefined){
        background(rgb(198,135,103))
        image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
        var index=0
        var x=300
        var y       

    for(var plr in allplayers){
      index=index+1
      x=x+200
      y=displayHeight-allplayers[plr].distance
      console.log(index)
      console.log(cars[index-1])
      cars[index-1].x=x
      cars[index-1].y=y 
      
        if(index===player.index){
            cars[index-1].shapecolor="Red"
            camera.position.x=displayWidth/2
            camera.position.y=cars[index-1].y
      
        }
      
        
    }
    }

   if(keyDown("up")&&player.index!==null){
player.distance=player.distance+50
player.update()

   }
   if(player.distance>4300){
    Gamestate=2
    player.rank=player.rank+1
    Player.updaterank(player.rank)
   }
   drawSprites()
    }
  End(){
  console.log("Game Ended")
  console.log(player.rank)
    }

    }
