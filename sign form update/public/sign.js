var firebaseConfig = {
        apiKey: "AIzaSyA15T66OY7B0w34XGvMCexpJturn8OjGKw",
        authDomain: "signup-f880b.firebaseapp.com",
        projectId: "signup-f880b",
        storageBucket: "signup-f880b.appspot.com",
        messagingSenderId: "824449753162",
        appId: "1:824449753162:web:ba91255efef4694d7b46b3",
      };

      // Initialize Firebase
      var firebase = firebase.initializeApp(firebaseConfig);
      function signin() {
        var email = document.getElementById("email");
        var password = document.getElementById("password");

        firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            window.location.href = "dashboard.html";
            // ...
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
          });
      }

        function forgetPassword() {
        var email = document.getElementById("email");
          firebase
            .auth()
            .sendPasswordResetEmail(email.value)
            .then(() => {
              alert("Verification code is successfully sent..")
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              alert(errorMessage)
            });
        }
      