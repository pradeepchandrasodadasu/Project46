class Horse {
    constructor(){
        this.name = null;
        this.index = null;
        this.velocityX = 0;
        this.velocityY = 0;
        this.animation = loadAnimation("animations/running/running_1.png",
        "animations/running/running_2.png",
        "animations/running/running_3.png",
        "animations/running/running_4.png",
        "animations/running/running_5.png",
        "animations/running/running_6.png",
        "animations/running/running_7.png",
        "animations/running/running_8.png",
        "animations/running/running_9.png",
        "animations/running/running_10.png",
        "animations/running/running_11.png",
        "animations/running/running_12.png");

        this.animation.frameDelay = 2;

    }

    getCount(){
        database.ref("playerCount").on("value",function (value){
            playerCount = value.val();
        });
    }

    updateCount(value){
        database.ref("/").update({
            playerCount : value
        });
    }

    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name : this.name,
            velocityX : this.velocityX,
            velocityY : this.velocityY
        });
    }
}