import * as firebase from "firebase";

export const initFirebase = () => {
  const config = {
    apiKey: "AIzaSyDe6cHY3T85xWizGck8nPzsfxkK8QJ9EIE",
    authDomain: "jade-barrage.firebaseapp.com",
    databaseURL: "https://jade-barrage.firebaseio.com",
    storageBucket: "jade-barrage.appspot.com",
    messagingSenderId: "392183871006"
  };
  firebase.initializeApp(config);
};
