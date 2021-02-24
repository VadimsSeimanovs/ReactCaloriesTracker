import * as firebase from 'firebase'
import { Component } from 'react';

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
  // This is for the emai confirmation.
  url: 'caloriestracker-26ff8.web.app',
  handleCodeInApp: true,
  dynamicLinkDomain: 'example.page.link'
};

var databaseExists = false;
var userExists = true;

//export const UserContext = createContext({ user: null });

class UserProvider extends Component{
  state = {
    currentUser: null,
    isLoggedIn: null
  };
    //static auth;
    static init(){
      if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
      }else{
        firebase.app();
        // return;
      }
    }

   static async registerUser(userEmail, userPassword){
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

  static getUserDetails(){
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

    //console.log(localStorage.getItem('user'));

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
    //What happens if the two users register at the same time??
  firebase.auth().onAuthStateChanged(userAuth => {
    if (userAuth) {
    this.intervalId = setInterval(this.loadUser, 1000, userAuth.uid);
    console.log(this.intervalId);
    } else {
      console.log("Test failed.")
      //this.setState({ currentUser: null, isLoggedIn: false });
    }
    });
  }

  static async loadUser(userId) {
    console.log(`Load user called. Number of retries: ${this.retries}`);
    if (this.retries === 1) {
      clearInterval(this.intervalId);
    }
    try {
      const currentUser = await getUserDocument(userId);
        if (currentUser.email) {
          this.setState({ currentUser, isLoggedIn: true });
          clearInterval(this.intervalId);
        }
    } catch (error) {
      console.log(`Error logging the user in: ${error}`);
      clearInterval(this.intervalId);
    } finally {
      this.retries -= 1;
      }
    }

  static insertItem(itemBarcode, itemName, itemEnergy, itemFat, itemCarbs, itemSugar, itemFiber, itemProtein, itemSalt){
    firebase.database().ref('items').child(itemBarcode).set({
      barcode: itemBarcode,
      name: itemName,
      energy: itemEnergy,
      fat: itemFat,
      carbs: itemCarbs,
      sugar: itemSugar,
      fiber: itemFiber,
      protein: itemProtein,
      salt: itemSalt
    })
    .then((itemBarcode) => {
      console.log('Saved Data', itemBarcode)
    })
    .catch((error) => {
      console.log('Storing Error', error)
    })
  }

  static getItem(itemBarcode){
    console.log("get item with: " + itemBarcode)
    var ref = firebase.database().ref('items').child(itemBarcode);
    ref.once('value', (snapshot) => {
      var data = snapshot.val()
      console.log("data from database: " + JSON.stringify(data))
    })

    // var ref = firebase.database().ref('items');
    // ref.on("value", snapshot => {
    //   if(snapshot.val() == null){
    //     return;
    //   }else{
    //   let storiesObj = snapshot.val();
    //   storiesObj
    //   .child(props.match.params.id)
    //   .then(() => ref.once("value"))
    //   .then(snapshot => snapshot.val())
    //   .catch(error => ({
    //      errorCode: error.code,
    //      errorMessage: error.message
    //    }));
    //   }
    // });
  }
}

export default UserProvider;