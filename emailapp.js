
            var name = " ";
            var imgurl = " ";
            var email = " ";

        function onSignIn(googleUser){
                var profile = googleUser.getBasicProfile();
                $(".g-signin2").css("display","none");
                $(".success").css("display","block");
                $(".profiledetails").css("display","none");
                $(".addressbook").css("display", "none");
                $(".aboutUs").css("display", "none");

                    name=profile.getName();
                    imgurl = profile.getImageUrl();
                    email = profile.getEmail();
        };

        function aboutUs() {
            $(".g-signin2").css("display", "none");
            $(".success").css("display", "none");
            $(".profiledetails").css("display", "none");
            $(".addressbook").css("display", "none");
            $(".aboutUs").css("display", "block");

        };
        
        function ProfileDetails(){
          $(".g-signin2").css("display","none");
          $(".success").css("display","none");
          $(".profiledetails").css("display","block");
            $(".addressbook").css("display", "none");
            $(".aboutUs").css("display", "none");

          $("#name").text(name);
          $("#pic").attr('src',imgurl);
          $("#email").text(email);
        };

        function AddressBook(){
          $(".g-signin2").css("display","none");
          $(".success").css("display","none");
          $(".profiledetails").css("display","none");
            $(".addressbook").css("display", "block");
            $(".aboutUs").css("display", "none");

        };

        function gohome(){

          $(".g-signin2").css("display","none");
          $(".success").css("display","block");
          $(".profiledetails").css("display","none");
            $(".addressbook").css("display", "none");
            $(".aboutUs").css("display", "none");

        };


        function signOut() {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
            console.log('User signed out.');
            });
        };