class Player{
    constructor(){
     

    }

    //the below function will read the playerCount from database
    getCount(){
     var gameStateRef=database.ref('playerCount');
     gameStateRef.on("value", function(data){
         playerCount=data.val();
     });
    }

    //  the below function will update the player name in database
    update(playername){
        var playerIndex = "player" + playerCount;
      database.ref(playerIndex).set({
         name: playername
      });
    }
    updateCount(count){
     database.ref('/').update({
      playerCount:count

     });
    }

}