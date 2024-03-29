class Game{
    constructor(){}

    getState()
    {
        var dbref = database.ref("gameState")
            dbref.on("value",function(data)
            {
                gameState =data.val()
            })
    }
    update(state)
    {
        database.ref("/").update({gameState : state})
    }
    startGame()
    {

        if(gameState===0)
        {
            player = new Player();
            player.getPlayercount();
            form = new Form();
            form.display();
            car1 = createSprite(200,height)
            car1.addImage(car1img)
            car2 = createSprite(400,height)
            car2.addImage(car2img)
            car3 = createSprite(600,height)
            car3.addImage(car3img)
            car4 = createSprite(800,height)
            car4.addImage(car4img)
            cars = [car1,car2,car3,car4]
        }

    }


    play()
    {
      form.hideform();
      Player.getAllPlayersInfo();
     
      if(allPlayers!==undefined)
      { 
        image(trackimg,0,-4*height,width,5*height)
          var index =0
          var x = 500
          var y = height

          for(var plr in allPlayers) //player1, player2, player3, player4
          { 
              y = height - allPlayers[plr].distance
              cars[index].y = y   //cars[0], cars[1]
              cars[index].x = x
              if (index+1  === player.index)
              {
               cars[index].shapeColor = "red"
               camera.position.y = cars[index].y
              }
              else
              cars[index].shapeColor = "black"
            
            index = index+1  //cars[0], cars[1]
            x = x + 300
             
          }
        drawSprites();
      }
      if(keyIsDown(UP_ARROW)&&player.index!==null)
      {
        console.log(player.distance)  
        player.distance+=50;
        player.updateplayer()
        if(player.distance>4200)
        {
           gameState = 2
        }
      }

    }
    end(){
      textSize(25)
      text("Game has Ended, wait for everyone to finish.",width/2,camera.position.y)
    }
}

