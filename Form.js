class Form {
    constructor(){
     this.Title= createElement('h1')
     this.Input= createInput("Display Name:")
     this.Button= createButton('PLAY')
     this.Greeting= createElement('h3')
     this.Reset= createButton('RESET')
    }
  hide(){
    this.Input.hide()
    this.Button.hide()
    this.Greeting.hide()
    
  }
    display(){
   this.Title.html("LMAO Racer")
    this.Title.position(displayWidth/2-50,0)
    this.Reset.position(200,windowHeight-50/2)
  
    this.Input.position(displayWidth/2-40,displayHeight/2-80)
    this.Button.position(displayWidth/2-30,displayHeight/2)
    this.Button.mousePressed(() => {
       this.Input.hide()
        this.Button.hide()
         player.name= this.Input.value()
         console.log(player.name)
        playercount++
        player.index=playercount
        console.log(playercount)
        player.updateplayercount(playercount)
        player.update()
       this.Greeting.html("Aarav welcomes to u to the first multiplayer game developed by him: Aarav Mahan hai, "+player.name)
      this.Greeting.position(displayWidth/2-40,displayHeight/4)
    })
    this.Reset.mousePressed(() => {
   player.updateplayercount(0)
   game.updategamestate(0)
   Player.updaterank(0)
    })
    }

}

