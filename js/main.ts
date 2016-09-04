var BtnGame = $(".BtnGame");
var BtnStart = $("#BtnStart");
var BtnMenu = $("#BtnMenu");
var contentContainer = $("#contentContainer");
var gameContainer = $("#gameContainer");
var freq = 0;
var isClicked = [];


BtnMenu.on("click",function(){
    swal({
        title:"Are you sure you want to go back to menu?",
        type:"info",
        showCancelButton:true,
        closeOnConfirm:true,
        showLoaderOnConfirm:true,
    },
    function(){
        gameContainer.hide();
        contentContainer.show();
        BtnMenu.hide();
        
    });
   
});

BtnGame.on("click",function(){
   
});

BtnStart.on("click",function(){
    contentContainer.hide();
    gameContainer.show();
    BtnMenu.show();

});

function start(){
    $("#contentContainer").hide();
    $("#gameContainer").show();
    for (var i = 1; i<=24; i++){
        var gameBtn = new GameButton(i.toString());
    }
    var gameBtn = new GameButton("1");
    gameBtn.setGameButton(6);
}
function getPicture(id:string){
    
    document.getElementById(id).innerHTML=id;
    freq++;
    isClicked.push(id);
    if (freq == 3){
         $(function(){
                $('.BtnGame').prop('disabled',true);
        });
        setTimeout(function(){
            $(function(){
                $('.BtnGame').prop('disabled',false);
            });
            
            freq = 0;
            document.getElementById(id).innerHTML="Press";
           
        },2000);
        
    }
    

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