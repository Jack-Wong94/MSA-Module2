var BtnGame = $(".BtnGame");
BtnGame.on("click", function () {
    sweetAlert("sdfsdf");
});
function start() {
    $("#contentContainer").hide();
    $("#gameContainer").show();

    var gameBtn = new GameButton("1");
    gameBtn.setGameButton(6);
}
function getPicture(id) {
    document.getElementById(id).innerHTML = "5";
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
