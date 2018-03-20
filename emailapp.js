var name = " ";
var imgurl = " ";
var email = " ";

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $(".g-signin2").css("display", "none");
  $(".success").css("display", "block");
  $(".profiledetails").css("display", "none");
  $(".addressbook").css("display", "none");
  $(".aboutUs").css("display", "none");
  $(".signout").css("display", "block");
  $(".signUp").css("display", "none");
  $(".welcome").css("display", "none");
  $(".body").css("background-color", "lightgray");

  name = profile.getName();
  imgurl = profile.getImageUrl();
  email = profile.getEmail();

};

function aboutUs() {
  $(".g-signin2").css("display", "none");
  $(".success").css("display", "none");
  $(".profiledetails").css("display", "none");
  $(".addressbook").css("display", "none");
  $(".aboutUs").css("display", "block");
  $(".signout").css("display", "block");
  $(".signUp").css("display", "none");
  $(".welcome").css("display", "none");
};

function ProfileDetails() {
  $(".g-signin2").css("display", "none");
  $(".success").css("display", "none");
  $(".profiledetails").css("display", "block");
  $(".addressbook").css("display", "none");
  $(".aboutUs").css("display", "none");
  $(".signout").css("display", "block");
  $("#name").text(name);
  $("#pic").attr('src', imgurl);
  $("#email").text(email);
  $(".signUp").css("display", "none");
  $(".welcome").css("display", "none");

};

function AddressBook() {
  $(".g-signin2").css("display", "none");
  $(".success").css("display", "none");
  $(".profiledetails").css("display", "none");
  $(".addressbook").css("display", "block");
  $(".aboutUs").css("display", "none");
  $(".signout").css("display", "block");
  $(".signUp").css("display", "none");
  $(".welcome").css("display", "none");

};

function gohome() {

  $(".g-signin2").css("display", "none");
  $(".success").css("display", "block");
  $(".profiledetails").css("display", "none");
  $(".addressbook").css("display", "none");
  $(".aboutUs").css("display", "none");
  $(".signout").css("display", "block");
  $(".signUp").css("display", "none");
  $(".welcome").css("display", "none");

};


function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function() {
    console.log('User signed out.');
  });
};
