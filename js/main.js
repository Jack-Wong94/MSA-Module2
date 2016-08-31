var BtnGame = $(".BtnGame");
var BtnStart = $("#BtnStart");
var BtnMenu = $("#BtnMenu");
var contentContainer = $("#contentContainer");
var gameContainer = $("#gameContainer");

BtnMenu.on("click", function () {
    swal({
        title: "Are you sure you want to go back to menu?",
        type: "info",
        showCancelButton: true,
        closeOnConfirm: true,
        showLoaderOnConfirm: true
    }, function () {
        gameContainer.hide();
        contentContainer.show();
        BtnMenu.hide();
    });
});

BtnGame.on("click", function () {
});

BtnStart.on("click", function () {
    contentContainer.hide();
    gameContainer.show();
    BtnMenu.show();
});

function start() {
    $("#contentContainer").hide();
    $("#gameContainer").show();
    for (var i = 1; i <= 18; i++) {
        var gameBtn = new GameButton(i.toString());
    }
    var gameBtn = new GameButton("1");
    gameBtn.setGameButton(6);
}
function getPicture(id) {
    document.getElementById(id).innerHTML = id;
}

var GameButton = (function () {
    function GameButton(id) {
        this.id = id;
    }
    GameButton.prototype.getGameButton = function (button) {
        return button;
    };
    GameButton.prototype.setGameButton = function (data) {
        this.data = data;
    };
    return GameButton;
})();
