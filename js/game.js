class Game {
  constructor(){}

  getState(){
    database.ref("gameState").on("value",function (data){
      gameState = data.val();

    });
  }

  update(state){
    database.ref("/").update({
      gameState : state
    });
  }

  start(){
    if(gameState === 0){ 
      player = new Horse(70,400);
      player.getCount();

      form = new Form();
      form.display();

    }  

    player1 = createSprite(150,445);
    player1.addAnimation("running1",player.animation);
    player2 = createSprite(150,445);
    player2.addAnimation("running2",player.animation);
    players = [player1,player2];
    
  }

  play(){
    form.hide();
    
    if(twoHorses !== undefined){
        if(keyDown(RIGHT_ARROW) && player.index !== null){
          players[player.index].velocityX = 4;
          player.velocityX = players[player.index].velocityX;
          player.update();

        }

    drawSprites();
    }
    
  }
}