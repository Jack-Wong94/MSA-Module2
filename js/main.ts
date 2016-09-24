
var BtnGame = $(".BtnGame");
var BtnStart = $("#BtnStart");
var BtnMenu = $("#BtnMenu");
var contentContainer = $("#contentContainer");
var gameContainer = $("#gameContainer");
var freq = 0;
var score = 0;
var previousPicture;
var previousPictureid;
var clock;

//return back to the menu.
BtnMenu.on("click",function(){
    swal({
        title:"Are you sure you want to go back to menu?",
        type:"info",
        showCancelButton:true,
        closeOnConfirm:true,
        showLoaderOnConfirm:true,
    },
    function(){
        reset();

    });
   
});

function changeFlipClock(){
    var w = window.outerWidth;
    var defaultWidth = 2000;
    var width = w/defaultWidth;
    $(".clock").css("zoom",width);
}

//start the game
BtnStart.on("click",function(){
    contentContainer.hide();
    gameContainer.show();
    BtnMenu.show();
    clock.setCountdown(true);
    clock.start();
});

//Game rules.
//When 2 cards are the same, change color of the card and increment score.
function getPicture(id:string,picture:string){
    document.getElementById(id).innerHTML=picture;
    freq++;
    if (freq == 1){
        previousPictureid = id;
        previousPicture = picture;
        document.getElementById(id).disabled = true;
    }
    if (freq == 2 && previousPicture != picture){
         $(function(){
                $('.BtnGame').prop('disabled',true);
        });
        setTimeout(function(){
            $(function(){
                $('.BtnGame').prop('disabled',false);
            });
            
            freq = 0;
            document.getElementById(previousPictureid).innerHTML="Press"
            document.getElementById(id).innerHTML="Press";
           
        },1000);
        
    }else if (freq == 2 && previousPicture == picture){
        $(function(){
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

    if (score==12){
        var time = 300-clock.getTime();
        swal({
            title: "Congratulation!",
            text: "You have won the game in "+time+" seconds!!"
        }, function(){
            
            reset();
        });
    }

}
//Change the score
function changeScore(score:number){
    $('#score').text("Score: "+score);
}

//load a flip clock object and when the clock is 0, create game over message.
$(document).ready(function() {
	    clock = $('.clock').FlipClock({
		clockFace: 'MinuteCounter',
        autoStart: false,
        countdown: true,
        callbacks:{
            stop: function(){
               swal({
                   title: "Game Over",
                   text: "Sorry! You lose the game!"
               }, function(){
                    reset();
               });
            }
        }
	});
    clock.setTime(300);
    
});

//reset the page
function reset(){
    location.reload();
    
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


  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
   
    if (response.status === 'connected') {
     
      testAPI();
    } else if (response.status === 'not_authorized') {
     
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
     
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  //check the login status
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '1752409965009814',
    cookie     : true,  
                       
    xfbml      : true,  
    version    : 'v2.7' 
  });



  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  //Run a test to show the login user name.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }





 