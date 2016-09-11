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
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '1752409965009814',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.5' // use graph api version 2.5
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

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }


 