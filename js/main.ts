var BtnGame = $(".BtnGame");
var BtnStart = $("#BtnStart");
var BtnMenu = $("#BtnMenu");
var contentContainer = $("#contentContainer");
var gameContainer = $("#gameContainer");

BtnMenu.on("click",function(){
    swal({
        title:"Are you sure you want to go back to menu?",
        type:"info",
        showCancelButton:true,
        closeOnConfirm:false,
        showLoaderOnConfirm:true,
    },
    function(){
        gameContainer.hide();
        contentContainer.show();
    });
   
});

BtnGame.on("click",function(){
    sweetAlert("sdfsdf");
});

BtnStart.on("click",function(){
    contentContainer.hide();
    gameContainer.show();
    BtnMenu.show();

});

function start(){
    $("#contentContainer").hide();
    $("#gameContainer").show();

    var gameBtn = new GameButton("1");
    gameBtn.setGameButton(6);
}
function getPicture(id:string){
    
    document.getElementById(id).innerHTML="5";
}


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