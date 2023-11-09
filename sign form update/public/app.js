var firebaseConfig = {
  apiKey: "AIzaSyA15T66OY7B0w34XGvMCexpJturn8OjGKw",
  authDomain: "signup-f880b.firebaseapp.com",
  projectId: "signup-f880b",
  storageBucket: "signup-f880b.appspot.com",
  messagingSenderId: "824449753162",
  appId: "1:824449753162:web:ba91255efef4694d7b46b3"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

function btn(){
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    
    var user = userCredential.user;
    firebase.auth().currentUser.sendEmailVerification()
  .then(() => {
    alert("Sent Your Verification Email..")
  });
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
    
  });
}
function loginWithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // console.log(user);
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // console.log(errorMessage);
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}


function loginwithgithub(){
  var provider = new firebase.auth.GithubAuthProvider();

  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}