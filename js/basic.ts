function start(){
    $("#contentContainer").hide();
    $("#gameContainer").show();

    var gameBtn = new GameButton("1");
    gameBtn.setGameButton(6);
}
function getPicture(id:string){
    
    document.getElementById(id).innerHTML="5";
}
$(document).ready(function(){
    $(".BtnGame").click(function(){
        alert("The paragraph was clicked.");
    });
});

class GameButton{
    id:string;
    data:number;
    constructor(id: string){
        this.id = id;
    }
    getGameButton(button:GameButton){
        return button;
    }
    setGameButton(data:number){
        this.data = data;
    }
}