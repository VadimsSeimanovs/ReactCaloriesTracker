import { useGestureHandlerRef } from '@react-navigation/stack';
import * as firebase from 'firebase'
import User from './User'

const firebaseConfig = {
apiKey: "AIzaSyBhDP0hjvwTeDtWhPK5TwxsoX35qRj92yk",
authDomain: "caloriestracker-26ff8.firebaseapp.com",
databaseURL: "https://caloriestracker-26ff8.firebaseio.com",
projectId: "caloriestracker-26ff8",
storageBucket: "caloriestracker-26ff8.appspot.com",
messagingSenderId: "651745419400",
appId: "1:651745419400:web:2d8a921ed15ef49372bf3d",
measurementId: "G-WTE99C5XZ4"
}

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  // This must be true.
  url: 'caloriestracker-26ff8.web.app',
  handleCodeInApp: true,
  dynamicLinkDomain: 'example.page.link'
};

var databaseExists = false;
var userExists = true;

export default class FirebaseTest {
    //static auth;
    static init(){
      if(databaseExists == false){
        firebase.initializeApp(firebaseConfig);
        databaseExists = true;
        console.log(databaseExists);
      }else{
        console.log(databaseExists);
        return;
      }
    }

   static registerUser(userEmail, userPassword) {
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    })
  }

  static signInUser(userEmail, userPassword){
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        userExists = false;
        alert('Wrong password.');
      } else {
        userExists = false;
        alert(errorMessage);
      }
    });
  }

  static getUserDetails () {
    // firebase.database().ref('users').once('value', (data) => {
    //   console.log(data.toJSON());
    // })
    var ref = firebase.database().ref('users');
    ref.orderByKey().equalTo("test").once('value', function(snapshot) {
      console.log(snapshot.key);
    });
  }

  static insertData(userEmail, userWeight, userWeightType, userHeight, ){
    var usersRef = ref.child("users");
    usersRef.set({
      userEmail:{

      }
    })
  }

  static sendEmailAddress(userEmail){
    firebase.auth().sendSignInLinkToEmail(userEmail, actionCodeSettings)
    .then(function() {
      alert('Email was sent to verify');
    }).catch(function(error) {
      console.log(error);
   });
  }

  static getUserExistance(){
    return userExists;
  }
}