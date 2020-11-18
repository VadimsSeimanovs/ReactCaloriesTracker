import * as firebase from 'firebase'
import React, { Component } from 'react';

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

export default class FirebaseTest extends Component{
    //static auth;
    static init(){
      if(databaseExists == false){
        firebase.initializeApp(firebaseConfig);
        databaseExists = true;
        // console.log(databaseExists);
      }else{
        // console.log(databaseExists);
        return;
      }
    }

   static registerUser(userEmail, userPassword) {
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
    .catch(function(error){
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

  static insertData(userWeight, userWeightType, userHeight, userHeightType, userAge, userGender, userName, userGoalWeight, userGoalWeightType, userGoal, userEmail, userPassword){

    let data = {
      name: userName,
      age: userAge,
      weight: userWeight,
      weightType: userWeightType,
      height: userHeight,
      heightType: userHeightType,
      gender: userGender,
      goalWeight: userGoalWeight,
      goalWeightType: userGoalWeightType,
      goal: userGoal,
      email: userEmail,
      password: userPassword
    }

    // firebase.database().ref('users').child(User.getUid()).set(data)
    // .then((data) => {
    //   console.log('Saved Data', data)
    // })
    // .catch((error) => {
    //   console.log('Storing Error', error)
    // })
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

  static authListener(){
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if(user){
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      }else{
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    })
  }

}