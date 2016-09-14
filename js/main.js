var BtnGame = $(".BtnGame");
var BtnStart = $("#BtnStart");
var BtnMenu = $("#BtnMenu");
var contentContainer = $("#contentContainer");
var gameContainer = $("#gameContainer");
var freq = 0;
var isClicked = [];
var score = 0;
var previousPicture;
var previousPictureid;
var clock;

BtnMenu.on("click", function () {
    swal({
        title: "Are you sure you want to go back to menu?",
        type: "info",
        showCancelButton: true,
        closeOnConfirm: true,
        showLoaderOnConfirm: true
    }, function () {
        reset();
    });
});

BtnGame.on("click", function () {
});

BtnStart.on("click", function () {
    contentContainer.hide();
    gameContainer.show();
    BtnMenu.show();
    clock.setCountdown(true);
    clock.start();
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
function getPicture(id, picture) {
    document.getElementById(id).innerHTML = picture;
    freq++;
    isClicked.push(id);
    if (freq == 1) {
        previousPictureid = id;
        previousPicture = picture;
        document.getElementById(id).disabled = true;
    }
    if (freq == 2 && previousPicture != picture) {
        $(function () {
            $('.BtnGame').prop('disabled', true);
        });
        setTimeout(function () {
            $(function () {
                $('.BtnGame').prop('disabled', false);
            });

            freq = 0;
            document.getElementById(previousPictureid).innerHTML = "Press";
            document.getElementById(id).innerHTML = "Press";
        }, 1000);
    } else if (freq == 2 && previousPicture == picture) {
        $(function () {
            score++;
            freq = 0;
            changeScore(score);
            var cid = document.getElementById(id);
            var pid = document.getElementById(previousPictureid);
            cid.disabled = true;
            pid.disabled = true;
            cid.style.color = "black";
            pid.style.color = "black";
            cid.style.background = "#ffff80";
            pid.style.background = "#ffff80";
        });
    }

    if (score == 12) {
        var time = 300 - clock.getTime();
        swal({
            title: "Congratulation!",
            text: "You have won the game in " + time + " seconds!!"
        }, function () {
            reset();
        });
    }
}
function changeScore(score) {
    $('#score').text("Score: " + score);
}
$(document).ready(function () {
    clock = $('.clock').FlipClock({
        clockFace: 'MinuteCounter',
        autoStart: false,
        countdown: true,
        callbacks: {
            stop: function () {
                swal({
                    title: "Game Over",
                    text: "Sorry! You lose the game!"
                }, function () {
                    reset();
                });
            }
        }
    });
    clock.setTime(300);
});

function reset() {
    score = 0;
    $('#score').text("Score: 0");
    for (var i = 1; i <= 24; i++) {
        document.getElementById(i).innerHTML = "Press";
    }
    gameContainer.hide();
    contentContainer.show();
    BtnMenu.hide();
    clock.stop();
    clock.setTime(300);
    previousPicture = 0;
    previousPictureid = 0;
    freq = 0;
    $('.BtnGame').prop('disabled', false);
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

// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);

    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        testAPI();
    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        document.getElementById('status').innerHTML = 'Please log ' + 'into this app.';
    } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        document.getElementById('status').innerHTML = 'Please log ' + 'into Facebook.';
    }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function () {
    FB.init({
        appId: '1752409965009814',
        cookie: true,
        // the session
        xfbml: true,
        version: 'v2.5'
    });

    // Now that we've initialized the JavaScript SDK, we call
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
};

// Load the SDK asynchronously
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id))
        return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function (response) {
        console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.name + '!';
    });
}
