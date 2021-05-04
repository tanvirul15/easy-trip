import firebaseConfig from "../firebaseConfig";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// const { user, setUser } UserContext(UserContext);

const firebaseInit = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
};

const handleFacebookLogin = (setUser) => {
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
      setUser(result.user);
    });
};

const handleGoogleLogin = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
      var token = credential.accessToken;
      var user = result.user;
    });
};

//------------------------------------------------------Create a profile
const createProfile = (setUser) => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const name = document.getElementById("name").value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      setUser(user);
      user.updateProfile({
        name,
      });
      document.getElementById("Warning-message").innerText = "Succesfully Created Profile";
      user
        .sendEmailVerification()
        .then(function () {
          console.log("Mail Sent");
        })
        .catch(function (error) {
          console.log(error);
        });
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      document.getElementById("Warning-message").innerText = errorMessage;
      // ..
    });
};
const ValidateEmail = (e) => {
  // const warningLabel = document.getElementById("Warning-message");
  // const emailInp = e.target.value;
  // if (e.target.type === "text") {
  //   const reg = /\S+@\S+\.\S+/;
  //   if (!reg.test(e.target.value)) {
  //     warningLabel.innerText = "Enter a valid email";
  //   } else {
  //     warningLabel.innerText = "";
  //   }
  // } else {
  //   let pass = e.target.value;
  //   let reg = /\d+/;
  //   if (pass.length < 8) {
  //     warningLabel.innerText = "Password Should be at least 8 character";
  //   } else if (!reg.test(pass)) {
  //     warningLabel.innerText = "Password Should contain at least 1 digit";
  //   } else if (!/[a-z]+/.test(pass)) {
  //     warningLabel.innerText = "Password Should contain at least 1 small letter";
  //   } else if (!/[A-Z]+/.test(pass)) {
  //     warningLabel.innerText = "Password Should contain at least 1 capital letter";
  //   } else if (/^[a-zA-Z0-9]+/.test(pass)) {
  //     warningLabel.innerText = "Password Should contain at least 1 special character";
  //   } else {
  //     warningLabel.innerText = "";
  //   }
  // }
};
const logInExistingUser = (email, password, setUser) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      setUser(userCredential.user);
    })
    .catch((error) => {
      var errorCode = error.code;
    });
};

const createAccount = (email, password, name, phone, setUser) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      let user = userCredential.user;
      user
        .updateProfile({
          displayName: name,
          phone,
        })
        .then(() => {
          console.log(user);
          setUser(user);
        });
    });
};

export { firebaseInit, handleFacebookLogin, handleGoogleLogin, logInExistingUser, createAccount };
