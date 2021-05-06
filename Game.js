class Game{

    constructor(){
     

    }

    //the below function will read the gamestate from database
    getState(){
     var gameStateRef=database.ref('gameState');
     gameStateRef.on("value", function(data){
         gameState=data.val();
     });
    }

    //  the below function will update the gamestate in database
    update(state){
      database.ref('/').update({
         gameState: state
      });
    }

    start(){
        if(gameState===0){
         player=new Player();
         player.getCount()
         form=new Form();
         form.display();
        }
    }
}