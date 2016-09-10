var BtnGame = $(".BtnGame");
var BtnStart = $("#BtnStart");
var BtnMenu = $("#BtnMenu");
var contentContainer = $("#contentContainer");
var gameContainer = $("#gameContainer");
var freq = 0;
var isClicked = [];

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
    for (var i = 1; i <= 24; i++) {
        var gameBtn = new GameButton(i.toString());
    }
    var gameBtn = new GameButton("1");
    gameBtn.setGameButton(6);
}
function getPicture(id) {
    document.getElementById(id).innerHTML = id;
    freq++;
    isClicked.push(id);
    if (freq == 3) {
        $(function () {
            $('.BtnGame').prop('disabled', true);
        });
        setTimeout(function () {
            $(function () {
                $('.BtnGame').prop('disabled', false);
            });

            freq = 0;
            document.getElementById(id).innerHTML = "Press";
        }, 2000);
    }
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

window.fbAsyncInit = function () {
    FB.init({
        appId: '1752409965009814',
        xfbml: true,
        version: 'v2.7'
    });
    FB.getLogInStatus(function (response) {
        if (response.status === 'connected') {
            document.getElementById('status').innerHTML = 'We are connected.';
        } else if (response.status === 'not_authorized') {
            document.getElementById('status').innerHTML = 'We are not logged in.';
        }
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
